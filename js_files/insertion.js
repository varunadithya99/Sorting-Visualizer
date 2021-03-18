async function insertionSort(array)
{
    disableButton('new_array');
    disableButton('bubble_sort');
    disableButton('selection_sort');
    disableButton('insertion_sort');
    disableButton('quick_sort');
    disableButton('merge_sort');

    divBars = document.getElementsByClassName("bar");
    len = divBars.length;
    for(var i=1;i<len;i++)
    {
        var j = i-1;
        while(j >= 0 && array[j] > array[j+1])
        {
            divBars[j+1].style.backgroundColor = 'blue';
            divBars[j].style.backgroundColor = 'red';
            await delay_(1);
            swap(divBars[j] , divBars[j+1]);
            [ array[j], array[j+1] ]  = [ array[j+1], array[j] ];
            divBars[j+1].style.backgroundColor = 'greenyellow';
            divBars[j].style.backgroundColor = 'greenyellow';
            j--;
        }
    }
    for(var i=0;i<len;i++)
    {
        await delay_(2);
        divBars[i].style.backgroundColor = 'green';
    }
    enableButton('new_array');
    enableButton('bubble_sort');
    enableButton('selection_sort');
    enableButton('insertion_sort');
    enableButton('quick_sort');
    enableButton('merge_sort');
}