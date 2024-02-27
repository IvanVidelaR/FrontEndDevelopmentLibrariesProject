/*
Why React?
It´s declarative:
    What should be done? Just tell me what to do and I´ll worry about how I get it done.

Imperative:
    How it should be done?
*/

// ReactDOM.render(<h1 className="header">Hello, React!</h1>, document.getElementById("root"))

const h1 = document.createElement("h1");
h1.textContent = "This is the imperative way to program. Hello, React!";
h1.className = "header";
document.getElementById("root").appendChild(h1);

/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root

*/


