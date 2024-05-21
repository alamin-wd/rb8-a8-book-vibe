import { Link, NavLink } from "react-router-dom";

const NavBar = () => {

    const links = <>
        <li className="hover:underline hover:text-[#23BE0A] px-2"><NavLink to="/">Home</NavLink></li>
        <li className="hover:underline hover:text-[#23BE0A] px-2"><NavLink to="/listedBooks">Listed Books</NavLink></li>
        <li className="hover:underline hover:text-[#23BE0A] px-2"><NavLink to="/pagesToRead">Pages to Read</NavLink></li>
    </>

    return (

        <div className="navbar my-4">

            <div className="navbar-start">

                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>

                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40 text-[#131313CC] text-lg font-medium" >
                        {
                            links
                        }
                    </ul>
                </div>

                <Link className="text-2xl md:text-4xl text-[#131313] font-bold"
                    to="/">Book <span className="text-[#23BE0A]">Vibe</span>
                </Link>

            </div>

            <div className="navbar-center hidden md:flex lg:flex">
                <ul className="flex items-center gap-6 text-[#131313CC text-lg font-medium" >
                    {
                        links
                    }
                </ul>
            </div>

            <div className="navbar-end gap-6">

                <button className=" bg-[#23BE0A] hover:bg-[#59C6D2] px-2 py-1 md:px-5 md:py-2 rounded-md md:rounded-lg text-white md:text-lg font-medium md:font-semibold">
                    Sign In
                </button>

                <button className=" bg-[#59C6D2] hover:bg-[#23BE0A] px-2 py-1 md:px-4 md:py-2 rounded-md md:rounded-lg text-white md:text-lg font-medium md:font-semibold">
                    Sign Up
                </button>

            </div>
        </div>
    );
};

export default NavBar;