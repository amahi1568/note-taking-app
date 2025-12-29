
//selecting the input
let titleEle=document.getElementById("title");
//selecting the ul
let listEle=document.getElementById("list");
//selcting the btn for event triggering
let addButtonEle=document.getElementById("add-btn");

addButtonEle.addEventListener("click", function(){

    //extracting the value from input
    let titleText=titleEle.value;

    //creating the li for appending it
    let li= document.createElement('li');

    //inserting the text inside the li from the input value
    li.innerText=titleText;

    //newly created li hai usse add/append krna
    listEle.appendChild(li);

    //clear krdo apne input ko
    titleEle.value='';

    //remove the li after clicking on the li
    li.addEventListener("click",function(){
        li.remove();
    })

})