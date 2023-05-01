
export function About() {
    return (
        <>

            <div id="about" className=' z-[1] text-subtextcol w-screen h-screen min-h-[800px] flex flex-col justify-center items-center 'style={{ paddingTop: '10vh' }} > 
                <div className='titlefont text-titlecol text-5xl lg:text-8xl flex justify-center items-center w-full h-1/6 lg:h-1/3 duration-700 drop-shadow-lg shadow-shadowcol'>ABOUT US</div>
                <div className="grid grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 w-full h-5/6 lg:h-2/3 p-16 lg:p-24 gap-8 lg:gap-8">
                    <InfoBox title="About Us">
                    We believe that physics is not only about the mathematical calculations, but also about the nature and philosophy of this world.
                    This club’s ultimate goal is to create a welcoming and safe space in Trudeau, in this planet, where everyone can feel free to share and talk about their ideas and observations about the world. 
                    We are also here to lift each other up, and help each other through difficult times. No one is bad at physics!
                    </InfoBox>
                    <InfoBox title="What we do">
                    1. Hire execs 

                    2. Kick all members 

                    3. Bully Martin 
                    </InfoBox>
                </div>
            </div>
        </>
    );
}

function InfoBox(props) {

    return (
        <div className='bg-opacity-50 bg-subbgcol shadow-2xl transition ease-in-out p-2 flex lg:flex-col justify-center h-full w-full border-2 border-bordercol rounded-2xl box-border md:hover:-translate-y-1 md:hover:scale-105 md:hover:bg-opacity-80 md:hover:shadow-2xl md:hover:text-hovertxtcol md:hover:bg-hoverbgcol duration-200'>
            <div className="flex flex-col lg:items-center lg:justify-around lg:h-2/3">
                <div className="text-3xl lg:text-center">{props.title}</div>
                <div className="text-base lg:text-xl whitespace-none overflow-y-auto">{props.children}</div>
            </div>
            {/* <div className="flex justify-center flex-col lg:flex-row lg:w-full">
                <img src={props.iconUrl} alt="Icon" className="w-16 h-16 md:hover:h-20 md:hover:w-20 lg:w-24 lg:h-24 lg:md:hover:h-36 lg:md:hover:w-36 duration-100" />
            </div> */}
        </div>
    );
}