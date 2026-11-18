# Roteiro: Arena Adversarial (Trabalho 2, Grupo 7)

Vídeo explicativo de ~13 min, 16:9, narração sintética (edge-tts, Antonio a +20%), na identidade visual da Arena.
Contagem: ~2079 palavras faladas (~11:58 min). Tempos estimados a ~180 palavras por minuto, com respiro na demonstração.

Os números citados vêm de execuções reproduzíveis:
- execução ao vivo de 68 partidas e 1 119 mãos (`poker-arena/relatorios/`, `dados/memoria.json`);
- experimento com e sem memória, 20 partidas cada (`npm run experimento -- 20`, seed 2026).

---

## 0. Abertura (0:00–0:26)

**Fala**
Dois programas jogaram mil cento e dezenove mãos de pôquer, um contra o outro. Ninguém disse a eles como vencer. Na primeira partida, eles não sabiam nada um do outro. Na sexagésima oitava, eles acertavam a próxima reação do adversário em sete, oito de cada dez jogadas. Este vídeo mostra como isso aconteceu, e o que aprendemos sobre a pergunta que guiou todo o trabalho: como as decisões de um agente influenciam o comportamento do adversário nas rodadas seguintes?

**Tela**
Mesa da Arena ao vivo, cartas sendo distribuídas. Contador "1 119 mãos". A pergunta central entra em texto grande.

---

## 1. O que queríamos (0:26–1:06)

**Fala**
Somos o Grupo 7 de Engenharia de Software Adversarial. No Trabalho 1, analisamos uma mão de pôquer entre dois agentes de software: modelamos o jogo, encontramos o equilíbrio de uma decisão no river e mapeamos três ameaças ao sistema. Mas tudo era um cenário escrito à mão. No Trabalho 2, a proposta virou código. O enunciado pedia quatro coisas: pelo menos dois agentes com objetivos em conflito e regras de decisão explícitas; pelo menos três rodadas conectadas, mostrando o ciclo ação, resposta, observação e adaptação; pelo menos um agente mudando de comportamento por causa do que aconteceu antes; e evidências registradas de cada rodada. E um aviso importante: não vale uma sequência roteirizada. A adaptação tem que acontecer de verdade.

**Tela**
Linha do tempo Trabalho 1 → Trabalho 2. Os quatro requisitos aparecem um a um, cada um com um visto. Aviso "nada roteirizado" em destaque.

---

## 2. Por que pôquer (1:06–1:36)

**Fala**
Escolhemos o pôquer porque ele é adversarial por natureza. Os dois jogadores disputam as mesmas fichas, cada um vê só as próprias cartas, e toda aposta é um sinal que pode ser verdade ou blefe. Para adaptar, um agente precisa ler o outro apenas pelo que ele faz em público. Usamos o Texas Hold'em sem limite, um contra um, com as regras do Trabalho 1. A partida vai até um dos dois perder todas as fichas, e os blinds sobem a cada oito mãos, para que o jogo sempre termine.

**Tela**
Duas silhuetas, A em coral e B em azul. As cartas de A abertas para A, viradas para B. Escada de blinds subindo: cinco e dez, dez e vinte, quinze e trinta.

---

## 3. A arquitetura (1:36–2:24)

**Fala**
O sistema tem três partes. A primeira é o motor do jogo, a única autoridade sobre cartas e fichas. Ele aplica os controles que propusemos no Trabalho 1. Cada agente recebe uma visão filtrada, sem as cartas do adversário e sem as cartas futuras da mesa. Toda ação é validada antes de mudar qualquer ficha. Cada ação carrega uma versão do estado, então uma resposta repetida ou atrasada é recusada. E, depois de cada evento, o motor confere que a soma das fichas continua igual. A segunda parte são os dois agentes. A terceira é a arena, que encadeia as partidas, guarda a memória e transmite tudo, ao vivo, para a interface. Antes de qualquer agente, testamos o motor contra o próprio Trabalho 1: ele reproduz o cenário escrito à mão, que termina em cinquenta contra cento e setenta, e os três finais de all-in.

**Tela**
Diagrama em três blocos: Motor, Agentes, Arena e interface. Os controles C1, C2, C3 e C5 acendem no motor. Painel de testes: nove de nove aprovados, com "50 / 170" destacado.

---

## 4. Como um agente decide (2:24–3:09)

**Fala**
Cada agente é heurístico: segue regras explícitas que dá para ler e explicar. A cada decisão, ele faz três coisas. Primeiro, estima a faixa de mãos do adversário pelo que ele já fez nesta mão. Quem aumentou duas vezes raramente está com nada, a não ser que esteja blefando, e a taxa de blefe o agente aprende vendo as cartas reveladas no fim. Segundo, calcula por simulação a chance de vencer contra essa faixa, a equidade, e compara com as pot odds, que são o preço de pagar a aposta em relação ao pote. Terceiro, consulta a sua política para escolher a ação. E existe um modo especial: quando as fichas ficam curtas, abaixo de doze big blinds, o agente entra em modo push ou fold, e no pré-flop só vai all-in ou desiste.

**Tela**
Fluxo de decisão em três passos: faixa do adversário → equidade × pot odds → política → ação. Exemplo real: "equidade 24% contra a faixa de B, pot odds 29%: desiste". Selo "push/fold abaixo de 12 BB".

---

## 5. A política: sete números (3:09–4:03)

**Fala**
A política é o estilo do agente, escrito em sete números. Agressividade é a chance de aumentar com uma mão boa, em vez de só pagar. Frequência de blefe é a chance de apostar com uma mão fraca, abaixo de quarenta e cinco por cento de equidade, quando ninguém apostou. Roubo após check é a chance de apostar logo depois de o adversário dar check, tentando levar o pote. Armadilha é a chance de, com uma mão muito forte, acima de setenta e cinco por cento, só dar check ou pagar, escondendo a força para induzir o outro a apostar. Margem para pagar é quanto a equidade precisa superar as pot odds para o agente pagar; se ela fica negativa, ele paga com mãos mais fracas. Limiar de valor é a equidade mínima para apostar por valor. E tamanho da aposta é a fração do pote que ele costuma apostar. São esses sete números que as regras de adaptação mexem durante o jogo.

**Tela**
Os sete parâmetros entram como barras, cada um com o rótulo e uma frase curta: agressividade, blefe, roubo após check, armadilha, margem para pagar, limiar de valor, tamanho da aposta. Um marcador mostra que as regras movem essas barras.

---

## 6. Os perfis (4:03–5:09)

**Fala**
Um perfil é o ponto de partida desses sete números. Criamos quatro. O Pressionador testa pressão com mãos fracas: agressividade de setenta por cento, blefe de trinta e roubo de cinquenta, mas quase nenhuma armadilha. O Valor e Indução aposta quando tem mão boa e esconde a força: blefa só oito por cento, mas arma armadilha em trinta por cento das mãos fortes. O Conservador entra em poucos potes, quase não blefa e exige equidade alta para apostar. E o Equilibrado mistura valor e blefe em doses moderadas. Os perfis tiveram que existir por três motivos. O primeiro é a continuidade: o relatório do Trabalho 1 já descrevia A como quem testa pressão e B como quem valoriza a mão e induz, e esses viraram os perfis iniciais de A e B. O segundo é que, sem diferença, não há o que ler: se os dois começassem iguais, cada um enxergaria o próprio reflexo, e não haveria padrão para perceber nem para explorar. O terceiro é permitir experimentos, trocando os perfis na configuração. E o perfil não fica fixo: a política que vale é o perfil, mais as posturas ativadas pelas regras, mais os ajustes do treinador.

**Tela**
Quatro cartões de perfil lado a lado com os sete números de cada um; A = Pressionador e B = Valor e Indução destacados. Depois a equação: perfil + posturas + treinador = política efetiva.

---

## 7. Intenção privada, ação pública (5:09–5:51)

**Fala**
Toda decisão recebe uma categoria de intenção, registrada só para o operador. Valor: apostar ou aumentar com mão forte. Blefe: apostar com mão fraca. Roubo: apostar porque o adversário deu check. Armadilha: dar check ou só pagar com mão forte. Pagar: a equidade cobre o preço da aposta. Check: mão média ou fraca, sem motivo para apostar. Desistir: a equidade não paga a aposta. E pressão: o all-in do modo de fichas curtas. Essa separação é o centro do problema adversarial. O adversário vê apenas a ação pública, por exemplo uma aposta de quarenta fichas, e não sabe se ela é valor, blefe ou roubo. É dessa dúvida que nasce a leitura, e é a categoria privada que nos permite medir depois quantos blefes funcionaram.

**Tela**
Oito etiquetas de categoria com cor própria. Uma mesma aposta de 40 fichas mostrada de dois lados: o operador vê "blefe", o adversário vê só "bet 40".

---

## 8. Observação, memória e adaptação (5:51–7:15)

**Fala**
Depois de cada ação pública, o agente atualiza oito medidas sobre o adversário: com que frequência ele desiste diante de uma aposta; quanto aposta e aumenta; com que frequência entra no pote e aumenta antes do flop; se dá check-raise; se aposta depois do meu check; se as cartas reveladas mostram blefes; e quantos dos meus blefes funcionaram. Cada medida tem duas memórias. A de longo prazo atravessa as partidas e guarda o conhecimento acumulado. A recente reage rápido. Quando as duas divergem, o agente registra que o adversário mudou de comportamento. A adaptação vem de oito regras. Explorar desistências: se ele desiste diante de mais da metade das apostas, blefe e roube mais. Valor contra pagador: se ele paga quase tudo, pare de blefar e aposte por valor. Pagar o blefador: se as cartas dele mostram blefe, pague com mãos mais fracas. Respeitar o passivo: se ele quase nunca aposta, desista quando ele apostar e roube quando ele não apostar. Induzir o agressor: se ele aposta demais, arme armadilhas. Evitar check-raise: se ele dá check-raise, pare de apostar automaticamente depois do check. Armadilha contra roubo: se ele sempre aposta depois do seu check, dê check com mão forte. E corrigir blefes: se os seus blefes falham, blefe menos. As regras têm uma faixa de tolerância e esperam pelo menos seis mãos entre uma mudança e outra, para não ficarem ligando e desligando. Por fim, antes de cada resposta do adversário, o agente faz uma previsão, e nós medimos quantas ele acerta.

**Tela**
Painel "Leitura do oponente" com as oito medidas, histórico × recente e o selo "mudou". As oito regras em lista, no formato "se… então…", acendendo uma a uma. Medidor de acerto das previsões.

---

## 9. O treinador Llama (7:15–7:45)

**Fala**
Existe ainda um treinador. Ele é um modelo de linguagem, o Llama, rodando no próprio notebook. Ele não joga nenhuma mão. Entre uma partida e outra, ele revisa o jogo de cada agente, vendo só o que aquele agente pôde observar, e sugere até três pequenos ajustes na política base. O sistema trata essa resposta como entrada não confiável: descarta parâmetros inventados, limita cada ajuste a dez pontos e só então aplica. É bom deixar claro: não é treinamento de rede neural. O aprendizado está nas estatísticas, nas regras e nesses ajustes.

**Tela**
Ícone do treinador entre duas partidas. Uma justificativa real do Llama em citação. Selo "validado e limitado: no máximo 3 ajustes, ±10 pontos".

---

## 10. A arena funcionando (7:45–8:50)

**Fala**
Esta é a arena funcionando. Na mesa, o operador vê tudo, inclusive as cartas dos dois, mas cada agente só recebe a própria visão. Embaixo, o raciocínio privado de cada decisão: chance de vencer, preço da aposta e o motivo da jogada. À direita, o registro de cada evento. E aqui está o painel que responde à nossa pergunta. Cada ponto é uma mudança de política. Cada seta liga a mudança de um agente à reação do outro. Ao lado, a narrativa gerada automaticamente, no formato: a partir do momento em que B fez isto, A passou a fazer aquilo. Cada partida termina com um relatório e um registro completo de evidências, uma linha para cada evento, decisão e adaptação.

**Tela**
Gravação real da arena: a mesa jogando, os painéis de decisão, o feed, depois a rolagem até a linha de influência com as setas e a narrativa. Por fim, o relatório da partida aberto e o arquivo de evidências.

---

## 11. Decisões que tomamos (8:50–9:27)

**Fala**
Algumas decisões moldaram o projeto. Agentes por regras, e não um modelo de linguagem em cada jogada: assim cada decisão é explicável, rápida e reproduzível. Partidas completas, com blinds crescentes, e memória entre partidas, para que o aprendizado de uma partida influencie as próximas. A primeira versão pagava all-in com um único par, porque calculava a chance contra mãos aleatórias; trocamos para a faixa do adversário. As regras oscilavam a cada mão; ganharam tolerância. E o narrador só aceita uma causa quando a mudança de um agente empurra o comportamento do outro na mesma direção que foi observada. A demonstração de ataques ficou fora do escopo, por decisão do grupo.

**Tela**
Lista de decisões, cada uma no formato antes → depois. "Par de 9 pagando all-in" riscado e trocado por "equidade contra a faixa". Gráfico pequeno de uma regra oscilando e depois estável.

---

## 12. Resultados e comportamento dos agentes (9:27–10:59)

**Fala**
Agora, os resultados. Primeiro, o ciclo acontece logo no começo. Na mão sete da primeira partida, B percebeu que A apostava sessenta por cento das vezes depois do seu check, e passou a armar armadilhas: de trinta para cinquenta por cento. Na mão seguinte, A percebeu B mais passivo e passou a roubar mais potes. E B respondeu induzindo ainda mais, com setenta e cinco por cento de armadilha. É uma cadeia de reações, uma pequena corrida armamentista. Ao longo das partidas, os estilos se transformaram. B virou um armador: parou de blefar por completo e desiste diante de menos de vinte por cento das apostas. A, que começou com trinta por cento de blefe, descobriu que B pagava tudo e levou a frequência de blefe para quase zero. Ele continuou agressivo, mas passou a apostar com mão boa. Segundo, a memória. Com memória entre as partidas, o conhecimento de um sobre o outro foi de sessenta e cinco para oitenta e oito por cento, e o acerto das previsões de A chegou a noventa por cento. Sem memória, o conhecimento ficou parado em torno de quarenta e cinco por cento. Mas há um efeito curioso: com memória, os agentes convergem, e depois da décima partida pararam de se adaptar. Sem memória, reaprendem tudo a cada partida e a escalada recomeça sempre. Terceiro, o treinador. Na execução de sessenta e oito partidas, ele ajustou A quatro vezes. Isso reabriu a disputa: nas partidas trinta e sete a quarenta houve uma nova escalada. E A, que vencia quarenta e um por cento das partidas antes do treinador, passou a vencer sessenta e cinco por cento depois.

**Tela**
Cadeia das mãos 7 e 8 desenhada na linha de influência. Duas fichas de perfil "antes → depois": B, armadilha 30% → 50% → 75% → 80%, blefe 8% → 0%; A, blefe 30% → 0%. Gráfico com e sem memória, com as curvas de conhecimento e acerto. Barra de vitórias de A: 41% antes do treinador, 65% depois.

---

## 13. Conclusões (10:59–11:58)

**Fala**
Então, como as decisões de um agente influenciam o adversário? Pelo que ele mostra em público. Cada aposta, check ou desistência vira uma estatística na memória do outro, e quando essa estatística cruza um limite, o outro muda de política, em média cerca de seis mãos depois. A influência é mútua e encadeada: uma mudança provoca uma resposta, que provoca outra. A memória faz os agentes se conhecerem e preverem melhor, mas também leva os dois a um ponto estável; para a disputa continuar, é preciso algo novo entrar no jogo, como o treinador. Também temos limites claros: as regras e os limites foram escolhidos à mão, a faixa do adversário é simples, a causalidade da narrativa é uma explicação rastreável e não uma prova estatística, e os números vêm de uma única sequência de cartas. Os próximos passos seriam repetir com várias sequências, adicionar exploração para manter a disputa viva, e implementar o limite de tempo e os ataques do Trabalho 1. Todo o código, os testes, os relatórios e as evidências estão no repositório. Obrigado.

**Tela**
A pergunta central de volta, agora com a resposta em três linhas. Lista curta de limitações e próximos passos. Cartela final: Grupo 7, nomes dos integrantes, link do repositório.
