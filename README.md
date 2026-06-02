# 🛡️ Ransomware Intelligence

> Plataforma de pesquisa e análise de famílias de ransomware — 53 grupos documentados de 1989 a 2026.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=flat&logo=chartdotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
<<<<<<< HEAD
![Páginas](https://img.shields.io/badge/Páginas-10-0ea5e9?style=flat)
=======
>>>>>>> 0e17ba388619ef1ea033bb119a09b52c7f0389bb
![License MIT](https://img.shields.io/badge/License-MIT-blue?style=flat)

---

## 📌 Sobre o Projeto

O **Ransomware Intelligence** é um projeto de pesquisa em cibersegurança com foco na análise histórica e técnica de famílias de ransomware. Ele consolida dados de fontes como **NVD/NIST**, **CISA KEV**, **MITRE ATT&CK**, **Chainalysis**, **Group-IB**, **Coveware** e **FBI IC3** em uma interface visual interativa.

O objetivo é oferecer uma visão estruturada sobre:
- Evolução histórica das famílias (1989–2026)
- Técnicas, vetores e vulnerabilidades exploradas
- Impacto financeiro estimado e vítimas
- Criptografia utilizada e resistência pós-quântica
- Países de origem, alvos e setores mais afetados

> ⚠️ **Aviso:** Este projeto tem fins **exclusivamente educacionais e de pesquisa**. Nenhum código malicioso está presente.

---

## 🗂️ Estrutura do Projeto

```
ransomware-Intelligence/
│
├── index.html           # Página inicial / hub de navegação
├── dashboard.html       # Dashboard geral com KPIs e gráficos
├── grupos.html          # Análise por eras históricas e linha do tempo
├── comparar.html        # Tabela comparativa ordenável e filtrável
├── criptografias.html   # Algoritmos de criptografia e evolução
├── linguagens.html      # Linguagens de programação e bibliotecas
├── cve.html             # CVEs e vulnerabilidades mais exploradas
├── org.html             # Alvos: países, setores e organizações
├── anatomia.html        # Anatomia técnica de um ransomware
<<<<<<< HEAD
├── timeline.html        # Linha do tempo interativa (1989–2026)
=======
>>>>>>> 0e17ba388619ef1ea033bb119a09b52c7f0389bb
│
├── data.json            # Base de dados principal (53 famílias)
└── utils.js             # Funções utilitárias compartilhadas
```

---

## 📊 Páginas & Funcionalidades

### 🏠 Início (`index.html`)
Hub de navegação com estatísticas gerais do projeto e acesso rápido a todas as seções.

### 📊 Dashboard (`dashboard.html`)
- **9 KPI cards** — famílias, grupos ativos, arrecadação total, vítimas, RaaS, dupla extorsão, maior resgate, sanções OFAC, decryptors
- Gráficos de evolução por ano, linguagens, top 12 por receita, status atual, vetores, setores, modos de operação e arrecadação por era
- Feed ao vivo dos grupos ativos em 2026

### 👥 Grupos & Eras (`grupos.html`)
- Cards por era histórica (5 eras: 1989–2026)
- Gráfico Gantt de vida útil por família
- Evolução de famílias ativas por ano
- Vítimas e afiliados por era
- Tabela comparativa detalhada por era

### 📋 Comparar (`comparar.html`)
- Tabela com **13 colunas** e **53 famílias**
- Ordenação clicável por qualquer coluna
- 5 filtros simultâneos: busca textual, status, modo, dupla extorsão, período
- Painel de detalhes ao clicar em qualquer linha (ataques notórios, notas técnicas, etc.)
- Barras de arrecadação relativa inline

### 🔐 Criptografias (`criptografias.html`)
- Distribuição de algoritmos (AES, RSA, ChaCha20, Kyber…)
- Gráfico de complexidade e segurança (escala 0–5)
- Evolução de uso acumulado por algoritmo (2000–2026)
- Linha do tempo de criação dos algoritmos (scatter)
- Tabela de referência com resistência pós-quântica

### ⌨️ Linguagens (`linguagens.html`)
- Cards por linguagem com contagem e barra proporcional
- Pizza de distribuição + evolução temporal acumulada
- Bibliotecas criptográficas mais utilizadas
- Distribuição por era histórica (stacked bar)
- Famílias agrupadas por linguagem principal

### 🛡️ CVEs (`cve.html`)
- 18 CVEs e técnicas documentadas com CVSS, plataforma, famílias associadas e descrição técnica
- Gráfico de taxa de uso (% de famílias que exploram cada falha)
- Filtro por severidade e busca textual
- Cards com barras de uso coloridas por score
- Links diretos para NVD/NIST

### 🏢 Alvos (`org.html`)
- Países de origem (pie) e países mais atacados (barra)
- Setores extraídos dinamicamente do `data.json`
- Tipos de organização alvo
- Evolução do impacto por ano (1=Baixo → 5=Catastrófico)
- Arrecadação por país de origem
- Cards de detalhamento de famílias por setor

### 🧬 Anatomia (`anatomia.html`)
- Visão técnica das **8 fases** de operação de um ransomware moderno
- TTPs do MITRE ATT&CK mapeados por fase
- Gráfico de criticidade das fases
- Tabela de tipos por comportamento (Crypto, RaaS, Wiper, Industrial…)
- Cards de **10 técnicas avançadas** (LotL, Fileless, PQ Crypto, AI Phishing…)

<<<<<<< HEAD
### 📅 Timeline (`timeline.html`)
- **30 eventos históricos** documentados de 1989 a 2026 com fontes reais
- Timeline vertical alternada (esquerda/direita) com spine central animado
- Clique em qualquer card ou ponto → **painel lateral deslizante** com detalhe completo, tags, impacto e link para fonte
- **Filtro por era** com 5 botões coloridos (Pioneira · Crypto+BTC · Worm · RaaS · Moderno/PQ)
- **Busca em tempo real** por título, descrição e tags
- Pontos com animação de pulso nos eventos marcantes (★)
- Responsivo: colapsa para coluna única em mobile
- Cobre marcos como: AIDS Trojan (1989), WannaCry, NotPetya, Colonial Pipeline, MOVEit, Operação Cronos e criptografia pós-quântica (2026)

=======
>>>>>>> 0e17ba388619ef1ea033bb119a09b52c7f0389bb
---

## 🗃️ Estrutura do `data.json`

Cada família contém os seguintes campos:

| Campo | Tipo | Descrição |
|---|---|---|
| `name` | string | Nome da família |
| `year` | number | Ano de surgimento |
| `lang` | string | Linguagem(s) de programação |
| `crypto` | string | Algoritmos de criptografia usados |
| `coin` | string | Criptomoeda de pagamento |
| `revenueM` | number | Arrecadação estimada (US$ M) |
| `ransom_avg_k` | number | Pedido médio de resgate (US$ k) |
| `estimated_victims` | number | Vítimas estimadas |
| `peak_year` | number | Ano de maior atividade |
| `mode` | string | Modo de operação (RaaS, Big Game, Worm…) |
| `status` | string | Status atual (Ativo, Desmantelado…) |
| `vectors` | array | Vetores de entrada usados |
| `targets` | string | Tipo de alvo geral |
| `sectors` | array | Setores da indústria atacados |
| `impact` | string | Classificação de impacto |
| `vulnerability` | string | Vulnerabilidade principal explorada |
| `country` | string | País de origem (atribuição) |
| `ttps` | array | Técnicas MITRE ATT&CK |
| `decryptor_available` | boolean | Existe decryptor público |
| `sanctions` | boolean | Sancionado pelo OFAC/Tesouro EUA |
| `affiliate_count` | number | Afiliados estimados (RaaS) |
| `notable_attacks` | array | Ataques históricos notórios |
| `double_extortion` | boolean | Pratica dupla extorsão |
| `leak_site` | boolean | Possui site de vazamento |
| `notes` | string | Notas técnicas e contexto histórico |

---

## 🚀 Como Usar

O projeto é **100% estático** — sem dependências de servidor ou build.

**Opção 1 — VS Code Live Server**
```
Instale a extensão Live Server → clique com botão direito em index.html → Open with Live Server
```

**Opção 2 — Python (built-in)**
```bash
# Python 3
python -m http.server 8080

# Acesse: http://localhost:8080
```

**Opção 3 — Node.js**
```bash
npx serve .
```

> ⚠️ Não abra os arquivos diretamente como `file://` — o `fetch('data.json')` exige um servidor HTTP local.

---

## 📦 Dependências (CDN — sem instalação)

| Biblioteca | Versão | Uso |
|---|---|---|
| [Tailwind CSS](https://tailwindcss.com) | 3.x | Estilização utilitária |
| [Chart.js](https://www.chartjs.org) | 4.4.1 | Todos os gráficos |
| [Font Awesome](https://fontawesome.com) | 6.6.0 | Ícones |
| [Google Fonts](https://fonts.google.com) | — | Syne + JetBrains Mono |

Nenhum `npm install` necessário.

---

<<<<<<< HEAD
## 🎨 Como Trocar a Fonte

As fontes são carregadas via Google Fonts e aplicadas por CSS variables. Para trocar:

**1. Escolha a nova fonte em** [fonts.google.com](https://fonts.google.com)

**2. Substitua o `<link>` no `<head>` de cada HTML:**
```html
<!-- Antes -->
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Syne:wght@400;700;800&display=swap" rel="stylesheet">

<!-- Depois (exemplo com Space Grotesk + Fira Code) -->
<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&family=Space+Grotesk:wght@400;700;800&display=swap" rel="stylesheet">
```

**3. Atualize as referências no CSS de cada arquivo:**
```css
body  { font-family: 'Space Grotesk', sans-serif; }  /* antes: 'Syne' */
.mono { font-family: 'Fira Code', monospace; }        /* antes: 'JetBrains Mono' */
```

**Dica — troca global com VS Code (`Ctrl+H` → substituir em todos os arquivos):**

| Substituir | Por |
|---|---|
| `'Syne'` | `'Space Grotesk'` |
| `'JetBrains Mono'` | `'Fira Code'` |

**Combinações recomendadas para o estilo dark/tech do projeto:**

| Display (corpo) | Mono (dados) | Estilo |
|---|---|---|
| **Syne** *(atual)* | **JetBrains Mono** | Industrial / cyberpunk |
| **Space Grotesk** | **Fira Code** | Moderno / limpo |
| **DM Sans** | **IBM Plex Mono** | Corporativo / sóbrio |
| **Outfit** | **Source Code Pro** | Técnico / neutro |
| **Orbitron** | **Share Tech Mono** | Sci-fi / futurista |

---

=======
>>>>>>> 0e17ba388619ef1ea033bb119a09b52c7f0389bb
## 📚 Fontes & Referências

- [NVD — National Vulnerability Database (NIST)](https://nvd.nist.gov)
- [CISA Known Exploited Vulnerabilities](https://www.cisa.gov/known-exploited-vulnerabilities-catalog)
- [MITRE ATT&CK](https://attack.mitre.org)
- [Chainalysis Crypto Crime Report](https://www.chainalysis.com/blog/crypto-crime-report/)
- [Group-IB Threat Intelligence](https://www.group-ib.com/resources/research/)
- [Coveware Quarterly Ransomware Reports](https://www.coveware.com/blog)
- [FBI Internet Crime Complaint Center (IC3)](https://www.ic3.gov)
- [Europol IOCTA Reports](https://www.europol.europa.eu/publications-events/main-reports/iocta-report)

---

## 📄 Licença

Este projeto está licenciado sob a **MIT License** — veja o arquivo [LICENSE](LICENSE) para detalhes.

---

<div align="center">
  <sub>Desenvolvido para fins de pesquisa e educação em cibersegurança · 2026</sub>
</div>
