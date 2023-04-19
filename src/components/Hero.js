
function Hero() {
    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            Trudeau Physics
        </div>
    );
}

const root = ReactDOM.createRoot(document.querySelector('#hero'));
root.render(<Hero />);