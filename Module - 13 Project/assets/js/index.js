let shirt = [
  {
    id: 1,
    name: "MLB",
    img: "",
    type: "shoes", // shoes, clothes, hat
    color: "red",
    size: 30,
    price: 10000, // in vnd
    description: ""
  },
  {
    id: 2,
    name: "Adidas",
    img: "",
    type: "shoes", // shoes, clothes, hat
    color: "red",
    size: 30,
    price: 10000,
    description:""
  },
  {
    id: 3,
    name: "MLB",
    img: "",
    type: "shoes", // shoes, clothes, hat
    color: "red",
    size: 30,
    price: 10000, // in vnd
    description: ""
  },
  {
    id: 4,
    name: "Adidas",
    img: "",
    type: "shoes", // shoes, clothes, hat
    color: "red",
    size: 30,
    price: 10000,
    description:""
  },
];

function render(type) {
  let shirtContainer = document.getElementById("shirt");
  let shirtRenderString = "";
  for (let product of shirt) {  
    if(product.type = type){
        shirtRenderString += `
        <div class="card" style="width: 18rem;" product-id="${product.id}">
            <img src="${product.img}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description}</p>
            <a href="#" class="btn btn-primary">Add to cart</a>
            </div>
        </div>
      `;
    }
    
  }
  shirtContainer.innerHTML = shirtRenderString
}
render("shirt")

let trousser = [
  {
    id: 1,
    name: "MLB",
    img: "",
    type: "shoes", // shoes, clothes, hat
    color: "red",
    size: 30,
    price: 10000, // in vnd
    description: ""
  },
  {
    id: 2,
    name: "Adidas",
    img: "",
    type: "shoes", // shoes, clothes, hat
    color: "red",
    size: 30,
    price: 10000,
    description:""
  },
  {
    id: 3,
    name: "MLB",
    img: "",
    type: "shoes", // shoes, clothes, hat
    color: "red",
    size: 30,
    price: 10000, // in vnd
    description: ""
  },
  {
    id: 4,
    name: "Adidas",
    img: "",
    type: "shoes", // shoes, clothes, hat
    color: "red",
    size: 30,
    price: 10000,
    description:""
  },
];

function render(type) {
  let trousserContainer = document.getElementById("trousser");
  let trousserRenderString = "";
  for (let product of trousser) {  
    if(product.type = type){
        trousserRenderString += `
        <div class="card" style="width: 18rem;" product-id="${product.id}">
            <img src="${product.img}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description}</p>
            <a href="#" class="btn btn-primary">Add to cart</a>
            </div>
        </div>
      `;
    }
    
  }
  trousserContainer.innerHTML = trousserRenderString
}
render("trousser")


