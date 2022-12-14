import React from "react";
import Description from "../../intro/description";

function Slingshot() {
  return (
    <div>
    <h5><b><strong><Description description="Slingshot"></Description></strong></b></h5>


   <p class="project-p subtitle"><i>A group exercise in designing an interactive interface for an emerging startup</i></p>
    <div class="center-image">
      <img  className="response-img center"  src="images/slingshot/intro.png" alt="mock up of wireframes on laptop" width="20%" height="70%"></img>
    </div>
<h3>The Startup</h3>
  

   <p class="project-p" >
For this project, we chose to design a mobile interface for <a href="https://www.ycombinator.com/companies/slingshot">Slignshot</a>, a YC startup that utilizes software that automatically monitors and reduces people's medical bills.</p>
    <p class="project-p">With Slingshot, users can sign up and connect their insurance. The software will then begin to automatically monitor all claims processed by the user’s insurance and will notify the user when they are being overcharged for errors, up-codes, uncovered costs, and negotiable items. From these notifications, users have the option of enabling Slingshot to correct and lower their medical bills. Users can also upload medical bills directly and opt in for automatic insurance claim monitoring.</p>

    <h2>Pre-Design Thinking</h2>
    <h3>Exploration</h3>
    <p class="project-p">We decided to focus on the direct user interactions of Slingshot, where users easily access information on their medical bill savings. As a result, we decided to create a mobile interface for Slingshot, since mobile interfaces are accessible to any smartphone user, for easy, everyday use, and they allow for real-time state monitoring through push notifications.</p>
    <p class="project-p">Because Slingshot is focused around consumer health services, there's a wide range of potential users who would be impacted by our interface:</p>
    <ul>
        <li>Under-served, uninsured populations</li>
        <li>Financially stable people with insurance (either through employment or personal payment)</li>
    </ul>

    <h3>Sketches</h3>
    <p class="project-p">We began our iterative design process by having each member create rough sketches for 3 different screens. We didn’t specify what those screens would entail, as we wanted to get an idea of what type of screens each member thought would be the most essential for the prototype. Though some of us had screens that overlapped, we felt that our design concepts overall were substantially different enough to include them in our final sketches. You can find each of our sketches below:</p>
  
    <h3>Wireframes</h3>
    <p class="project-p">
After we finished our rough sketches, we incorporated our sketches (overlapping and separate) with additional features we felt were also relevant to Slingshot’s mission into one set of wireframes with 4 different screens: a “Home” page, a “Bills” page, a “Trends” page, and a “Resources” page.</p>
<div class="center-image">
      <img  className="response-img center"  className="response-img center" src="images/slingshot/lofi.png" alt="mock up of wireframes on laptop" width="70%" height="70%"></img>
    </div>

    <h2>Mockups</h2>
    <h3>Feedback</h3>
 
    <p class="project-p">After creating our wireframes, we implemented them into a more polished, Hi-Fi prototype through Figma. In this prototype, we also added a few features not included in our original Lo-Fi design (such as the 'Click to Upload Bill' button on the "Home" page) and included significantly more detail for realistic interactions users would be engaging with.</p>
    <p class="project-p">More details about the critiques can be found on our group page <a href="https://banalbat666.github.io/iterative/">here</a>.</p>
    <h3>High Fidelity Prototype</h3>
   
    <p class="project-p">You can play with our interactive prototype on Figma <a href="https://www.figma.com/proto/sPyO1Rdaw9DfFYsvFSV1SB/Slingshot-Iterative-Design?node-id=17%3A16&scaling=scale-down&page-id=16%3A2&starting-point-node-id=17%3A16&show-proto-sidebar=1">here</a>!</p>
   
   
   <h2>User Testing</h2>
    <h3>Overview</h3>
    <p class="project-p">After finalizing our hi-fi prototype, we sent the prototype to a remote user testing service to gather feedback and data on our design from random users.</p>
    <h3>The Task</h3>
    <p class="project-p">For users to test our prototype, we needed to create a specific task for them to accomplish. We decided on the following:</p>
    <p class="project-p"><i>"Find the cost breakdown of how much you saved in “Physician Services” on your most recently completed bill from RI Hospital."</i></p>
    <p class="project-p">
To complete this task, we broke down a user’s required actions into 4 subtasks:</p>
    <p class="project-p">1. Navigate to the "Bills" page.</p>
    <p class="project-p">2. 
Click on the “Sort and Filter” dropdown button to sort the “Completed” bills by “Most Recent.”</p>
    <p class="project-p">3. Find the most recently completed bill from RI Hospital.</p>
    <p class="project-p">4. 
Click on “Emergency Visit, Level 4” under “Physician Services” to see the cost breakdown of what you saved.</p>
    <p class="project-p">For a deeper dive into the directions and results, please view our <a href="https://banalbat666.github.io/iterative/">group page</a>.</p>
    <p class="project-p"></p>

    <br>
   </br>
   <br></br>
   <br>
   </br>
   <br></br>

    </div>
    
  );
}
export default Slingshot;