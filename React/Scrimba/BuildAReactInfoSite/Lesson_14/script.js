/**
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
your JSX
3. See if you can guess what will show up in the browser before running
the code
4. See if you can explain what actually shows up in the browser
 */

const page = (
    <div>
        <h3>Lista de supermercado: </h3>
        <ul>
            <li>Pollo</li>
            <li>Atún</li>
            <li>Mantequilla de mani</li>
            <li>Pan</li>
        </ul>
    </div>
)

ReactDOM.render(page, document.getElementById("root"))
document.getElementById("root").append(page) // [object Object]
document.getElementById("root").append(JSON.stringify(page)) // {"type":"div","key":null,"ref":null,"props":{"children":[{"type":"h1","key":null,"ref":null,"props":{"children":"My awesome website in React"},"_owner":null,"_store":{}},{"type":"h3","key":null,"ref":null,"props":{"children":"Reasons I love React"},"_owner":null,"_store":{}},{"type":"ol","key":null,"ref":null,"props":{"children":[{"type":"li","key":null,"ref":null,"props":{"children":"It's composable"},"_owner":null,"_store":{}},{"type":"li","key":null,"ref":null,"props":{"children":"It's declarative"},"_owner":null,"_store":{}},{"type":"li","key":null,"ref":null,"props":{"children":"It's a hireable skill"},"_owner":null,"_store":{}},{"type":"li","key":null,"ref":null,"props":{"children":"It's actively maintained by skilled people"},"_owner":null,"_store":{}}]},"_owner":null,"_store":{}}]},"_owner":null,"_store":{}}