import React from "react"
import Joke from "./Joke"



/* Lesson 19: */
export default function App() {
    const jokeElements = jokesData.map(joke => {
        return <Joke setup={joke.setup} punchline={joke.punchline} />
    })
    return (
        <div>
            {jokeElements}
        </div>
    )
}


/*
Challenge: Think critically - how would you pass in a prop that wasn't
a string datatype.

E.g. Say you want each Joke component to receive an "upvotes" and "downvotes"
prop that is a number, as well as a prop with an array of comments, and a boolean
of whether the joke is a pun (`isPun`).
*/

/* Lesson 15:
    <Joke 
        punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
        isPun={true}
        upvotes={10}
        downvotes={2}
        comments={[{author: "", body: "", title: ""}]}
    />
    <Joke 
        setup="I got my daughter a fridge for her birthday." 
        punchline="I can't wait to see her face light up when she opens it." 
        isPun={false}
    />
    <Joke 
        setup="How did the hacker escape the police?" 
        punchline="He just ransomware!"
        isPun={true}
    />
    <Joke 
        setup="Why don't pirates travel on mountain roads?" 
        punchline="Scurvy." 
        isPun={true}
    />
    <Joke 
        setup="Why do bees stay in the hive in the winter?" 
        punchline="Swarm." 
        isPun={true}
    />
    <Joke 
        setup="What's the best thing about Switzerland?" 
        punchline="I don't know, but the flag is a big plus!" 
        isPun={false}
    />
*/ 