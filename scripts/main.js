document.addEventListener('DOMContentLoaded',() => {


  const cartDelBtn = document.querySelectorAll('.cart_del')

  const setQuantity = document.querySelectorAll('.cart .quantity')
  
  const addProduct = document.querySelectorAll('.add_product')




  cartDelBtn.forEach(destory)

  setQuantity.forEach(updateQuantity)

  addProduct.forEach(addItem)




  // cartDelAll.addEventListener('click', destoryAll)
  
})


function destory(btn){

  btn.addEventListener('click',(e) => {

    console.log(e.currentTarget);

    let item = e.currentTarget.parentElement.parentElement;

    item.remove();


    updateCart()    
  })

  



}



 function updateCart() {

  const cartItem = document.querySelectorAll('.cart .cart-item')
  let total = 0

  cartItem.forEach(item => {

    const quantity =item.querySelector('.quantity').value

    const price =item.querySelector('.price').innerText.replace('$','')
    total +=(quantity * price)
    
  })

  document.querySelector('.toatal-price').innerText= `$${total}`
  
 }


 function updateQuantity(input) {
  

  input.addEventListener('change',(e) => {

    const input = e.currentTarget
    let quantity = input.value

    if (quantity <= 0){
      
      quantity=1

      e.currentTarget.value = quantity 

    }

    const cartItem = input.parentElement.parentElement

    const price = cartItem.querySelector('.price').innerText.replace('$','')

    cartItem.querySelector('.subTotal').innerText = `$${quantity * price}`

    updateCart()
    
    console.log(cartItem,price);
    
  
  })
   
 }

 function addItem(btn) {

  btn.addEventListener('click',(e) => {

    const product = e.currentTarget.parentElement.parentElement
    const productName = product.querySelector('.product_name').innerText
    const price = product.querySelector('.price').innerText.replace('$','')

    const el = document.querySelector('tr')
     
    el.innerHTML = 

    `
      <td class="title">${productName}</td>
      <td><input type="number" value="2" class="quantity"></td>
      <td class="price">$${price}</td>
      <td class="subTotal">$${price}</td>
      <td><button class="cart_del btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button></td>

    `

    const itemList = document.querySelector('.cart-list')
    
    itemList.appendChild(el)

    el.querySelector('.cart_del').addEventListener('click', destory)

    el.querySelector('.cart .quantity').addEventListener('change', updateQuantity)

    updateCart()

    console.log(price);



    
  })
   
 }




 

  


  
    
     
  

   
  
