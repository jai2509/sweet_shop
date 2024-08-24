import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";



const Navbar = () => {
    // navList Data
    const navList = (
        <ul className="flex space-x-3 text-white font-medium text-md px-5 ">
            {/* Home */}
            <li>
                <Link to={'/'}>Home</Link>
            </li>

            {/* All Product */}
            <li>
                <Link to={'/allproduct'}>All Product</Link>
            </li>

            {/* Signup */}
            <li>
                <Link to={'/signup'}>Signup</Link>
            </li>

            {/* User */}
            
            {/* User */}
            <li>
                <Link to={'/user-dashboard'}>Dashboard</Link> {/* User-Dashboard */}
            </li>
            

            {/* Admin */}
            <li>
                <Link to={'/admin-dashboard'}>Admin</Link> {/* Admin Dashboard */}
            </li>

            {/* <li>
                <Link to={'/'}>Admin</Link>
            </li> */}

            {/* logout */}
            {/* <li>
                logout
            </li> */}

            {/* Cart */}
            <li>
                <Link to={'/cart'}>
                    Cart(0)
                </Link>
            </li>
        </ul>
    )
    return (
        <nav className="bg-pink-600 sticky top-0">
            {/* main  */}
            <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
                {/* left  */}
                <div className="left py-3 lg:py-0">
                    <Link to={'/'}>
                    <Link to={'/'}>
    <img src={'sweet\src\assets\images\logo.jpg'} alt="Logo" className="h-10 w-auto mx-auto" />
</Link>

                    </Link>
                </div>

                {/* right  */}
                <div className="right flex justify-center mb-4 lg:mb-0">
                    {navList}
                </div>

                {/* Search Bar  */}
                <SearchBar />
            </div>
        </nav>
    );
}

export default Navbar;