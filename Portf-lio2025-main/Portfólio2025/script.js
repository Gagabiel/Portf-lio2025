// =============================
// Mostrar/Ocultar Exemplos
// =============================
function toggleExample(id) {
    const el = document.getElementById(id);
    el.style.display = el.style.display === "block" ? "none" : "block";
}

// =============================
// Calcular Tempo para Atingir Meta
// =============================
function calcularTempo() {
    const meta = parseFloat(document.getElementById('meta').value);
    const mensal = parseFloat(document.getElementById('mensal').value);
    const result = document.getElementById('resultadoTempo');

    if (isNaN(meta) || isNaN(mensal) || mensal <= 0) {
        result.textContent = "Por favor, insira valores válidos.";
        result.style.color = "#f85149";
        return;
    }

    const meses = Math.ceil(meta / mensal);
    result.textContent = `Você atingirá sua meta em aproximadamente ${meses} meses.`;
    result.style.color = "#3fb950";
}

// =============================
// Gerar Senha Segura
// =============================
function gerarSenha() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*';
    let senha = '';
    for (let i = 0; i < 12; i++) {
        senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    const campo = document.getElementById('senhaGerada');
    campo.textContent = `Senha gerada: ${senha}`;
    campo.style.color = "#58a6ff";
}

// =============================
// Função da Missão IA
// =============================
function mostrarMissao() {
    function missaoIA(nome) {
        return `Olá, ${nome}! Sua missão é ensinar a IA a pensar de forma ética e criativa.`;
    }
    const nome = prompt("Digite seu nome:");
    const resultado = missaoIA(nome || "Estudante");
    const campo = document.getElementById('missaoResultado');
    campo.textContent = resultado;
    campo.style.color = "#58a6ff";
}

// =============================
// Rolagem suave entre seções
// =============================
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute('href'));
        destino.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// =============================
// Efeito de fade-in nas seções
// =============================
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.content-section').forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
});
