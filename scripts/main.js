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

  cartItem.forEach(item => {

    const quantity =item.querySelector('.quantity').value

    console.log();
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

    


    updateCart()


    
  })






   
 }


const addItem = (btn) => {


  btn,addEventListener('click',(e) => {

    console.log("hi");

        })
  
}