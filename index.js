//create click event after users presses "enter" or "add" button
const form = document.querySelector('form')

form.onsubmit = function(e) {
    //prevent automatic form submission
    e.preventDefault();
      
    //access form data by targeting the input
    var userInput = document.querySelector('input');
    //Prevent empty form submission
    if(userInput.value.trim() === "") {
        return;
    } 
 
    var ul = document.getElementById('todo-list');
    var newButton = document.createElement('button');
        console.log(userInput.value)
    // Create li element within the ul to-do list
    var newLi = document.createElement('li');
    ul.appendChild(newLi);
    newLi.appendChild(newButton);
    newButton.textContent = (userInput.value);

    newButton.onclick = function() {
    newButton.style = 'text-decoration: line-through'
    }
   
    //insert user input inside #ultodo-list as another button element
    /*
    var list = document.getElementById('todo-list');
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(ul));
    ul.appendChild(li);
   
    let createBTN = document.createElement("button");
    createBTN.innerHTML= (ul.value);
    createBTN.type = "submit";
    createBTN.name = "testBTN";
    list.appendChild(createBTN);
    //resets box after user adds item to list- passes test*/
    //var listItem = document.querySelectorAll('newLi > newButton')
    //console.log(listItem)
    
    userInput.value = "";    
}


//create another click event when user clicks on the to-do list item for a second time (when user clicks, change text-decoration to strike-through)

//create a 3rd click event that deletes the item from the list after it's been checked off
