document.addEventListener('DOMContentLoaded', () => {

    // --- Configuration ---
    const GOAL = 14;
    const CURRENT_DECLARATIONS = 14;
    const GOOGLE_FORMS_URL = ""; // Placeholder for Google Forms Action URL
    // ---------------------

    // --- Progress Bar Logic ---
    const initProgressBar = () => {
        const progressBar = document.getElementById('recruit-progress-bar');
        const currentDisplay = document.getElementById('current-count-display');
        const missingDisplay = document.getElementById('missing-count-display');
        const statusContainer = document.getElementById('status-container');
        const heroSuccessBar = document.getElementById('hero-success-bar');

        if (!progressBar || !currentDisplay) return;

        // Calculate percentage
        let percentage = (CURRENT_DECLARATIONS / GOAL) * 100;
        if (percentage > 100) percentage = 100;

        // Update displays
        currentDisplay.textContent = CURRENT_DECLARATIONS;

        // Handle "Goal Reached" State
        if (CURRENT_DECLARATIONS >= GOAL) {
            if (statusContainer) {
                // Determine missing count for logic (0) but we won't show it in the standard way
                statusContainer.innerHTML = `
                    <span class="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span>
                    <span class="text-green-400 font-bold">Mamy to! (${CURRENT_DECLARATIONS}/${GOAL})</span>
                    <span class="text-sm text-blue-200 ml-2 hidden sm:inline">- Klasa startuje! Rekrutacja trwa - dołącz do nas!</span>
                `;
            }
            if (heroSuccessBar) {
                heroSuccessBar.innerHTML = `
                    <div class="inline-flex items-center gap-3 bg-green-500 text-white px-5 py-2 rounded-full shadow-lg border border-green-400/50 animate-fade-in-up backdrop-blur-md">
                        <span class="w-3 h-3 bg-white rounded-full animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.8)]"></span>
                        <span class="font-bold text-sm md:text-base tracking-wide uppercase">Mamy to! (${CURRENT_DECLARATIONS}/${GOAL}) – Klasa startuje! Rekrutacja trwa.</span>
                    </div>
                `;
            }
            // Make progress bar green and full
            progressBar.classList.remove('bg-gradient-to-r', 'from-green-500', 'to-green-400', 'from-yellow-400', 'to-orange-500'); // Remove all gradient-related classes
            progressBar.classList.add('bg-green-400');
            progressBar.style.backgroundColor = '#4ade80'; // Force Green-400
            progressBar.style.backgroundImage = 'none'; // Ensure no gradient overrides it
            progressBar.style.boxShadow = "0 0 25px rgba(74, 222, 128, 0.9)"; // Stronger neon glow
        } else {
            // Standard State
            if (missingDisplay) {
                let missing = Math.max(0, GOAL - CURRENT_DECLARATIONS);
                missingDisplay.textContent = missing;
            }
        }

        // Animate width with a slight delay
        setTimeout(() => {
            progressBar.style.width = `${percentage}%`;
        }, 300);
    };

    initProgressBar();


    // --- Copy Link Functionality (Hero/Recruitment Section) ---
    const copyLinkBtn = document.getElementById('copyLinkBtn');
    if (copyLinkBtn) {
        copyLinkBtn.addEventListener('click', () => {
            const originalText = copyLinkBtn.innerHTML;

            navigator.clipboard.writeText(window.location.href).then(() => {
                copyLinkBtn.innerHTML = '<span>✅</span> Skopiowano!';
                copyLinkBtn.classList.add('bg-green-600', 'border-transparent');

                setTimeout(() => {
                    copyLinkBtn.innerHTML = originalText;
                    copyLinkBtn.classList.remove('bg-green-600', 'border-transparent');
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy', err);
                alert('Nie udało się skopiować linku.');
            });
        });
    }

    // --- Copy Text Functionality (Share Section) ---
    const copyTextBtn = document.getElementById('copyTextBtn');
    const shareText = document.getElementById('shareText');

    if (copyTextBtn && shareText) {
        copyTextBtn.addEventListener('click', () => {
            const textToCopy = shareText.value;
            const originalText = copyTextBtn.innerHTML;

            navigator.clipboard.writeText(textToCopy).then(() => {
                copyTextBtn.innerHTML = '<span>✅</span> Skopiowano!';
                copyTextBtn.classList.remove('bg-white', 'text-blue-900');
                copyTextBtn.classList.add('bg-green-500', 'text-white');

                setTimeout(() => {
                    copyTextBtn.innerHTML = originalText;
                    copyTextBtn.classList.remove('bg-green-500', 'text-white');
                    copyTextBtn.classList.add('bg-white', 'text-blue-900');
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text', err);
            });
        });
    }

    // --- Form Handling ---
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('form-success-message');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const submitBtn = form.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.textContent;

            submitBtn.textContent = 'Wysyłanie...';
            submitBtn.disabled = true;
            submitBtn.classList.add('opacity-75', 'cursor-not-allowed');

            const formData = new FormData(form);

            fetch("https://formspree.io/f/mkgddldg", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    form.reset();
                    form.style.display = 'none';
                    successMessage.classList.remove('hidden');
                } else {
                    response.json().then(data => {
                        if (Object.hasOwn(data, 'errors')) {
                            alert(data["errors"].map(error => error["message"]).join(", "));
                        } else {
                            alert("Wystąpił problem z wysłaniem formularza.");
                        }
                    });
                    // Re-enable button on error
                    submitBtn.textContent = originalBtnText;
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('opacity-75', 'cursor-not-allowed');
                }
            }).catch(error => {
                console.error('Error:', error);
                alert("Wystąpił problem z połączeniem.");
                // Re-enable button on error
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
                submitBtn.classList.remove('opacity-75', 'cursor-not-allowed');
            });
        });
    }

    // --- Smooth Scrolling for all anchor links (already handled by CSS scroll-behavior: smooth, but safeguards for older browsers/control) ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Check if it's not a link to nowhere
            const targetId = this.getAttribute('href');
            if (targetId === '#' || !targetId) return;

            // Only prevent default if target exists
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Intersection Observer for Animations (Fade In) ---
    // If you add .fade-in classes to elements manually
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply to elements if they exist (User might want to add fade-in class manually or we select common containers)
    // For now, let's select our main cards to give them a pop
    const animatedElements = document.querySelectorAll('.benefit-column, .tile, .group, .usp-box');
    animatedElements.forEach(el => {
        el.classList.add('transition-all', 'duration-700', 'ease-out', 'opacity-0', 'translate-y-10', 'transform');
        observer.observe(el);
    });

});
