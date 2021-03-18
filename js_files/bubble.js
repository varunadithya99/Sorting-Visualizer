async function bubbleSort(array) {
    
    // delay_();
    
    disableButton('new_array');
    disableButton('bubble_sort');
    disableButton('selection_sort');
    disableButton('insertion_sort');
    disableButton('quick_sort');
    disableButton('merge_sort');

    divBars = document.getElementsByClassName("bar");
    len = divBars.length;
    for(var i=0;i<len;i++)
    {
        for(var j=0;j<len-i-1;j++)
        {
            divBars[j].style.backgroundColor = "red";
            divBars[j+1].style.backgroundColor = "red";
            await delay_(1);
            if(array[j] > array[j+1])
            {
                swap(divBars[j], divBars[j+1]);
                [ array[j], array[j+1] ] = [array[j+1], array[j]];
            }
            divBars[j].style.backgroundColor = "greenyellow";
            divBars[j+1].style.backgroundColor = "greenyellow";
        }
        divBars[len-i-1].style.backgroundColor = "green";
    }
    enableButton('new_array');
    enableButton('bubble_sort');
    enableButton('selection_sort');
    enableButton('insertion_sort');
    enableButton('quick_sort');
    enableButton('merge_sort');
}