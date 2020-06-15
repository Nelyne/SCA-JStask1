//Select Elements
const list = document.getElementById('list');
const input = document.getElementById('item');
const addBtn = document.getElementById('addBtn');
const searchBtn = document.getElementById('searchBtn');
const search = document.getElementById('search');

search.addEventListener('keyup', (e) => {
    const searchItem = e.target.value;
   const filteredItems =  LIST.filter(ITEM => {
       return ITEM.toAdd.includes(searchItem);
    });
    console.log(filteredItems);
    
});


//create variables
let LIST = [],
id = 0;


//Create input items

const addItems = (toAdd, id, trash) => {
    if (trash) {
        return;
    }

    const listItem = 
    `<li class="list-item"><p>${toAdd}</p><i class="far fa-trash-alt 5x" job="delete" id="${id}"></i>
    </li>`;
    const position = "beforeend";
    list.insertAdjacentHTML(position, listItem);
}

// addd items after clicking add button
        addBtn.onclick = function() {
        const toAdd = input.value;
        //if input isn't empty
        if(toAdd) {
            addItems(toAdd, id, false);

         LIST.push({
             toAdd,
             id,
             trash: false
         });
         id++;
        }
        input.value = "";
    }

 

// To remove items
const removeToAdd = (element) => {
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash = true;
}

//target items created dynamically when trash can is clicked
list.addEventListener("click", function(event){
    const element = event.target; //return clicked element inside list
    const elementJob = element.attributes.job.value; //delete items
    if(elementJob == "delete") {
        removeToAdd(element);
    }
});



