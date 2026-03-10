# ⚡ GearMind | Plataforma Oficial

> **O cérebro que a sua garagem precisava.** > Landing page oficial do ecossistema GearMind, desenvolvida para apresentar nossa IA de manutenção preditiva para motocicletas e captar *early adopters*.

---

## 🎯 Sobre o Projeto
A plataforma oficial do **GearMind** atua como o ponto central para a demonstração da nossa IA de manutenção preditiva. O site utiliza um design **Dark/Brutalista** de alto impacto para detalhar como nossos modelos de Machine Learning (como XGBoost e Random Forest) preveem falhas e otimizam a vida útil do motor. 

Focado em conversão, o portal conta com um funil inteligente que captura e-mails diretamente pelo **Formspree**. O sistema possui validação robusta de domínios para garantir uma base de dados limpa e qualificada de futuros usuários. É a ponte tecnológica entre a nossa engenharia de dados e os pilotos que buscam máxima segurança e economia.

---

## 🚀 Principais Funcionalidades (Features)
- **UI/UX Agressiva e Moderna:** Interface Dark Mode com glassmorphism e acentos em Neon Orange (`#f97316`).
- **Single Source of Truth (Formulário):** Input de e-mail no `Hero` que sincroniza automaticamente com o componente de fechamento (`DownloadCTA`) via manipulação de DOM e scroll suave.
- **Validação de Leads Restrita:** Sistema de *White List* implementado via Regex no React, aceitando apenas e-mails de provedores confiáveis (Gmail, Outlook, iCloud, etc.) para evitar spam.
- **Integração Serverless:** Captura de e-mails em tempo real integrada ao **Formspree**, eliminando a necessidade de um banco de dados complexo no frontend.

---

## 🛠️ Stack Tecnológica
- **Front-end:** React.js
- **Estilização:** Tailwind CSS (Utilitários, gradientes e animações customizadas)
- **Gerenciamento de Formulários:** `@formspree/react`
- **Ícones e Assets:** SVGs inline otimizados
- **Deploy/Hospedagem:** (A definir - Vercel/Netlify)

---

## ⚙️ Estrutura do Site (Landmarks)
O fluxo da página (Single Page Application) foi construído para maximizar o entendimento do problema e a conversão final:
1. `Navbar` - Navegação fixa.
2. `Hero` - Apresentação de impacto com gatilho de captura.
3. `Problema` - A dor do motociclista (manuais desatualizados).
4. `Solução` - Como a IA do GearMind resolve.
5. `Funcionamento` - Deep dive técnico (Telemetria, ML, Alertas).
6. `Comparacao` - Manutenção Tradicional vs. GearMind.
7. `Download / CTA` - O fechamento do funil (Inscrição na lista VIP).
8. `FAQ` - Dúvidas frequentes.
9. `Footer` - Rodapé e links institucionais.

---

## 💻 Como rodar o projeto localmente

1. Clone este repositório:
```bash
git clone [https://github.com/SEU-USUARIO/gearmind-website.git](https://github.com/SEU-USUARIO/gearmind-website.git)
