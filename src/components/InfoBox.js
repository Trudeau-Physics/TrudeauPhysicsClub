export function InfoBox(props) {

    return (
        <div className='flex m-2 p-4 pt-6 h-1/4 w-2/5 border-2 border-green-50 rounded-2xl box-border flex-grow hover:bg-opacity-80 hover:shadow-2xl hover:text-slate-900 hover:bg-slate-400 duration-700'>
            <div>
                <div className="h-1/2 w-1/2">
                    <div className="text-6xl">{props.title}</div>
                </div>
                <div className="text-2xl">{props.children}</div>
                <image src="something"/>
            </div>
        </div>
    );
}

function InfoBox(props) {

    return (
        <div className='shadow-2xl transition ease-in-out p-4 flex lg:flex-col justify-between h-full w-full border-2 border-green-50 rounded-2xl box-border transform hover:-translate-y-1 hover:scale-105 hover:bg-opacity-80 hover:shadow-2xl hover:text-slate-900 hover:bg-slate-400 duration-200'>
            <div className="flex flex-col lg:items-center lg:justify-around flex-grow">
                <div className="text-xl lg:text-3xl lg:text-center">{props.title}</div>
                <div className="text-base lg:text-xl underline">{props.children}</div>
            </div>
            {/* <image src="something"/> */}
        </div>
    );
}