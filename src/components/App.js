import { Home } from './Home.js';

function App() {
    const Route = ReactRouterDOM.Route;

    return (
        <>
            <ReactRouterDOM.HashRouter>

                <Route path="/" component={() => <Home />} />

            </ReactRouterDOM.HashRouter>
            <div>ASDASDSDA</div>
            <div class="min-h-screen flex justify-center items-center">
                <div class='light x1'></div>
                <div class='light x2'></div>
                <div class='light x3'></div>
                <div class='light x4'></div>
                <div class='light x5'></div>
                <div class='light x6'></div>
                <div class='light x7'></div>
                <div class='light x8'></div>
                <div class='light x9'></div>

                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>

                <hero class="font-black text-7x1">F</hero>

            </div>

            <div class="p-10">
                <h2 class="font-bold text-4xl">THINGS</h2>
            </div>
        </>
    )
}

const root = ReactDOM.createRoot(document.querySelector('#app'));
root.render(<App />);