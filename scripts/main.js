document.addEventListener('DOMContentLoaded',() => {

  const cartDelBtn = document.querySelectorAll('.cart_del')
  const addQuantity = document.querySelectorAll('.cart .quantity')

  cartDelBtn.forEach( btn => { btn.addEventListener('click',delItem) })
  addQuantity.forEach(input => { input.addEventListener('change', setQuantity)})

  

  
  
})


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

