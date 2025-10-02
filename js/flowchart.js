// Initialize Mermaid
mermaid.initialize({
    startOnLoad: true,
    theme: 'default',
    flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: 'basis'
    },
    themeVariables: {
        fontSize: '16px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }
});

// Tab switching
document.addEventListener('DOMContentLoaded', () => {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const charts = document.querySelectorAll('.mermaid-chart');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const chartId = btn.dataset.chart;

            // Update active tab
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update active chart
            charts.forEach(chart => {
                chart.classList.remove('active');
                if (chart.id === `chart-${chartId}`) {
                    chart.classList.add('active');
                }
            });

            // Re-render mermaid
            mermaid.contentLoaded();
        });
    });

    // Fullscreen toggle
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const chartContainer = document.querySelector('.chart-container');
    const infoPanel = document.querySelector('.info-panel');

    fullscreenBtn.addEventListener('click', () => {
        chartContainer.classList.toggle('fullscreen');

        if (chartContainer.classList.contains('fullscreen')) {
            fullscreenBtn.textContent = '전체화면 해제';
            infoPanel.style.display = 'none';
        } else {
            fullscreenBtn.textContent = '전체화면';
            infoPanel.style.display = 'block';
        }
    });

    // Reset button
    const resetBtn = document.getElementById('resetBtn');
    resetBtn.addEventListener('click', () => {
        // Reset to main chart
        tabBtns.forEach(b => b.classList.remove('active'));
        tabBtns[0].classList.add('active');

        charts.forEach(chart => {
            chart.classList.remove('active');
            if (chart.id === 'chart-main') {
                chart.classList.add('active');
            }
        });

        // Exit fullscreen if active
        if (chartContainer.classList.contains('fullscreen')) {
            chartContainer.classList.remove('fullscreen');
            fullscreenBtn.textContent = '전체화면';
            infoPanel.style.display = 'block';
        }

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ESC key to exit fullscreen
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && chartContainer.classList.contains('fullscreen')) {
            chartContainer.classList.remove('fullscreen');
            fullscreenBtn.textContent = '전체화면';
            infoPanel.style.display = 'block';
        }
    });

    // Initial render
    mermaid.contentLoaded();
});
