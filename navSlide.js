const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('show');
    })
}

const onScrollShow = () =>{
    window.addEventListener('scroll', ()=>{
        const acceptCookies = document.querySelector('.accept-cookies');
        const accept = document.querySelector('.accept');
        accept.addEventListener('click', ()=>{
            acceptCookies.classList.remove('showAcceptCookies');
            acceptCookies.style.display = 'none';
        })
        if(pageYOffset>0){
            /*  && accept.dataset.clicked!='true' */
            acceptCookies.classList.add('showAcceptCookies');
        } else{
            acceptCookies.classList.remove('showAcceptCookies')
        }
    })
}

const changeOnMouseOver = () =>{
    const consoleContainer = document.querySelectorAll('.console');
    const moduleContainer = document.querySelectorAll('.module');
    consoleContainer.forEach(consoles =>{
        consoles.addEventListener('mouseover', ()=>{
            const span = consoles.firstElementChild.nextElementSibling.nextElementSibling;
            span.classList.add('change-span');
            span.innerText = 'SHOP NOW'
        })

        consoles.addEventListener('mouseout', ()=>{
            const span = consoles.firstElementChild.nextElementSibling.nextElementSibling;
            span.classList.remove('change-span');
            span.innerText = '$399.00';
        })
    })

    moduleContainer.forEach(modules =>{
        modules.addEventListener('mouseover', ()=>{
            const span = modules.firstElementChild.nextElementSibling.nextElementSibling;
            span.classList.add('change-span');
            span.innerText = 'SHOP NOW';
        })

        modules.addEventListener('mouseout', ()=>{
            const span = modules.firstElementChild.nextElementSibling.nextElementSibling;
            span.classList.remove('change-span');
            span.innerText = '$399.00';
        })
    })
}

    const closeNewContainer = () =>{
        const close = document.querySelector('.close');
        close.addEventListener('click', () =>{
            const newContainer = document.querySelector('.new-container');
            newContainer.classList.add('remove-new-container');
        })
    }
    
closeNewContainer();
changeOnMouseOver();
onScrollShow();
navSlide();