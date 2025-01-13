# ✅ Lista de Tarefas (To-Do List)

Uma aplicação moderna de lista de tarefas construída com React e TypeScript, focando em uma experiência de usuário fluida e persistência de dados.

## 🚀 Tecnologias Utilizadas

- [React](https://reactjs.org/) - Biblioteca para interfaces de usuário
- [TypeScript](https://www.typescriptlang.org/) - Linguagem de programação fortemente tipada que se baseia em JavaScript
- [Zustand](https://zustand-demo.pmnd.rs/) - Gerenciamento de estado
- [TailwindCSS](https://tailwindcss.com/) - Estilização
- [Vitest](https://vitest.dev/) - Framework de testes

## ✨ Funcionalidades

### Gerenciamento de Tarefas
- ✏️ Criação de novas tarefas
- 🔄 Edição de tarefas existentes
- ✅ Marcação de tarefas como concluídas/não concluídas
- 🗑️ Remoção de tarefas

### Filtros e Visualização
- 👁️ Visualização de todas as tarefas
- ✅ Filtro de tarefas concluídas
- ⏳ Filtro de tarefas pendentes
- 🔍 Busca de tarefas por texto

### Persistência
- 💾 Dados salvos localmente
- 🔄 Mantém o estado mesmo após recarregar a página

## 🔧 Instalação e Uso

1. Clone o repositório:
```bash
git clone https://github.com/viny-dias/teste-list
```

2. Instale as dependências:
```bash
cd todo-list
npm install
```

3. Execute o projeto:
```bash
npm run dev
```

4. Para rodar os testes:
```bash
npm run test
```

## 🏗️ Estrutura do Projeto

```
TESTE-LIST/
├── src/
│   ├── components/     # Componentes da aplicação
│   ├── store/         # Configuração do Zustand
│   ├── styles/        # Estilos Tailwind
│   ├── test/          # Testes unitários
│   ├── types/         # Definições de tipos TypeScript
│   ├── App.tsx        # Componente principal
│   └── main.tsx       # Ponto de entrada da aplicação
├── setup.ts           # Configurações iniciais
├── vite.config.ts     # Configuração do Vite
├── vitest.config.ts   # Configuração do Vitest
├── tailwind.config.js # Configuração do Tailwind
├── tsconfig.json      # Configuração do TypeScript
└── package.json       # Dependências e scripts
```

## 💡 Destaques Técnicos

### Zustand
- Gerenciamento de estado simples e eficiente
- Persistência de dados com middleware persist
- Ações e seletores bem definidos
- Performance otimizada

### TypeScript
- Tipagem forte para maior segurança
- Interfaces bem definidas
- Melhor experiência de desenvolvimento

### TailwindCSS
- Estilização moderna e responsiva
- Customização flexível
- Otimização de performance

## 🧪 Testes

O projeto inclui testes unitários implementados com Vitest, cobrindo:
- Filtro
- Funcionalidades do Formulário
- Lista de itens
- Item da lista

Para executar os testes:
```bash
npm run test
```

## 📝 Considerações de Desenvolvimento

- **Clean Code**: Código limpo e bem organizado
- **Estado Global**: Gerenciamento eficiente com Zustand
- **Persistência**: Dados salvos localmente usando persist middleware
- **Performance**: Otimizações de renderização
- **UX**: Interface intuitiva e responsiva

---

Desenvolvido por [Vinicius Dias](https://github.com/viny-dias) 🚀