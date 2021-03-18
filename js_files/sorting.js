//===============function calls========================
createBars();
//

function swap(el1,el2)
{
  const style1 = window.getComputedStyle(el1);
  const style2 = window.getComputedStyle(el2);

  const transform1 = style1.getPropertyValue("height");
  const transform2 = style2.getPropertyValue("height");

  el1.style.height = transform2;
  el2.style.height = transform1;

}
async function disableButton(id)
{
    document.getElementById(id).disabled = true;
}
async function enableButton(id)
{
    document.getElementById(id).disabled = false;
}
function delay_(msec=50) {
    return new Promise(resolve => setTimeout(() => {resolve()}, msec));
}

function createArray() 
{
    var array = [];
    for(i=0;i<100;i++)
    {
        array[i] = Math.floor(Math.random()*100);
    }
    return array;   
}
function createBars() 
{
    array = createArray();
    div_main = document.getElementById("bar_container");
    var divs = [];
    for(i=0;i<100;i++)
    {
        divs[i] = document.createElement("div");
        // divs[i].innerHTML = array[i];
        divs[i].style.height = `${array[i]}%`;
        divs[i].classList.add("bar");
        div_main.append(divs[i]);
    }
}


function updateBars() 
{
    array = createArray();
    divs = document.getElementsByClassName("bar");
    for(i=0;i<100;i++)
    {
        divs[i].style.height = `${array[i]}%`;
        divs[i].style.backgroundColor = "greenyellow";
    }
}

// ==========================Event listners==================================
document.getElementById("new_array").addEventListener("click", updateBars);
document.getElementById("bubble_sort").addEventListener("click", function(){bubbleSort(array);});
document.getElementById("selection_sort").addEventListener("click", function(){selectionSort(array);});
document.getElementById("insertion_sort").addEventListener("click", function(){insertionSort(array);});
document.getElementById("quick_sort").addEventListener("click", function(){quick(array);});
document.getElementById("merge_sort").addEventListener("click", function(){sort(array);});
//=========================================================================== 
