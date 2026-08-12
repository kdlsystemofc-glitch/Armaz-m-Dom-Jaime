# 06 — UI ARCHITECTURE: ARMAZÉM DOM JAIME

> **Document Status:** Complete  
> **Phase:** 06 — UI Architecture  
> **Approved Direction:** **Direção 03: "A Casa de Sabores"**  
> **Role Assumed:** Information Architect, UX Designer, UI Architect, Front-end Architect  
> **Authority:** `MANIFESTO.md` & `docs/00-discovery.md` a `docs/05-experience-design.md`  

---

## 1. COMPONENT & SECTION SUMMARY

A Landing Page foi estruturada em 7 seções intencionais + 2 componentes globais de navegação, sem blocos genéricos ou desnecessários.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        ARQUITETURA DE UI DA LANDING PAGE               │
├────────────────────────────────────────────────────────────────────────┤
│ [0. COMPACT HEADER NAVBAR] - #nav-header                               │
├────────────────────────────────────────────────────────────────────────┤
│ [1. HERO SECTION] - #section-hero                                      │
├────────────────────────────────────────────────────────────────────────┤
│ [2. PROVA SOCIAL & GOOGLE REVIEWS] - #section-proof                    │
├────────────────────────────────────────────────────────────────────────┤
│ [3. SHOWCASE DO BUFFET DIÁRIO] - #section-buffet                       │
├────────────────────────────────────────────────────────────────────────┤
│ [4. DESTAQUE FEIJOADA DE SÁBADO] - #section-feijoada (Fundo Lousa)     │
├────────────────────────────────────────────────────────────────────────┤
│ [5. AMBIENTE & ESTRUTURA DO SALÃO] - #section-ambience                 │
├────────────────────────────────────────────────────────────────────────┤
│ [6. LOCALIZAÇÃO, HORÁRIOS & ESTACIONAMENTO] - #section-location        │
├────────────────────────────────────────────────────────────────────────┤
│ [7. FOOTER INSTITUCIONAL] - #section-footer                            │
├────────────────────────────────────────────────────────────────────────┤
│ [GLOBAL MOBILE FLOATING BAR] - #component-floating-cta                 │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 2. DETAILED SECTION ARCHITECTURE

---

### COMPONENTE 0: HEADER NAVBAR (`#nav-header`)

* **Por que existe?** Para fornecer navegação rápida, status de funcionamento do restaurante e canal de conversão instantâneo em qualquer ponto da rolagem.
* **Conteúdo:** Logotipo vetorial "Armazém Dom Jaime", indicador de status (`🟢 Aberto Agora — Almoço` ou `⚪ Fechado`), links âncora ("Cardápio", "Feijoada", "Salão", "Como Chegar") e botão CTA primário (`WhatsApp`).
* **Layout & Grid:** Flexbox horizontal com espaçamento `space-between`, altura de `72px` no desktop e `60px` no mobile.
* **Hierarquia:** Logo (P1), Botão WhatsApp (P2), Links de Navegação (P3).
* **Ativos Utilizados:** Logotipo vetorial estilizado baseado em [`imgi_2_...jpg`](file:///c:/cli/Armaz%C3%A9m%20Dom%20Jaime/imagens/imgi_2_276309722_648186989593520_4640318918280226232_n.jpg).
* **CTA:** Botão compacto verde WhatsApp.
* **Comportamento Responsivo:**
  * *Desktop:* Exibe logo, indicador de status, 4 links de navegação e botão WhatsApp.
  * *Tablet:* Exibe logo, indicador de status e botão WhatsApp.
  * *Mobile:* Exibe logo compacto + botão ícone do WhatsApp. Navbar com fundo translúcido e desfoque (*backdrop-filter: blur(10px)*).

---

### SEÇÃO 1: HERO (`#section-hero`)

* **Por que existe?** Para capturar a atenção imediata do visitante com fome, apresentar a prova social do Google (4,6★), exibir a foto gastronômica de maior impacto (Costelinha BBQ) e converter em pedidos ou visitas.
* **Conteúdo:**
  * Badge: `★ 4,6 no Google (472 avaliações realistas) • Planalto, SBC`
  * H1: *"Tempero de verdade, comida farta e a variedade que transforma a sua pausa de almoço."*
  * Subtítulo: *"Do lombo assado com abacaxi à famosa feijoada de sábado. Um buffet self-service preparado diariamente no Bairro Planalto."*
  * Botões: `[WhatsApp Pedir / Consultar]` (Verde `#25D366`) + `[Como Chegar / Rotas]` (Terracota `#9A2C18`).
  * Microcopy: *"Estacionamento privado conveniado logo em frente."*
  * Imagem de Capa: Card com a foto da Costelinha BBQ (`imgi_26`).
* **Layout & Grid:** Grid de 2 colunas no Desktop (55% Texto / 45% Card Fotográfico). Coluna única vertical no Mobile.
* **Hierarquia Visual:** 1º H1 → 2º Foto da Costelinha → 3º Botão WhatsApp → 4º Badge 4,6★.
* **Ativos Utilizados:** [`imgi_26_...jpg`](file:///c:/cli/Armaz%C3%A9m%20Dom%20Jaime/imagens/imgi_26_625111337_18217818322310863_3726101454552266579_n.jpg) (Costelinha BBQ).
* **Comportamento Responsivo:**
  * *Desktop:* Texto à esquerda, imagem da Costelinha à direita em card flutuante com bordas de `16px`.
  * *Mobile:* Badge → H1 → Subtítulo → Botões CTAs (100% largura) → Imagem da Costelinha → Microcopy.

---

### SEÇÃO 2: PROVA SOCIAL & GOOGLE REVIEWS (`#section-proof`)

* **Por que existe?** Para eliminar a desconfiança sobre a qualidade da comida, o atendimento e a higiene, mostrando depoimentos de clientes reais extraídos do Google Maps.
* **Conteúdo:**
  * Headline: *"Quem almoça aqui, volta sempre. Veja o que dizem nossos clientes no Google."*
  * Sub-headline: *"Média 4,6★ de satisfação com 472 avaliações registradas."*
  * 3 Cards de Depoimentos Reais: Fernando Pretti, Terumi Terumi, Daniela Steinle.
* **Layout & Grid:** Grid de 3 colunas no Desktop (`gap: 24px`). Carrossel com swipe horizontal no Mobile.
* **Ativos Utilizados:** Ícone de 5 estrelas em amarelo/dourado (`#D97706`) + Selo verificado Google Maps.
* **Comportamento Responsivo:**
  * *Desktop:* 3 cards dispostos lado a lado.
  * *Mobile:* Carrossel touch com indicador de paginação (dots).

---

### SEÇÃO 3: SHOWCASE DO BUFFET DIÁRIO (`#section-buffet`)

* **Por que existe?** Para provocar desejo (*appetite appeal*) apresentando a variedade do buffet self-service por quilo com fotos reais das cubas.
* **Conteúdo:**
  * Eyebrow: `VARIEDADE PREPARADA TODOS OS DIAS`
  * Headline: *"Um buffet variado para você montar o prato do seu jeito."*
  * Subtítulo: *"Sem prato pronto repetitivo. Escolha suas opções preferidas entre grelhados, assados e pratos frios."*
  * 6 Cards de Pratos Reais:
    1. Costelinha ao Molho Barbecue com Gergelim (`imgi_26`)
    2. Lombo Assado com Abacaxi & Farofa (`imgi_28`)
    3. Cupim & Carnes Assadas na Brasa (`imgi_34`)
    4. Empanados Dourados & Crocantes (`imgi_19`)
    5. Batata Doce Assada & Calabresa Fatiada (`imgi_20`)
    6. Seleção de Saladas & Pratos Frios (Pratos variados do buffet)
* **Layout & Grid:** Grid de 3 colunas x 2 linhas no Desktop (`gap: 24px`). Grid de 2 colunas compactas no Mobile.
* **Ativos Utilizados:** [`imgi_28_...jpg`](file:///c:/cli/Armaz%C3%A9m%20Dom%20Jaime/imagens/imgi_28_624249508_18118522555582131_5713739549659277403_n.jpg), [`imgi_19_...jpg`](file:///c:/cli/Armaz%C3%A9m%20Dom%20Jaime/imagens/imgi_19_625139549_18114644599621795_1767267439681983326_n.jpg), [`imgi_34_...jpg`](file:///c:/cli/Armaz%C3%A9m%20Dom%20Jaime/imagens/imgi_34_625126204_18080496365337473_5307251783386632452_n.jpg), [`imgi_20_...jpg`](file:///c:/cli/Armaz%C3%A9m%20Dom%20Jaime/imagens/imgi_20_623555866_18077930657058531_1987471414179034002_n.jpg).
* **Interação:** Hover com zoom sutil de `1.03x` e sombra no card.

---

### SEÇÃO 4: DESTAQUE FEIJOADA DE SÁBADO (`#section-feijoada`)

* **Por que existe?** Para destacar o carro-chefe do sábado — o dia de maior movimento e faturamento familiar — criando um momento de virada visual dramática na landing page.
* **Conteúdo:**
  * Eyebrow: `O ALMOÇO DE SÁBADO NO PLANALTO`
  * Headline: *"Sábado é dia da nossa tradicional Feijoada Completa."*
  * Subtítulo: *"Aclamada pelos nossos clientes como a feijoada oficial do sábado. Preparada com carnes nobres selecionadas, feijão preto encorpado, couve refogada, farofa e torresmo crocante."*
  * CTA: `[Ícone WhatsApp] Reservar ou Pedir Feijoada pelo WhatsApp`
* **Estilo Visual & Layout:** Fundo escuro em tom Grafite Lousa (`#18181B`), com tipografia e bordas em branco/dourado (`#D97706`). Container centralizado de 1 coluna com destaque de texto e botões.

---

### SEÇÃO 5: AMBIENTE & ESTRUTURA DO SALÃO (`#section-ambience`)

* **Por que existe?** Para demonstrar que o ambiente é amplo, climatizado, agradável e limpo (com visão direta da cozinha envidraçada), eliminando receios de desconforto.
* **Conteúdo:**
  * Headline: *"Um salão amplo, climatizado e pensado para você desacelerar."*
  * Subtítulo: *"Piso laminado de madeira, iluminação aconchegante e o carinho do nosso mural decorativo."*
  * Tópicos:
    * ✓ Atendimento atencioso e equipe educada ("nota 10").
    * ✓ Cozinha envidraçada com higiene transparente.
    * ✓ Estacionamento privado conveniado logo em frente.
  * Banner Visual: Foto panorâmica do salão interno (`imgi_38`).
* **Layout & Grid:** Grid de 2 colunas no Desktop (Texto de Conforto à esquerda / Banner do Salão à direita). Coluna única no Mobile.
* **Ativos Utilizados:** [`imgi_38_...jpg`](file:///c:/cli/Armaz%C3%A9m%20Dom%20Jaime/imagens/imgi_38_650847007_18082069688600015_1141053972060960157_n.jpg) (Salão interno com lousa decorativa).

---

### SEÇÃO 6: LOCALIZAÇÃO, HORÁRIOS & ESTACIONAMENTO (`#section-location`)

* **Por que existe?** Para entregar as informações práticas decisivas para a visita física (endereço, mapa, horários e indicação de estacionamento) ou pedido via delivery.
* **Conteúdo:**
  * Headline: *"Fácil de chegar, fácil de estacionar. Venha nos visitar."*
  * Endereço: `Av. Dom Jaime de Barros Câmara, 720 - Bairro Planalto, São Bernardo do Campo - SP`
  * Horário: `Segunda a Sábado a partir das 11h • Fechado aos Domingos`
  * Estacionamento: `Estacionamento privado conveniado em frente ao restaurante`
  * Foto da Fachada: Card com foto da entrada (`imgi_8`).
  * CTAs: `[Como Chegar / Abrir Waze & Maps]` + `[Falar no WhatsApp]`
* **Layout & Grid:** Grid de 2 colunas no Desktop (Card de Dados e Mapa à esquerda / Foto da Fachada à direita).
* **Ativos Utilizados:** [`imgi_8_...jpg`](file:///c:/cli/Armaz%C3%A9m%20Dom%20Jaime/imagens/imgi_8_673120398_2383950549104489_5445352155130003285_n.jpg) (Fachada externa).

---

### SEÇÃO 7: FOOTER INSTITUCIONAL (`#section-footer`)

* **Por que existe?** Para encerramento formal da página, exibindo créditos da empresa, CNPJ e link das redes sociais.
* **Conteúdo:** Logotipo "Armazém Dom Jaime", Tagline *"Misturando temperos, cozinhando amor!❤️"*, CNPJ 31.403.789/0001-55, link do Instagram `@armazemdomjaime` e copyright.

---

### COMPONENTE GLOBAL: BARRA FIXA MOBILE (`#component-floating-cta`)

* **Por que existe?** Garantir que o usuário em dispositivos móveis consiga chamar no WhatsApp com 1 toque a qualquer momento da rolagem.
* **Comportamento:** Surge na tela após o usuário rolar além da dobra principal do Hero.
* **Conteúdo:** `🟢 Aberto no Almoço` | Botão `[WhatsApp Pedir]` em tom verde `#25D366` com altura de `52px` (área de toque tátil ideal).

---

## 3. TECHNICAL SPECIFICATIONS & MEDIA QUERIES

* **Breakpoints:**
  * `Mobile`: `< 768px` (Grid 4 colunas, margens de 16px)
  * `Tablet`: `768px - 1024px` (Grid 8 colunas, margens de 24px)
  * `Desktop`: `> 1024px` (Grid 12 colunas, largura máxima de contêiner `1200px`)

---

UI ARCHITECTURE COMPLETE — READY FOR IMPLEMENTATION
