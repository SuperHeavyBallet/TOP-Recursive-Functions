#!/usr/bin/env node

fibonacciSequenceRecursively(20);

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

