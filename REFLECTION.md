# Reflection: Building YourDadJokes

---

### Decisions
To begin my reflection I would have to say that one of the most critical choices that I made was moving from a horizontal to a vertical button orientation. I made this decision after receiving feedback from my peers regarding the spacing. The feedback suggested that I work at increasing the vertical depth. I decided the most effective way to tackle this issue was to consolidate the UI into a single column. Doing this improved the vertical flow of the page and made the app appear more like industrial hardware than just another site. In addition to those UI changes, I chose to rely on the native browser APIs for features like text to speech and the clipboard element. Having the options for external libraries was nice, but using native tools allowed me to focus on performance and keeping the site lightweight. 

---

### What worked
Reflecting on the visual aesthetic I am satisfied with the tri color streak and the CRT effect in the window of the terminal. The previously mentioned components in addition to the Barlow styled font brought the futuristic cassette theme to life. Furthermore moving to a flexbox styled vertical stack worked well to solve potential mobile responsiveness issues.  


---

### What I would do differently
If I had to start this project over, I would have probably went for CSS variables for my color palette at the onset. I ended up spending a ton of time searching for a specific hex code to fit my analog theme. Having these variables defined at the root would have made the late stages of styling much more time efficient. Something else I would have changed is focusing on mobile responsiveness first for the font. Having to scale the H1 title element down to smaller screen sizes became a real challenge.

---

### What I learned
During the process of completing this project, I was able to learn quite a bit about the box model and the different complexities of CSS layers like the z index. This became apparent when I troubleshooting my tri color streak. I learned how to use the transform-origin to lock elements into edges of the viewport. However, getting this to align perfectly did not go to plan. Since this was not a feature in the original scope, I elected to have a single tri color streak headlining the page instead to make the deadline. Feedback about the awkward spacing between my button elements was useful because it allowed me to deliver a more polished product.

