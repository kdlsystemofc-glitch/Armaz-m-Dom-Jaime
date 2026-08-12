# 05 — EXPERIENCE DESIGN: ARMAZÉM DOM JAIME

> **Document Status:** Complete  
> **Phase:** 05 — Experience Design  
> **Approved Direction:** **Direção 03: "A Casa de Sabores"** (Aprovada expressamente pelo usuário)  
> **Role Assumed:** UX Designer, Interaction Designer, Motion Designer, Experience Director  
> **Authority:** `MANIFESTO.md` & `docs/00-discovery.md` a `docs/04-creative-direction.md`  

---

## 1. APPROVED CREATIVE DIRECTION CONFIRMATION

A **Direção Criativa 03: "A Casa de Sabores" (Editorial Culinary Storytelling)** foi oficialmente selecionada e aprovada para guiar toda a experiência digital do **Armazém Dom Jaime**.

* **Conceito:** Fusão entre apetite irresistível (fotos reais em alta definição), acolhimento humano (mural de lousa, madeira, atendimento nota 10) e agilidade de conversão (nota 4,6★ e botões de 1 clique para WhatsApp e Google Maps).
* **Paleta Dominante:** Creme/Marfim marfim (`#FDFBF7`), Terracota (`#9A2C18`), Verde WhatsApp (`#25D366`), Dourado Assado (`#D97706`) e o tom Grafite Lousa (`#18181B`) para a seção da Feijoada.

---

## 2. PAGE JOURNEY & FLOW ARCHITECTURE

```
┌────────────────────────────────────────────────────────────────────────┐
│                        JORNADA DE EXPERIÊNCIA DESSA PÁGINA             │
├────────────────────────────────────────────────────────────────────────┤
│ 1. MOMENTO DE ABERTURA (HERO): Impacto gastronômico + Nota 4.6★        │
│    └── Objetivo: Gerar apetite imediato e prova social de cara.        │
├────────────────────────────────────────────────────────────────────────┤
│ 2. MOMENTO DE CORROBORAÇÃO (DEPOIMENTOS): Validação real dos clientes  │
│    └── Objetivo: Eliminar a dúvida sobre qualidade, higiene e feijoada.│
├────────────────────────────────────────────────────────────────────────┤
│ 3. MOMENTO DE DESEJO (SHOWCASE DO BUFFET): Vitrine viva de assados     │
│    └── Objetivo: Fazer a boca encher d'água com fotos reais das cubas. │
├────────────────────────────────────────────────────────────────────────┤
│ 4. MOMENTO DE IMPACTO DRAMÁTICO (FEIJOADA DE SÁBADO): Fundo Lousa      │
│    └── Objetivo: Criar desejo para o ritual do almoço familiar de sáb. │
├────────────────────────────────────────────────────────────────────────┤
│ 5. MOMENTO DE CONFORTO (ESTRUTURA & SALÃO): Espaço e Cozinha Aberta    │
│    └── Objetivo: Demonstrar ambiente amplo, limpo e climatizado.       │
├────────────────────────────────────────────────────────────────────────┤
│ 6. MOMENTO DE AÇÃO PRÁTICA (LOCALIZAÇÃO & MAPA): Endereço & Estac.     │
│    └── Objetivo: Guiar a rota do cliente e converter no WhatsApp.      │
└────────────────────────────────────────────────────────────────────────┘
```

### Ritmo da Leitura e Cadência de CTAs
* **Ritmo Alternado (Respiro e Impacto):** A página alterna entre áreas claras e acolhedoras (fundo creme `#FDFBF7`), cartões brancos com sombras naturais e o ápice visual em fundo grafite escuro (`#18181B`) na seção da Feijoada.
* **Cadência de CTAs:**
  1. *Hero:* CTA duplo em destaque (WhatsApp em verde vibrante + Traçar Rota em terracota).
  2. *Seção Feijoada:* CTA direto para reserva/pedido de feijoada de sábado.
  3. *Seção Localização:* CTA para Google Maps/Waze + Chamada direta WhatsApp.
  4. *Mobile Floating Bar:* Botão discreto no rodapé móvel que aparece após o scroll do Hero.

---

## 3. SCROLL STORYTELLING & SCENE BREAKDOWN

---

### CENA 01 — O ACOLHIMENTO E O APETITE (HERO SECTION)
* **O que entra:** Fade-in suave de `300ms` da barra de navegação, seguido pela revelação em onda da Badge de `4,6★`, do H1, da frase de apoio e do card da Costelinha BBQ (`imgi_26`).
* **O que permanece:** A foto da Costelinha BBQ permanece como âncora visual principal da dobra superior.
* **O que move:** A tag flutuante *"Destaque do Buffet"* faz um micro-movimento vertical flutuante de `2px` para criar efeito de vida.
* **Por que o movimento existe:** Para atrair o olhar imediatamente para o apetite do prato e para os botões de ação sem poluição.
* **O que o usuário entende:** "Este é um restaurante self-service super bem avaliado no Planalto com comida caseira deliciosa."
* **O que o usuário sente:** Fome imediata e vontade de almoçar no Armazém Dom Jaime.

---

### CENA 02 — A VOZ DA VIZINHANÇA (PROVA SOCIAL)
* **O que entra:** Revelação em sequência (*staggered fade-up*) dos 3 cards de avaliações reais do Google (Fernando Pretti, Terumi Terumi, Daniela Steinle).
* **O que permanece:** O cabeçalho da seção com as estrelas amarela/dourada (`#D97706`).
* **Por que o movimento existe:** O efeito escalonado simula a entrada gradual de opiniões autênticas, transmitindo dinamismo.
* **O que o usuário entende:** "Centenas de pessoas do meu bairro almoçam aqui e recomendam a comida e o atendimento."
* **O que o usuário sente:** Segurança absoluta para ir até o restaurante ou pedir delivery.

---

### CENA 03 — A FARTURA DO BUFFET (VITRINE GASTRONÔMICA)
* **O que entra:** Grid de 6 pratos reais em cartões brancos (`#FFFFFF`) com leve zoom ao rolar a página (`scale 0.98 -> 1.0`).
* **O que move ao interagir:** Ao passar o mouse (*hover*), a foto do prato faz micro-zoom de `1.03x` em `300ms` com relevo de sombra.
* **O que o usuário entende:** "O buffet tem muita opção de carne nobre, assados com abacaxi, empanados e saladas."
* **O que o usuário sente:** Prazer de escolha e desejo de montar seu próprio prato.

---

### CENA 04 — O RITUAL DO SÁBADO (FEIJOADA DE SÁBADO)
* **O que entra:** Transição de contraste total do fundo creme para o fundo Grafite Lousa (`#18181B`), inspirado na parede decorativa do salão.
* **O que permanece:** Elementos gráficos com efeito lousa em giz branco e tipografia `Bitter` em destaque.
* **Por que o movimento existe:** A mudança dramática de cor sinaliza a virada da história da página: o destaque do sábado.
* **O que o usuário entende:** "A feijoada de sábado do Armazém Dom Jaime é um acontecimento tradicional na região."
* **O que o usuário sente:** Vontade de reunir os amigos e a família no sábado.

---

### CENA 05 — O CONFORTO DO SALÃO (AMBIENTE & HIGIENE)
* **O que entra:** Imagem expansiva do salão interno (`imgi_38`) em formato 16:10 com os 3 diferenciais de conforto em lista tátil ao lado.
* **O que o usuário entende:** "O salão é amplo, limpo, agradável, climatizado e posso ver a cozinha sendo limpa."
* **O que o usuário sente:** Conforto visual e garantia de higiene.

---

### CENA 06 — O DESTINO FINAL (LOCALIZAÇÃO & CONVERSÃO)
* **O que entra:** Card interativo contendo o mapa de rotas, a foto da fachada (`imgi_8`), a informação explícita do estacionamento privado em frente e os botões de ação final.
* **O que o usuário entende:** "É muito fácil chegar e estacionar no local."
* **O que o usuário sente:** Prontidão total para tomar a decisão e ir almoçar.

---

## 4. INTERACTION SPECIFICATIONS

```
┌────────────────────────────────────────────────────────────────────────┐
│                        TABELA DE INTERAÇÕES                            │
├──────────────────┬─────────────────┬───────────────────────────────────┤
│ ELEMENTO UI      │ TIPO DE INTERAÇÃO│ COMPORTAMENTO E FEEDBACK VISUAL   │
├──────────────────┼─────────────────┼───────────────────────────────────┤
│ Botão WhatsApp   │ Hover / Touch   │ Elevação translateY(-2px), sombra │
│                  │                 │ verde sutil, feedback tátil limpo.│
├──────────────────┼─────────────────┼───────────────────────────────────┤
│ Botão Rotas/Maps │ Hover / Touch   │ Preenchimento terracota suave com │
│                  │                 │ inversão de cor do texto.         │
├──────────────────┼─────────────────┼───────────────────────────────────┤
│ Cards de Pratos  │ Hover           │ Micro-zoom 1.03x na imagem, sombra│
│                  │                 │ difusa aumenta de 5% para 12%.    │
├──────────────────┼─────────────────┼───────────────────────────────────┤
│ Depoimentos Google│ Swipe (Mobile) │ Deslize horizontal suave com      │
│                  │                 │ pontos indicadores de página.     │
├──────────────────┼─────────────────┼───────────────────────────────────┤
│ Header Navbar    │ Sticky Scroll   │ Transição para fundo vidro marfim │
│                  │                 │ com desfoque de fundo (blur 10px).│
└──────────────────┴─────────────────┴───────────────────────────────────┘
```

---

## 5. MOTION TOKENS & ANIMATION HIERARCHY

* **Hierarquia de Animação:**
  1. *Nível 1 (Crítico/Instantâneo):* Feedback de cliques em botões (`150ms cubic-bezier(0.16, 1, 0.3, 1)`).
  2. *Nível 2 (Informativo):* Entrada dos cards de pratos e depoimentos (`300ms cubic-bezier(0.16, 1, 0.3, 1)` com atraso de `50ms` entre itens).
  3. *Nível 3 (Ambiental):* Transição de contraste de seções no scroll (`500ms ease-out`).

### Estratégia para `prefers-reduced-motion`
Caso o usuário possua a opção de movimento reduzido ativada no sistema operacional (Windows/macOS/iOS/Android):
* Todas as animações de entrada por rolagem (*slide-up*) são desativadas.
* Os elementos aparecem imediatamente em seu estado final (`opacity: 1`, `transform: none`).
* Transições de hover em botões passam a ser instantâneas sem movimento vertical.

---

## 6. MOBILE INTENTIONAL DESIGN

O mobile foi desenhado de forma prioritária e independente, sem ser uma simples redução da versão desktop.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        MOBILE VIEWPORT ARCHITECTURE                    │
├────────────────────────────────────────────────────────────────────────┤
│ [NAVBAR MOBILE]: Logo + Status (🟢 Aberto) + Botão WhatsApp Ícone      │
├────────────────────────────────────────────────────────────────────────┤
│ [HERO MOBILE]:                                                         │
│ 1. Badge ★ 4,6 no Google (472 avaliações)                              │
│ 2. H1 Headline: "Tempero de verdade, comida farta..."                  │
│ 3. Subtítulo e botões CTAs empilhados verticalmente (100% largura)     │
│ 4. Card Foto Costelinha BBQ (Aspect-ratio 4:5 nativo do smartphone)    │
│ 5. Microcopy de apoio ("Estacionamento privado em frente")             │
├────────────────────────────────────────────────────────────────────────┤
│ [CARROSSEL DE DEPOIMENTOS]: Deslize horizontal com 1 card visível por  │
│ vez para economizar espaço vertical.                                   │
├────────────────────────────────────────────────────────────────────────┤
│ [GRID DE PRATOS MOBILE]: 2 colunas compactas com toque amplo (48px+).  │
├────────────────────────────────────────────────────────────────────────┤
│ [BARRA FIXA INFERIOR MOBILE]: Surge após rolar o Hero contendo:        │
│ "🟢 Aberto Almoço" | Botão `[WhatsApp Pedir]` (Tamanho de toque 52px). │
└────────────────────────────────────────────────────────────────────────┘
```

---

EXPERIENCE DESIGN COMPLETE — READY FOR UI ARCHITECTURE
