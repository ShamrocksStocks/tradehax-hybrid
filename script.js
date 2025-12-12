// Initialize EmailJS (replace with your actual EmailJS user ID)
// Sign up at https://www.emailjs.com/ to get your user ID
(function() {
    emailjs.init("YOUR_EMAILJS_USER_ID"); // TODO: Replace with your EmailJS user ID
})();

// GSAP Animations
document.addEventListener('DOMContentLoaded', function() {
    // Register ScrollTrigger plugin
    if (typeof gsap !== 'undefined' && gsap.registerPlugin) {
        // ScrollTrigger will be loaded if available
    }
    
    // Animate hero section with stagger effect
    gsap.from('.hero h1', {
        duration: 1,
        y: -50,
        opacity: 0,
        ease: 'power3.out'
    });
    
    gsap.from('.hero p', {
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 0.3,
        ease: 'power3.out'
    });
    
    gsap.from('.hero a', {
        duration: 0.8,
        scale: 0.8,
        opacity: 0,
        delay: 0.6,
        stagger: 0.2,
        ease: 'back.out(1.7)'
    });

    // Animate navigation items on load
    gsap.from('nav a', {
        duration: 0.5,
        y: -20,
        opacity: 0,
        stagger: 0.1,
        delay: 1,
        ease: 'power2.out'
    });

    // Animate sections on scroll with intersection observer
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                gsap.from(entry.target, {
                    duration: 0.8,
                    y: 50,
                    opacity: 0,
                    ease: 'power2.out'
                });
                sectionObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Add parallax effect to hero
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Animate form inputs on focus
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            gsap.to(this, {
                duration: 0.3,
                scale: 1.02,
                boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
                ease: 'power2.out'
            });
        });
        
        input.addEventListener('blur', function() {
            gsap.to(this, {
                duration: 0.3,
                scale: 1,
                boxShadow: '0 0 0px rgba(59, 130, 246, 0)',
                ease: 'power2.out'
            });
        });
    });

    // Add hover animations to buttons
    const buttons = document.querySelectorAll('button, .hover\\:bg-blue-700, .hover\\:bg-green-700');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            gsap.to(this, {
                duration: 0.3,
                scale: 1.05,
                ease: 'power2.out'
            });
        });
        
        button.addEventListener('mouseleave', function() {
            gsap.to(this, {
                duration: 0.3,
                scale: 1,
                ease: 'power2.out'
            });
        });
    });
});

// Repair form submission handler
document.getElementById('repair-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        device_type: this.querySelector('input[type="text"]').value,
        issue_description: this.querySelector('textarea').value,
        email: this.querySelector('input[type="email"]').value
    };
    
    // Send email using EmailJS
    // TODO: Replace YOUR_SERVICE_ID and YOUR_TEMPLATE_ID with your actual EmailJS service and template IDs
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
        .then(function(response) {
            alert('Quote request submitted! We\'ll contact you at ' + formData.email + ' within 24 hours.');
            document.getElementById('repair-form').reset();
        }, function(error) {
            alert('Failed to send request. Please email us directly or try again later.');
            console.error('EmailJS error:', error);
        });
});

// Initialize Crypto Chart with animation
function initCryptoChart() {
    const ctx = document.getElementById('crypto-chart');
    if (!ctx) return;
    
    // Sample data - replace with real API data
    const cryptoData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
            {
                label: 'Bitcoin (BTC)',
                data: [35000, 38000, 42000, 45000, 48000, 52000, 55000],
                borderColor: 'rgb(255, 159, 64)',
                backgroundColor: 'rgba(255, 159, 64, 0.1)',
                tension: 0.4,
                fill: true
            },
            {
                label: 'Ethereum (ETH)',
                data: [2200, 2400, 2800, 3000, 3200, 3500, 3800],
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.1)',
                tension: 0.4,
                fill: true
            },
            {
                label: 'Top Stock Pick',
                data: [150, 155, 162, 170, 185, 195, 210],
                borderColor: 'rgb(153, 102, 255)',
                backgroundColor: 'rgba(153, 102, 255, 0.1)',
                tension: 0.4,
                fill: true
            }
        ]
    };
    
    const chart = new Chart(ctx, {
        type: 'line',
        data: cryptoData,
        options: {
            responsive: true,
            maintainAspectRatio: true,
            animation: {
                duration: 2000,
                easing: 'easeInOutQuart'
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        color: '#fff',
                        font: {
                            size: 14
                        },
                        padding: 20,
                        usePointStyle: true
                    }
                },
                title: {
                    display: true,
                    text: 'ShamrockStocks Top Picks - YTD Performance',
                    color: '#fff',
                    font: {
                        size: 18,
                        weight: 'bold'
                    },
                    padding: 20
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    borderColor: 'rgb(75, 192, 192)',
                    borderWidth: 2,
                    padding: 12,
                    displayColors: true,
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += '$' + context.parsed.y.toLocaleString();
                            }
                            return label;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: {
                        color: '#fff',
                        font: {
                            size: 12
                        },
                        callback: function(value) {
                            return '$' + value.toLocaleString();
                        }
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                x: {
                    ticks: {
                        color: '#fff',
                        font: {
                            size: 12
                        }
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                }
            },
            interaction: {
                mode: 'index',
                intersect: false
            },
            hover: {
                mode: 'index',
                intersect: false
            }
        }
    });

    // Add chart animation on scroll
    const chartObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                chart.update();
                chartObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    chartObserver.observe(ctx);

    // Add dynamic update simulation (optional - for demo purposes)
    let updateInterval;
    ctx.addEventListener('mouseenter', () => {
        // Simulate live data updates on hover
        updateInterval = setInterval(() => {
            chart.data.datasets.forEach(dataset => {
                const lastValue = dataset.data[dataset.data.length - 1];
                const change = (Math.random() - 0.5) * (lastValue * 0.02);
                dataset.data.push(lastValue + change);
                if (dataset.data.length > 10) {
                    dataset.data.shift();
                }
            });
            chart.data.labels.push('Now');
            if (chart.data.labels.length > 10) {
                chart.data.labels.shift();
            }
            chart.update('none');
        }, 2000);
    });

    ctx.addEventListener('mouseleave', () => {
        clearInterval(updateInterval);
        // Reset to original data
        chart.data.labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
        chart.data.datasets[0].data = [35000, 38000, 42000, 45000, 48000, 52000, 55000];
        chart.data.datasets[1].data = [2200, 2400, 2800, 3000, 3200, 3500, 3800];
        chart.data.datasets[2].data = [150, 155, 162, 170, 185, 195, 210];
        chart.update();
    });
}

// Quote Calculator Demo
function calcQuote() {
    const input = document.getElementById('device-input').value.trim().toLowerCase();
    const resultElement = document.getElementById('quote-result');
    
    if (!input) {
        resultElement.textContent = 'Please enter a device type or issue.';
        resultElement.style.color = '#f87171';
        return;
    }
    
    let basePrice = 75;
    let quote = '';
    
    // Simple keyword-based pricing
    if (input.includes('iphone') || input.includes('android') || input.includes('phone')) {
        basePrice = 60;
        quote = `Phone repair: $${basePrice}-${basePrice + 80}`;
    } else if (input.includes('laptop') || input.includes('macbook') || input.includes('computer')) {
        basePrice = 100;
        quote = `Computer repair: $${basePrice}-${basePrice + 100}`;
    } else if (input.includes('screen') || input.includes('display')) {
        basePrice = 80;
        quote = `Screen replacement: $${basePrice}-${basePrice + 120}`;
    } else if (input.includes('battery')) {
        basePrice = 50;
        quote = `Battery service: $${basePrice}-${basePrice + 50}`;
    } else if (input.includes('software') || input.includes('virus') || input.includes('malware')) {
        basePrice = 75;
        quote = `Software service: $${basePrice}-${basePrice + 75}`;
    } else if (input.includes('custom') || input.includes('mod') || input.includes('upgrade')) {
        basePrice = 100;
        quote = `Custom modification: $${basePrice}-${basePrice + 150}`;
    } else {
        basePrice = 75;
        quote = `General service: $${basePrice}-${basePrice + 125}`;
    }
    
    resultElement.textContent = `Estimated quote: ${quote}. Book below for exact pricing!`;
    resultElement.style.color = '#34d399';
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize chart when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCryptoChart);
} else {
    initCryptoChart();
}
