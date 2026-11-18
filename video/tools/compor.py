"""compor.py — monta render/final.mp4: cenas (animacoes/arena.mp4) + gravações da Arena na janela do bloco 10 + mix.

Uso: ~/.criabr/venv/bin/python tools/compor.py
As gravações entram já tratadas e carimbadas (broll/tratado/, via `da grade`); a janela vem do carimbo da cena.
"""
import json
import os
import re
import sys
import unicodedata
from pathlib import Path

sys.path.insert(0, os.path.expanduser("~/.claude/skills/video-direcao-de-arte/kit"))
import da  # noqa: E402
import video  # noqa: E402

RAIZ = Path(__file__).resolve().parent.parent
os.chdir(RAIZ)
d = da.carregar()

pal = json.loads(Path("transcricao/palavras.json").read_text(encoding="utf-8"))
norm = lambda w: re.sub(r"[^\w-]", "", unicodedata.normalize("NFD", w).encode("ascii", "ignore").decode()).lower()
nw = [norm(p["w"]) for p in pal]


def achar(frase, depois=0.0):
    seq = [norm(x) for x in frase.split() if norm(x)]
    for i, p in enumerate(pal):
        if p["t0"] < depois - 1e-6:
            continue
        if all(i + k < len(nw) and nw[i + k] == s for k, s in enumerate(seq)):
            return p["t0"]
    raise SystemExit(f"âncora não encontrada: {frase}")


carimbo = json.loads(Path("animacoes/arena.mp4.da.json").read_text(encoding="utf-8"))
lay = carimbo["parametros"]["layout"]
jan = lay["janelas"][0]
x, y, w, h = jan["x"], jan["y"], jan["w"], jan["h"]
w -= w % 2
h -= h % 2
t_ini, t_fim = jan["t0"], jan["t1"]
t_painel = achar("E aqui está o painel", t_ini)
t_rel = achar("Cada partida termina com um relatório", t_painel)
trechos = [("broll/tratado/rec_mesa.mp4", t_ini, t_painel), ("broll/tratado/rec_influencia.mp4", t_painel, t_rel),
           ("broll/tratado/rec_relatorio.mp4", t_rel, t_fim)]

entradas = ["-i", "animacoes/arena.mp4"]
for arq, _, _ in trechos:
    entradas += ["-i", arq]
entradas += ["-i", "som/mix_final.wav"]
filtros = []
atual = "[0:v]"
for k, (arq, a, b) in enumerate(trechos, start=1):
    dur = b - a
    filtros.append(f"[{k}:v]trim=0:{dur:.3f},setpts=PTS-STARTPTS,tpad=stop_mode=clone:stop_duration={dur:.3f},"
                   f"trim=0:{dur:.3f},scale={w}:{h}:flags=lanczos,setpts=PTS+{a:.3f}/TB[r{k}]")
    saida = f"[v{k}]"
    filtros.append(f"{atual}[r{k}]overlay={x}:{y}:enable='between(t,{a:.3f},{b:.3f})':eof_action=pass{saida}")
    atual = saida
filtros.append(f"{atual}format=yuv420p[vout]")

Path("render").mkdir(exist_ok=True)
saida = "render/final.mp4"
cmd = [*entradas, "-filter_complex", ";".join(filtros),
       "-map", "[vout]", "-map", f"{len(trechos) + 1}:a", "-c:v", "libx264", "-crf", "18", "-preset", "medium",
       "-pix_fmt", "yuv420p", "-color_primaries", "bt709", "-color_trc", "bt709", "-colorspace", "bt709",
       "-r", "30000/1001", "-c:a", "aac", "-b:a", "192k", "-ar", "48000", "-shortest", "-movflags", "+faststart"]
video.executar(cmd, saida, rotulo="compor final", inatividade=600)
d.carimbar(saida, "compositor", "horizontal",
           {"janela": jan, "trechos": [{"arquivo": a, "de": round(b, 3), "ate": round(c, 3)} for a, b, c in trechos]},
           insumos=["animacoes/arena.mp4", *[t[0] for t in trechos], "som/mix_final.wav"])
print("ok", saida, f"janela {w}x{h} em ({x},{y}); trechos:",
      ", ".join(f"{Path(a).stem} {b:.1f}–{c:.1f}s" for a, b, c in trechos))
