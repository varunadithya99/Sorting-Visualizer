async function partition(array,left,right)
{
    divBars = document.getElementsByClassName("bar");
    if(left == right) 
    {
        divBars[right].style.backgroundColor = 'green';
        return;
    }
    var pivot = array[right];
    var divider = left-1;
    divBars[right].style.backgroundColor = "pink";
    for(var i = left;i<=right;i++)
    {
        divBars[i].style.backgroundColor = 'blue';
        await delay_(10);
        if(array[i] <= pivot)
        {
            if(divider>=left) divBars[divider].style.backgroundColor = 'yellow';
            swap(divBars[divider+1],divBars[i]);
           [ array[divider+1], array[i] ] = [ array[i], array[divider+1] ];
           if(divider>=left) divBars[divider].style.backgroundColor = 'greenyellow';
           divider++;
        }
        divBars[i].style.backgroundColor = 'greenyellow';
    }
    divBars[right].style.backgroundColor = 'greenyellow';
    divBars[divider].style.backgroundColor = 'green';
    return divider;
}

async function quick(array)
{
    var left = 0, right = array.length-1;
    disableButton('new_array');
    disableButton('bubble_sort');
    disableButton('selection_sort');
    disableButton('insertion_sort');
    disableButton('quick_sort');
    disableButton('merge_sort');
    await quickSort(array,left,right);
    enableButton('new_array');
    enableButton('bubble_sort');
    enableButton('selection_sort');
    enableButton('insertion_sort');
    enableButton('quick_sort');
    enableButton('merge_sort');

}
async function quickSort(array, left, right)
{
    if(left<right)
    {
        var divider = await partition(array,left,right);
        await quickSort(array,left, divider-1);
        await quickSort(array,divider+1,right);
    }
    if(left==right) await partition(array,left,right);
}