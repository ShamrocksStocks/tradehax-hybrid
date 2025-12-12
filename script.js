// Initialize EmailJS (replace with your actual EmailJS user ID)
(function() {
    emailjs.init("YOUR_EMAILJS_USER_ID"); // Replace with your EmailJS user ID
})();

// GSAP Animations
document.addEventListener('DOMContentLoaded', function() {
    // Animate hero section
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

    // Animate sections on scroll
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            duration: 0.8,
            y: 50,
            opacity: 0,
            ease: 'power2.out'
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
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
        .then(function(response) {
            alert('Quote request submitted! We\'ll contact you at ' + formData.email + ' within 24 hours.');
            document.getElementById('repair-form').reset();
        }, function(error) {
            alert('Failed to send request. Please email us directly or try again later.');
            console.error('EmailJS error:', error);
        });
});

// Initialize Crypto Chart
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
                tension: 0.4
            },
            {
                label: 'Ethereum (ETH)',
                data: [2200, 2400, 2800, 3000, 3200, 3500, 3800],
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.1)',
                tension: 0.4
            },
            {
                label: 'Top Stock Pick',
                data: [150, 155, 162, 170, 185, 195, 210],
                borderColor: 'rgb(153, 102, 255)',
                backgroundColor: 'rgba(153, 102, 255, 0.1)',
                tension: 0.4
            }
        ]
    };
    
    new Chart(ctx, {
        type: 'line',
        data: cryptoData,
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        color: '#fff'
                    }
                },
                title: {
                    display: true,
                    text: 'ShamrockStocks Top Picks - YTD Performance',
                    color: '#fff',
                    font: {
                        size: 16
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: {
                        color: '#fff'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                x: {
                    ticks: {
                        color: '#fff'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                }
            }
        }
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
