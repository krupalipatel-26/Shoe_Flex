
// ShoeFlex JavaScript

document.addEventListener("DOMContentLoaded", function () {

    // CART

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const cartCounter = document.getElementById("cart-count");

    function updateCartCounter() {

        if(cartCounter){

            cartCounter.innerHTML = cart.length;

        }

        localStorage.setItem("cart",JSON.stringify(cart));

    }

    updateCartCounter();

    // ADD TO CART

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


    // SEARCH

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



    // HOVER EFFECT

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

    // BUTTON ANIMATION

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



    // ACTIVE NAV LINK

    const current=window.location.pathname.split("/").pop();

    const links=document.querySelectorAll(".nav-link");

    links.forEach(link=>{

        if(link.getAttribute("href")===current){

            link.classList.add("active");

        }

    });


    // SMOOTH SCROLL

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

// TOAST NOTIFICATION

function showToast(message){

    const toast=document.createElement("div");

    toast.innerHTML=message;

    toast.style.position="fixed";
    toast.style.top="20px";
    toast.style.right="20px";
    toast.style.background="#222";
    toast.style.color="#fff";
    toast.style.padding="12px 18px";
    toast.style.borderRadius="8px";
    toast.style.zIndex="9999";
    toast.style.boxShadow="0 10px 20px rgba(0,0,0,.3)";
    toast.style.opacity="0";
    toast.style.transition=".4s";

    document.body.appendChild(toast);

    setTimeout(()=>{

        toast.style.opacity="1";

    },100);

    setTimeout(()=>{

        toast.style.opacity="0";

        setTimeout(()=>{

            toast.remove();

        },400);

    },2500);

}

// WISHLIST

let wishlist=JSON.parse(localStorage.getItem("wishlist")) || [];

const wishlistCounter=document.getElementById("wishlist-count");

function updateWishlist(){

    if(wishlistCounter){

        wishlistCounter.innerHTML=wishlist.length;

    }

    localStorage.setItem("wishlist",JSON.stringify(wishlist));

}

updateWishlist();

document.querySelectorAll(".fa-heart").forEach(icon=>{

    icon.addEventListener("click",function(e){

        e.preventDefault();

        const card=this.closest(".card");

        if(card){

            const name=card.querySelector(".card-title").innerText;

            wishlist.push(name);

            updateWishlist();

            showToast(name+" added to Wishlist ❤️");

        }

    });

});


// DARK MODE

const darkBtn=document.getElementById("darkModeBtn");

if(localStorage.getItem("theme")=="dark"){

    document.body.classList.add("bg-dark");
    document.body.classList.add("text-white");

}

if(darkBtn){

darkBtn.addEventListener("click",()=>{

    document.body.classList.toggle("bg-dark");
    document.body.classList.toggle("text-white");

    if(document.body.classList.contains("bg-dark")){

        localStorage.setItem("theme","dark");

    }

    else{

        localStorage.setItem("theme","light");

    }

});

}

// BACK TO TOP

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});


topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
