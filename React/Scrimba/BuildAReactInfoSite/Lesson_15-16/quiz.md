1. Why do we need to `import React from "react"` in our files?
Teacher: React is what defines JSX
Me: We need to import react because react is what defines our JSX

2. If I were to console.log(page) in index.js, what would show up?
Teacher: A JavaScript object. React elements that describe what React should
eventually add to the real DOM for us.
Me: An object


3. What's wrong with this code:
```
const page = (
    <h1>Hello</h1>
    <p>This is my website!</p>
)
```
Teacher: We need our JSX to be nested under a single parent element
Me: We have two siblings elements, we need an only parent, and then put those two siblings inside.

4. What does it mean for something to be "declarative" instead of "imperative"?
Teacher: Declarative means I can tell the computer WHAT to do 
and expect it to handle the details. Imperative means I need
to tell it HOW to do each step.
Me: That you need to tell the program what you want to do and it will do it for you,
instead imperative you have to tell everything you´re doing.

5. What does it mean for something to be "composable"?
Teacher: We have small pieces that we can put together to make something
larger/greater than the individual pieces.
Me: You can divide it in small parts