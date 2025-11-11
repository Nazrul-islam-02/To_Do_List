

const item = document.querySelector("#item");
// const cross = document.querySelector("#to_do_box li i");
// console.log(cross);

const toDoBox = document.querySelector("#to_do_box");

item.addEventListener("keyup",(event)=>{

    if(event.key === "Enter"){
       if(item.value){addToDo(item.value);}
        item.value = "";
    }
})


const addToDo = (item) => {
    const listItem = document.createElement("li");
   

    listItem.innerHTML = `
     ${item}
     <i class="fa-solid fa-xmark"></i>
    
    `;


     listItem.querySelector("i").addEventListener("click",()=>{
        listItem.remove();
    })

    toDoBox.appendChild(listItem);

    
    
    
}

// console.log(addToDo());