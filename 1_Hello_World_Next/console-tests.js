// =============================================
// 🧪 TESTES COM CONSOLE.LOG E DEBUGGING
// =============================================

// ─── 1. console.log básico ───────────────────
console.log("Olá, mundo!");
console.log("Número:", 42);
console.log("Booleano:", true);

// ─── 2. Tipos de console ─────────────────────
console.info("ℹ️  Info: Isso é uma informação");
console.warn("⚠️  Warn: Isso é um aviso");
console.error("❌ Error: Isso é um erro");

// ─── 3. Objetos e Arrays ─────────────────────
const usuario = { nome: "Anderson", idade: 25, cidade: "São Paulo" };
console.log("Objeto:", usuario);
console.table(usuario);

const frutas = ["maçã", "banana", "laranja"];
console.log("Array:", frutas);
console.table(frutas);

// ─── 4. Agrupamento ──────────────────────────
console.group("📦 Grupo: Dados do Usuário");
console.log("Nome:", usuario.nome);
console.log("Idade:", usuario.idade);
console.groupEnd();

// ─── 5. Tempo de execução ────────────────────
console.time("⏱️ Tempo do loop");
let soma = 0;
for (let i = 0; i < 1000000; i++) {
  soma += i;
}
console.timeEnd("⏱️ Tempo do loop");
console.log("Soma:", soma);

// ─── 6. Contagem ─────────────────────────────
for (let i = 0; i < 5; i++) {
  console.count("Contagem");
}
console.countReset("Contagem");

// ─── 7. Assert ───────────────────────────────
console.assert(1 === 1, "❌ Isso não vai aparecer");
console.assert(1 === 2, "❌ ASSERT FALHOU: 1 não é igual a 2");

// ─── 8. Stack trace ───────────────────────────
function funcaoA() { funcaoB(); }
function funcaoB() { funcaoC(); }
function funcaoC() {
  console.trace("📍 Trace: caminho de chamadas");
}
funcaoA();

// ─── 9. Função simples para testar ───────────
function calcularAlgo() {
  console.log("✅ Testando lógica aqui!")
}
calcularAlgo();