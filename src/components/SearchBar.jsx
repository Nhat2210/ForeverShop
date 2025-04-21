import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const [visible, setVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes("collection")) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, [location])

    return showSearch && visible ? (
        <div className='border-t bg-gray-50 text-center py-5'>
            <div className="inline-flex items-center justify-center border  border-gray-400 px-5 py-2 mx-3 rounded-full w-3/4 sm:w-1/2">
                <input type="text" placeholder='Search' className='flex-1 outline-none bg-inherit text-sm' value={search} onChange={(e) => setSearch(e.target.value)} />
                <img src={assets.search_icon} alt="" className="w-4" />
            </div>
            <img onClick={() => setShowSearch(false)} src={assets.cross_icon} alt="" className="inline w-3 cursor-pointer" />
        </div>
    ) : null
}

export default SearchBar
