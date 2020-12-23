document.addEventListener('DOMContentLoaded',() => {

  const cartDelBtn = document.querySelectorAll('.cart_del')
  const addQuantity = document.querySelectorAll('.cart .quantity')
  const cartItems = document.querySelectorAll('.add_product')


  cartDelBtn.forEach( btn => { btn.addEventListener('click',delItem) })
  addQuantity.forEach(input => { input.addEventListener('change', setQuantity)})
  cartItems.forEach((btn) => {btn.addEventListener('click', addItem)})

  
})

function addItem(e) {

  const product = e.currentTarget.parentElement.parentElement
  
  const price = product.querySelector('.price').innerText.replace('$','')
  const productName = product.querySelector('.product_name').innerText

  let  cartList = document.querySelector('.cart-list')

  let tr= document.createElement('tr')
  
  tr.classList.add('cart-item')

  tr.innerHTML=
    `
    <td>${productName}</td>
    <td><input type="number" value="2" class="quantity"></td>
    <td class="price">${price}</td>
    <td class="subTotal">$25</td>
    <td><button class="cart_del btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button></td>
     
    `
  const  items = cartList.querySelectorAll('.cart-item')
  for(let i = 0; i< items.length; i++){
    
    const item = items[i]

    //TODO

    let title = item.querySelector('.item-name').innerText

    

    if(title === productName){

      item.querySelector('.quantity').value = Number(item.querySelector('.quantity').value)+1

      // return;

    }


        


  }
    cartList.appendChild(tr)
    
    



  //  if(productName ===)
    




  

  

  


  
}


function delItem(e){
    // console.log(e.currentTarget.parentElement.parentElement);
    const item = e.currentTarget.parentElement.parentElement
    item.remove()

}

function setQuantity(e) {

  const input = e.currentTarget
  let quantity = input.value

  console.log(quantity);

  if( quantity <= 0){

    quantity= 1
    e.currentTarget.value = quantity
  }

  const cart_item = input.parentElement.parentElement
  console.log(cart_item)

  const price = cart_item.querySelector('.price').innerText.replace('$','')
  console.log(price)

  cart_item.querySelector('.subTotal').innerText=`$${quantity * price}`

}



// function updatePrice() {

//TODO


  
// }