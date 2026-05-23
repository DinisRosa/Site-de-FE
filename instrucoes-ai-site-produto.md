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
- **Subtítulo:** O AeroSmart transforma o inalador atual num dispositivo inteligente. A plataforma baseada em IA prevê exacerbações para uma intervenção precoce.
- **Visual:** Integração do mockup do *Dashboard Principal da App*.
- **CTA principal:** "Pré-encomendar Agora".

### 3. Secção “Problema e Solução”
- Contraste visual claro entre o método atual (falha de memória, internamentos) e o AeroSmart (previsão, relatórios, tranquilidade).

### 4. Benefícios principais (UX Copywriting)
- Foco em **Gains** e **Pain Relievers**:
  1. *Antecipação por IA* (prever em vez de reagir).
  2. *Decisão Clínica Baseada em Dados* (os médicos deixam de atuar às cegas).
  3. *Sem Mudança de Rotinas* (sensor acoplável no inalador antigo).
  4. *Qualidade de Vida e Segurança*.

### 5. A App em Destaque (Integração de SVGs)
- Uso da pasta `mockups da app/` para mostrar ecrãs fundamentais:
  - `Histórico.svg`
  - `Registro Inalação.svg`
  - `Lembretes.svg`
- Breves descrições sobre a facilidade de utilização.

### 6. Prova de Confiança (Enquadramento SaMD)
- Menções explícitas a **Conformidade com RGPD** e **Software as a Medical Device (SaMD)**.
- Testemunho fictício, mas realista, de um Pneumologista a elogiar a previsibilidade da IA.

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
- **Tipografia:** Google Fonts (Inter).
- **Estética:** "Clean medical", com glassmorphism suave, muito espaço em branco, layout focado em dispositivos móveis (mobile-first) e contrastes perfeitos de acessibilidade.

> **Regra Final:** O AeroSmart não é apenas um site bonito. É uma narrativa de produto coesa e preparada para receber avaliação máxima numa cadeira universitária.
