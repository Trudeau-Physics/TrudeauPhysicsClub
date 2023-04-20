import { Home } from './Home.js';

function App() {
    const Route = ReactRouterDOM.Route;

    return (
        <>
            <ReactRouterDOM.HashRouter>

                <Route path="/" component={() => <Home />} />

            </ReactRouterDOM.HashRouter>
        </>
    )
}

const root = ReactDOM.createRoot(document.querySelector('#app'));
console.log(root)
root.render(<App />);