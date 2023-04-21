import { Hero } from './Hero.js';
import { Contact } from './Contact.js';
import { About } from './About.js';
import { NavBar } from './NavBar/NavBar.js';

function Home() {


    return (
        <div className="snap-mandatory snap-y">
            <NavBar/>
            <Hero/>
            <About/>
            <Contact/>
            
        </div>
    );
}

const root = ReactDOM.createRoot(document.querySelector('#home'));
console.log(root)
root.render(<Home />);