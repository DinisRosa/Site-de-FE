# Instruções e Contexto do Projeto: Landing Page AeroSmart

## Objetivo do documento
Este documento define, de forma meticulosa, tudo o que deve ser feito para conceber, estruturar, escrever e montar o website académico do **AeroSmart** (no contexto da cadeira de Formação Empresarial).

O resultado final tem um aspeto profissional, credível, funcional e convincente. O foco do site é demonstrar:
- entendimento de marketing e uma proposta de valor fortíssima (Software as a Medical Device com IA);
- capacidade de organizar informação técnica e de saúde de forma simples;
- noções de UX/UI e conversão utilizando uma paleta de cores própria;
- coerência visual através da integração de mockups reais da app;
- adequação ao contexto académico (referenciando os autores).

## Missão no Desenvolvimento
O projeto exige atuar como uma combinação de:
- estratega de produto focado em HealthTech;
- copywriter de marketing virado para a dor do paciente (prevenção vs reação);
- designer UX/UI integrando os mockups em SVG;
- arquiteto de informação estruturando uma Single Page Application;
- developer Front-End (HTML5, CSS Vanilla, JavaScript puro).

## Restrições e Regras
1. O site é para uma **cadeira da universidade**, equilibrando criatividade comercial com rigor clínico e profissionalismo.
2. O produto vendido é o **AeroSmart** (Plataforma Digital de IA + Sensor Acoplável).
3. O conteúdo é realista e convincente, usando argumentos clínicos plausíveis (Previsão de crises, conformidade RGPD).
4. O desenvolvimento técnico utiliza **apenas HTML, CSS e JavaScript Vanilla** (sem frameworks externas) centrados num `index.html`.
5. O design é "Mobile First" e deve aproveitar ao máximo o ficheiro `palete_app.txt` para ditar a identidade visual (Cores: Azul #004AC6, Teal #006B5F, etc).

---

## O Contexto do AeroSmart (Informação Consolidada)
Toda a informação essencial sobre o produto já foi recolhida e definida, não sendo necessárias mais inferências ou perguntas em aberto.

### 1. Identidade do produto
- **Nome:** AeroSmart.
- **O que é:** Plataforma digital suportada por Inteligência Artificial e integrada com sensores acopláveis aos inaladores que os pacientes já têm em casa.
- **Problema:** Asma e DPOC causam internamentos evitáveis porque o modelo de tratamento é reativo. Os médicos não têm dados reais entre consultas e os doentes esquecem-se de usar ou usam mal o inalador.
- **Solução:** O AeroSmart monitoriza a utilização e, através da IA, **prevê exacerbações antes que aconteçam**, enviando alertas e relatórios quer para o paciente quer para o médico.
- **Promessa:** "Prever a crise respiratória antes que ela aconteça."

### 2. Público-alvo
- **Quem usa:** Doentes com problemas respiratórios crónicos (Asma, DPOC).
- **Quem prescreve/acompanha:** Pneumologistas e profissionais de saúde.
- **Dores:** Medo da falta de ar súbita, idas constantes às urgências, ansiedade por não controlar a doença, falta de dados para os médicos tomarem decisões.

### 3. Modelo de venda
- Kit AeroSmart Base (Sensor Hardware) por um valor de compra único (ex: 49,99€).
- A aplicação móvel (com IA) incluída gratuitamente e sem subscrições mensais.
- Oferta direcionada ao consumidor final, mas com elevado apelo aos médicos.

---

## Estrutura Obrigatória da Landing Page
O site é uma **landing page comercial de uma página**, desenhada para converter. 

### 1. Cabeçalho
- Logótipo limpo do AeroSmart.
- Menu de navegação (âncoras para as secções: Como Funciona, Benefícios, App, Preços, FAQ).
- Botão de destaque: "Pré-encomendar".

### 2. Hero Section
- **Título forte:** Prever a crise respiratória antes que ela aconteça.
- **Subtítulo:** Os primeiros sensores acopláveis que transformam qualquer inalador num dispositivo inteligente. A nossa plataforma baseada em IA prevê exacerbações para uma intervenção precoce e uma vida com mais qualidade.
- **Visual:** Integração do mockup do *Dashboard Principal da App* lado a lado com a imagem em destaque do inalador real (`inalador_sem_fundo.png`).
- **CTA principal:** "Pré-encomendar Agora".

### 3. Secção “Problema e Solução”
- Contraste visual claro entre o método atual (falha de memória, internamentos) e o AeroSmart (previsão, relatórios, tranquilidade).

### 3.5. Secção "Como Funciona"
- Apresentar o fluxo de utilização do produto com a imagem `inalador_sem_fundo.png`:
  1. Acoplar Sensor (baixa barreira de entrada).
  2. Registar na App (ligação cloud segura).
  3. Usar como sempre (receber alertas preventivos).

### 4. Benefícios principais (UX Copywriting baseado no BMC)
- Foco nas **Value Propositions**:
  1. *Previsão por IA* (análise de padrões para prever episódios graves).
  2. *Redução de Internamentos* (drástica diminuição de custos hospitalares nas urgências).
  3. *Qualidade de Vida* (aumento consistente da adesão terapêutica).
  4. *Baixa Barreira de Uso* (integração natural com os inaladores atuais).

### 5. A App em Destaque (Integração de SVGs)
- Uso da pasta `mockups da app/` para mostrar ecrãs fundamentais:
  - `Histórico.svg`
  - `Registro Inalação.svg`
  - `Lembretes.svg`
- Breves descrições sobre a facilidade de utilização.

### 6. Prova de Confiança (Enquadramento SaMD)
- Menções explícitas a **Conformidade com RGPD** e **Software as a Medical Device (SaMD)**.
- Testemunho fictício, mas realista, de um Pneumologista a elogiar a previsibilidade da IA.

### 6.5. Parcerias B2B (Secção Empresas)
- Secção direcionada a **Hospitais, Clínicas e Seguradoras de Saúde**.
- Enfoque no modelo de negócio SaaS focado na prevenção e na redução de risco/custo clínico.
- Botão CTA dedicado: "Saber mais sobre Parcerias".

### 7. Preço e Oferta
- Card de preço simples e "clean". Destaque para não haver mensalidade na app.

### 8. FAQ
- Acordeão interativo (JavaScript) para resolver objeções (ex: "Funciona com o meu inalador atual?", "A app tem custos?").

### 9. Rodapé e Nota Académica
- Links úteis e contexto do projeto desenvolvido para fins curriculares de Formação Empresarial.
- **Membros do Grupo:** Lara Rodrigues (A107282), Dinis Rosa (A107159), Maria Carneiro (A107242), Sofia Saraiva (A107249).

---

## Estratégia Visual (Definida pela palete_app.txt)
- **Cores base:** Uso extensivo dos azuis (#004AC6, #1D4ED8) para confiança tecnológica e médicos, e dos tons teal (#006B5F) para representar respiração/saúde e sucesso.
- **Tipografia:** Google Fonts — **Outfit** (headings, display) + **DM Sans** (body text). *(Alterado de Inter para tipografia mais distintiva e premium.)*
- **Estética:** "Clean medical premium", com glassmorphism suave, muito espaço em branco, layout focado em dispositivos móveis (mobile-first) e contrastes perfeitos de acessibilidade.

> **Regra Final:** O AeroSmart não é apenas um site bonito. É uma narrativa de produto coesa e preparada para receber avaliação máxima numa cadeira universitária.

---

## Changelog de Melhorias Aplicadas

### v2.0 — Revisão Visual e Técnica

**Tipografia**
- Substituído `Inter` por `Outfit` (headings) + `DM Sans` (body) — mais distintos e premium para HealthTech.

**Identidade Visual / Logo**
- O logo foi atualizado e agora utiliza a imagem `logo_sem_fundo.png` de forma limpa, com a classe `.logo-img` reintroduzida no CSS para assegurar a melhor compatibilidade sem fundos indesejados no cabeçalho.

**Hero Section**
- Adicionados **3 blobs animados** com animação `breathe` (escala + opacidade), metáfora on-brand para produto respiratório.
- `hero-tag` melhorado com ponto de pulso animado (dot verde teal).
- Gradiente de texto `text-gradient` aplicado à frase chave do h1.
- Botão CTA com ícone de seta e animação no hover.
- Mockup container com efeito "notch" decorativo para simular ecrã de smartphone.
- **Separador ondulado** (SVG wave) na base do hero — transição suave para a stats bar.
- **Inalador em Destaque:** O tamanho da imagem `inalador_sem_fundo.png` foi substancialmente aumentado (320px em desktop, 220px em mobile) para o assumir como um dos elementos principais da secção.

**Barra de Estatísticas**
- Adicionados **ícones SVG** acima de cada número.
- Padrão de pontos subtil no fundo (background-image com SVG inline).
- Gradiente no fundo em vez de cor sólida.

**Problema & Solução**
- Adicionado **conector visual** (linha + ícone circular gradiente) entre os dois cards — melhora a narrativa Antes → Depois.
- Cards com ícone SVG no cabeçalho em vez de emoji.
- Card da solução com gradiente subtil (azul → teal).

**Como Funciona**
- Números dos passos em **círculos com gradiente** (em vez de texto simples).
- Adicionadas **linhas de conexão** entre os 3 passos verticais.
- Efeito de brilho (glow) sob a imagem do inalador.
- Fundo com padrão de pontos subtil.

**Benefícios**
- Cards com **barra lateral colorida** que anima no hover (cor diferente por card).
- Icon boxes com gradientes específicos por categoria (azul, teal, rosa, âmbar).
- Ícones SVG personalizados em vez de emojis.
- Fundo com padrão de pontos.

**Secção App**
- Fundo escuro (#0F1318) com **gradientes radiais** (azul + teal) para profundidade.
- Cards de mockup como "phone frames" com border radius e efeitos glass.
- Mockup central elevado (`translateY(-20px)`) com destaque especial.

**Parcerias B2B**
- Adicionados **3 highlights** com ícones de check (Dashboard, Relatórios, Integração HIS/EMR).
- Padrão de pontos no fundo da secção.
- Badge de borda em vez de fundo sólido.

**Testemunho**
- Adicionada **barra de gradiente** no topo do card (4px, azul→teal).
- Aspas decorativas reestilizadas.
- Avatar com gradiente.

**Preços**
- Badge de preço com gradiente em vez de cor sólida.
- Barra de gradiente no topo do card.
- Sombra colorida (shadow-blue) para destaque.

**FAQ**
- Ícone substituído por **seta SVG** com rotação suave (180°) no abrir/fechar.
- Hover state no fundo da pergunta.

**Footer**
- Fundo mais escuro (#0F1318) e consistente com a secção App.
- Adicionada coluna "Suporte" com links adicionais.
- Logo SVG reutilizado com gradiente diferente.

**CSS Geral**
- Sistema de sombras melhorado com variantes coloridas (`--shadow-blue`, `--shadow-teal`).
- Variáveis CSS novas para `--rose`, `--rose-bg`, `--amber`, `--amber-bg`.
- Transições com `cubic-bezier` para mais naturalidade.
- Botão primário com gradiente e sombra colorida.
- Animação `breathe` adicionada (on-brand para respiração).