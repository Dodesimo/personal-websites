import React, {useState} from 'react';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="flex justify-center items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
            <h1 className="w-full text-2xl font-bold text-[#00df9a]">devam.me</h1>
        </div>
)

};

export default Navbar;
