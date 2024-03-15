#Props
"Props" refers to the properties being passed into a component in order for it to work correctly, similar how a function receives parameters: "from above." A component receiving props is not allowed to modify those props. (I.e. they are immutable)

This wouldn't be right: 
```
function addTwoNumbers(a, b) {
    a = 42
    return a + b
}

console.log(addTwoNumbers(1, 2))

function Navbar(props) {
    props.coverImage = "something else"
}
```

But I can change the values that I pass that I pass to my component: 
```
<Navbar coverImage="some-image2" />
```

#States
#"State" refers to values that are managed by the component, similar to variables declared inside a function. Any time you have changing values that should be saved/displayed, you'll likely be using state
