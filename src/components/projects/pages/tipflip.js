import React from "react";
import Description from "../../intro/description";

function TipFlip() {
  return (
    <div>
    <h5><b><strong><Description description="Tip Flip"></Description></strong></b></h5>


   <p class="project-p subtitle"><i>How do users interact with tip flip screens at coffee shops?</i></p>
    <div class="center-image">
     <img  className="response-img center" src="images/tipflip/cover.png" alt="mock up of wireframes on laptop" width="70%" height="70%"></img>
    </div>
<h3>What is 15% of a boba drink?</h3>
  

   <p class="project-p" >Have you ever felt a little awkward when you finish paying for a drink and the cashier flips the tip screen around? What is considered socially normal for tipping at a coffee shop? And what has been normalized by the new tip flip screen?</p>
    <p class="project-p">At some point in my coffee and boba-buying journey, I noticed that many coffee and boba shops had switched out the traditional tipping jar in favor of a new online application on a screen that cashiers flip to customers at the end of their transaction.</p>
    <p class="project-p">Given this shift, I was interested in exploring how users interact with the "tip flip screen" and identify common behaviors, pain points, and experiences through contextual inquiries, creating personas, and storyboarding!</p>
    <div class="center-image">
     <img  className="response-img center" src="images/tipflip/annotated.png" alt="mock up of wireframes on laptop" width="70%" height="70%"></img>
    </div>

    <h3>What do customers do?</h3>
    <p class="project-p">After observing customers in a cafe (with their permission and without disclosing leading information), general patterns I noted were:</p>
    <ul>
        <li>Users hesitated on this screen compared to the ordering or payment screen.        </li>
        <li>Generally, those that tipped looked at cashier, those that didn’t tip did not look at cashier.</li>
       <li>Users either clicked first tip button or no tip button.</li>
    </ul>

    <h3>Can I ask you a few questions...</h3>
    <p class="project-p"><b>Questions</b></p>
    <p class="project-p">1. How often do you tip when buying a drink? </p>
    <ul>
        <li>All of the time</li>
        <li>Most of the time</li>
        <li>Some of the time</li>
        <li>Rarely</li>
        <li>Never</li>
    </ul>
    <p class="project-p">2. What factors motivate you to leave a tip when buying a drink?</p>
    <p class="project-p">3. Does the tipping platform influence your decision to tip? If so, how much?</p>
    <ul>
        <li>A lot</li>
        <li>A little</li>
        <li>It doesn't</li>
    </ul>
    <p class="project-p">4. What is your preferred tip amount when tipping for a drink?</p>
    <p class="project-p">5. Which button do you most often click?</p>
    <p class="project-p">6. Have you used the custom tip function?</p>
    <p class="project-p">7. Based off the interface, who do you think the tip goes to? (Example: the owner, cashier, barista, it's split, etc.?)</p>
    <p class="project-p">8. Do you prefer the traditional tipping jar or the new platform? Why?</p>
    <p class="project-p">9. Between the traditional tipping jar or the new interface, do you believe there is a difference between your tipping habits?</p>
    <p class="project-p">10. Can you describe your thought process when ordering a drink — starting with looking at the menu to receiving your drink?</p>
    <p class="project-p">11. Do you feel like tipping is mandatory when buying a drink? How does the experience compare to the traditional tipping jar or at a restaurant?</p>
    <p class="project-p">12. What challenges, discomforts, or pain points do you face when using the tipping screen?</p>
    <p class="project-p">13. What do you wish was different about the experience?</p>
    <p class="project-p">14. What was your first impression of the tip flip screen?</p>
    <p class="project-p">15. Does having the cashier involved in flipping the screen influence your experience?</p>

    <br></br>
    <p class="project-p"><b>Summarized Responses</b></p>
    <p class="project-p">• When it starts at a high number (above 15%), users feel that the screen is very "opinionated" and tend to feel "resentful," which leads to a lack of desire to tip.</p>
    <p class="project-p">• Users are unsure about who the tip goes to based off of the interface.</p>
    <p class="project-p">• Users believe that the screen interface reduces friction for tipping as compared to the traditional tipping jar, where many people didn’t carry cash, and also improves the experience because of the pre-calculated math. </p>
    <p class="project-p">• Users acknowledged that having a person (the cashier) involved in the process of turning the screen towards them added a social pressure or discomfort to the experience</p>
    <p class="project-p">• Factors for tipping are if users got dishes, if a connection was formed between the user and the cashier, but generally users click ‘no tip’ the most often and rarely, if ever, custom tip.</p>



    <h3>Who are the personas on the ends of the spectrum?</h3>
    <p class="project-p">From the interviews and observations, I then synthesized the findings into two empathy maps that represented personas on two opposing ends:</p>
    <p class="project-p">The first persona is Assured Adam, a daily coffee drinker used to the traditional tipping jar. He represents new users of the interface and faces the issue of buttons that start at values that might be skewed from the desired tipping value, but is relatively unphased by social pressure.</p>
    <p class="project-p">The second persona is Pressured Pansy, an easily-flustered student on a budget. She represents users that feel pressured or obligated to tip, either a result of proximity to the cashier, the pressure of a line behind her, or the mental math required to calculate different tip options.</p>
    <div class="center-image">
     <img  className="response-img center" src="images/tipflip/personas.png" alt="mock up of wireframes on laptop" width="70%" height="70%"></img>
    </div>


    <h3>What does Pansy's journey look like?</h3>
    <p class="project-p">Finally, I created a storyboard for Pressured Pansy's experience, starting from walking into the cafe to leaving with her drink:</p>
    
    <div class="center-image">
     <img  className="response-img center" src="images/tipflip/userjourney.png" alt="mock up of wireframes on laptop" width="70%" height="70%"></img>
    </div>

    <h3>Reflection</h3>
    <p class="project-p">The most surprising finding was...</p>
    <ul><li>Users felt resentful when the first tipping option started at anything higher than 15%. When the preset option was higher than 15%, some users made an active decision not to tip out of spite.</li></ul>
    <br></br>
    <p class="project-p">With more time, I would...</p>
    <ul>
        <li>Conduct more observations at different sites and more interviews with different populations</li>
        <li>Do a comparative behavioral analysis between the traditional tipping jar and tip flip screen</li>
    </ul>
    <br>
   </br>
   <br></br>
   <br>
   </br>
   <br></br>
    </div>
    
  );
}
export default TipFlip;