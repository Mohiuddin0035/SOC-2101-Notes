// 1. Show/Hide Sections Logic
function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.remove('active');
        section.classList.add('hidden');
    });

    const target = document.getElementById(sectionId);
    if (target) {
        target.classList.remove('hidden');
        target.classList.add('active');
    }
    window.scrollTo(0, 0);
}

// 2. Toggle "Previous Mid Questions" Dropdown
function toggleBatchList() {
    const list = document.getElementById('batchList');
    const arrow = document.getElementById('batchArrow');
    
    // Toggle hidden class
    if (list.classList.contains('hidden')) {
        list.classList.remove('hidden');
        arrow.classList.add('rotate-arrow'); // Arrow points up
    } else {
        list.classList.add('hidden');
        arrow.classList.remove('rotate-arrow'); // Arrow points down
    }
}

// 3. Scroll Animation for Tribute Section
document.addEventListener("DOMContentLoaded", function() {
    const tributeText = document.querySelector('.tribute-col-text');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    if(tributeText) {
         observer.observe(tributeText);
    }
});
