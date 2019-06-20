#Loan Emi Calculator 

A Loan Emi Calculator used to find the interest rate and monthly payment for the desired amount in that duration.

#Setup-

git clone https://github.com/abhinavsharma1611/emiloan1.git
cd emiloan1
npm install
npm start

#Tests-

npm run test

#Technologies/Libraries Used

1. HTML
2. CSS
3. Javascript
4. ReactJS
5. REDUX



# ReactJSComponents -
     1. Amount Range Slider

       - A controlled component that can accept number values between 500 and 5000
       - Increases or decreases by a number value of 100 at a time ('step' prop)

     2. Month Range Slider

        - A controlled component that can accept number values between 6 and 24
        - The values indicate the amount of months
        - Increases or decreases by a number value of 1 month at a time ('step' prop), to represent changes of 1 month at a time

     3. Display component

        - Must have two props: 'months' and 'amount', both values are numbers.

     4. DisplayChild component

        - Must have two props: 'func' and 'text'. 'Func' takes in a function as its value and 'text' a string.


 #Features of Project -

 1. The User interface allows user to enter a loan amount and a loan duration in months which than displays the interest rate and monthly payment.

2. The user can enter the monetary amount by suing the slider

3. The calculated values are automatically updated as the slider is used without any further interaction by the user.

4. A API is used which returns a JSON object with information about the monthly payment and interest rates.