async function selectionSort(array) {
    
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
        divBars[i].style.backgroundColor = 'red';
        for(var j=i+1;j<len;j++)
        {
            divBars[j].style.backgroundColor = "blue";
            await delay_(1);
            if(array[i] > array[j])
            {
                swap(divBars[i], divBars[j]);
                divBars[j].style.backgroundColor = 'greenyellow';
                divBars[i].style.backgroundColor = 'red';
                [ array[j], array[i] ] = [array[i], array[j]];
            }
            divBars[j].style.backgroundColor = 'greenyellow';
        }
        divBars[i].style.backgroundColor = "green";
    }
    enableButton('new_array');
    enableButton('bubble_sort');
    enableButton('selection_sort');
    enableButton('insertion_sort');
    enableButton('quick_sort');
    enableButton('merge_sort');
}