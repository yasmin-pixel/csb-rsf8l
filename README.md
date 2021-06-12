# Technologies used

- Javascript
- CSS
- HTML

# what is this project about?

This project is about showing users diffrent Movies and Tv shows that are avaiable to watch in the next few days.It also gives the user timings and dates to let them know when to watch the Movies and Tv shows and gives the users a recommendation when they register. The company's information is displayed so that the user will have a better understanding of what the company provides.

# what I tackled first?

Fisrt step I took to tackle my project is to get all the elements for my website written in HTML. This composed of the Heading, the Icons and the Buttons. Once I had all of those elements written in my HTML I then made new files and copied the code and Re-named the Buttons and Heading for each of my new pages.

# An example of a Header and a Button

<div class="header">

  <h1>what's streaming</h1>

<a href="aboutus.html" id="btnone"> About us</a>

</div>

Then I started to build up my website with images for each of the pages and startd to add paragraph tags where needed and slowly each page took form.

# An example of a image and praragarph tags

        <img
        src="https://www.papercitymag.com/wp-content/uploads/2021/03/raya-and-the-last-dragon_0.jpg"
        alt="raya-and-the-last-dragon"
        width="200"
        height="200"/>
        <h3> Raya and the Last Dragon</h3>
        <p> Time: 3:00pm </p>
        <p> Date: monday 8th june </p>
        <p> Duration: 1 hour 50 minutes </p>

I made a class and assigned it the name movies and everything to do with Movies will link into this class. Also in this exmaple, I have a class for row and column.This part took qiute some time to figer out because I had to make sure all my divs were in the right place. I got really confused and at one point I had too many divs. To resolve this problem I used the inspect on the web browser.This let me know what was going wrong with my code.

# links

So once my webpage had all of the elements in place then I foucused on the links for each page.I used a anchor tag with a href and used the same id for the buttons.Also did the same for the icons.

<a href="register.html" id="btnone">Register with us! </a>

<a href="https://www.msn.com/en-gb">
<img src="icons8-email-open-48.png" alt="email"/></a>

# javascript

Javascript was up next. I created a button called random tv-shows or movies and I wanted it to display a random tv show or movie everytime I clicked the button.This was a very confusing task but with Marju guidence we managed to get two working buttons that displayed a random movie and tv show.
The same format was applied to get the register button to work the same way.

# An example of the Javascript code used to get random movies to be displayed.

const movies = [
"raya and the last dragon",
"Black Panther",
"star wars",
"la la land",
"jaws"
];

function displayRandomMovie() {
const randomNumber = Math.floor(Math.random() \* 5);
const randomMovie = movies[randomNumber];
document.getElementById("Movies").innerHTML = randomMovie;
}

# CSS

Lastly, I focused on the css and this was a little tricky since, I had to match the id or classes with the css. I had to play about with inspect in the web browser to find the best layout and styling for my website. Once I found the right combinations I simply copy and paste it into my css and save it.

# user stories

As a user I want to know what time the tv shows and movies will stream.
so that I can discover amazing movies and Tv shows to watch.

As a user I want regular announcements
so that I can check if anything new has been updates.

As a user I want to get random movies and tv shows recommended to me.
I want to learn about new movies and tv shows that are out.

As a user I want to be able to connect to social meadia
so that I can keep up with diffrent recommendations.

As a user I want to be able to access the company information
So that I can keep in contact with the company.

As a website owner the user to provide us with their contact details to register.
so that we can give them recommendations.
