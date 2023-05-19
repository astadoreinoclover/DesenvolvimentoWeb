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

let margin = [0]

function mais() {
    if(window.innerWidth >=1024) {
        if(margin[0] < 740) {
            let nova = margin[0]+320;
            margin.push(nova)
            margin.shift();
        } 
        
        if(margin[0] >640) {
        document.querySelector('.btn-mais').classList.add('btn-none');
        } else if(margin[0] > 0) {
            document.querySelector('.btn-menos').classList.remove('btn-none');
        }
    } else if(window.innerWidth >= 710) {
        if(margin[0] < 1280) {
            let nova = margin[0]+320;
            margin.push(nova)
            margin.shift();
        } 
        
        if(margin[0] >1200) {
        document.querySelector('.btn-mais').classList.add('btn-none');
        } else if(margin[0] > 0) {
            document.querySelector('.btn-menos').classList.remove('btn-none');
        }
    } else if(window.innerWidth >= 425) {
        if(margin[0] < 1030) {
            let nova = margin[0]+220;
            margin.push(nova)
            margin.shift();
        } 
        
        if(margin[0] >1030) {
        document.querySelector('.btn-mais').classList.add('btn-none');
        } else if(margin[0] > 0) {
            document.querySelector('.btn-menos').classList.remove('btn-none');
        }
    } else if(window.innerWidth >= 20) {
        if(margin[0] < 1030) {
            let nova = margin[0]+220;
            margin.push(nova)
            margin.shift();
        } 
        
        if(margin[0] >1030) {
        document.querySelector('.btn-mais').classList.add('btn-none');
        } else if(margin[0] > 0) {
            document.querySelector('.btn-menos').classList.remove('btn-none');
        }
    }

    document.querySelector('.listaCartaz').style.transition = 'margin-left 2s';
    document.querySelector('.listaCartaz').style.marginLeft = `-${margin[0]}px`;
    console.log(margin[0]);
}

function menos() {
    if(window.innerWidth >= 710) {
        if(margin[0] >0) {
            let nova = margin[0]-320;
            margin.push(nova)
            margin.shift();
        } 
        
        if(margin[0]  > 0) {
            document.querySelector('.btn-mais').classList.remove('btn-none');
        } else if (margin[0] === 0) {
            document.querySelector('.btn-menos').classList.add('btn-none');
        }
    } else if(window.innerWidth >= 425) {
        if(margin[0] > 0) {
            let nova = margin[0]-220;
            margin.push(nova)
            margin.shift();
        } 
        
        if(margin[0] >0) {
        document.querySelector('.btn-mais').classList.remove('btn-none');
        } else if(margin[0] === 0) {
            document.querySelector('.btn-menos').classList.add('btn-none');
        }
    } else if(window.innerWidth >= 20) {
        if(margin[0] > 0) {
            let nova = margin[0]-220;
            margin.push(nova)
            margin.shift();
        } 
        
        if(margin[0] >0) {
        document.querySelector('.btn-mais').classList.remove('btn-none');
        } else if(margin[0] === 0) {
            document.querySelector('.btn-menos').classList.add('btn-none');
        }
    }

    document.querySelector('.listaCartaz').style.transition = 'margin-left 2s';
    document.querySelector('.listaCartaz').style.marginLeft = `-${margin[0]}px`;
    console.log(margin[0]);
}