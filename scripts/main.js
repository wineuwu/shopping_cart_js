document.addEventListener('DOMContentLoaded',() => {


  const cartDelBtn = document.querySelectorAll('.cart_del')

  const cartDelAll = document.querySelectorAll('.cart_del_all')


  cartDelBtn.forEach(destory)

  cartDelAll.addEventListener('click', destoryAll)
  
})


function destory(btn){

  btn.addEventListener('click',(e) => {

    console.log(e.currentTarget);

    let item = e.currentTarget.parentElement.parentElement;

    item.remove();
        
  })

}


const destoryAll = (btn) => {


  btn,addEventListener('click',(e) => {


    



    
  })
  
}