function closeMenu() {
    
    let nav = document.getElementById('nav')

    if (!nav.classList.contains('active')) {
        
        nav.classList.add('active')

    } else if (nav.classList.contains('active')) {
        
        nav.classList.remove('active')

    }

}