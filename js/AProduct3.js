let MainMenuVisible = false;
console.log("Script Running");
console.log(MainMenuVisible);

//Main Menu
 let DisplayedMenu = document.querySelector(".Menu1");
let MenuClick = document.getElementById("Menu");
let MenuExit = document.querySelector(".Exit");


// clothing
let ClothingMenu = document.querySelector(".MenuClothing");
let ClothingEnter = document.querySelector(".Clothing");
let ClothingBack = document.getElementById("Clothing2Menu");
let ClothingExit = document.getElementById("Exit2");
// sportswear
let SportswearMenu = document.querySelector(".SportswearMenu");
let SportswearExit = document.getElementById("Exit3");
let Sports2Menu = document.getElementById("Sportswear2Menu");
let SportswearEnter = document.querySelector(".Sportswear");



function toggleMainMenu(){
    MainMenuVisible = !MainMenuVisible;
    console.log("Visible :"+ MainMenuVisible);
    if(MainMenuVisible){
        DisplayedMenu.classList.add("Visible")

    }
}
function toggleMainMenuOff(){
    MainMenuVisible = !MainMenuVisible;
    if(!MainMenuVisible){
        DisplayedMenu.classList.remove("Visible");
    }
}


MenuClick.addEventListener("click", toggleMainMenu);




let ClothingVisible = false;
function toggleClothingMenu(){
    ClothingVisible = !ClothingVisible;
    if(ClothingVisible){
        ClothingMenu.classList.add("Visible");
        DisplayedMenu.classList.remove("Visible");
    }
}

ClothingEnter.addEventListener("click", toggleClothingMenu);
function toggleClothingOff(){
    ClothingVisible = !ClothingVisible;
    if(ClothingVisible == false){
        ClothingMenu.classList.remove("Visible")
        DisplayedMenu.classList.add("Visible");
    }
}
ClothingBack.addEventListener("click", toggleClothingOff);
MenuExit.addEventListener("click", toggleMainMenuOff);
ClothingExit.addEventListener("click", function(){
    ClothingMenu.style.transformOrigin = "right";
    ClothingMenu.classList.remove("Visible");
    
})

// sports menu function
SportswearEnter.addEventListener("click", function(){
    SportswearMenu.classList.add("Visible");
    DisplayedMenu.classList.remove("Visible");
})
SportswearExit.addEventListener("click", function(){
    SportswearMenu.style.transformOrigin = "right"
    SportswearMenu.classList.remove("Visible");
})
Sports2Menu.addEventListener("click", function(){
    SportswearMenu.classList.remove("Visible");
    DisplayedMenu.classList.add("Visible");
})

let HelpVisible = false;
let ResourcesVisible = false;
let Help = document.getElementById("Help");
let Resources = document.getElementById("Resources")
let HelpContent = document.querySelector(".Content1")
let ResourcesContent = document.querySelector(".Content2")

//HelpContent.style.maxHeight = HelpContent.scrollHeight + "px";
let ClothingPageEnter = document.getElementById("ClothingPageEnter")
ClothingPageEnter.addEventListener("click",function(){
    window.location.href = "Hoodies.html"
})
let ShortsPageEnter = document.getElementById("ShortsPageEnter");
ShortsPageEnter.addEventListener("click", function(){
    window.location.href = "Shorts.html"
})
document.getElementById("JacketsPageEnter").addEventListener("click", function(){
    window.location.href = "Jackets.html"
})
document.getElementById("AccessoriesPageEnter").addEventListener("click", function(){
    window.location.href = "Accessories.html"
})

document.getElementById("TrousersPageEnter").addEventListener("click", function(){
    window.location.href = "Trousers.html"
})
document.getElementById("TopsPageEnter").addEventListener("click", function(){
    window.location.href = "Tops.html"
})
document.getElementById("Logo").addEventListener("click", function(){
    window.location.href = "index.html"
})

let size;

let addToBag = document.getElementById("btnAddToBag");
addToBag.addEventListener("click", function(){
    div = document.querySelector(".Confirm")
    document.getElementById("Size").textContent = "Size : One size"
    div.classList.add("Visible");

            let Cart = JSON.parse(localStorage.getItem("CartArray")) || [];
            let newItem = {
            ProductName: document.getElementById("ProductName").textContent,
            ProductDescription: document.getElementById("ProductDescription").textContent,
            ProductPrice : document.getElementById("ProductPrice").textContent,
            ProductSize : size,
            ProductImg: document.getElementById("ProductImage").src
        }
    Cart.push(newItem);
    localStorage.setItem("CartArray", JSON.stringify(Cart));
})

document.getElementById("ConfirmExit").addEventListener("click", function(){
    div = document.querySelector(".Confirm");
    div.classList.remove("Visible")
    
})
document.querySelector(".Shoes").addEventListener("click", function(){
    window.location.href = "Shoes.html"
})
document.querySelector(".Jordan").addEventListener("click", function(){
    window.location.href = "Jordan.html"
})
document.querySelector(".Equipment").addEventListener("click", function(){
    window.location.href = "Equipment.html"
})
document.getElementById("FootballOption").addEventListener("click", function(){
    window.location.href = "Football.html"
})
document.getElementById("RunningShoes").addEventListener("click", function(){
    window.location.href = "Running.html"
})
document.getElementById("GymShoes").addEventListener("click", function(){
    window.location.href = "Gym.html"
})
document.getElementById("BasketballShoes").addEventListener("click", function(){
    window.location.href = "Basketball.html"
})
document.getElementById("btnCheckout").addEventListener("click", function(){
    window.location.href = "Bag.html"
})
document.getElementById("Cart").addEventListener("click", function(){
    window.location.href = "Bag.html"
})