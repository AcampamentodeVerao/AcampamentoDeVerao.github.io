function closeMenu() {
    
    let nav = document.getElementById('nav')

    if (!nav.classList.contains('active')) {
        
        nav.classList.add('active')

    } else if (nav.classList.contains('active')) {
        
        nav.classList.remove('active')

    }

    if (document.querySelector('i').className == 'fa-solid fa-x') {

        document.querySelector('i').className = 'fa-solid fa-bars'
        
    } else if (document.querySelector('i').className == 'fa-solid fa-bars') {
    
        document.querySelector('i').className = 'fa-solid fa-x'
        
    }

}