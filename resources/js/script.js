function abrirMenu() {
    if(document.querySelector('nav').classList.contains('none')) {
        document.querySelector('nav').classList.remove('none');
        document.querySelector('nav').classList.add('flex');
    } else {
        document.querySelector('nav').classList.remove('flex');
        document.querySelector('nav').classList.add('none');
    }
}

