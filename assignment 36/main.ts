/*
 Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
*/

function make_shirt(size: string = "Large", message: string = " I love typescript"): void 
{
    return console.log(` Size : ${size}, Message: '${message}'`);
}

// Large shirt with default message 
make_shirt(); // Output: Size: Large, Message: ' I love Typescript'

// Medium shirt with default message 
make_shirt("Medium"); // Output: Size: Medium, Message. ' I love Typescript'

// Custom shirt with a deferrent message and sizwe 
make_shirt("Small","Hello,Typescript!");
//Output:Size. Small, Message.'Hello,' Typescript!'
