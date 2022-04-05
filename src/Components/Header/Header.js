import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
         <header className='flex justify-between px-20 py-6 bg-green-100'>
             <div className="">
                 <h1 className='text-4xl font-mono font-bold text-green-700'> Kachamorich</h1>
             </div>
             <nav>
                 <Link to='/'><p className='text-green-600 inline font-medium text-xl px-6 py-4 '>Home</p></Link>
                 <Link to='/blog'><p className='text-green-600 inline font-medium text-xl px-6 py-4 '>Blog</p></Link>
                <Link to='/reviews'><p className='text-green-600 inline font-medium text-xl px-6 py-4 '>Reviews </p></Link>
                <Link to='/report'><p className='text-green-600 inline font-medium text-xl px-6 py-4 '>Dashboard</p></Link>

             </nav>
        </header>
    );
};

export default Header;