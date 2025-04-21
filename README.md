# BibleSearch Frontend

Este é o projeto **frontend** da aplicação BibleSearch, desenvolvido com **React.js**. Ele consome a API backend para permitir que o usuário:

- 🔍 Busque versículos específicos (livro, capítulo, versículo)
- 📚 Veja a lista completa de livros da Bíblia
- 🗝️ Faça buscas por palavra-chave com paginação
- 🧭 Navegue facilmente entre as funcionalidades pela página inicial

---

## Tecnologias Utilizadas

- React.js (Vite ou Create React App)
- React Router DOM
- JavaScript moderno (ES6+)
- Fetch API
- CSS inline ou externo

---

## Estrutura do Projeto

```
biblesearch-ui/
├── components/
│   └── SearchBar.js
├── services/
│   ├── fetchVerses.js
│   ├── fetchBooks.js
│   └── fetchByKeyword.js
├── pages/
│   ├── Home.js
│   ├── SearchVerse.js
│   ├── BookList.js
│   └── KeywordSearch.js
├── App.js
└── index.js
```

---

## Funcionalidades

### Buscar versículo específico
- Formulário com campos: livro (ID), capítulo, versículo
- Resultado exibido com o texto do versículo

### Listar livros da Bíblia
- Lista dinâmica dos livros recebidos via `/api/book/all`

### Buscar por palavra-chave
- Input de texto
- Lista de versículos que contêm a palavra digitada
- Suporte a paginação (opcional)

---

## Como executar localmente

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/biblesearch-ui.git
cd biblesearch-ui
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie a aplicação

```bash
npm start
```

A aplicação estará disponível em `http://localhost:3000`

---

## Integração com o Backend

Certifique-se de que o projeto backend BibleSearch esteja rodando localmente em `http://localhost:8080`.  
A comunicação entre as camadas é feita via `fetch()` nos serviços localizados em `src/services`.

---

**Augusto Gabriel**  
[GitHub](https://github.com/augustogabrielps)
