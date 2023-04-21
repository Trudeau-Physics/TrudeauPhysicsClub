export function InfoBox(props) {

    return (
        <div className='flex m-2 p-4 pt-6 h-1/2 w-1/2 border-2 border-green-50 rounded-2xl box-border flex-grow duration-700'>
            <div>
                <div className="text-6xl">{props.title}</div>
                <div className="text-2xl">{props.children}</div>
                <image src="something"/>
            </div>
        </div>
    );
}