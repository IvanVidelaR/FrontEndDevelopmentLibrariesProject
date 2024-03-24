1. What is a "side effect" in React? What are some examples?

Teacher:
- Any code that affects an outside system.
- local storage, API, websockets, two states to keep in sync

Me: 
A side effect in React is anything React can't manage on its own, Some examples are local storage, 
API/databases interactions

2. What is NOT a "side effect" in React? Examples?

Teacher:
- Anything that React is in charge of.
- Maintaining state, keeping the UI in sync with the data, 
  render DOM elements

Me:
The management of internal state in react is not a side effect, the update of the UI everytime state changes occur

3. When does React run your useEffect function? When does it NOT run
   the effect function?

Teacher:
- As soon as the component loads (first render)
- On every re-render of the component (assuming no dependencies array)
- Will NOT run the effect when the values of the dependencies in the
  array stay the same between renders

Me: 
React runs the useEffect function after it renders the UI in the screen, basically the last thing it runs is the useEffect function

4. How would you explain what the "dependecies array" is?

Teacher: 
- Second paramter to the useEffect function
- A way for React to know whether it should re-run the effect function

Me: 
The dependences array is basically the amount of times the function inside useEffects runs after the first render of the page.


