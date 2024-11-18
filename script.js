document.getElementById("showAlert").addEventListener("click", () => {
    alert("Explore our smart house features!");
  });
  
  const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.getAttribute('data-target'));
                    let count = 0;
                    
                    const updateCount = () => {
                        const increment = target / 50;
                        if (count < target) {
                            count = Math.ceil(count + increment);
                            counter.innerText = count;
                            requestAnimationFrame(updateCount);
                        } else {
                            counter.innerText = target;
                        }
                    };
                    
                    counter.classList.add('visible');
                    updateCount();
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, {
            threshold: 0.5
        });

        document.querySelectorAll('.stat-counter').forEach(counter => {
            observer.observe(counter);
        });

        // Rotate testimonials
        const testimonials = document.querySelectorAll('.testimonial-card');
        let currentTestimonial = 0;

        setInterval(() => {
            testimonials[currentTestimonial].style.opacity = '0';
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            testimonials[currentTestimonial].style.opacity = '1';
        }, 5000);

        // Add floating icons dynamically
        const iconPositions = [
            { top: '20%', left: '10%', delay: '0s' },
            { top: '60%', left: '80%', delay: '1s' },
            { top: '30%', left: '60%', delay: '2s' },
            { top: '70%', left: '30%', delay: '1.5s' },
            { top: '40%', left: '20%', delay: '0.5s' }
        ];

        iconPositions.forEach(pos => {
            const icon = document.createElement('svg');
            icon.classList.add('floating-icon');
            icon.style.top = pos.top;
            icon.style.left = pos.left;
            icon.style.animationDelay = pos.delay;
            document.querySelector('.floating-icons').appendChild(icon);
        });