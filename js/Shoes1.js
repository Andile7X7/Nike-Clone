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
let XLselected = false;
let Lselected = false
let Mselected = false
let Sselected = false
let XSselected = false

let size;
// xl button
document.getElementById("btnXL").addEventListener("click", function(){
    size = document.getElementById("btnXL").textContent;
    document.getElementById("btnXL").style.border = "1px solid green";
    XLselected = true;
    if(Lselected){
        Lselected = !Lselected;
        document.getElementById("btnL").style.border = "1px solid gray";
    }
    if(Mselected){
        Mselected = !Mselected;
        document.getElementById("btnM").style.border = "1px solid gray";
    }
    if(Sselected){
        Sselected = !Sselected;
        document.getElementById("btnS").style.border = "1px solid gray";
    }
    if(XSselected){
        XSselected = !XSselected;
        document.getElementById("btnXS").style.border = "1px solid gray";
    }

})
document.getElementById("btnL").addEventListener("click", function(){
    size = document.getElementById("btnL").textContent;
    document.getElementById("btnL").style.border = "1px solid green";
    Lselected = true;
    if(XLselected){
        XLselected = !XLselected;
        document.getElementById("btnXL").style.border = "1px solid gray";
    }
    if(Mselected){
        Mselected = !Mselected;
        document.getElementById("btnM").style.border = "1px solid gray";
    }
    if(Sselected){
        Sselected = !Sselected;
        document.getElementById("btnS").style.border = "1px solid gray";
    }
    if(XSselected){
        XSselected = !XSselected;
        document.getElementById("btnXS").style.border = "1px solid gray";
    }

})
document.getElementById("btnM").addEventListener("click", function(){
    size = document.getElementById("btnM").textContent;
    document.getElementById("btnM").style.border = "1px solid green";
    Mselected = true;
    if(Lselected){
        Lselected = !Lselected;
        document.getElementById("btnL").style.border = "1px solid gray";
    }
    if(Mselected){
        XLselected = !XLselected;
        document.getElementById("btnXL").style.border = "1px solid gray";
    }
    if(Lselected){
        Sselected = !Sselected;
        document.getElementById("btnS").style.border = "1px solid gray";
    }
    if(XSselected){
        XSselected = !XSselected;
        document.getElementById("btnXS").style.border = "1px solid gray";
    }

})
document.getElementById("btnS").addEventListener("click", function(){
    size = document.getElementById("btnS").textContent;
    document.getElementById("btnS").style.border = "1px solid green";
    Sselected = true;
    if(Lselected){
        Lselected = !Lselected;
        document.getElementById("btnL").style.border = "1px solid gray";
    }
    if(Mselected){
        Mselected = !Mselected;
        document.getElementById("btnM").style.border = "1px solid gray";
    }
    if(XLselected){
        XLselected = !XLselected;
        document.getElementById("btnXL").style.border = "1px solid gray";
    }
    if(XSselected){
        XSselected = !XSselected;
        document.getElementById("btnXS").style.border = "1px solid gray";
    }

})
document.getElementById("btnXS").addEventListener("click", function(){
    size = document.getElementById("btnXS").textContent;
    document.getElementById("btnXS").style.border = "1px solid green";
    XSselected = true;
    if(Lselected){
        Lselected = !Lselected;
        document.getElementById("btnL").style.border = "1px solid gray";
    }
    if(Mselected){
        Mselected = !Mselected;
        document.getElementById("btnM").style.border = "1px solid gray";
    }
    if(Lselected){
        Sselected = !Sselected;
        document.getElementById("btnS").style.border = "1px solid gray";
    }
    if(XLselected){
        XLselected = !XLselected;
        document.getElementById("btnXL").style.border = "1px solid gray";
    }

})
let addToBag = document.getElementById("btnAddToBag")


addToBag.addEventListener("click", function(){
    if(size === undefined){
        alert("Please Select A Size")
    }
    else {
    div = document.querySelector(".Confirm")
    document.getElementById("Size").textContent = "Size : " + size
    div.classList.add("Visible");
    }
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

const button1 = document.querySelector('[data-product-id="B1"]');
const button2 = document.querySelector('[data-product-id="B2"]');
const button3 = document.querySelector('[data-product-id="B3"]');
const button4 = document.querySelector('[data-product-id="B4"]');
const button5 = document.querySelector('[data-product-id="B5"]');
const button6 = document.querySelector('[data-product-id="B6"]');
const button7 = document.querySelector('[data-product-id="B7"]');
const button8 = document.querySelector('[data-product-id="B8"]');

if (button1){
button1.addEventListener("click", function(){
            let Cart = JSON.parse(localStorage.getItem("CartArray")) || [];
            let newItem = {
            ProductName: document.querySelector('[data-product-id="PN1"]').textContent,
            ProductDescription: document.querySelector('[data-product-id="PD1"]').textContent,
            ProductPrice : document.querySelector('[data-product-id="PP1"]').textContent,
            ProductSize : document.querySelector('[data-product-id="PS1"]').textContent,
            ProductImg: document.querySelector('[data-product-id="PI1"]').src
        }
    Cart.push(newItem);
    localStorage.setItem("CartArray", JSON.stringify(Cart));
})
}
if (button2){
button2.addEventListener("click", function(){
            let Cart = JSON.parse(localStorage.getItem("CartArray")) || [];
            let newItem = {
            ProductName: document.querySelector('[data-product-id="PN2"]').textContent,
            ProductDescription: document.querySelector('[data-product-id="PD2"]').textContent,
            ProductPrice : document.querySelector('[data-product-id="PP2"]').textContent,
            ProductSize : document.querySelector('[data-product-id="PS2"]').textContent,
            ProductImg: document.querySelector('[data-product-id="PI2"]').src
        }
    Cart.push(newItem);
    localStorage.setItem("CartArray", JSON.stringify(Cart));
})
}
if(button3){
button3.addEventListener("click", function(){
            let Cart = JSON.parse(localStorage.getItem("CartArray")) || [];
            let newItem = {
            ProductName: document.querySelector('[data-product-id="PN3"]').textContent,
            ProductDescription: document.querySelector('[data-product-id="PD3"]').textContent,
            ProductPrice : document.querySelector('[data-product-id="PP3"]').textContent,
            ProductSize : document.querySelector('[data-product-id="PS3"]').textContent,
            ProductImg: document.querySelector('[data-product-id="PI3"]').src
        }
    Cart.push(newItem);
    localStorage.setItem("CartArray", JSON.stringify(Cart));
})
}
if(button4){
button4.addEventListener("click", function(){
            let Cart = JSON.parse(localStorage.getItem("CartArray")) || [];
            let newItem = {
            ProductName: document.querySelector('[data-product-id="PN4"]').textContent,
            ProductDescription: document.querySelector('[data-product-id="PD4"]').textContent,
            ProductPrice : document.querySelector('[data-product-id="PP4"]').textContent,
            ProductSize : document.querySelector('[data-product-id="PS4"]').textContent,
            ProductImg: document.querySelector('[data-product-id="PI4"]').src
        }
    Cart.push(newItem);
    localStorage.setItem("CartArray", JSON.stringify(Cart));
})
}

if (button5){
button1.addEventListener("click", function(){
            let Cart = JSON.parse(localStorage.getItem("CartArray")) || [];
            let newItem = {
            ProductName: document.querySelector('[data-product-id="PN5"]').textContent,
            ProductDescription: document.querySelector('[data-product-id="PD5"]').textContent,
            ProductPrice : document.querySelector('[data-product-id="PP5"]').textContent,
            ProductSize : document.querySelector('[data-product-id="PS5"]').textContent,
            ProductImg: document.querySelector('[data-product-id="PI5"]').src
        }
    Cart.push(newItem);
    localStorage.setItem("CartArray", JSON.stringify(Cart));
})
}
if (button6){
button2.addEventListener("click", function(){
            let Cart = JSON.parse(localStorage.getItem("CartArray")) || [];
            let newItem = {
            ProductName: document.querySelector('[data-product-id="PN6"]').textContent,
            ProductDescription: document.querySelector('[data-product-id="PD6"]').textContent,
            ProductPrice : document.querySelector('[data-product-id="PP6"]').textContent,
            ProductSize : document.querySelector('[data-product-id="PS6"]').textContent,
            ProductImg: document.querySelector('[data-product-id="PI6"]').src
        }
    Cart.push(newItem);
    localStorage.setItem("CartArray", JSON.stringify(Cart));
})
}
if(button7){
button3.addEventListener("click", function(){
            let Cart = JSON.parse(localStorage.getItem("CartArray")) || [];
            let newItem = {
            ProductName: document.querySelector('[data-product-id="PN7"]').textContent,
            ProductDescription: document.querySelector('[data-product-id="PD7"]').textContent,
            ProductPrice : document.querySelector('[data-product-id="PP7"]').textContent,
            ProductSize : document.querySelector('[data-product-id="PS7"]').textContent,
            ProductImg: document.querySelector('[data-product-id="PI7"]').src
        }
    Cart.push(newItem);
    localStorage.setItem("CartArray", JSON.stringify(Cart));
})
}
if (button8){
button2.addEventListener("click", function(){
            let Cart = JSON.parse(localStorage.getItem("CartArray")) || [];
            let newItem = {
            ProductName: document.querySelector('[data-product-id="PN8"]').textContent,
            ProductDescription: document.querySelector('[data-product-id="PD8"]').textContent,
            ProductPrice : document.querySelector('[data-product-id="PP8"]').textContent,
            ProductSize : document.querySelector('[data-product-id="PS8"]').textContent,
            ProductImg: document.querySelector('[data-product-id="PI8"]').src
        }
    Cart.push(newItem);
    localStorage.setItem("CartArray", JSON.stringify(Cart));
})
}
//Basketball section
if(document.querySelector('[data-product-id="BB1"]')){
   document.querySelector('[data-product-id="BB1"]').addEventListener("click", function(){
            let Cart = JSON.parse(localStorage.getItem("CartArray")) || [];
            let newItem = {
            ProductName: document.querySelector('[data-product-id="BPN1"]').textContent,
            ProductDescription: document.querySelector('[data-product-id="BPD1"]').textContent,
            ProductPrice : document.querySelector('[data-product-id="BPP1"]').textContent,
            ProductSize : document.querySelector('[data-product-id="BPS1"]').textContent,
            ProductImg: document.querySelector('[data-product-id="BPI1"]').src
        }
    Cart.push(newItem);
    localStorage.setItem("CartArray", JSON.stringify(Cart));
   }) 
}

if(document.querySelector('[data-product-id="BB2"]')){
   document.querySelector('[data-product-id="BB2"]').addEventListener("click", function(){
            let Cart = JSON.parse(localStorage.getItem("CartArray")) || [];
            let newItem = {
            ProductName: document.querySelector('[data-product-id="BPN2"]').textContent,
            ProductDescription: document.querySelector('[data-product-id="BPD2"]').textContent,
            ProductPrice : document.querySelector('[data-product-id="BPP2"]').textContent,
            ProductSize : document.querySelector('[data-product-id="BPS2"]').textContent,
            ProductImg: document.querySelector('[data-product-id="BPI2"]').src
        }
    Cart.push(newItem);
    localStorage.setItem("CartArray", JSON.stringify(Cart));
   }) 
}
if(document.querySelector('[data-product-id="BB3"]')){
   document.querySelector('[data-product-id="BB3"]').addEventListener("click", function(){
            let Cart = JSON.parse(localStorage.getItem("CartArray")) || [];
            let newItem = {
            ProductName: document.querySelector('[data-product-id="BPN3"]').textContent,
            ProductDescription: document.querySelector('[data-product-id="BPD3"]').textContent,
            ProductPrice : document.querySelector('[data-product-id="BPP3"]').textContent,
            ProductSize : document.querySelector('[data-product-id="BPS3"]').textContent,
            ProductImg: document.querySelector('[data-product-id="BPI3"]').src
        }
    Cart.push(newItem);
    localStorage.setItem("CartArray", JSON.stringify(Cart));
   }) 
}
if(document.querySelector('[data-product-id="BB4"]')){
   document.querySelector('[data-product-id="BB4"]').addEventListener("click", function(){
            let Cart = JSON.parse(localStorage.getItem("CartArray")) || [];
            let newItem = {
            ProductName: document.querySelector('[data-product-id="BPN4"]').textContent,
            ProductDescription: document.querySelector('[data-product-id="BPD4"]').textContent,
            ProductPrice : document.querySelector('[data-product-id="BPP4"]').textContent,
            ProductSize : document.querySelector('[data-product-id="BPS4"]').textContent,
            ProductImg: document.querySelector('[data-product-id="BPI4"]').src
        }
    Cart.push(newItem);
    localStorage.setItem("CartArray", JSON.stringify(Cart));
   }) 
}
// GYM SECTION
if(document.querySelector('[data-product-id="GB1"]')){
   document.querySelector('[data-product-id="GB1"]').addEventListener("click", function(){
            let Cart = JSON.parse(localStorage.getItem("CartArray")) || [];
            let newItem = {
            ProductName: document.querySelector('[data-product-id="GPN1"]').textContent,
            ProductDescription: document.querySelector('[data-product-id="GPD1"]').textContent,
            ProductPrice : document.querySelector('[data-product-id="GPP1"]').textContent,
            ProductSize : document.querySelector('[data-product-id="GPS1"]').textContent,
            ProductImg: document.querySelector('[data-product-id="GPI1"]').src
        }
    Cart.push(newItem);
    localStorage.setItem("CartArray", JSON.stringify(Cart));
   }) 
}

if(document.querySelector('[data-product-id="GB2"]')){
   document.querySelector('[data-product-id="GB2"]').addEventListener("click", function(){
            let Cart = JSON.parse(localStorage.getItem("CartArray")) || [];
            let newItem = {
            ProductName: document.querySelector('[data-product-id="GPN2"]').textContent,
            ProductDescription: document.querySelector('[data-product-id="GPD2"]').textContent,
            ProductPrice : document.querySelector('[data-product-id="GPP2"]').textContent,
            ProductSize : document.querySelector('[data-product-id="GPS2"]').textContent,
            ProductImg: document.querySelector('[data-product-id="GPI2"]').src
        }
    Cart.push(newItem);
    localStorage.setItem("CartArray", JSON.stringify(Cart));
   }) 
}
if(document.querySelector('[data-product-id="GB3"]')){
   document.querySelector('[data-product-id="GB3"]').addEventListener("click", function(){
            let Cart = JSON.parse(localStorage.getItem("CartArray")) || [];
            let newItem = {
            ProductName: document.querySelector('[data-product-id="GPN3"]').textContent,
            ProductDescription: document.querySelector('[data-product-id="GPD3"]').textContent,
            ProductPrice : document.querySelector('[data-product-id="GPP3"]').textContent,
            ProductSize : document.querySelector('[data-product-id="GPS3"]').textContent,
            ProductImg: document.querySelector('[data-product-id="GPI3"]').src
        }
    Cart.push(newItem);
    localStorage.setItem("CartArray", JSON.stringify(Cart));
   }) 
}
if(document.querySelector('[data-product-id="GB4"]')){
   document.querySelector('[data-product-id="GB4"]').addEventListener("click", function(){
            let Cart = JSON.parse(localStorage.getItem("CartArray")) || [];
            let newItem = {
            ProductName: document.querySelector('[data-product-id="GPN4"]').textContent,
            ProductDescription: document.querySelector('[data-product-id="GPD4"]').textContent,
            ProductPrice : document.querySelector('[data-product-id="GPP4"]').textContent,
            ProductSize : document.querySelector('[data-product-id="GPS4"]').textContent,
            ProductImg: document.querySelector('[data-product-id="GPI4"]').src
        }
    Cart.push(newItem);
    localStorage.setItem("CartArray", JSON.stringify(Cart));
   }) 
}
// JORDAN SECTION
if(document.querySelector('[data-product-id="JB1"]')){
   document.querySelector('[data-product-id="JB1"]').addEventListener("click", function(){
            let Cart = JSON.parse(localStorage.getItem("CartArray")) || [];
            let newItem = {
            ProductName: document.querySelector('[data-product-id="JPN1"]').textContent,
            ProductDescription: document.querySelector('[data-product-id="JPD1"]').textContent,
            ProductPrice : document.querySelector('[data-product-id="JPP1"]').textContent,
            ProductSize : document.querySelector('[data-product-id="JPS1"]').textContent,
            ProductImg: document.querySelector('[data-product-id="JPI1"]').src
        }
    Cart.push(newItem);
    localStorage.setItem("CartArray", JSON.stringify(Cart));
   }) 
}

if(document.querySelector('[data-product-id="JB2"]')){
   document.querySelector('[data-product-id="JB2"]').addEventListener("click", function(){
            let Cart = JSON.parse(localStorage.getItem("CartArray")) || [];
            let newItem = {
            ProductName: document.querySelector('[data-product-id="JPN2"]').textContent,
            ProductDescription: document.querySelector('[data-product-id="JPD2"]').textContent,
            ProductPrice : document.querySelector('[data-product-id="JPP2"]').textContent,
            ProductSize : document.querySelector('[data-product-id="JPS2"]').textContent,
            ProductImg: document.querySelector('[data-product-id="JPI2"]').src
        }
    Cart.push(newItem);
    localStorage.setItem("CartArray", JSON.stringify(Cart));
   }) 
}
if(document.querySelector('[data-product-id="JB3"]')){
   document.querySelector('[data-product-id="JB3"]').addEventListener("click", function(){
            let Cart = JSON.parse(localStorage.getItem("CartArray")) || [];
            let newItem = {
            ProductName: document.querySelector('[data-product-id="JPN3"]').textContent,
            ProductDescription: document.querySelector('[data-product-id="JPD3"]').textContent,
            ProductPrice : document.querySelector('[data-product-id="JPP3"]').textContent,
            ProductSize : document.querySelector('[data-product-id="JPS3"]').textContent,
            ProductImg: document.querySelector('[data-product-id="JPI3"]').src
        }
    Cart.push(newItem);
    localStorage.setItem("CartArray", JSON.stringify(Cart));
   }) 
}
if(document.querySelector('[data-product-id="JB4"]')){
   document.querySelector('[data-product-id="JB4"]').addEventListener("click", function(){
            let Cart = JSON.parse(localStorage.getItem("CartArray")) || [];
            let newItem = {
            ProductName: document.querySelector('[data-product-id="JPN4"]').textContent,
            ProductDescription: document.querySelector('[data-product-id="JPD4"]').textContent,
            ProductPrice : document.querySelector('[data-product-id="JPP4"]').textContent,
            ProductSize : document.querySelector('[data-product-id="JPS4"]').textContent,
            ProductImg: document.querySelector('[data-product-id="JPI4"]').src
        }
    Cart.push(newItem);
    localStorage.setItem("CartArray", JSON.stringify(Cart));
   }) 
}
//Football section
if(document.querySelector('[data-product-id="FB1"]')){
   document.querySelector('[data-product-id="FB1"]').addEventListener("click", function(){
            let Cart = JSON.parse(localStorage.getItem("CartArray")) || [];
            let newItem = {
            ProductName: document.querySelector('[data-product-id="FPN1"]').textContent,
            ProductDescription: document.querySelector('[data-product-id="FPD1"]').textContent,
            ProductPrice : document.querySelector('[data-product-id="FPP1"]').textContent,
            ProductSize : document.querySelector('[data-product-id="FPS1"]').textContent,
            ProductImg: document.querySelector('[data-product-id="FPI1"]').src
        }
    Cart.push(newItem);
    localStorage.setItem("CartArray", JSON.stringify(Cart));
   }) 
}

if(document.querySelector('[data-product-id="FB2"]')){
   document.querySelector('[data-product-id="FB2"]').addEventListener("click", function(){
            let Cart = JSON.parse(localStorage.getItem("CartArray")) || [];
            let newItem = {
            ProductName: document.querySelector('[data-product-id="FPN2"]').textContent,
            ProductDescription: document.querySelector('[data-product-id="FPD2"]').textContent,
            ProductPrice : document.querySelector('[data-product-id="FPP2"]').textContent,
            ProductSize : document.querySelector('[data-product-id="FPS2"]').textContent,
            ProductImg: document.querySelector('[data-product-id="FPI2"]').src
        }
    Cart.push(newItem);
    localStorage.setItem("CartArray", JSON.stringify(Cart));
   }) 
}
if(document.querySelector('[data-product-id="FB3"]')){
   document.querySelector('[data-product-id="FB3"]').addEventListener("click", function(){
            let Cart = JSON.parse(localStorage.getItem("CartArray")) || [];
            let newItem = {
            ProductName: document.querySelector('[data-product-id="FPN3"]').textContent,
            ProductDescription: document.querySelector('[data-product-id="FPD3"]').textContent,
            ProductPrice : document.querySelector('[data-product-id="FPP3"]').textContent,
            ProductSize : document.querySelector('[data-product-id="FPS3"]').textContent,
            ProductImg: document.querySelector('[data-product-id="FPI3"]').src
        }
    Cart.push(newItem);
    localStorage.setItem("CartArray", JSON.stringify(Cart));
   }) 
}
if(document.querySelector('[data-product-id="FB4"]')){
   document.querySelector('[data-product-id="FB4"]').addEventListener("click", function(){
            let Cart = JSON.parse(localStorage.getItem("CartArray")) || [];
            let newItem = {
            ProductName: document.querySelector('[data-product-id="FPN4"]').textContent,
            ProductDescription: document.querySelector('[data-product-id="FPD4"]').textContent,
            ProductPrice : document.querySelector('[data-product-id="FPP4"]').textContent,
            ProductSize : document.querySelector('[data-product-id="FPS4"]').textContent,
            ProductImg: document.querySelector('[data-product-id="FPI4"]').src
        }
    Cart.push(newItem);
    localStorage.setItem("CartArray", JSON.stringify(Cart));
   }) 
}
//equipment SEction
if(document.querySelector('[data-product-id="EB1"]')){
   document.querySelector('[data-product-id="EB1"]').addEventListener("click", function(){
            let Cart = JSON.parse(localStorage.getItem("CartArray")) || [];
            let newItem = {
            ProductName: document.querySelector('[data-product-id="EPN1"]').textContent,
            ProductDescription: document.querySelector('[data-product-id="EPD1"]').textContent,
            ProductPrice : document.querySelector('[data-product-id="EPP1"]').textContent,
            ProductSize : document.querySelector('[data-product-id="EPS1"]').textContent,
            ProductImg: document.querySelector('[data-product-id="EPI1"]').src
        }
    Cart.push(newItem);
    localStorage.setItem("CartArray", JSON.stringify(Cart));
   }) 
}

if(document.querySelector('[data-product-id="EB2"]')){
   document.querySelector('[data-product-id="EB2"]').addEventListener("click", function(){
            let Cart = JSON.parse(localStorage.getItem("CartArray")) || [];
            let newItem = {
            ProductName: document.querySelector('[data-product-id="EPN2"]').textContent,
            ProductDescription: document.querySelector('[data-product-id="EPD2"]').textContent,
            ProductPrice : document.querySelector('[data-product-id="EPP2"]').textContent,
            ProductSize : document.querySelector('[data-product-id="EPS2"]').textContent,
            ProductImg: document.querySelector('[data-product-id="EPI2"]').src
        }
    Cart.push(newItem);
    localStorage.setItem("CartArray", JSON.stringify(Cart));
   }) 
}
if(document.querySelector('[data-product-id="BB3"]')){
   document.querySelector('[data-product-id="BB3"]').addEventListener("click", function(){
            let Cart = JSON.parse(localStorage.getItem("CartArray")) || [];
            let newItem = {
            ProductName: document.querySelector('[data-product-id="EPN3"]').textContent,
            ProductDescription: document.querySelector('[data-product-id="EPD3"]').textContent,
            ProductPrice : document.querySelector('[data-product-id="EPP3"]').textContent,
            ProductSize : document.querySelector('[data-product-id="EPS3"]').textContent,
            ProductImg: document.querySelector('[data-product-id="EPI3"]').src
        }
    Cart.push(newItem);
    localStorage.setItem("CartArray", JSON.stringify(Cart));
   }) 
}
if(document.querySelector('[data-product-id="EB4"]')){
   document.querySelector('[data-product-id="EB4"]').addEventListener("click", function(){
            let Cart = JSON.parse(localStorage.getItem("CartArray")) || [];
            let newItem = {
            ProductName: document.querySelector('[data-product-id="EPN4"]').textContent,
            ProductDescription: document.querySelector('[data-product-id="EPD4"]').textContent,
            ProductPrice : document.querySelector('[data-product-id="EPP4"]').textContent,
            ProductSize : document.querySelector('[data-product-id="EPS4"]').textContent,
            ProductImg: document.querySelector('[data-product-id="EPI4"]').src
        }
    Cart.push(newItem);
    localStorage.setItem("CartArray", JSON.stringify(Cart));
   }) 
}
//Running section
if(document.querySelector('[data-product-id="RB1"]')){
   document.querySelector('[data-product-id="RB1"]').addEventListener("click", function(){
            let Cart = JSON.parse(localStorage.getItem("CartArray")) || [];
            let newItem = {
            ProductName: document.querySelector('[data-product-id="RPN1"]').textContent,
            ProductDescription: document.querySelector('[data-product-id="RPD1"]').textContent,
            ProductPrice : document.querySelector('[data-product-id="RPP1"]').textContent,
            ProductSize : document.querySelector('[data-product-id="RPS1"]').textContent,
            ProductImg: document.querySelector('[data-product-id="RPI1"]').src
        }
    Cart.push(newItem);
    localStorage.setItem("CartArray", JSON.stringify(Cart));
   }) 
}

if(document.querySelector('[data-product-id="RB2"]')){
   document.querySelector('[data-product-id="RB2"]').addEventListener("click", function(){
            let Cart = JSON.parse(localStorage.getItem("CartArray")) || [];
            let newItem = {
            ProductName: document.querySelector('[data-product-id="RPN2"]').textContent,
            ProductDescription: document.querySelector('[data-product-id="RPD2"]').textContent,
            ProductPrice : document.querySelector('[data-product-id="RPP2"]').textContent,
            ProductSize : document.querySelector('[data-product-id="RPS2"]').textContent,
            ProductImg: document.querySelector('[data-product-id="RPI2"]').src
        }
    Cart.push(newItem);
    localStorage.setItem("CartArray", JSON.stringify(Cart));
   }) 
}
if(document.querySelector('[data-product-id="RB3"]')){
   document.querySelector('[data-product-id="RB3"]').addEventListener("click", function(){
            let Cart = JSON.parse(localStorage.getItem("CartArray")) || [];
            let newItem = {
            ProductName: document.querySelector('[data-product-id="RPN3"]').textContent,
            ProductDescription: document.querySelector('[data-product-id="RPD3"]').textContent,
            ProductPrice : document.querySelector('[data-product-id="RPP3"]').textContent,
            ProductSize : document.querySelector('[data-product-id="RPS3"]').textContent,
            ProductImg: document.querySelector('[data-product-id="RPI3"]').src
        }
    Cart.push(newItem);
    localStorage.setItem("CartArray", JSON.stringify(Cart));
   }) 
}
if(document.querySelector('[data-product-id="RB4"]')){
   document.querySelector('[data-product-id="RB4"]').addEventListener("click", function(){
            let Cart = JSON.parse(localStorage.getItem("CartArray")) || [];
            let newItem = {
            ProductName: document.querySelector('[data-product-id="RPN4"]').textContent,
            ProductDescription: document.querySelector('[data-product-id="RPD4"]').textContent,
            ProductPrice : document.querySelector('[data-product-id="RPP4"]').textContent,
            ProductSize : document.querySelector('[data-product-id="RPS4"]').textContent,
            ProductImg: document.querySelector('[data-product-id="RPI4"]').src
        }
    Cart.push(newItem);
    localStorage.setItem("CartArray", JSON.stringify(Cart));
   }) 
}
if(document.getElementById("Signup")){
    document.getElementById("Signup").addEventListener("click", function(){
        window.location.href = "Login.html"
    })
}
if(document.querySelector(".CallUs")){
    document.querySelector.addEventListener("click", function(){
  window.location.href = "tel:+10112560701";
    })
}