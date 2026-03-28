# 🧪 JavaScript - Console & Debugging

Pasta com exemplos práticos de testes e debugging em JavaScript.

## 📂 Arquivos

| Arquivo | Conteúdo |
|---|---|
| `console-tests.js` | Todos os métodos do `console` |
| `debugging.js` | Técnicas de debugging avançadas |

---

## ▶️ Como executar

### No terminal (Node.js):
```bash
node console-tests.js
node debugging.js
```

### No navegador (DevTools):
1. Abra o navegador → pressione `F12`
2. Vá na aba **Console**
3. Cole o conteúdo do arquivo e pressione `Enter`

---

## 📋 O que cada arquivo cobre

### `console-tests.js`
- `console.log` → mensagem simples
- `console.info` / `console.warn` / `console.error` → tipos de mensagem
- `console.table` → exibe objetos/arrays em tabela
- `console.group` → agrupa mensagens
- `console.time` / `console.timeEnd` → mede tempo de execução
- `console.count` → conta quantas vezes foi chamado
- `console.assert` → dispara erro se condição for falsa
- `console.trace` → mostra o caminho de chamadas (stack trace)

### `debugging.js`
- `debugger` → pausa execução no DevTools
- `try / catch / finally` → captura e trata erros
- `typeof` → verifica tipo de variáveis
- `arguments` → inspeciona argumentos de função
- `Proxy` → rastreia mudanças em objetos
- `console.time` → mede performance de funções
