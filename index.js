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

    //mark to-do as done by strike-through
        
    newButton.onclick = function() {
        newButton.style = 'text-decoration: line-through';
    
        //remove to-do when clicking twice
        newButton.onclick = function() {
        newButton.remove();
        }
    }

    userInput.value = "";    
}


