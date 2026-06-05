# AeroSmart — Landing Page da Plataforma

![AeroSmart](imagens/logo_sem_fundo.png)

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
│   ├── styles.css          # Design system e estilos (vanilla CSS)
│   └── main.js             # Interatividade (vanilla JavaScript)
├── imagens/
│   ├── logo_sem_fundo.png  # Logo profissional
│   ├── inalador_sem_fundo.png  # Mockup do sensor
│   └── logo.jpeg           # Variante alternativa
├── mockups da app/
│   ├── Dashboard Principal.svg
│   ├── Histórico.svg
│   ├── Lembretes.svg
│   ├── Registro Inalação.svg
│   └── ... (outras telas)
├── material/               # Documentação e análises
│   ├── BMC.txt            # Business Model Canvas
│   └── PDFs e worksheets
├── palete_app.txt         # Definição de cores e paleta
├── instrucoes-site.md     # Especificações e contexto do projeto
└── README.md              # Este arquivo
```

---

## 🚀 Funcionalidades Principais

### Hero Section
- Animações com blobs respiratórios (tema on-brand)
- Integração lado a lado do mockup mobile + inalador
- CTA (Call-to-Action) com navegação suave
- Indicador de confiança ("Testado por profissionais de saúde")

### Secções de Conteúdo
1. **Barra de Estatísticas** — Impacto clínico (internamentos evitados, qualidade de vida)
2. **Problema & Solução** — Contraste visual antes/depois
3. **Como Funciona** — 3 passos simples com animações
4. **Benefícios** — 4 pilares value-based (Previsão, Redução de Internamentos, QoL, Simplicidade)
5. **Secção App** — Mockups interativos das telas principais
6. **Testemunho** — Validação por pneumologista (fictício mas realista)
7. **Parcerias B2B** — Modelo SaaS para instituições de saúde
8. **Pricing** — Apresentação simples e transparente
9. **FAQ** — Acordeão interativo com objeções comuns

### Interatividade
- ✅ Menu responsivo com mobile hamburger
- ✅ FAQ acordeão com animações suaves
- ✅ Smooth scroll para âncoras
- ✅ Animações de scroll (IntersectionObserver)
- ✅ Contadores animados na barra de stats
- ✅ CTA fixa no rodapé (mobile)

---

## 🎨 Design System

### Paleta de Cores
- **Primário:** `#004AC6` (Azul — confiança, tecnologia)
- **Destaque:** `#006B5F` (Teal — saúde, respiração)
- **Secundário:** `#1D4ED8` (Azul claro — profundidade)
- **Fundo:** `#F7F9FB` (Cinzento muito claro)
- **Texto:** `#191C1E` (Cinzento escuro)

### Tipografia
- **Headings:** [Outfit](https://fonts.google.com/specimen/Outfit) (400–900)
- **Body:** [DM Sans](https://fonts.google.com/specimen/DM+Sans) (300–600)

### Componentes
- **Botões:** Primário (gradiente), Outline, CTA com ícones
- **Cards:** Sombras coloridas, borders subtis, animações no hover
- **Badges:** Ponto animado, números em gradientes
- **Separadores:** SVG wave animations

---

## 💻 Tecnologias Utilizadas

- **HTML5** — Semântica e acessibilidade
- **CSS3 Vanilla** — Design responsivo, animações, glassmorphism
- **JavaScript Vanilla** — Interatividade sem dependências externas
- **Google Fonts** — Tipografia premium
- **SVG** — Mockups e ícones vetoriais

**Sem frameworks!** Projeto desenvolvido com HTML, CSS e JavaScript puros para máxima performance e controlo total do código.

---

## 📱 Responsividade

O site segue a abordagem **Mobile-First**:
- ✅ Layout fluido até 1440px+
- ✅ Menu hamburger em dispositivos < 768px
- ✅ Ajustes de tamanho de imagens e tipografia
- ✅ Touch-friendly buttons e spacing

Teste no seu telemóvel ou use as DevTools do navegador (F12 → Modo Dispositivo).

---

## ♿ Acessibilidade

- ✅ ARIA labels em elementos interativos
- ✅ Contraste adequado entre cores (WCAG AA)
- ✅ Navegação por teclado suportada
- ✅ Semântica HTML5 apropriada
- ✅ Imagens com alt text descritivo

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
   open site/index.html  # macOS
   start site/index.html # Windows
   xdg-open site/index.html # Linux
   ```

   Ou use um servidor local:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js (se tiver http-server instalado)
   http-server
   ```

   Depois aceda a `http://localhost:8000/site/` no navegador.

### Estrutura de Ficheiros
- O ficheiro principal é `site/index.html`
- Todos os estilos estão em `site/styles.css`
- A interatividade está em `site/main.js`
- Imagens referenciam a pasta `imagens/` (caminhos relativos)

---

## 📚 Contexto Académico

Este projeto foi desenvolvido para a unidade curricular **Formação Empresarial** com o objetivo de validar a viabilidade de um produto de HealthTech através de uma landing page comercial profissional.

### 👥 Autores do Projeto

| Nome | Número de Aluno | Função |
|------|-----------------|--------|
| **Lara Rodrigues** | A107282 | Estratégia & Copywriting |
| **Dinis Rosa** | A107159 | Front-End & UX/UI |
| **Maria Carneiro** | A107242 | Design & Mockups |
| **Sofia Saraiva** | A107249 | Investigação & Validação Clínica |

---

## 📖 Documentação Adicional

- **`instrucoes-site.md`** — Especificações completas, contexto do AeroSmart, guia de design
- **`palete_app.txt`** — Definição de paleta de cores e páginas referenciadas
- **`material/`** — Business Model Canvas (BMC), Value Proposition Canvas, worksheets

---

## 📝 Notas de Desenvolvimento

### Decisões Técnicas

1. **Sem Frameworks** — Opted for vanilla HTML/CSS/JS para demonstrar profundidade técnica e controlo fino.
2. **Mobile-First** — Layout começa no mobile (< 768px) e expande para desktop.
3. **Performance** — Imagens otimizadas (PNGs comprimidos), lazy loading, CSS compiled.
4. **Acessibilidade** — WCAG 2.1 AA como mínimo.
5. **SEO** — Meta tags, OG tags, estrutura semântica.

### Destaques Técnicos

- **IntersectionObserver** para animações eficientes de scroll
- **CSS Custom Properties** para design tokens reutilizáveis
- **SVG Wave** para separadores animados
- **Animações CSS** com `cubic-bezier` smoothing
- **Glassmorphism** subtil para profundidade visual

---

## 🔍 Checklist de Conformidade

- ✅ HTML5 semântico
- ✅ CSS responsivo (Mobile-First)
- ✅ JavaScript sem dependências
- ✅ Acessibilidade WCAG AA
- ✅ Performance otimizada
- ✅ Documentação completa
- ✅ Contexto académico referenciado
- ✅ Imagens optimizadas

---

## 📄 Licença

Este projeto é desenvolvido para fins académicos no contexto da UC Formação Empresarial.  
Não é permitido uso comercial sem autorização dos autores.

---

## 📞 Contacto & Suporte

Para questões sobre o projeto, favor contactar qualquer um dos autores através dos dados constantes na sua instituição académica.

---

**Versão:** 2.0 — Desktop & Mobile Optimized  
**Última Atualização:** Junho 2025  
**Status:** ✅ Pronto para Apresentação Académica