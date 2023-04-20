import { Home } from './Home.js';

function App() {
    const Route = ReactRouterDOM.Route;

    return (
        <>
            <ReactRouterDOM.HashRouter>

                <Route path="/" component={() => <Home />} />

            </ReactRouterDOM.HashRouter>
            <div className="min-h-screen flex justify-center items-center">
                <div className='light x1'></div>
                <div className='light x2'></div>
                <div className='light x3'></div>
                <div className='light x4'></div>
                <div className='light x5'></div>
                <div className='light x6'></div>
                <div className='light x7'></div>
                <div className='light x8'></div>
                <div className='light x9'></div>

            </div>

        </>
    )
}

const root = ReactDOM.createRoot(document.querySelector('#app'));
console.log(root)
root.render(<App />);