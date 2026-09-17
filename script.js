//Here's the shape of the lab:

// Task 1: Basic array ops — push, pop, logging to console
// Task 2: Filtering/searching the array, avoiding duplicates
// Task 3: Hooking it all up to an actual webpage (HTML + button clicks)

//our shopping list is empty so we need to add stuff to it
let shoppingList = [];

//Next we will add our 3 functions add, remove, and display

//function + Space + keyword
 function addItem(item){
   if(!shoppingList.includes(item)){
    shoppingList.push(item)
}
}


//Now Lets filter items
function filterItems(searchTerm) {
    return shoppingList.filter(function(item) {
        return item.toLowerCase().includes(searchTerm.toLowerCase());
    });
}




// Now lets make a remove item function

function removeLastItem() {
    shoppingList.pop( )
}


//Now we are making the display list
function displayList( ) {
    console.log(shoppingList);
}


const input = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const list = document.getElementById("itemList");

addBtn.addEventListener("click", function() {
    addItem(input.value);
    renderList();
});

function renderList() {
    list.innerHTML = ""; // step 1: clears the list

    shoppingList.forEach(function(item) {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });
}

removeBtn.addEventListener("click", function() {
    removeLastItem();
    renderList();
});























// let shoppingList

// function addItem(newItem) {
//     //only add the item if it is not already in the array
//     if (!shoppingList.includes(newItem))
//         shoppingList.push(newItem)

// }


// function removeItem(){
//     shoppingList.pop()
// }


// function displayList(){
//     for(const item of shoppingList){
//         console.log(item)
//     }
// }

// addItem("fish")
// console.log("add item - 'fish':", shoppingList)
// addItem("fish")
// console.log("Add item - 'fish': ", shoppingList);
// addItem(2);
// console.log("Add item - 2: ", shoppingList);
// removeLastItem();
// console.log("Remove Last Item: ", shoppingList);
// console.log("Log Items:");
// displayList();