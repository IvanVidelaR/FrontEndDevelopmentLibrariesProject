Quiz!

1. What is a React component?

A react component is a function that returns React elements, reusable and independent bits of code. (UI)

2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```
The first letter should be mayus, that is camel case, the correct way is using pascal case MyComponent 

3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

ReactDOM.render(Header(), document.getElementById("root"))
```
It should not be like this Header(), calling a normal function buy surrounding it in <Header/> like an html tag