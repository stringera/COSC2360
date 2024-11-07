"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author: Alex Stringer
      Date:   10/30/24

      Filename: project07-01.js
*/

let signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", function(e) { 
   let pwd = document.getElementById("pwd").value;
   let feedback = document.getElementById("feedback");

   // Add the e.preventDefault() command
    e.preventDefault();

   // Create variables containing reg expressions
     // regex 1 A-Z [A-Z]
   let regex1 = /[A-Z]/;
    //regex 2 any single digit \d [0-9]
   let regex2 = /[0-9]/;
    //regex 3 symbols !$#% \$
    let regex3 = /[!\$#%]/;

   // Create an if else statement with the following conditions and outcomes

    // If length of pwd is less than 8 set the text content of the feedback object to "Your password must be at least 8 characters"
    // Else if the test() method with the regex1 applied to the pwd variable returns a false value set text content to "Your password must include an uppercase letter"
    // Else if the test() method with the regex2 returns false set feedback to "Your password must include one of the following !$#%"
    // Else apply the submit() method to the signupForm object
    if (pwd.length < 8) {
        feedback.textContent = 'Your password must be at least 8 characters.';
    } else if (!regex1.test(pwd)) {
      feedback.textContent = 'Your password must include an uppercase letter.';
    } else if (!regex2.test(pwd)) {
      feedback.textContent = 'Your password must include a number.';
    } else if (!regex3.test(pwd)) {
      feedback.textContent = 'Your password must include one of the following: !$#%'
    } else {
      signupForm.submit();
    }
    
}
);