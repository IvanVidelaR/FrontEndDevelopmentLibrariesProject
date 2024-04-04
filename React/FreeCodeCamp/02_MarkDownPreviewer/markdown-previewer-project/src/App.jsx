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
    const [editorVisible, setEditorVisible] = useState(true);
    const [previewerVisible, setPreviewerVisible] = useState(true);

    function updateText(event) {
        setMarkDownText(event.target.value);
    }
    
    function toggleEditor() {
        setEditorVisible(prevState => !prevState);
    }
    
    function togglePreviewer() {
        setPreviewerVisible(prevState => !prevState);
    }

    return (
        <main >
            <div className="credits">
                <h1 id="project-title">Markdown Previewer</h1>
                <p>by IvanVidelaR</p>
            </div>
            <div className="container">
                <div id="editor-wrapper" className={editorVisible ? '' : 'hide'}>
                    <div className={editorVisible ? 'toolbar' : 'toolbar hide'}>
                        <p>Editor</p>
                        <i className={previewerVisible ? 'fa fa-arrows-alt' : 'fa fa-compress'} onClick={togglePreviewer}></i>
                    </div>
                    <textarea
                        className={editorVisible ? '' : 'hide'}
                        name="editor" 
                        id="editor" 
                        onChange={updateText} 
                        value={markdownText}
                    >
                    </textarea>
                </div>
                <div id="preview-wrapper" className={previewerVisible ? '' : 'hide'}>
                    <div className={previewerVisible ? 'toolbar' : 'toolbar hide'}>
                        <p>Previewer</p> 
                        <i className={editorVisible ? 'fa fa-arrows-alt' : 'fa fa-compress'} onClick={toggleEditor}></i>
                    </div>
                    <div
                        className={previewerVisible ? '' : 'hide'}
                        id="preview" 
                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked(markdownText, {breaks: true})) }}>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default App
