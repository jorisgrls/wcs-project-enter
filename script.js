document.addEventListener('DOMContentLoaded', (event) => { /*Loading DOM*/

    const path = window.location.pathname;
    const page = path.split("/").pop();
    
    if (page == "contact.html"){
        /*FORM MANAGEMENT*/
        const form = document.querySelector('#form');
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = document.getElementById('name').value;
            alert("Hi, " + name + " !\nYour message has been send.\nThanks to contact us.");
        })

    }
    else if (page == "royal-family.html"){
        /*SCRIPT CARDS FAMILY*/
        /*KING*/
        const kingCard = document.querySelector('#king');
        kingCard.addEventListener("mouseover", function(){
            this.src='assets/family/king_left.jpg';
        })
        kingCard.addEventListener("mouseleave", function(){
            this.src='assets/family/king_right.jpg';
        })
        /*PRINCESS*/
        const princessCard = document.querySelector('#princess');
        princessCard.addEventListener("mouseover", function(){
            this.src='assets/family/princess_left.jpg';
        })
        princessCard.addEventListener("mouseleave", function(){
            this.src='assets/family/princess_right.jpg';
        })

        /*QUEEN*/
        const queenCard = document.querySelector('#queen');
        queenCard.addEventListener("mouseover", function(){
            this.src='assets/family/queen_left.jpg';
        })
        queenCard.addEventListener("mouseleave", function(){
            this.src='assets/family/queen_right.jpg';
        })

        /*GUARD*/
        const guardCard = document.querySelector('#guard');
        guardCard.addEventListener("mouseover", function(){
            this.src='assets/family/guard_left.jpg';
        })
        guardCard.addEventListener("mouseleave", function(){
            this.src='assets/family/guard_right.jpg';
        })
    }

    if (page != 'index.html'){
        /*LINE ANIMATION*/
        setTimeout( () => {
            document.querySelector('.color-line').classList.add('color-line-complete');
        }, 500)
    }

    /*BURGER MENU*/
    const openMenu = document.querySelector('#openMenu');
    openMenu.addEventListener('click',function(){
        const navbar = document.querySelector('#navbar');
        const header = document.querySelector('header');
        const iconMenu = document.querySelector('#icon-menu');
        if (navbar.classList.contains('navbar-mobile')){ /*Navbar mobile*/
            iconMenu.src='assets/icon-menu.png';
            navbar.classList.replace('navbar-mobile','navbar');
            header.classList.remove('header-mobile');
            navbar.classList.remove('active');
        }
        else{ /*Navbar desktop */
            iconMenu.src='assets/icon-close.png'
            navbar.classList.replace('navbar','navbar-mobile');
            header.classList.add('header-mobile');
            navbar.classList.add('active');
        }
    })
})
