/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/

let guestList : Array <string> = [

    " SAMI's Mother ROSHAN",
    " FURQAN ",
    " HAJRA  ",
    " MARYAM ",
    
];

// step 1. print the name of person who can't make it

let guestwhocantmakeit : string = "FURQAN"

console.log(`${guestwhocantmakeit} can't make it to dinner`)

// step 2. replace the name of person who can't make it 

let NewGuest : string = " Adnan "

let indexOfguestwhocantmakeit : number = guestList.indexOf
(guestwhocantmakeit)


if (indexOfguestwhocantmakeit !== -1) 

{
   guestList[indexOfguestwhocantmakeit] = NewGuest
}

// step 3.print a second set of invitation messages

console.log("Second set of invitation messages:")

guestList.forEach((guest:string) =>

{
    console.log(`Dear ${guest}, You invited to dinner.`)

}) 