class Producto {
    constructor(id, vino, precio) {
        this.id = id
        this.vino  = vino.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}


const productos = [];
   
productos.push(new Producto(1, "Malbec", "700"));
productos.push(new Producto(2, "Cabernet", "800"));
productos.push(new Producto(3, "Blend", "850"));
productos.push(new Producto(4, "Merlot", "650"));

for(const producto of productos)
producto.sumaIva();

for (const producto of productos) {
    let contenedor = document.createElement("div");

    contenedor.innerHTML = `<div >
                                <h3> ID: ${producto.id}</h3>
                                <p> Producto: ${producto.vino}</p>
                                <b> $ ${producto.precio}</b>
                          </div>`;
    
    document.body.appendChild(contenedor);                      
}


let subitemList = document.getElementById("container");

subitemList.addEventListener('click', (event) => {
 
    if(event.target.className === 'vino1'){
        if(event.target.children[0].style.display === "block"){
            event.target.children[0].style.display = "none";
        } else {
            event.target.children[0].style.display = "block";
        }
    }
});


let items = document.getElementsByClassName('vino1');
for(let i = 0; i < items.length; i++){
   
    items[i].addEventListener('mouseover', () => {
        items[i].style.backgroundColor = "darkgreen";
    })    
  
    items[i].addEventListener('mouseout', () => {
        items[i].style.backgroundColor = "#ffffff";
    })
}
