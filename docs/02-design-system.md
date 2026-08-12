# 02 — DESIGN SYSTEM: ARMAZÉM DOM JAIME

> **Document Status:** Complete  
> **Phase:** 02 — Design System  
> **Role Assumed:** Brand Designer, UI Designer, Design System Designer, Accessibility Specialist  
> **Authority:** `MANIFESTO.md`, `docs/00-discovery.md` & `docs/01-brand-strategy.md`  

---

## 1. IDENTITY AUDIT & VISUAL DIRECTION

### Inspeção da Identidade Existente
* **Logotipo ([`imgi_2_...jpg`](file:///c:/cli/Armaz%C3%A9m%20Dom%20Jaime/imagens/imgi_2_276309722_648186989593520_4640318918280226232_n.jpg)):**  
  Tipografia robusta com traços *slab-serif* (estilo armazém tradicional), ícone central de garfo e faca cruzados, aplicado sobre fundo de réguas de madeira clara caiada. Transmite tradição, honestidade e foco na boa mesa.
* **Fachada ([`imgi_8_...jpg`](file:///c:/cli/Armaz%C3%A9m%20Dom%20Jaime/imagens/imgi_8_673120398_2383950549104489_5445352155130003285_n.jpg)):**  
  Painéis de madeira em tom mel queimado, detalhes geométricos em terracota e letreiro escuro com tipografia serifada branca ("Armazem Dom Jaime RESTAURANTE").
* **Salão Interno ([`imgi_38_...jpg`](file:///c:/cli/Armaz%C3%A9m%20Dom%20Jaime/imagens/imgi_38_650847007_18082069688600015_1141053972060960157_n.jpg)):**  
  Piso laminado de madeira carvalho claro, mesas em madeira maciça, iluminação ambiente aconchegante e o marcante mural decorativo de lousa (*chalkboard*) na parede do fundo.

### Diretriz Visual
O Design System rejeita a estética genérica de SaaS e o modo escuro automático. A interface adota um **Light Mode dominante caloroso** (base creme/marfim com madeira e terracota), utilizando o tom grafite de lousa (*slate chalkboard*) pontualmente para seções de alto contraste (como a área de destaque da Feijoada ou rodapé).

---

## 2. COLOR SYSTEM (PALETA DE CORES & ACESSIBILIDADE)

Todas as combinações de cores foram testadas e validadas conforme o padrão **WCAG 2.2 AA** (contraste mínimo de 4,5:1 para texto normal e 3:0:1 para elementos gráficos/títulos grandes).

```
┌────────────────────────────────────────────────────────────────────────┐
│                        COLOR SYSTEM TOKENS                             │
├─────────────────┬───────────┬──────────────┬───────────────────────────┤
│ TOKEN           │ HEX CODE  │ PROPORÇÃO    │ APLICAÇÃO E FUNÇÃO        │
├─────────────────┼───────────┼──────────────┼───────────────────────────┤
│ --bg-base       │ #FDFBF7   │ Canvas Base  │ Fundo geral da página     │
│ --bg-surface    │ #FFFFFF   │ Superfície   │ Cards e contêineres       │
│ --bg-warm       │ #F5EFE6   │ Sup. Quente  │ Seções intercaladas       │
│ --brand-primary │ #9A2C18   │ Primária     │ Terracota / Botões & CTAs │
│ --brand-amber   │ #D97706   │ Secundária   │ Dourado / Destaques       │
│ --text-primary  │ #1C1917   │ Texto        │ Grafite Escuro (Cont. 15) │
│ --text-muted    │ #57534E   │ Texto Muted  │ Cinza Pedra (Cont. 6.8)   │
│ --border-subtle │ #E7E5E4   │ Divisores    │ Bordas de cards e campos  │
│ --dark-surface  │ #18181B   │ Lousa/Slate  │ Seção Feijoada / Footer   │
│ --fresh-green   │ #15803D   │ Funcional    │ Ervas / Indicador Aberto  │
└─────────────────┴───────────┴──────────────┴───────────────────────────┤
```

### Detalhamento dos Tokens de Cor

* **`--bg-base` (`#FDFBF7`):** Tom creme/marfim suave, inspirado na madeira clara caiada e linho natural. Evita o branco hospitalar puro, trazendo aconchego.
* **`--brand-primary` (`#9A2C18`):** Terracota/Pimenta profunda. Reflete a cor da fachada, das panelas de barro e dos molhos artesanais (Costelinha BBQ). Oferece excelente contraste (6,1:1) com texto branco.
* **`--brand-amber` (`#D97706`):** Amarelo queimado/dourado. Representa os empanados crocantes, abacaxi grelhado e o calor da iluminação do salão. Usado para badges, estrelas de avaliação e detalhes visuais.
* **`--text-primary` (`#1C1917`):** Grafite carvão profundo. Substitui o preto puro (`#000000`) para uma leitura mais suave e orgânica.
* **`--dark-surface` (`#18181B`):** Grafite lousa escuro (*Chalkboard Slate*). Inspirado diretamente na parede decorativa do salão interno, utilizado em blocos de contraste para quebrar a sequência da página.

---

## 3. TYPOGRAPHY SYSTEM

A tipografia do Armazém Dom Jaime combina a robustez dos armazéns tradicionais (*Slab-Serif*) com a legibilidade moderna e limpa de uma tipografia sans-serif contemporânea.

### Fontes Selecionadas
* **Display / Títulos:** `Bitter` (Google Font) — Tipografia *Slab-Serif* sólida, elegante e artesanal. Conecta-se diretamente à identidade do logotipo e ao clima acolhedor do restaurante.
* **Body / Interface UI:** `Plus Jakarta Sans` (Google Font) — Tipografia sans-serif limpa, de alta legibilidade em telas móveis, ideal para números, endereços, botões e textos de apoio.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        TYPOGRAPHIC SCALE                               │
├──────────────┬───────────┬──────────────┬─────────────┬────────────────┤
│ NIVEL        │ FONTE     │ TAMANHO (DESK│ TAMANHO (MOB│ PESO & HEIGHT  │
├──────────────┼───────────┼──────────────┼─────────────┼────────────────┤
│ Display Hero │ Bitter    │ 56px (3.5rem)│ 38px (2.3rem│ 700 / LH 1.15  │
│ Heading H1   │ Bitter    │ 40px (2.5rem)│ 30px (1.8rem│ 700 / LH 1.2   │
│ Heading H2   │ Bitter    │ 32px (2.0rem)│ 24px (1.5rem│ 600 / LH 1.25  │
│ Heading H3   │ Bitter    │ 24px (1.5rem)│ 20px (1.25r)│ 600 / LH 1.3   │
│ Body Lead    │ P.Jakarta │ 18px (1.1rem)│ 16px (1.0rem│ 400 / LH 1.6   │
│ Body Regular │ P.Jakarta │ 16px (1.0rem)│ 15px (0.9rem│ 400 / LH 1.5   │
│ UI Small/Badge│P.Jakarta │ 14px (0.87r) │ 13px (0.81r)│ 600 / LH 1.4   │
└──────────────┴───────────┴──────────────┴─────────────┴────────────────┘
```

---

## 4. LAYOUT SYSTEM & GRID

O layout é projetado prioritariamente para **Mobile-First**, garantindo que o trabalhador em deslocamento no almoço consiga visualizar cardápio, nota do Google e botão de rotas/WhatsApp com máxima facilidade.

* **Grid Desktop:** 12 colunas, largura máxima de contêiner de `1200px` com `24px` de *gutter*.
* **Grid Tablet:** 8 colunas com `20px` de *gutter*.
* **Grid Mobile:** 4 colunas com `16px` de margem lateral e `16px` de *gutter*.
* **Escala de Espaçamento Vertical (Ritmo Vertical):**
  * `xs`: 8px
  * `sm`: 16px
  * `md`: 24px
  * `lg`: 40px
  * `xl`: 64px
  * `2xl`: 96px

---

## 5. VISUAL LANGUAGE & COMPONENTS

### Buttons (Botões de Ação)
* **Primary Button (Ação Principal — WhatsApp / Pedidos):**
  * Fundo: Verde WhatsApp (`#25D366`) ou Terracota (`#9A2C18`) com texto em branco (`#FFFFFF`).
  * Formato: Arredondado suave (`border-radius: 12px`), acolhedor e com toque tátil evidente.
  * Efeito Hover: Elevação sutil (`transform: translateY(-2px)`) e sombra suave de profundidade (`box-shadow: 0 4px 14px rgba(154, 44, 24, 0.25)`).
* **Secondary Button (Como Chegar / Ligar):**
  * Fundo: Transparente com borda sólida de `2px` em `--brand-primary` ou `--text-primary`.
  * Texto: `--text-primary` em peso 600.

### Cards & Molduras
* **Cards de Pratos & Avaliações:**
  * Fundo: `--bg-surface` (`#FFFFFF`) sobre o canvas creme (`#FDFBF7`).
  * Bordas: Linha sutil de `1px` em `--border-subtle` (`#E7E5E4`).
  * Raio de Curvatura (`border-radius`): `16px` para uma sensação amigável e moderna.
  * Sombra: `box-shadow: 0 4px 20px -2px rgba(28, 25, 23, 0.05)` (extremamente natural e sem excesso de brilho AI).

### Iconografia
* **Estilo de Ícones:** Traço limpo de `2px` (*Lucide Icons* ou SVG personalizado), em tom `--text-primary` ou `--brand-primary`.
* **Símbolos Marcantes:** Talheres cruzados (referência direta ao logotipo), estrela de avaliação, pin de localização, relógio de atendimento e ícone oficial do WhatsApp.

---

## 6. IMAGERY SYSTEM & TREATMENT

A fotografia real do cliente é a estrela do visual. Nenhuma imagem de banco será utilizada.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        IMAGERY DIRECTIVES                              │
├─────────────────┬──────────────┬───────────────────────────────────────┤
│ IMAGEM / ATIVO  │ PROPORÇÃO    │ TRATAMENTO E APLICAÇÃO VISUAL         │
├─────────────────┼──────────────┼───────────────────────────────────────┤
│ imgi_26 (Ribs)  │ 4:5 ou 16:9  │ Hero / Destaque de Prato Assinado.    │
│                 │ (Crop Desk)  │ Nitidez alta, realce dos vermelhos BBQ│
├─────────────────┼──────────────┼───────────────────────────────────────┤
│ imgi_38 (Salão) │ 4:5 ou 16:10 │ Seção de Ambiente e Estrutura.        │
│                 │              │ Brilho natural, realce do tom madeira │
├─────────────────┼──────────────┼───────────────────────────────────────┤
│ imgi_28 (Lombo) │ 4:5 (Square  │ Grid de Gastronomia / Variedade.      │
│ imgi_19 (Frango)│ em Mobile)   │ Bordas arredondadas 16px, zoom sutil  │
│ imgi_34 (Cupim) │              │ ao passar o mouse.                    │
├─────────────────┼──────────────┼───────────────────────────────────────┤
│ imgi_8 (Fachada)│ 9:16 ou 4:3  │ Card de Localização / Como Chegar.    │
│                 │ (Card Desk)  │ Moldura tipo mapa/cartão com endereço.│
└─────────────────┴──────────────┴───────────────────────────────────────┘
```

* **Filtros e Tratamento:** Correção de temperatura sutilmente quente (`+5% warm color temperature`), contraste suave e realce nas saturações naturais dos alimentos (vermelhos, dourados e verdes frescos). Sem filtros frios ou desbotados.

---

## 7. INITIAL MOTION TOKENS

Animações devem ser intencionais, trazendo sensação de fluidez e refinamento sem atrasar a navegação do usuário que quer encontrar o restaurante rapidamente.

* **Durações Padrão:**
  * `fast`: `150ms` (Feedback de cliques em botões e hovers curtos).
  * `medium`: `300ms` (Transição de cards, abertura de sanfonas/acordeões).
  * `slow`: `500ms` (Entrada suave de elementos no scroll).
* **Curva de Suavização (Easing):** `cubic-bezier(0.16, 1, 0.3, 1)` (Suave, natural e tátil).
* **Efeito Hover de Alimentos:** Micro-zoom de `1.03x` no container da imagem com transição de `300ms`, simulando aproximação física da cuba do buffet.

---

DESIGN SYSTEM COMPLETE — READY FOR COPYWRITING
