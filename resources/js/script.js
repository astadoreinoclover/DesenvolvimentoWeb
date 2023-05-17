function abrirMenu() {
    if(document.querySelector('nav').classList.contains('none')) {
        document.querySelector('nav').classList.remove('none');
        document.querySelector('nav').classList.add('flex');
        document.querySelector('.controls').classList.add('mb')
    } else {
        document.querySelector('nav').classList.remove('flex');
        document.querySelector('nav').classList.add('none');
        document.querySelector('.controls').classList.remove('mb')
    }
}

let banner = 1;

function proximo() {
    if (banner < 4) {
        banner = banner + 1;
    } else {
        banner = 1;
    }
    const bannerAtual = document.querySelector(`.banner-${banner}`);
    const bannerAnterior = document.querySelector(`.banner-${banner === 1 ? 4 : banner - 1}`);
    bannerAtual.classList.remove('b-none');
    bannerAtual.classList.add('banner');
    bannerAnterior.classList.remove('banner');
    bannerAnterior.classList.add('b-none');
    //======================================================
    document.querySelector(`#banner-${banner === 1 ? 4 : banner - 1}`).classList.remove('active');
    document.querySelector(`#banner-${banner}`).classList.add('active');
}

function anterior() {
    if (banner > 1) {
        banner = banner - 1;
    } else {
        banner = 4;
    }
    const bannerAtual = document.querySelector(`.banner-${banner}`);
    const bannerAnterior = document.querySelector(`.banner-${banner === 4 ? 1 : banner + 1}`);
    bannerAtual.classList.remove('b-none');
    bannerAtual.classList.add('banner');
    bannerAnterior.classList.remove('banner');
    bannerAnterior.classList.add('b-none');
    // =====================================================
    document.querySelector(`#banner-${banner === 4 ? 1 : banner + 1}`).classList.remove('active');
    document.querySelector(`#banner-${banner}`).classList.add('active');
}


setInterval(proximo, 6000);