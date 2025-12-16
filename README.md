# Final Project Overview
For your final project, you will create the front end of a "Paradise Nursery" shopping application. The application interface will allow you to browse a variety of houseplants and add them to a shopping cart. The shopping cart feature lets you see all your items and their total cost. Your shopping cart should also allow you to adjust the number of items in the cart before checkout.

Completing the practice project will help you with the final project. We designed it so that many of the components, code, and skills for that project can be transferred to this final project with some updates.

Your application should have three pages: a landing page, a product listing page, and a shopping cart page. See the lab for details on the specific functionality requirements on each page. The product walkthrough video also demonstrates how your completed project should look and behave.

Landing page
The landing page should have the following elements:

A background image
A paragraph about the company
The company name
A Get Started button linking to the product page
The product listing page should have at least six houseplants for sale, organized into three or more categories. Each plant should have the following details about it:

A thumbnail image
Plant name
Price
An Add to Cart button
Product listing page
The product listing and shopping cart pages should have a header. The header should have a shopping cart icon with a number that updates dynamically, displaying the total number of items in the cart. The header should also contain navigation to either of the other pages, depending on which page you are on.

Shopping cart page
The shopping cart page displays all the details about the items in it. It should prominently display the total number of plants in the cart, the total cost of all items in the cart, a continue shopping button, and a checkout button.

On this page, you should be able to see each type of plant in the shopping cart, including its thumbnail and name. You should also display its unit price and the total of all the items in the cart. You should provide an increase or decrease button to change the number of that plant type in the cart, which also updates the shopping cart icon in the header and the total number of items in the cart. Finally, you should also include a delete button for each type of plant in the cart.

You must store your project code in a public GitHub repository. Also, you will use GitHub Pages to deploy your app.

Evaluation Criteria – 50 Points
As part of your final assessment, you must submit the public GitHub repository URLs for the files mentioned below.These files will be used by the AI grader to evaluate your submission under the "Final Project: Submission and Evaluation" section.

Make sure your project code is stored in a public GitHub repository named e-plantShopping, and that all files are committed and pushed before submission.

Files for Submission
Task 1:
Submit the public GitHub URL of the README.md file containing the project name details.(2 points)

Task 2:
Submit the public GitHub URL of AboutUs.jsx, which includes details about the company.(1 point)

Task 3:
Submit the GitHub URL of App.css, which includes the code implementing the background image for the Paradise Nursery landing page.(1 point)

Task 4:
Submit the public GitHub URL of App.jsx, which includes the Paradise Nursery landing page with the company name and a "Get Started" button.(3 points)

Task 5:
Submit the public GitHub URL of CartSlice.jsx, which includes the code implementing the Redux slice for the shopping cart.(4 points)

Task 6:
Submit the public GitHub URL of ProductList.jsx.(16 points)
Your implementation must include the following functionalities:

Display at least six unique houseplants per category, each with a thumbnail, name, and price. (2)
Group the plants into at least three categories.(2)
Include "Add to Cart" buttons for each plant that:
Add the product to the shopping cart (2)
Disable the button after the product is added (2)
Update and display the shopping cart quantity (2)
Include a navbar that appears on both Product Listing and Cart pages (2)
Navbar provides navigation links to all three pages: Home, Plants, and Cart (2)
Display a cart icon showing the total number of items dynamically(2)
Task 7:
Submit the public GitHub URL of CartItem.jsx, displaying the Shopping Cart page.(23 points)
Your implementation must include the following functionalities:

Show the total cart amount of the plants(2)
Show the total cost for each plant in the cart (2)
Each plant in the cart should display a thumbnail, name, and unit price (6)
Include button to increase the quantity, updating the cart correctly (4)
Include button to decrease the quantity, updating the cart correctly (4)
Include a delete button for each item to remove it from the cart (2)
Include a checkout button that shows “Coming Soon” or a similar message (1)
Include a continue shopping button that links back to the product listing page (2)
