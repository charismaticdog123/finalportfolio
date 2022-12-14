import React from "react";
import Description from "../../intro/description";
function GoodReads() {
  return (
    <div>
    <h5><b><strong><Description description="Goodreads Redesign"></Description></strong></b></h5>

    {/* <h1><b><strong>Goodreads Redesign</strong></b></h1> */}
    <h3>Judging a book by it's cover...</h3>

    <div class="center-image">
     <img  className="response-img center" src="images/goodreads/gr_mockup.png" alt="mock up of wireframes on laptop" width="70%" height="70%"></img>
    </div>

   <p class="project-p">As someone who loves reading, but hates adding books to an endless "To Read" notes in my Notes app, I find Goodreads to be a useful and fun way to keep track of and explore new books.​</p>
   <p class="project-p">Goodreads is a site frequented by more than a million book lovers, where users that sign up can create profiles to review, rate, and save books into "bookshelves." Users can join topic groups, follow authors, add friends, and socialize through commenting on each other's reviews and posts. </p>
    <p class="project-p">But the current profile page is not conducive to sharing, exploring, or socializing. Outside of the usability issues discussed below, the profile pages look bland, cumbersome, and outdated. If we were to judge the current profile pages from its "cover," we probably wouldn't want to read more!</p>
    <p class="project-p">Through (i) exploring usability, (ii) a visual redesign, and (iii) a responsive redesign, I hoped to make the Goodreads profile page both more usable and more of a delightful experience that reflects ease of use,  personality, and books!​​​​​​​</p>
    
    <h2>i. Exploring Usability</h2>
    <h3>Current Problems</h3>

    <p class="project-p">Despite the thousands of users, each user's profile page is a messy rabbit hole of hyperlinks with little hierarchy, an inefficient layout, and little user control and freedom. </p>
    <p class="project-p">In terms of accessibility, WAVE reveals that the current profile page has many issues pertaining to missing alternative text and low contrast. For screen readers that rely on headers, the current page has a lack of hierarchy and many unordered lists in terms of its structural elements.</p>
    <p class="project-p">Here are the current problems arranged into three themes:</p>
    <p class="project-p"><b>I. Limited memorability</b></p>
    <ul>
     <li>Hyperlink rabbit hole</li>
     <li>No clear hierarchy</li>
    </ul>

    <p class="project-p"><b>II. Inefficient and difficult usability </b></p>
    <ul>
     <li>No differentiation between different links outside of copy content</li>
     <li>Cumbersome amount of links with seemingly random layout</li>
    </ul>

    <p class="project-p"><b>III. Visually confusing</b></p>
    <ul>
     <li>Unintuitive mental model</li>
     <li>Outdated visual aesthetic</li>
     <li>Limited personality, delight, and freedom in sterile but busy visuals</li>
     <li>Inconsistent components and branding</li>
    </ul>
    
  
    <div class="center-image">
     <img  className="response-img center" src="images/goodreads/issues.jpeg" alt="annotated issues on screenshot" width="10%" height="10%"></img>
    </div>
    

    <h2>ii. Visual Redesign</h2>
    <h3>Low Fidelity</h3>
    <p class="project-p">In the low-fidelity prototype, I focused on grouping related information together in cards to solve the issue of hierarchy. </p>
    <p class="project-p">To reduce the amount of hyperlinks and increase user control and freedom, I worked off of the mental model of shelves and created "bookshelf tiles" for users. ​​​​​​​This helped differentiate the different links as well as create more memorability and usability by previewing some of the books in a user's bookshelf. </p>
    <p class="project-p">Finally, I created a section for recent activity where user's can view a user's comments, reviews, ratings, and bookmarks and see who the user is friends with.</p>

    <div class="container">
  <div class="row">
    <div class="col-lg">
    <div class="center-image">
     <img  className="response-img center" src="images/goodreads/lowfid.png" alt="low fidelity wireframes" width="70%" height="70%"></img>
    </div>
    </div>
    <div class="col-lg">
    <div class="center-image">
     <img  className="response-img center" src="images/goodreads/lowfid2.png" alt="low fidelity wireframes" width="70%" height="70%"></img>
    </div>
    </div>
    <div class="col-lg">
    <div class="center-image">
     <img  className="response-img center" src="images/goodreads/lowfid3.png" alt="low fidelity wireframes" width="70%" height="70%"></img>
    </div>
    </div>
  </div>
</div>


    <div class="center-image">
     <img  className="response-img center" src="images/goodreads/styleguide.jpeg" alt="style guide" width="70%" height="70%"></img>
    </div>

    <h3>Style Guide</h3>
    <p class="project-p">In terms of the style guide, I tried to make design decisions that I thought would increase memorability and hierarchy.  </p>
    <p class="project-p">Specifically, I'd like to highlight the design decisions behind rebranding Goodreads with a more memorable color palette of different greens.</p>
    <p class="project-p">This was done through user research of asking users what color they remembered Goodreads to be — no users mentioned red or the maroon color that Goodreads is currently using.</p>
    <p class="project-p">Additionally, I didn't want to replace all the links with buttons as I believed this would just create an issue with having a rabbit hole of buttons instead of links.</p>
    <p class="project-p">To solve this I created a dropdown button for adding friends (that would allow users to add, delete, or block users) and bookmarks (that would allow users to save or rate a book).</p>
    <p class="project-p">Finally, the icons used in the style guide were sourced from this library.</p>


    <h3>High Fidelity</h3>
    <p class="project-p">Below is a high-fidelity Figma mockup for the desktop view (annotations across different views below). Information and links were grouped into cards and tiles that worked off of a mental model of a bookshelf. The number of links were reduced in place of buttons, dropdowns, and clickable visuals.</p>
    <div class="center-image">
     <img  className="response-img center" src="images/goodreads/hifid.png" alt="low fidelity wireframes" width="70%" height="70%"></img>
    </div>

    <h3>Developer's Annotations for Desktop, Tablet, & Mobile</h3>

    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
       <img  className="response-img center" class="d-block w-100" src="images/goodreads/hf1.png" alt="First slide" />
    </div>
    <div class="carousel-item">
       <img  className="response-img center" class="d-block w-100" src="images/goodreads/hf2.png" alt="Second slide" />
    </div>
    <div class="carousel-item">
       <img  className="response-img center" class="d-block w-100" src="images/goodreads/hf3.png" alt="Third slide" />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

    <h2>iii. Responsive Redesign</h2>
    <p class="project-p">In the final part of this redesign, I used HTML and CSS to develop a responsive redesign of the profile page, linked <a href="https://charismaticdog123.github.io/goodreadsredesign/">here</a>!</p>
    <p class="project-p">With more time, I would explore how different tabs and interactions would look, as well as iterate on the recent activity's card to be separated by comments, reviews, and ratings to better sort through a user's activity.</p>
    <br>
   </br>
   <br></br>
     <br>
   </br>
   <br></br>
    </div>
    
  );
}
export default GoodReads;