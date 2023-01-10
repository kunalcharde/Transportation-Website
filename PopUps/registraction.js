



export function registration (){
    const register_link_tag= document.getElementById('register')
const register_pop= document.querySelector('.form-container')
const home_content =document.querySelector('.home-content')
const register_btn =document.getElementById('registration-Btn')
const cressBtn= document.getElementById('cross')



register_link_tag.addEventListener('click',()=>{
    register_pop.classList.toggle("active")
    home_content.style="display:none"
})


cressBtn.addEventListener('click',()=>{ 
    register_pop.classList.remove("active")
    home_content.style="display:block"
})
register_btn.addEventListener('click',(e)=>{
    console.log(e.target.value)
    register_pop.classList.remove("active")
    home_content.style="display:block"
})

}