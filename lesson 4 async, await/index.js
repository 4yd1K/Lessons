let arr = [];
const out = document.querySelector('.out')
const out2 = document.querySelector('.out2')
const out3 = document.querySelector('.out3')

async function getToDo () {
    const todo = await fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then(result => {
        arr = result;
  });
}
getToDo ()

const renTodo = () =>{
    let num = document.querySelector('.n1').value;
    out2.innerHTML =  arr[+num].title; 
    arr[+num].completed === true ? out.innerText = 'completed' : out.innerHTML = "in progress";
    out3.innerHTML = arr[+num].id-1;
}








