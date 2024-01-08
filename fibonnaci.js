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

//const unsortedArray = ([105, 79, 100, 110]);
//const sortedArray = mergeSort(unsortedArray);



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

//const unsortedArray = ([105, 79, 100, 110]);
//const sortedArray = mergeSortRecurs(unsortedArray);

// console.log("Unsorted: ", unsortedArray);
// console.log("Sorted: ", sortedArray);


function mergeSortRecurs(inputArray)
{
    if (inputArray.length <= 1)
    {
        return inputArray // Input array is 1 or 0, does not need further sorting
    }

    const midpoint = Math.floor(inputArray.length / 2); // Get halfway point of input array by dividing input array by 2
    const leftHalf = inputArray.slice(0, midpoint); // Slice the input array from the first element to the mid point to create a left half
    const rightHalf = inputArray.slice(midpoint); // Slice the input array from the midpoint to the last element to create a right half

    const sortedLeft = mergeSortRecurs(leftHalf); // Repeats this process on the divided halfs
    const sortedRight = mergeSortRecurs(rightHalf);

    // The function will dive deeper until individual elements are created from the input array
    // Eventually the array will be divided in half until only 1 element remains, at which point
    // that element will be returned
    // And then the recursive functions whill progressively step back up the ladder of process
    // using the following sorting algorithm

    const result = []; // Empty array to store each result
    let leftIndex = 0; // An int to find the position within each sub array
    let rightIndex = 0;

    while (leftIndex < sortedLeft.length && rightIndex < sortedRight.length)
    // Progressively move through each element in each sub array
    {
        if (sortedLeft[leftIndex] < sortedRight[rightIndex])
        // If the value at leftIndex position (example 0) in the sorted left half array
        // is less than the equivelant in the sorted right array
        {
            result.push(sortedLeft[leftIndex]);
            // Push the sortedLeft at that position into the array first, since the number
            // is smaller
            leftIndex ++; // Increase the leftIndex position, since the current one has been placed
        }
        else // If the value at the sorted left half position is greater (or equal to) than the right half
        {
            result.push(sortedRight[rightIndex]);
            // Push the sortedRight at that position into the array, since the number is smaller
            rightIndex ++; // Increase the rightIndex position
        }

    }
    return result.concat(sortedLeft.slice(leftIndex).concat(sortedRight.slice(rightIndex)));
    // Return the result array with the now sorted left and right half combined in order


    

}

const unsortedArray = [105, 79, 100, 110, 24, 54, 2, 0, -2, 59, 899];
const sortedArray = mergeSortRecurs(unsortedArray);

console.log(`Original Array: ${unsortedArray}`);
console.log(cartesianTreeSort(unsortedArray, "Full"));

function cartesianTreeSort(inputArray, half)
{

    
    console.log(`Input Array (${half}): ${inputArray}`);

    if (inputArray.length > 1)
    {

    
    const  smallestElementPosition =  (findSmallestElement(inputArray));

    const root = inputArray[smallestElementPosition];
    const leftHalf = inputArray.slice(0, smallestElementPosition);
    const rightHalf = inputArray.slice(smallestElementPosition + 1);

    console.log(`\x1b[37m`,`Root value: ${root}, at: ${smallestElementPosition} `);
    

    console.log('\x1b[36m%s\x1b[0m',`Left Half: ${leftHalf}`);
    console.log('\x1b[33m%s\x1b[0m', `Right Half: ${rightHalf}`);


    cartesianTreeSort(leftHalf, "Left");

    
    cartesianTreeSort(rightHalf, "Right");
    

    
    
    }


    
    

}

function findSmallestElement(inputArray)
{
    if (inputArray.length > 1)
    {
        let smallestElement = inputArray[0];
        let smallestElementPos = 0;

        for (let i = 0; i < inputArray.length; i++)
        {
            if (inputArray[i] < smallestElement)
            {
                smallestElement = inputArray[i];
                smallestElementPos = i;
            }
        }

        return smallestElementPos;
    }
    else
    {
        return inputArray;
    }
}


    
