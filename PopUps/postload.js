
export function postLoad(){
    const postload_link =document.getElementById('postload'),
      postload_pop=document.querySelector('.postload-form-container'),
      postload_btn =document.getElementById('load-btn'),
      closeBtn=document.querySelector('.close'),
      home_content =document.querySelector('.home-content');

      
postload_link.addEventListener('click',()=>{
    postload_pop.classList.toggle("active")
    home_content.style="display:none"
})


closeBtn.addEventListener('click',()=>{ 
    postload_pop.classList.remove("active")
    home_content.style="display:block"
})

postload_btn.addEventListener('click',(e)=>{
    e.preventDefault()
    postload_pop.classList.remove("active")
    home_content.style="display:block"
})

}