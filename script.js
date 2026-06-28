//============================
// ShoeFlex JavaScript
// Part 1
//============================

document.addEventListener("DOMContentLoaded", function () {

    //------------------------
    // CART
    //------------------------

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const cartCounter = document.getElementById("cart-count");

    function updateCartCounter() {

        if(cartCounter){

            cartCounter.innerHTML = cart.length;

        }

        localStorage.setItem("cart",JSON.stringify(cart));

    }

    updateCartCounter();


    //------------------------
    // ADD TO CART
    //------------------------

    const buttons = document.querySelectorAll(".add-cart");

    buttons.forEach(button=>{

        button.addEventListener("click",function(e){

            e.preventDefault();

            const product = {

                name:this.dataset.name,

                price:this.dataset.price

            };

            cart.push(product);

            updateCartCounter();

            alert(product.name + " Added To Cart");

        });

    });



    //------------------------
    // SEARCH
    //------------------------

    const search = document.getElementById("searchBox");

    if(search){

        search.addEventListener("keyup",function(){

            const value=this.value.toLowerCase();

            const cards=document.querySelectorAll(".card");

            cards.forEach(card=>{

                const title=card.innerText.toLowerCase();

                if(title.indexOf(value)>-1){

                    card.parentElement.style.display="block";

                }

                else{

                    card.parentElement.style.display="none";

                }

            });

        });

    }




    //------------------------
    // HOVER EFFECT
    //------------------------

    const cards=document.querySelectorAll(".card");

    cards.forEach(card=>{

        card.addEventListener("mouseenter",()=>{

            card.style.transform="scale(1.03)";

            card.style.transition=".3s";

            card.style.boxShadow="0 12px 25px rgba(0,0,0,.25)";

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="scale(1)";

            card.style.boxShadow="none";

        });

    });




    //------------------------
    // BUTTON ANIMATION
    //------------------------

    const btns=document.querySelectorAll(".btn");

    btns.forEach(btn=>{

        btn.addEventListener("mouseenter",()=>{

            btn.style.transform="scale(1.05)";

            btn.style.transition=".3s";

        });

        btn.addEventListener("mouseleave",()=>{

            btn.style.transform="scale(1)";

        });

    });



    //------------------------
    // ACTIVE NAV LINK
    //------------------------

    const current=window.location.pathname.split("/").pop();

    const links=document.querySelectorAll(".nav-link");

    links.forEach(link=>{

        if(link.getAttribute("href")===current){

            link.classList.add("active");

        }

    });



    //------------------------
    // SMOOTH SCROLL
    //------------------------

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            e.preventDefault();

            const target=document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

});