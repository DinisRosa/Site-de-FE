# AeroSmart — Landing Page da Plataforma

![AeroSmart](imagens/logo_sem_fundo.png)

## 👥 Autores

| Nome | Número de Aluno | Função |
|------|-----------------|--------|
| **Lara Rodrigues** | A107282 | Estratégia & Copywriting |
| **Dinis Rosa** | A107159 | Front-End & UX/UI |
| **Maria Carneiro** | A107242 | Design & Mockups |
| **Sofia Saraiva** | A107249 | Investigação & Validação Clínica |

**Unidade Curricular:** Formação Empresarial — Universidade de Aveiro  
**Ano Letivo:** 2025/2026

---

## 📋 Sobre o Projeto

**AeroSmart** é uma plataforma digital inovadora baseada em Inteligência Artificial para previsão de exacerbações respiratórias. Integra-se com sensores acopláveis a inaladores convencionais, permitindo o monitoramento em tempo real da utilização de medicação e a previsão de crises antes que estas ocorram.

Esta landing page foi desenvolvida como projeto de conclusão da unidade curricular **Formação Empresarial**, apresentando uma solução completa de marketing digital, UX/UI e desenvolvimento front-end para um produto de HealthTech.

### 🎯 Objetivo

Demonstrar a viabilidade comercial e técnica do AeroSmart através de:
- ✨ Design moderno e acessível (Mobile-First)
- 📊 Narrativa de produto focada em valor e confiança
- 🤖 Integração visual da plataforma mobile
- 💡 Argumentação clínica credível e orientada ao paciente
- ♿ Conformidade com standards de acessibilidade

---

## 📁 Estrutura do Projeto

```
Site-de-FE/
├── site/
│   ├── index.html          # Página principal (SPA - Single Page Application)
│   ├── styles.css          # Design system e estilos (vanilla CSS, ~1876 linhas)
│   └── main.js             # Interatividade (vanilla JavaScript)
├── imagens/
│   ├── logo_sem_fundo.png  # Logo profissional (usado no header)
│   ├── logo.jpeg           # Variante alternativa do logo
│   ├── inalador.png        # Foto do inalador (fundo)
│   └── inalador_sem_fundo.png  # Inalador recortado (usado no site)
├── mockups da app/         # Ecrãs SVG da aplicação mobile
│   ├── Dashboard Principal.svg
│   ├── Histórico.svg
│   ├── Lembretes.svg
│   ├── Registro Inalação.svg
│   ├── Dados do Inalador.svg
│   ├── Definições.svg
│   ├── Editar Perfil.svg
│   ├── Login.svg
│   ├── Perfil.svg
│   └── Tutorial.svg
├── Relatório.pdf           # Relatório académico do projeto
├── .gitignore
└── README.md               # Este arquivo
```

---

## 🚀 Funcionalidades Principais

### Hero Section
- Animações com blobs respiratórios (tema on-brand)
- Integração lado a lado do mockup mobile + inalador
- CTA (Call-to-Action) com navegação suave
- Indicador de confiança ("Testado por profissionais de saúde")

### Secções de Conteúdo
1. **Barra de Estatísticas** — Impacto clínico (74% crises evitáveis, 2.5M+ doentes, 3x menos urgências, 9,99€/mês)
2. **Problema & Solução** — Contraste visual antes/depois com grid dividido
3. **Como Funciona** — 3 passos simples com animações (Acoplar → Registar → Usar)
4. **Benefícios** — 4 pilares value-based (Previsão IA, Redução Internamentos, QoL, Simplicidade)
5. **Secção App** — Mockups interativos de 3 ecrãs (Histórico, Registo Inalação, Lembretes)
6. **Parcerias B2B** — Modelo SaaS para hospitais, clínicas e seguradoras
7. **Testemunho** — Validação por pneumologista (fictício mas realista) + trust badges RGPD/SaMD/BLE
8. **Pricing** — 3 planos: Sensor 49,99€ (único) · App 9,99€/mês (destaque) · Clinical 19,99€/mês/paciente
9. **FAQ** — Acordeão interativo com 5 perguntas frequentes

### Interatividade (`main.js`)
- ✅ Menu responsivo com mobile hamburger (fechar ao clicar fora)
- ✅ FAQ acordeão com animações suaves (1 item aberto de cada vez)
- ✅ Smooth scroll para âncoras (offset 85px para header fixo)
- ✅ Header com sombra dinâmica ao fazer scroll
- ✅ Animações de scroll (IntersectionObserver com delays escalonados)
- ✅ Contadores animados na barra de stats (countUp)
- ✅ CTA fixa no rodapé em mobile (oculta quando pricing está visível)

---

## 🎨 Design System

### Paleta de Cores
- **Primário:** `#004AC6` (Azul — confiança, tecnologia)
- **Destaque:** `#006B5F` (Teal — saúde, respiração)
- **Secundário:** `#1D4ED8` (Azul claro — profundidade)
- **Fundo:** `#F7F9FB` (Cinzento muito claro)
- **Texto:** `#191C1E` (Cinzento escuro)
- **Footer/App:** `#0F1318` (Preto escuro)

### Tipografia
- **Headings:** [Outfit](https://fonts.google.com/specimen/Outfit) (400–900)
- **Body:** [DM Sans](https://fonts.google.com/specimen/DM+Sans) (300–600)

### Animações
- `breathe` — blobs do hero (metáfora respiratória)
- `float` — inalador e badges flutuantes
- `pulse` — dot animado no hero tag
- `fadeUp` / `fadeLeft` — entradas de secções

### Componentes
- **Botões:** Primário (gradiente azul), Outline, White, com ícone animado
- **Cards:** Benefit cards com barra colorida no hover, Pricing cards com badge "Mais Popular"
- **Badges:** Teal, Light, Light-outline, Trust badges
- **Phone frames:** Glassmorphism com hover lift; frame central elevado
- **Split grid:** Problema vs Solução com conector visual central

---

## 💻 Tecnologias Utilizadas

- **HTML5** — Semântica e acessibilidade (643 linhas)
- **CSS3 Vanilla** — Design responsivo, animações, glassmorphism (1876 linhas)
- **JavaScript Vanilla** — Interatividade sem dependências externas (217 linhas)
- **Google Fonts** — Outfit + DM Sans
- **SVG** — Mockups da app e ícones inline

**Sem frameworks!** Projeto desenvolvido com HTML, CSS e JavaScript puros para máxima performance e controlo total do código.

---

## 📱 Responsividade

O site segue a abordagem **Mobile-First** com 3 breakpoints:

| Breakpoint | Comportamento principal |
|------------|------------------------|
| `≤ 1024px` | Hero em coluna única, split-grid vertical, stat-dividers ocultos |
| `≤ 768px`  | Menu hamburger ativo, sticky CTA visível, features-grid em 1 coluna |
| `≤ 480px`  | Hero actions em coluna, floating badges ocultos, inalador redimensionado |

---

## ♿ Acessibilidade

- ✅ ARIA labels em elementos interativos (`aria-expanded`, `aria-label`)
- ✅ Contraste adequado entre cores (WCAG AA)
- ✅ Navegação por teclado suportada
- ✅ Semântica HTML5 apropriada (`header`, `nav`, `section`, `footer`)
- ✅ Imagens com `alt` text descritivo
- ✅ `aria-hidden="true"` em elementos decorativos

---

## 🔧 Como Usar

### Abrir Localmente

1. Clone ou descarregue este repositório:
   ```bash
   git clone https://github.com/DinisRosa/Site-de-FE.git
   cd Site-de-FE
   ```

2. Abra `site/index.html` diretamente no navegador:
   ```bash
   xdg-open site/index.html # Linux
   open site/index.html     # macOS
   start site/index.html    # Windows
   ```

   Ou use um servidor local (recomendado para evitar problemas com paths relativos):
   ```bash
   # Python 3
   python -m http.server 8000
   # Depois acede a http://localhost:8000/site/
   ```

### Estrutura de Ficheiros
- O ficheiro principal é `site/index.html`
- Todos os estilos estão em `site/styles.css`
- A interatividade está em `site/main.js`
- Imagens referenciam `../imagens/` e `../mockups da app/` (caminhos relativos)

---

## 📚 Contexto Académico

Este projeto foi desenvolvido para a unidade curricular **Formação Empresarial** com o objetivo de validar a viabilidade de um produto de HealthTech através de uma landing page comercial profissional.

---

## 📝 Notas de Desenvolvimento

### Decisões Técnicas

1. **Sem Frameworks** — Vanilla HTML/CSS/JS para demonstrar profundidade técnica e controlo fino.
2. **Mobile-First** — Layout começa no mobile (< 768px) e expande para desktop.
3. **Performance** — Imagens otimizadas (PNGs comprimidos), `loading="lazy"` nos SVGs, `passive: true` nos scroll listeners.
4. **Acessibilidade** — WCAG 2.1 AA como mínimo.
5. **SEO** — Meta tags, estrutura semântica, `lang="pt"`.

### Destaques Técnicos

- **IntersectionObserver** para animações eficientes de scroll (sem scroll listeners pesados)
- **CSS Custom Properties** para design tokens reutilizáveis (cores, sombras, radii, transições)
- **SVG Wave** para separador entre hero e stats bar
- **Animações CSS** com `cubic-bezier` smoothing
- **Glassmorphism** com `backdrop-filter: blur()` no header e B2B card

---

## 🔍 Checklist de Conformidade

- ✅ HTML5 semântico
- ✅ CSS responsivo (Mobile-First, 3 breakpoints)
- ✅ JavaScript sem dependências
- ✅ Acessibilidade WCAG AA
- ✅ Performance otimizada (lazy loading, passive listeners)
- ✅ Documentação completa
- ✅ Contexto académico referenciado
- ✅ Imagens optimizadas

---

## 📄 Licença

Este projeto é desenvolvido para fins académicos no contexto da UC Formação Empresarial.  
Não é permitido uso comercial sem autorização dos autores.

---

**Versão:** 2.0 — Desktop & Mobile Optimized  
**Última Atualização:** Junho 2026  
**Status:** ✅ Pronto para Apresentação Académica