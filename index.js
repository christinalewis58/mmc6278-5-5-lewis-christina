//create click event after users presses "enter" or "add" button
const form = document.querySelector('form')



form.onsubmit = function(e) {
    //prevent form submission
    e.preventDefault()
    //access form data by targeting the input
    var ul = document.querySelector('input')
    
    console.log(ul.value)
    //resets box after user adds item to list- passes test
    ul.value = ""
    //insert user input inside #ultodo-list as another button element

    var list = document.getElementById('todo-list')
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(ul));
    ul.appendChild(li);
    list.innerHTML = 'how to get user input here'
    
    
    //var listItem = document.getElementById('todo-list')
    //listItem.innerText = 
}

//attach this functionality to a form submit event
//create another click event when user clicks on the to-do list item
//when user clicks, change text-decoration to strike-through
//button.onClick = function (e) {
    //button.style = 'text-decoration: line-through'
//}
//create a 3rd click event that deletes the item from the list after it's been checked off
