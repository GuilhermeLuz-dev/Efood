# Configuração ESLint e Prettier

## ✅ Instalação Completa

O projeto foi configurado com ESLint e Prettier. Aqui está o resumo:

### Pacotes Instalados

- `eslint` - Linter para JavaScript/TypeScript
- `@typescript-eslint/eslint-plugin` e `@typescript-eslint/parser` - Suporte TypeScript
- `eslint-plugin-react` e `eslint-plugin-react-hooks` - Suporte React
- `prettier` - Formatador de código
- `eslint-config-prettier` e `eslint-plugin-prettier` - Integração Prettier com ESLint

### Arquivos de Configuração Criados

1. **`eslint.config.js`** - Configuração do ESLint (versão 9+)
2. **`.prettierrc`** - Configuração do Prettier
3. **`.prettierignore`** - Arquivos ignorados pelo Prettier
4. **`.eslintrc.json`** - Configuração alternativa (compatibilidade)
5. **`.vscode/settings.json`** - Configuração do VSCode
6. **`.vscode/extensions.json`** - Extensões recomendadas

### Extensões VSCode Necessárias

Certifique-se de ter instaladas:

- ✅ **Prettier - Code formatter** (`esbenp.prettier-vscode`)
- ✅ **ESLint** (`dbaeumer.vscode-eslint`)

> Essas extensões já estão instaladas! Se não estiverem, serão sugeridas ao abrir o projeto.

## 📋 Scripts NPM Disponíveis

```bash
# Verificar linting
npm run lint

# Corrigir linting automaticamente
npm run lint:fix

# Formatar código com Prettier
npm run format

# Verificar formatação sem alterar
npm run format:check
```

## ⚙️ Configurações Padrão

### Prettier

- `semi: true` - Adicionar ponto-e-vírgula
- `singleQuote: true` - Usar aspas simples
- `trailingComma: "es5"` - Vírgula à direita em arrays/objetos
- `printWidth: 80` - Largura máxima de linha
- `tabWidth: 2` - Espaçamento de tabulação
- `endOfLine: "auto"` - Detectar automáticamente terminação de linha

### ESLint

- Suporte para React 19
- Suporte para TypeScript
- Integração com Prettier
- React Hooks validado

## 🔧 Como Usar

### Ao Salvar Arquivo

- ✅ ESLint corrige automaticamente problemas fixáveis
- ✅ Prettier formata o código automaticamente

### Manual

```bash
# Formatar um arquivo específico
npx prettier --write src/App.tsx

# Linting com detalhes
npm run lint -- --debug
```

## 📝 Regras Principais

- Variáveis não utilizadas geram aviso (com prefixo `_` são ignoradas)
- `react/react-in-jsx-scope` - Desativado (React 17+)
- Imports devem usar aspas simples
- Código deve estar formatado conforme Prettier

## 🚀 Próximos Passos

1. Instale a extensão Prettier no VSCode se ainda não estiver
2. Configure seu editor para salvar ao deixar o foco
3. Execute `npm run lint:fix` para corrigir o projeto existente
4. Comece a escrever código com linting automático!

---

Configuração completa e pronta para usar! 🎉
