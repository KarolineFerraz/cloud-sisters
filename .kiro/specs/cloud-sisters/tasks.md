# Tasks — Cloud Sisters (MVP demonstrável)

Referência: `requirements.md` e `design.md`. Stack: React + Vite + TypeScript, CSS responsivo, paleta roxa.
Persistência desta versão: **localStorage** (demonstrativo, single-device). Comunidade e Cloud Sisters AI entram como telas/placeholders claramente identificados.

## Prioridade 1 — Site funcionando
- [x] 1. Inicializar projeto Vite (React + TS) no workspace.
- [x] 2. Tema global (tokens da paleta roxa) e estilos base responsivos.
- [x] 3. Estado global de progresso com persistência em localStorage (XP, resultados, jornada).
- [x] 4. Dados: 30 perguntas reais (10 por nível) com 3 alternativas, correta e explicação; 12 minicursos (5 etapas); catálogo AWS.
- [x] 5. Layout + navegação (Aprender, Evoluir, Conectar) com cabeçalho e barra de XP.
- [x] 6. Página inicial com slogan e botão "Começar jornada".
- [x] 7. Jogo: 3 níveis, 2 tentativas por pergunta, explicação após 2 erros, XP 10/20/30, sem duplicidade.
- [x] 8. Jornada (Aprender): mapa com jogos e minicursos e estados bloqueado/disponível/em andamento/concluído.
- [x] 9. Dashboard (Evoluir): XP, progresso, competências por assunto.
- [x] 10. Minicursos: lista dos 12 e as 5 etapas, respeitando bloqueios de progressão.

## Prioridade 2 — Se houver tempo
- [x] 11. Conteúdo educativo básico nas etapas dos minicursos.
- [x] 12. Tela Cloud Sisters Community (visual, marcada como não multiusuário).
- [x] 13. Tela Cloud Sisters AI (preparada para integração real, sem simular IA).
- [x] 14. Recomendação AWS a partir do catálogo validado (tela "Meu Próximo Passo na Cloud").

## Execução
- [ ] 15. Instalar dependências. (BLOQUEADO: Node.js/npm não está instalado nesta máquina.)
- [ ] 16. Rodar localmente e corrigir erros de compilação. (Depende do item 15.)
- [ ] 17. Informar comando e URL local. (Comando: `npm install` e `npm run dev` → http://localhost:5173)

## Limites explícitos (não alterar requisitos)
- Progresso é local (localStorage); NÃO é multiusuário.
- Cloud Sisters AI NÃO está integrada; nenhuma saída é apresentada como IA real.
- Sem pagamentos; sem credenciais no frontend.

## Bloqueio de ambiente
- `node` e `npm` não foram encontrados no PATH nem em locais padrão (Program Files, LOCALAPPDATA, APPDATA).
- Sem Node não é possível instalar dependências nem iniciar o Vite a partir do agente.
- Ação necessária pela equipe: instalar Node.js LTS (inclui npm) e então rodar `npm install` e `npm run dev`.
