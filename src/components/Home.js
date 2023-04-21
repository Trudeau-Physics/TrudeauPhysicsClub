import { Hero } from './Hero.js';
import { Contact } from './Contact.js';
import { About } from './About.js';
import { NavBar } from './NavBar/NavBar.js';

export function Home() {

    const contactRef = React.useRef(null);
    const aboutRef = React.useRef(null);
    const homeRef = React.useRef(null);

    return (
        <div className="snap-mandatory snap-y">
            <NavBar hero={homeRef} contact={contactRef} about={aboutRef}/>
            <Hero ref={homeRef} />
            <About ref={aboutRef}/>
            <Contact ref={contactRef}/>
            
        </div>
    );
}