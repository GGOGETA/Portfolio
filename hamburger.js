document.getElementById('hamburger-1').addEventListener('click', function() {
    this.classList.toggle('is-active');
    });


    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    
    let isExpanded = false;
    
    hamburger.addEventListener('click', () => {
    if (isExpanded) {
        nav.style.width = '3%';
        nav.style.backgroundColor = '#1c1c1c';
    } else {
        nav.style.width = '16%';
        nav.style.backgroundColor = '#1c1c1c' ;
    }
    isExpanded = !isExpanded;
    });