# Dashboard de Busca - Leme Forense

## 📋 Descrição

Sistema de consulta de dados básicos desenvolvido com React, TypeScript e PrimeReact para a empresa Leme Forense.

## 🚀 Tecnologias Utilizadas

- **React 18** com TypeScript
- **Vite** - Servidor de desenvolvimento
- **PrimeReact** - Biblioteca de componentes UI
- **Styled Components** - Estilização
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas
- **React Router DOM** - Roteamento
- **Context API** - Gerenciamento de estado global
- **JSON Server** - API mock para desenvolvimento

## 🎯 Funcionalidades

### Tela Principal
- Formulário de busca com validação dinâmica
- Seleção de tipo de busca (Nome, CPF/CNPJ, Email, Telefone, Endereço)
- Máscaras automáticas para CPF/CNPJ e telefone
- Resultados recentes com histórico de pesquisas

### Tela de Resultados
- Filtros para pessoas físicas e empresas
- Tabela com resultados paginados
- Botão "Detalhes" para cada entidade
- Modal com informações completas da entidade

### Modal de Detalhes
- Informações específicas por tipo de entidade
- Dados de contato completos
- Layout responsivo e interativo

## 📊 Dados para Teste

### Pessoas Físicas Disponíveis

#### Busca por CPF:
- **123.456.789-01** → Lucas da Silva

#### Busca por Nome:
- **Lucas** → Retorna 2 pessoas: Lucas da Silva, Lucas Nascimento
- **João** → Retorna 1 pessoa: João Pereira

#### Busca por Email:
- **lucas@lemeforense.com.br** → Lucas da Silva

### Empresas Disponíveis

#### Busca por CNPJ:
- **12.345.678/0001-90** → Leme Forense LTDA

#### Busca por Nome:
- **Leme** → Retorna 1 empresa: Leme Forense LTDA

#### Busca por Email:
- **contato@lemeforense.com.br** → Leme Forense LTDA

## 🛠️ Como Executar

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para Execução

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Iniciar o JSON Server (API mock):**
   ```bash
   cd mock
   json-server --watch db.json --port 3001
   ```
   - O JSON Server rodará em: `http://localhost:3001`
   - **Este é necessário para que a aplicação funcione corretamente (OBRIGATÓRIO)**

3. **Em outro terminal, executar a aplicação React:**
   ```bash
   npm run dev
   ```

4. **Acessar a aplicação:**
   ```
   http://localhost:5173
   ```

### ⚠️ Importante
- **SEMPRE execute o JSON Server primeiro** antes de iniciar a aplicação React
- O JSON Server deve estar rodando em `http://localhost:3001`
- Se o JSON Server não estiver rodando, a busca não funcionará

## 📱 Funcionalidades de Busca

### Exemplos de Busca Parcial

#### CPF:
- Buscar por **123** retorna todos os CPFs que contêm esses números
- Buscar por **123.456** retorna CPFs que começam com essa sequência

#### Email:
- Buscar por **lucas** retorna todos os emails que contêm "lucas"
- Buscar por **@lemeforense** retorna emails do domínio leme forense

#### Nome:
- Buscar por **Lucas** retorna todas as pessoas com nome Lucas
- Buscar por **Leme** retorna todas as empresas com Leme no nome

## 📋 Estrutura do Projeto

```
dashboard-de-busca-react/
├── src/
│   ├── components/
│   │   ├── common/                    # Componentes reutilizáveis
│   │   │   ├── DataTable/
│   │   │   │   ├── index.tsx         # Tabela de dados das entidades
│   │   │   │   └── styles.ts         # Estilos da tabela
│   │   │   ├── EntityModal/
│   │   │   │   ├── index.tsx         # Modal de detalhes da entidade
│   │   │   │   └── styles.js         # Estilos do modal
│   │   │   ├── RecentSearches/
│   │   │   │   ├── index.tsx         # Lista de pesquisas recentes
│   │   │   │   └── styles.ts         # Estilos das pesquisas recentes
│   │   │   ├── SearchForm/
│   │   │   │   ├── index.tsx         # Formulário de busca
│   │   │   │   └── styles.js         # Estilos do formulário
│   │   │   └── index.ts              # Exportações dos componentes
│   │   └── layout/                   # Componentes de layout
│   │       ├── Container/
│   │       │   ├── index.tsx         # Container principal
│   │       │   └── styles.js         # Estilos do container
│   │       ├── Header/
│   │       │   ├── index.tsx         # Cabeçalho da aplicação
│   │       │   └── styles.ts         # Estilos do cabeçalho
│   │       └── index.ts              # Exportações do layout
│   ├── contexts/                     # Context API
│   │   ├── SearchContext.tsx         # Contexto para busca e entidades
│   │   ├── RecentSearchesContext.tsx # Contexto para pesquisas recentes
│   │   └── index.ts                  # Exportações dos contextos
│   ├── hooks/                        # Custom hooks
│   │   └── useEntityModal.ts         # Hook para gerenciar modal
│   ├── pages/                        # Páginas da aplicação
│   │   ├── HomePage/
│   │   │   ├── index.tsx             # Página inicial
│   │   │   └── styles.ts             # Estilos da página inicial
│   │   ├── SearchResults/
│   │   │   ├── index.tsx             # Página de resultados
│   │   │   └── styles.ts             # Estilos da página de resultados
│   │   └── index.ts                  # Exportações das páginas
│   ├── routes/                       # Configuração de rotas
│   │   ├── AppRoutes.tsx             # Componente de rotas
│   │   ├── routesConfig.tsx          # Configuração das rotas
│   │   └── index.ts                  # Exportações das rotas
│   ├── services/                     # Serviços de API
│   │   ├── entities.ts               # API de entidades
│   │   ├── recentSearches.ts         # API de pesquisas recentes
│   │   └── index.ts                  # Exportações dos serviços
│   ├── types/                        # Definições TypeScript
│   │   └── index.ts                  # Interfaces e tipos
│   ├── assets/                       # Recursos estáticos
│   │   └── react.svg                 # Logo do React
│   ├── App.tsx                       # Componente principal
│   ├── App.css                       # Estilos globais da aplicação
│   ├── index.css                     # Estilos globais
│   └── main.tsx                      # Ponto de entrada
├── mock/                             # Dados mock da API
│   └── db.json                       # Dados das entidades e pesquisas
├── public/                           # Arquivos públicos
│   └── vite.svg                      # Logo do Vite
├── dist/                             # Build da aplicação
├── node_modules/                     # Dependências
├── index.html                        # HTML principal
├── package.json                      # Configuração do projeto
├── package-lock.json                 # Lock das dependências
├── tsconfig.json                     # Configuração TypeScript
├── tsconfig.node.json                # Configuração TS para Node
├── vite.config.ts                    # Configuração do Vite
├── eslint.config.js                  # Configuração do ESLint
├── .gitignore                        # Arquivos ignorados pelo Git
├── Explicaçoes tecnicas              # Arquivo explicando o projeto com mais detalhes enriquecedores
└── README.md                         # Documentação do projeto
```

## 🎨 Design System

- **Cores principais:** Azul (#007bff), Cinza (#6c757d)
- **Tipografia:** Sistema de fontes responsivo
- **Componentes:** Reutilizáveis 
- **Layout:** Responsivo para desktop 

## 🚀 Próximos Passos

- [ ] Adicionar testes com Jest e React Testing Library
- [ ] Configurar Storybook para documentação de componentes
- [ ] Implementar tema escuro
- [ ] Adicionar mais filtros avançados
- [ ] Implementar exportação de dados
- [ ] Substituir JSON Server por API real em produção

