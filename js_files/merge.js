async function merge(array, left, mid, right) 
{
    divBars = document.getElementsByClassName('bar');
    var a1 = [];
    var a2 = [];
    var i=0,j=0,k=0;
    for(var x=left;x<=mid;x++)
    {
        a1[i++] = array[x];
    }   
    i=0;
    for(var x=mid+1;x<=right;x++)
    {
        a2[i++] = array[x];
    }
    i=0;
    while(i<a1.length && j<a2.length)
    {
        divBars[left+k].style.backgroundColor = 'red';
        divBars[mid+1+j].style.backgroundColor = 'red';
        await delay_(10);
        if(a1[i] <= a2[j])
        {
            array[left+k] = a1[i];
            divBars[left+k].style.height = `${a1[i]}%`;
            divBars[left+k].style.backgroundColor = 'green';
            divBars[mid+1+j].style.backgroundColor = 'green';
            i++;
        }
        else
        {
            array[left+k] = a2[j];
            divBars[left+k].style.height = `${a2[j]}%`;
            divBars[left+k].style.backgroundColor = 'green';
            divBars[mid+1+j].style.backgroundColor = 'green';
            j++;
        }
        k++;
    }
    while(i<a1.length)
    {
        divBars[left+k].style.backgroundColor = 'red';
        await delay_(10);
        divBars[left+k].style.height = `${a1[i]}%`;
        array[left+k] = a1[i];
        divBars[left+k].style.backgroundColor = 'green';
        k++;
        i++;
    }
    while(j<a2.length)
    {
        divBars[left+k].style.backgroundColor = 'red';
        await delay_(10);
        divBars[left+k].style.height = `${a2[j]}%`;
        array[left+k] = a2[j];
        divBars[left+k].style.backgroundColor = 'green';
        k++;
        j++;
    }
}


async function sort(array) {
    var left = 0, right = array.length-1;
    disableButton('new_array');
    disableButton('bubble_sort');
    disableButton('selection_sort');
    disableButton('insertion_sort');
    disableButton('quick_sort');
    disableButton('merge_sort');
    await mergeSort(array, left, right);
    enableButton('new_array');
    enableButton('bubble_sort');
    enableButton('selection_sort');
    enableButton('insertion_sort');
    enableButton('quick_sort');
    enableButton('merge_sort');
}

async function mergeSort(array, left, right){
    var mid;
    if(left>=right) return;
    // alert(`${left}---${right}`);
    mid = Math.floor((left + right) / 2);
    await mergeSort(array,left,mid);
    await mergeSort(array,mid+1,right);
    await merge(array,left,mid,right);
}
