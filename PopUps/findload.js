export function findLoad(){
    const findload_link =document.getElementById('findload-tag'),
      findload_pop=document.querySelector('.findload-form-container'),
      findloadBtn_btn =document.getElementById('findloadBtn'),
      closeBtn=document.querySelector('.findload-close-btn');

      
findload_link.addEventListener('click',()=>{
    // console.log("kunal")
    findload_pop.classList.toggle("active")
})


closeBtn.addEventListener('click',()=>{ 
    console.log("object")
    findload_pop.classList.remove("active")
})

findloadBtn_btn.addEventListener('click',(e)=>{
    e.preventDefault()
    findload_pop.classList.remove("active")
})

}