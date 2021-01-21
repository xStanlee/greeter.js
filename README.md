# greeter.js
## Small lib cooperating with jQuery and older browsers. Just for learning purpouse.

## Usage

Download the greeter.js file and attach it to your HTML structure file using ```<script src="/greeter.js"></script>``` tag. The greeter file has to be in same folder of project.
Lib let you create instance of class(function constructor). Passing parameters (yourName, lastName, ISO-LanguageCode)

### Example 
  
  const js = G$('Jhon', 'Smith', 'jp');

This object allow you to mutate it, display it, and play around data that you passed in. Also, it can display your greet in HTMLElements but in this case jQuery is required. 

Feel free to play around with this lib and change methods borrowed form jQuery to clean Vanilla.js or so on...
