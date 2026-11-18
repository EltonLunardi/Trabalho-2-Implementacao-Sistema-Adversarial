# Publicação no YouTube

## Título

Arena Adversarial: dois agentes de pôquer que aprendem um com o outro | Trabalho 2, ESOF Adversarial (Grupo 7)

## Descrição

Implementação do Trabalho 2 de Engenharia de Software Adversarial (Grupo 7). Dois agentes heurísticos jogam heads-up de Texas Hold'em, partida após partida, até um deles perder todas as fichas. Cada agente observa só as ações públicas do outro, modela o adversário, prevê as respostas dele e muda de política. A memória atravessa as partidas, e um treinador Llama local ajusta a política base entre uma partida e outra.

Pergunta central: como as decisões de um agente influenciam o comportamento do adversário nas rodadas seguintes?

Resultados, de execuções reproduzíveis:
- 68 partidas e 1.119 mãos com o treinador ligado;
- com memória entre partidas, o conhecimento mútuo foi de 65% para 88% e o acerto das previsões de A chegou a 90% (experimento com 20 partidas);
- sem memória, os agentes reaprendem tudo a cada partida e a escalada recomeça.

Integrantes: Rafael Barboza Torres, Elton Henrique Lunardi Gimenes, Frederico Marques da Silva Barcelos e Diego Santos de Araujo.

Narração com voz sintética (edge-tts). Trilha e efeitos sintetizados para este vídeo.

## Capítulos

0:00 Abertura e pergunta central
0:25 O que queríamos: do Trabalho 1 ao Trabalho 2
1:08 Por que pôquer
1:34 A arquitetura e os controles do motor
2:19 Como um agente decide
2:59 A política: sete números
3:44 Os perfis
4:44 Intenção privada, ação pública
5:27 O que cada agente mede do outro
5:57 As oito regras de adaptação
6:51 O treinador Llama
7:22 A Arena funcionando
8:00 Decisões que tomamos
8:36 Resultados e comportamento dos agentes
10:02 Conclusões
