# Plano de Correção: Seção de Mídias após "//SOLUÇÃO"

## Problema Identificado

**Localização:** `src/pages/Supernova.jsx` linhas 146-158 e `src/styles/supernova.css` linhas 188-234

### Layout Atual (INCORRETO)
```
┌─────────────────────────────┐
│   grid1 (imagem grande)     │
│   (column, centralizada)    │
└─────────────────────────────┘
        ↓
┌─────────────────────────────┐
│   grid2 (4 imagens)         │
│   (column, à direita)       │
│   - frame1-1.png            │
│   - frame1-2.png            │
│   - frame1-3.png            │
│   - frame1-4.png            │
└─────────────────────────────┘
```

### Layout Correto do Figma (node 1736-8747)
```
┌──────────────┬──────────────────────────────┐
│              │  ┌────┐ ┌────┐ ┌────┐ ┌────┐ │
│  Imagem      │  │img1│ │img2│ │img3│ │img4│ │
│  grande      │  └────┘ └────┘ └────┘ └────┘ │
│  (675px)     │  (row, gap: 7.62px)          │
│              │                              │
└──────────────┴──────────────────────────────┘
```

**Especificações do Figma:**
- **Frame 19458**: `mode: row`, `alignItems: center`, `gap: 7.6241607666015625px`
- **Imagem esquerda**: Dimensões 278.28px × 500.34px (proporção vertical)
- **Sequência de imagens**: 4 imagens em linha horizontal com gap pequeno

## Correção Necessária

### 1. HTML/JSX (Supernova.jsx linhas 146-158)

**ANTES:**
```jsx
<div className="prints">
  <div className="printsgrid">
    <div className="grid1">
      <img src="/assets/supernova/frame3.png" alt="" draggable="false" />
    </div>
    <div className="grid2">
      <img className="img-mr" src="/assets/supernova/frame1-1.png" alt="" draggable="false" />
      <img src="/assets/supernova/frame1-2.png" alt="" draggable="false" />
      <img className="img-mr" src="/assets/supernova/frame1-3.png" alt="" draggable="false" />
      <img src="/assets/supernova/frame1-4.png" alt="" draggable="false" />
    </div>
  </div>
</div>
```

**DEPOIS:**
```jsx
<div className="prints">
  <div className="printsgrid">
    <div className="grid1">
      <img src="/assets/supernova/frame3.png" alt="" draggable="false" />
    </div>
    <div className="grid2">
      <img src="/assets/supernova/frame1-1.png" alt="" draggable="false" />
      <img src="/assets/supernova/frame1-2.png" alt="" draggable="false" />
      <img src="/assets/supernova/frame1-3.png" alt="" draggable="false" />
      <img src="/assets/supernova/frame1-4.png" alt="" draggable="false" />
    </div>
  </div>
</div>
```

### 2. CSS (supernova.css linhas 188-234)

**ANTES:**
```css
.printsgrid{
    width: 100%;
    max-width: 1400px;
    margin: auto;
    height: auto;
    display: flex;
    flex-direction: column; /* ❌ ERRADO */
}
.printsgrid .grid2{
    display: flex;
    flex-direction: column; /* ❌ ERRADO */
    height: 100%;
    margin: 40px auto 200px;
    align-items: flex-end;
}
.grid1 {
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-bottom: 50px;
}
```

**DEPOIS:**
```css
.printsgrid {
    width: 100%;
    max-width: 1400px;
    margin: auto;
    height: auto;
    display: flex;
    flex-direction: row; /* ✅ ROW para layout horizontal */
    gap: 40px; /* Espaçamento entre grid1 e grid2 */
    align-items: center; /* Centraliza verticalmente */
}

.printsgrid .grid1 {
    display: flex;
    flex-direction: column;
    max-width: 675px; /* ✅ MAX-WIDTH conforme especificado */
    flex-shrink: 0;
}

.printsgrid .grid1 img {
    width: 100%;
    height: auto;
    object-fit: cover;
}

.printsgrid .grid2 {
    display: flex;
    flex-direction: row; /* ✅ ROW para imagens horizontais */
    gap: 8px; /* ✅ ~7.62px do Figma */
    flex: 1;
    overflow-x: auto; /* Se necessário para scroll horizontal */
    align-items: center;
}

.printsgrid .grid2 img {
    height: 500px; /* Altura fixa para manter proporção */
    width: auto;
    object-fit: cover;
}

/* Mobile responsivo */
@media screen and (max-width: 1200px) {
    .printsgrid {
        flex-direction: column; /* Volta para coluna no mobile */
        gap: 20px;
    }

    .printsgrid .grid1 {
        max-width: 100%;
        width: 100%;
    }

    .printsgrid .grid2 {
        flex-direction: row; /* Mantém horizontal no mobile */
        overflow-x: auto;
        width: 100%;
        padding: 0 16px;
    }

    .printsgrid .grid2 img {
        height: 300px; /* Reduz altura no mobile */
    }
}
```

## Mudanças Detalhadas

### CSS - Remover/Substituir:

1. **Linha 188-207 (.printsgrid e filhos):**
   - Mudar `flex-direction: column` → `flex-direction: row`
   - Adicionar `gap: 40px`
   - Adicionar `align-items: center`

2. **Linha 196-202 (.printsgrid .grid2):**
   - Mudar `flex-direction: column` → `flex-direction: row`
   - Adicionar `gap: 8px`
   - Remover `align-items: flex-end`
   - Adicionar `flex: 1`

3. **Linha 203-208 (.grid1):**
   - Adicionar `max-width: 675px`
   - Adicionar `flex-shrink: 0`

4. **Media query (209-234):**
   - Ajustar para manter row horizontal no mobile
   - Permitir scroll horizontal se necessário

### JSX - Remover:

- Remover classe `img-mr` das imagens (linhas 152 e 154)

## Testes Necessários

1. ✅ Desktop (>1200px): Layout horizontal com imagem à esquerda (675px) e sequência à direita
2. ✅ Tablet (768-1200px): Layout deve adaptar mas manter horizontal se possível
3. ✅ Mobile (<768px): Layout vertical ou scroll horizontal
4. ✅ Proporções das imagens mantidas
5. ✅ Gap de ~8px entre imagens da sequência

## Resultado Esperado

Layout horizontal no desktop com:
- Imagem principal à esquerda (max 675px de largura)
- 4 imagens em sequência horizontal à direita com gap de 8px
- Centralização vertical entre os elementos
- Responsivo no mobile
