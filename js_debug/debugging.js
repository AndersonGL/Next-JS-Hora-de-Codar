// =============================================
// 🐛 DEBUGGING — TÉCNICAS E EXEMPLOS
// =============================================

// ─── 1. debugger (pausa a execução no DevTools) ──
function calcularDesconto(preco, desconto) {
  debugger; // ← pausa aqui quando DevTools estiver aberto
  const valor = preco - (preco * desconto) / 100;
  return valor;
}
// console.log(calcularDesconto(100, 20)); // descomente para testar

// ─── 2. Try / Catch para capturar erros ──────────
function dividir(a, b) {
  try {
    if (b === 0) throw new Error("Divisão por zero não é permitida!");
    return a / b;
  } catch (erro) {
    console.error("❌ Erro capturado:", erro.message);
    return null;
  } finally {
    console.log("🔚 Finally: sempre executa");
  }
}

console.log("Divisão normal:", dividir(10, 2));
console.log("Divisão por zero:", dividir(10, 0));

// ─── 3. Verificar tipo de variáveis ──────────────
const valores = [42, "texto", true, null, undefined, { a: 1 }, [1, 2, 3]];
valores.forEach((val) => {
  console.log(`typeof ${String(val).padEnd(10)} →`, typeof val);
});

// ─── 4. Inspecionar Funções ──────────────────────
function minhaFuncao(x, y) {
  console.log("Argumentos recebidos:", arguments);
  return x + y;
}
minhaFuncao(5, 10);

// ─── 5. Rastrear mudanças em objeto ──────────────
let config = { tema: "claro", idioma: "pt-BR" };
const handler = {
  set(alvo, prop, valor) {
    console.log(`🔄 Propriedade "${prop}" mudou de "${alvo[prop]}" para "${valor}"`);
    alvo[prop] = valor;
    return true;
  },
};
const configProxy = new Proxy(config, handler);
configProxy.tema = "escuro";
configProxy.idioma = "en-US";

// ─── 6. Performance — medir tempo de funções ─────
function testarPerformance(fn, nome) {
  console.time(`⏱️ ${nome}`);
  fn();
  console.timeEnd(`⏱️ ${nome}`);
}

testarPerformance(() => {
  let arr = Array.from({ length: 100000 }, (_, i) => i);
  arr.filter((n) => n % 2 === 0);
}, "filter em 100k itens");
