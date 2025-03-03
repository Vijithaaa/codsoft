// let text=document.getElementById("input")
// let button=document.getElementById("button")
// let todolist=document.getElementById("todolist")

// button.addEventListener("click",()=>{
//     let todo=text.value
//     let para=document.createElement("p")
//     para.innerText=todo
//     todolist.appendChild(para)
//     para.addEventListener("click",()=>{
//         para.style.textDecoration='line-through'
        
//     })
//   para.addEventListener("dblclick",()=>{
//     todolist.removeChild(para)
//   })
//     text.value=""
// })



let text=document.getElementById("input")
let button=document.getElementById("button")
let todolist=document.getElementById("todolist")

button.addEventListener("click",()=>{
    let todo=text.value
    let para=document.createElement("div")
    para.innerText=todo
    todolist.appendChild(para)
      para.addEventListener("click",()=>{
        para.style.textDecoration="line-through"
      })
      para.addEventListener("dblclick",()=>{
        todolist.removeChild(para)
      })

input.value=""
})
