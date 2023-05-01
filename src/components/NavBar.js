export function NavBar(props) {
    
   

    const handleClick = (id) => {
        console.log(id)
        let page = document.querySelector(id)
        page.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <div className="z-[2] fixed top-0 w-full flex justify-around md:justify-between px-2 md:px-24 py-2 duration-700 " style={{height: '10vh'}}>
            <div className="flex justify-between items-center px-2 md:w-1/3 text-subtextcol duration-700">
                <a className="" href="/">
                    {/* <img className='rounded-3xl' src={'../../assets/logo.png'} /> */}LOGO
                </a>
            </div>
            <ul className="text-navtextcol flex justify-around items-center py-2 mt-0 h-full w-2/3 rounded-2xl bg-hoverbgcol bg-opacity-40 ">

                <li onClick={()=>handleClick("#home")} className="flex items-center my-2 px-2 md:px-8 py-0 text-base sm:text-xl rounded md:hover:bg-opacity-80 md:hover:shadow-2xl md:hover:text-hovertxtcol md:hover:bg-hoverbgcol duration-700 h-full">
                    <div className='titlefont'> HOME</div>
                </li>
                <li onClick={()=>handleClick("#about")} className="flex items-center my-2 px-2 md:px-8 py-0 text-base sm:text-xl rounded md:hover:bg-opacity-80 md:hover:shadow-2xl md:hover:text-hovertxtcol md:hover:bg-hoverbgcol duration-700 h-full">
                    <div className='titlefont'> ABOUT</div>
                </li>
                <li onClick={()=>handleClick("#contact")} className="flex items-center my-2 px-2 md:px-8 py-0 text-base sm:text-xl rounded md:hover:bg-opacity-80 md:hover:shadow-2xl md:hover:text-hovertxtcol md:hover:bg-hoverbgcol duration-700 h-full">
                    <div className='titlefont'> CONTACT</div>
                </li>
                    

            </ul>
        </div>
    );
}
// const root = ReactDOM.createRoot(document.querySelector('#navbar'));
// root.render(<Navbar />);