let task = document.querySelector('#addTask')
let input = document.querySelector('#inputField')
let display = document.querySelector('#DisplayList')

task.onclick = function plus(){

parent = document.createElement('div')
newTask = document.createElement('p')
btn = document.createElement('button')


display.appendChild(parent)
parent.appendChild(newTask)
parent.appendChild(btn)


newTask.innerHTML = input.value
btn.innerHTML = "Remove"


parent.setAttribute("class","myElem")
newTask.setAttribute("class","para")
btn.setAttribute("class","Remove")


btn.onclick = function (moins){
    display.removeChild(moins.target.parentElement)
}














}



