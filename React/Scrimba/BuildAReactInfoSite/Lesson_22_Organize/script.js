import Header from "./Header"
import Footer from "./Footer"
import MainContent from "./MainContent"

/**
Challenge: move the Footer and MainContent components
into their own files.
*/

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))