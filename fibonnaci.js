#!/usr/bin/env node


function fibonacciSequence(n)
{
    let a = 0;
    let b = 1;

    let c = 0;
    let fibonnaciSequenceArr = [
        a,
        b
    ];

    for (let i = 0; i < n-2; i++)
    {

        c = a + b;
        a = b;
        b = c;

        fibonnaciSequenceArr.push(c);
        console.log(fibonnaciSequenceArr);
    
    }
}

function fibonacciSequenceRecursively(n)
{

    let fibonnaciSequenceArr = [0,1];
    let a = 0;
    let b = 1;

    let c = 0;

    recursive(n);

    function recursive(n)
    {
        if (fibonnaciSequenceArr.length >= n)
        {
            console.log(fibonnaciSequenceArr);

        }
        else
        {
            c = a + b;
            a = b;
            b = c;
            fibonnaciSequenceArr.push(c);
            recursive(n);
        }
    }

}

const unsortedArray = ([105, 79, 100, 110]);
const sortedArray = mergeSort(unsortedArray);

console.log("Unsorted: ", unsortedArray);
console.log("Sorted: ", sortedArray);


function mergeSort(arr)
{
    if (arr.length <=1)
    {
        return arr; //Already sorted or empty array
    }

    const midpoint = Math.floor(arr.length /2);
    const leftHalf = arr.slice(0, midpoint);
    const rightHalf = arr.slice(midpoint);

    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);

    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < sortedLeft.length && rightIndex <sortedRight.length)
    {
        if (sortedLeft[leftIndex] < sortedRight[rightIndex])
        {
            result.push(sortedLeft[leftIndex]);
            leftIndex++;

        }
        else{
            result.push(sortedRight[rightIndex]);
            rightIndex++;
        } 

    }

    return result.concat(sortedLeft.slice(leftIndex).concat(sortedRight.slice(rightIndex)));

}

