document.addEventListener('DOMContentLoaded',() => {

  const cartDelBtn = document.querySelectorAll('.cart_del')

  cartDelBtn.forEach(destory)
  
})


function destory(btn){

  btn.addEventListener('click',e=>{

    console.log(e.currentTarget.parentElement.parentElement);

    const item = e.currentTarget.parentElement.parentElement

    item.remove()



  })

}