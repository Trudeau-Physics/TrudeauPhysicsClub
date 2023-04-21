import { Hero } from './Hero.js';
import { Contact } from './Contact.js';

export function Home() {
    return (
        <div className="snap-mandatory snap-y">
            <Hero />
            <Contact />
        </div>
    );
}