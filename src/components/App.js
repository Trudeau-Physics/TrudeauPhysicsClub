import { Hero } from './Hero.js';
import { Contact } from './Contact.js';
import { About } from './About.js';
import { NavBar } from './NavBar.js';



function App() {


    return (
        <div className="scroll-smooth snap-mandatory snap-y">
            <NavBar />
            <Hero />
            <About />
            <Contact />

        </div>
    );
}

const root = ReactDOM.createRoot(document.querySelector('#app'));
console.log(root)
root.render(<App />);