Fetch and Display

***************** TOOLS ****************************
I decided to use JQuery because I was already using JQuery to retrieve the Photo URL from the link, https://jsonplaceholder.typicode.com/photos?_limit=50. I also made it dynamic so that even if you change the photo limit to any number, it will work the same. I used bootstrap because it was the cleanest way to make the page responsive.

***************** Workflow ****************************
1. I created the index.html page, adding the jquery library, bootstrap library, the external css page, and the external main jquery page.
2. I added the divs and containers
3. I created the main.js and started to call the Json file, testing to make sure that I was getting the correct data and url for each photo.
4. Added the code to determine how many groups i needed to create
5. Added the code to create the buttons for the photo groups
6. Added the coded to loop through each object and retrieve the all of the pictures
7. Appended them into groups through an if statement (making sure that the first 10 pictures would be shown and the rest hidden)
8. Created the function to switch through pages
9. Added CSS code to make the picture width = 100%

* In between each function I used console.log to make sure that I was getting the correct value for each element.
