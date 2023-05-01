import { Hero } from './Hero.js';
import { Contact } from './Contact.js';
import { About } from './About.js';
import { NavBar } from './NavBar.js';



function App() {


    return (
        <div className="scroll-smooth snap-mandatory snap-y">
            <div className="video-container">
                <video autoPlay muted loop>
                <source src="../public/assets/videos/space2.mp4" type="video/mp4" />
                    {/* ../public/assets/videos/cloud.mp4 */}
                    {/* <source src="https://assets.mixkit.co/videos/preview/mixkit-observatory-under-a-starry-sky-4363-large.mp4" type="video/mp4" /> */}
                </video>
                <div className="caption">
                    <NavBar />
                    <Hero />
                    <About />
                    <Contact />
                </div>
            </div>


        </div>
    );
}

const root = ReactDOM.createRoot(document.querySelector('#app'));
console.log(root)
root.render(<App />);