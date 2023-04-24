export function About() {
    return (
        <>

            <div id="about" className='snap-center w-screen h-screen flex flex-col justify-center items-center bg-maincolor-800'style={{ padding: '10vh' }} > 
                <div className="font-black text-3xl sm:text-5xl lg:text-8xl flex justify-center items-center w-full h-1/5 lg:h-1/3 duration-700">ABOUT US</div>
                <div className="grid grid-cols-1 grid-rows-4 lg:grid-rows-1 lg:grid-cols-4 justify-center items-center w-6/7 h-4/5 lg:h-2/3 p-4 gap-2 lg-p-8 lg:gap-8 ">
                    About Us Info
                </div>
            </div>
        </>
    );
}

function InfoBox(props) {

    return (
        <div className='shadow-2xl transition ease-in-out p-4 flex lg:flex-col justify-between h-full w-full border-2 border-green-50 rounded-2xl box-border transform hover:-translate-y-1 hover:scale-105 hover:bg-opacity-80 hover:shadow-2xl hover:text-slate-900 hover:bg-slate-400 duration-200'>
            <div className="flex flex-col lg:items-center lg:justify-around flex-grow">
                <div className="text-xl lg:text-3xl lg:text-center">{props.title}</div>
            </div>
        </div>
    );
}