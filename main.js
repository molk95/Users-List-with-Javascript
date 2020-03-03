// const btn = document.querySelector(".btn");
// btn.addEventListener(
//     // "click"
// // 'mouseover'
// 'mouseout'
// , event => {
//   event.preventDefault();
//   document.querySelector("#my-form").style.background = "#ccc";
//   document.querySelector("body").classList.add("bg-dark");
//   document.querySelector('.items').lastElementChild.innerHTML='<h1>Hello</h1>'
// });


const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')

myForm.addEventListener('submit',onSubmit)
function onSubmit(event){
    event.preventDefault()
    if(nameInput.value===''|| emailInput.value===''){
        msg.classList.add('error')
        msg.innerHTML='Please enter all fields'

        setTimeout(()=>msg.remove(),1500)
    }
    else {
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))

        userList.appendChild(li)

        // Clear filds
        nameInput.value=''
        emailInput.value=''
    }
}