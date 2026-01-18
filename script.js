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

// 2. Generic Toggle Function
function toggleVisibility(listId, arrowId) {
    const list = document.getElementById(listId);
    const arrow = document.getElementById(arrowId);
    if (list.classList.contains('hidden')) {
        list.classList.remove('hidden');
        arrow.classList.add('rotate-arrow');
    } else {
        list.classList.add('hidden');
        arrow.classList.remove('rotate-arrow');
    }
}

// 3. Category Toggles
function toggleQSList() { toggleVisibility('qsList', 'qsArrow'); }
function toggleRPList() { toggleVisibility('rpList', 'rpArrow'); }
function toggleCEList() { toggleVisibility('ceList', 'ceArrow'); }

// 4. Trimester Toggles
function toggleTrimesterList() { toggleVisibility('trimesterList', 'trimesterArrow'); }
function toggleTrimesterSolList() { toggleVisibility('trimesterSolList', 'trimesterSolArrow'); }

// 5. Scroll Animation
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
    if(tributeText) { observer.observe(tributeText); }
});