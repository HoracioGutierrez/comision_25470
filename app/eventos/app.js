

const btn_1 = document.querySelector("#btn_1")
const submit = document.querySelector("#submit_form")
const input = document.querySelector("input")
const link = document.querySelector("a")

submit.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log("Submit!")
    console.dir(e.target.elements.nombre.value)
})


link.addEventListener("click",(e)=>{
    e.preventDefault()
    console.log("Estas seguro que queres irte?")
})

const hacerClick = (e) => {
    //e.stopPropagation()
    console.log(e.target)
    console.log(btn_1)
}

document.body.addEventListener("click",(e)=>{
    console.log("Click del body")
}/* ,true */)

document.addEventListener("click",(e)=>{
    console.log("Click del HTML")
    console.log(e.target)
}/* ,true */)

btn_1.addEventListener("click",hacerClick/* ,true */)

input.addEventListener("keyup",(e)=>{
    console.log(e.target.value)
})

















//btn_1.addEventListener("click",hacerClick)
//btn_1.addEventListener("click",hacerClick())

/* btn_1.addEventListener("click",()=>{
    console.log("Anonima")
})
 */

/* btn_1.addEventListener("click",()=>{
    hacerClick("Hola k ase?")
}) */

//const resultado = hacerClick()