
export function Contact() {
    return (
        <div id="contact" className='z-[1] text-subtextcol w-screen h-screen min-h-[800px] flex-col justify-around items-center ' style={{ paddingTop: '10vh' }}>
            <div className='titlefont text-titlecol text-5xl lg:text-8xl flex justify-center items-center w-full h-1/6 lg:h-1/3 duration-700 drop-shadow-lg shadow-shadowcol'>CONTACT</div>
            <div className="grid grid-cols-1 grid-rows-4 lg:grid-rows-1 lg:grid-cols-4 justify-center items-center w-full h-4/5 lg:h-3/5 p-16 lg:p-24 gap-8 lg:gap-8">

                <InfoBox title="Join The Discord!" iconUrl="./assets/discord.svg" text="Code: CeGpsn3X" link="https://discord.gg/CeGpsn3X">
                    <a href="" target="_blank" className="whitespace-nowrap"></a>
                </InfoBox>
                <InfoBox title="Join The Classroom!" iconUrl="./assets/google-classroom.svg" text="Code: y53xknn" link="https://classroom.google.com/">
                </InfoBox>

                <InfoBox title="Follow Our Instagram!" iconUrl="./assets/instagram.svg" text="@trudeauphysics" link="https://www.instagram.com/trudeauphysics/">
                </InfoBox>

                <InfoBox title="Email Us!" iconUrl="./assets/email.svg" text="trudeauphysics @gmail.com" link="mailto:trudeauphysics@gmail.com" >
                </InfoBox>
            </div>
        </div>
    );
}

function InfoBox(props) {

    return (
        <div className='bg-opacity-50 bg-subbgcol shadow-2xl transition ease-in-out p-4 flex lg:flex-col justify-between min-h-auto min-w-auto h-full w-full border-2 border-bordercol rounded-2xl box-border transform md:hover:-translate-y-1 md:hover:scale-105 md:hover:bg-opacity-80 md:hover:shadow-2xl md:hover:text-hovertxtcol hover:bg-hoverbgcol duration-200'>
            <div className="flex flex-col lg:items-center lg:justify-around flex-grow">
                <div className="text-2xl lg:text-2xl lg:text-center">{props.title}</div>
                <div className="text-base lg:text-xl"><div className={props.title=="Email Us!" ? 'text-center' :'whitespace-nowrap'}>{props.text}</div></div>
            </div>
            <div className="flex justify-center flex-col lg:flex-row lg:w-full">
                <a href={props.link} target="_blank">
                    <img src={props.iconUrl} alt="Icon" className="w-16 h-16 md:hover:h-20 md:hover:w-20 lg:w-24 lg:h-24 lg:md:hover:h-36 lg:md:hover:w-36 duration-100"></img>
                </a>
            </div>
        </div>
    );
}

