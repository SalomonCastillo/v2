document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        const isActive = item.classList.contains('active');
        
-        document.querySelectorAll('.faq-item').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        
        item.classList.toggle('active');
        
        if (!isActive) {
            item.style.transform = 'translateY(-5px)';
            setTimeout(() => {
                item.style.transform = 'translateY(0)';
            }, 200);
        }
    });
});



window.addEventListener('load', function() {
   // document.querySelector("#home").innerHTML = ``
});
