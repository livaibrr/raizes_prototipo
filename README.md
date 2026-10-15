# Raízes

**Toda cidade tem histórias que não aparecem no mapa. O Raízes leva você até elas.**

Um mapa diz que existe uma feira a 800 metros. O Raízes conta que ela funciona há 40 anos e preserva receitas das famílias que formaram a região.

### ▶ [Abrir o protótipo no navegador](https://livaibrr.github.io/raizes_prototipo/)

Funciona no computador e no aparelho celular, sem instalar nada. Para ver como no app, abra pelo celular ou reduza a janela do navegador.

---

## O que é

O Raízes é um aplicativo de turismo cultural que usa a localização da pessoa para mostrar a diversidade de uma cidade: lugares, eventos e histórias ligados a povos indígenas, à cultura afro-brasileira, a comunidades religiosas, a migrantes e a outros grupos que formaram aquele território.

Cada lugar traz:

- **Por que conhecer**, a primeira informação que a pessoa lê
- **História com fonte**, escrita e verificada, nunca gerada automaticamente
- **Aviso de visitação**, definido pela própria comunidade (por exemplo, em espaços religiosos em atividade)
- **Acessibilidade item a item**: rampa, banheiro, piso tátil, Libras, audiodescrição
- **Ficha sensorial**: nível de ruído, luz e lotação, pensada para pessoas autistas ou sensíveis a estímulos

Com isso, o app monta roteiros que cabem no tempo, na distância e nas necessidades de cada pessoa.

## Este repositório

Este é o **protótipo navegável**, com 10 telas, feito em HTML, CSS e JavaScript para validar o fluxo e o visual:

| Tela | O que mostra |
| --- | --- |
| Abertura | Apresentação do app |
| Primeiro acesso | Questionário de interesses, temas de diversidade, tempo e acessibilidade |
| Início | Contexto cultural da região e lugares próximos |
| Explorar | Categorias, filtros e destaques |
| Página do lugar | Por que conhecer, história, acessibilidade e diversidade relacionada |
| Eventos | Agenda cultural por dia |
| Mapa cultural | Pontos próximos por categoria |
| Criar roteiro | Tempo, distância e interesses |
| Roteiro gerado | Paradas com horário, duração, distância e custo |
| Perfil | Preferências, acessibilidade e favoritos |

Os conteúdos do protótipo usam Salvador (BA) como exemplo. O piloto real será em Palmas (TO).

O **aplicativo** está em desenvolvimento em um repositório separado, com React Native (Expo SDK 57), TypeScript e Supabase (PostgreSQL com 15 tabelas e 36 políticas de segurança por linha).

## Rodar no computador

Baixe o repositório e abra o arquivo `index.html` no navegador. No Windows, também dá para dar dois cliques em `ABRIR-APP.bat`.

## Equipe

- **Levi Luz Sousa**, Ciência da Computação, CEULP/ULBRA
- **Maria Clara Pereira Lima**, Ciência da Computação, CEULP/ULBRA

Projeto inscrito no **Campus Mobile 2026**, na categoria Diversidade.
