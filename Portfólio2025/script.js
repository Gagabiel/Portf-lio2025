document.addEventListener('DOMContentLoaded', () => {
    // Expandir / recolher textos das seções
    const expandirBtns = document.querySelectorAll('.expandir-btn');

    expandirBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const info = btn.nextElementSibling;
            if (info.classList.contains('active')) {
                info.classList.remove('active');
                btn.textContent = btn.textContent.replace('Menos', 'Mais');
            } else {
                info.classList.add('active');
                btn.textContent = btn.textContent.replace('Mais', 'Menos');
            }
        });
    });

    // Animação para revelar seções quando estão na viewport
    const sections = document.querySelectorAll('section');

    function revealSections() {
        const triggerBottom = window.innerHeight * 0.85;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.classList.add('section-visible');
                section.classList.remove('section-hidden');
            }
        });
    }

    window.addEventListener('scroll', revealSections);
    revealSections(); // Chamar uma vez na carga

    // Inicializar gráfico "Distribuição de Sites Acessíveis" (pizza)
    const ctxA11y = document.getElementById('grafico-a11y-canvas').getContext('2d');
    const graficoA11y = new Chart(ctxA11y, {
        type: 'pie',
        data: {
            labels: ['Acessíveis', 'Não Acessíveis', 'Parcialmente Acessíveis'],
            datasets: [{
                label: 'Distribuição',
                data: [35, 50, 15],
                backgroundColor: ['#4caf50', '#f44336', '#ff9800'],
                hoverOffset: 20
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'bottom' },
                tooltip: { enabled: true }
            }
        }
    });

    // Inicializar gráfico dinâmico "Gráfico no tempo"
    const ctxTempo = document.getElementById('grafico-tempo').getContext('2d');
    const graficoTempo = new Chart(ctxTempo, {
        type: 'line',
        data: {
            labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
            datasets: [{
                label: 'Sites Acessíveis (%)',
                data: [20, 25, 30, 40, 50, 65],
                borderColor: '#2196f3',
                backgroundColor: 'rgba(33, 150, 243, 0.2)',
                fill: true,
                tension: 0.3,
                pointRadius: 5,
                pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: value => value + '%'
                    }
                }
            },
            plugins: {
                legend: { display: true, position: 'top' },
                tooltip: { mode: 'index', intersect: false }
            },
            interaction: {
                mode: 'nearest',
                intersect: false
            }