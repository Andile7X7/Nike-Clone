let total = 0;
let Cart = JSON.parse(localStorage.getItem("CartArray")) || [];

 console.log(Cart[0]);

Cart.forEach(item => {


    
  newDiv = document.createElement('div');
  newDiv.className = "Placeholder";

  ImageDiv = document.createElement("div");
  ImageDiv.className = "Image";

  ProductImage = document.createElement("img");
  ProductImage.id = "ProductImage"
  ProductImage.src = item.ProductImg;

  ImageDiv.appendChild(ProductImage);

  div2 = document.createElement("div");
  div2.className = "Description";

   ProductName = document.createElement("span")
   ProductName.textContent = item.ProductName;

   ProductDescription = document.createElement("span")
   ProductDescription.textContent = item.ProductDescription

    ProductSize = document.createElement("span");
    ProductSize.textContent = item.ProductSize;

    ProductPrice = document.createElement("span");
    ProductPrice.id = "ProductPrice"
    ProductPrice.textContent = item.ProductPrice;
    div2.appendChild(ProductName);
    div2.appendChild(ProductDescription);
    div2.appendChild(ProductSize);
    div2.appendChild(ProductPrice);

    newDiv.appendChild(ImageDiv);
    newDiv.appendChild(div2);
    let Bag = document.querySelector(".Bag");
    Bag.appendChild(newDiv);
    let PriceText = item.ProductPrice.replace("R","")
    let parts = PriceText.split(",");
    let cleaned = parts[0] + parts[1] + "." + parts[2];
    let price = parseFloat(cleaned);
    total = total + price;

  
})
document.getElementById("PriceTotal").textContent = "Total Price is : R" +  total;
document.getElementById("Logo").addEventListener("click", function(){
    window.location.href = "index.html"
})
document.getElementById("User").addEventListener("click", function(){
    window.location.href ="Login.html"
})