import { useState } from 'react'
import './App.css'
import {marked} from "marked"
import DOMPurify from "isomorphic-dompurify"

const defaultMarkDownText = `
# Welcome to Markdown Magic ✨

## Sub-Heading Spells

### Behold the Enchantment:

Here's a mystical code incantation: \`<spell></spell>\`, wrapped in backticks.

\`\`\`javascript
// A spell to conjure multi-line code:

function castSpell(firstLine, lastLine) {
    if (firstLine === '\`\`\`' && lastLine === '\`\`\`') {
        return magicCode;
    }
}
\`\`\`

You can empower text with **bold enchantments**...  

Or imbue it with *italic magic.*  

Why not fuse them together for ***ultimate effect?***

And if you dare, cast a spell to ~~banish certain parts~~.

Behold the gateway to other [realms](https://01-react-random-quote-machine.netlify.app)
> Whispered Prophecies...

And should you wish, summon tables from the ether:

| Wizardry   | Sorcery    | Witchcraft |
|------------|------------|------------|
| Your incantations | can manifest | in these domains... |
| And beyond. | Yes, indeed. | The possibilities are endless. |

- And in the arcane scrolls, there are lists.
	- Some unordered, like whispers.
		- With levels of incantation.
			- As deep as the astral planes.

1. Yet there are also numbered incantations.  
1. Simply use numbers to bind your desires!  
1. And to complete the ritual, present images of power:

![magic Image](https://i.pinimg.com/originals/a0/65/c9/a065c9055d68f2d26f5a6511e1f14f64.jpg)`;

function App() {
    
    const [markdownText, setMarkDownText] = useState(defaultMarkDownText);

    function updateText(event) {
        setMarkDownText(event.target.value);
    }

    return (
        <main >
            <h1 id="project-title">Markdown Previewer</h1>
            <div class="container">
                <textarea 
                    name="editor" 
                    id="editor" 
                    onChange={updateText} 
                    value={markdownText}
                >
                </textarea>
                <div id="preview" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked(markdownText, {breaks: true})) }}>
                </div>
            </div>
        </main>
    )
}

export default App
