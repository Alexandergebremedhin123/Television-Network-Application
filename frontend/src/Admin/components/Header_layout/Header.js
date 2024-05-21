import React from 'react';
import './Header.css';
import { PiExportBold } from "react-icons/pi";
import { IoFilterSharp } from "react-icons/io5";
import { MdOutlineSearch } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { FaRegCircle } from "react-icons/fa";
const Header = ({ onSearch }) => {
  
    const navigate = useNavigate();

   const handleLoginClick = () => {
      navigate('/Users');
    };

  return (
    <>
     {/* <div className="logo"></div>   */}
    <div className="Dash">
   
     Dashboard
      <button id='set3'  onClick={handleLoginClick}  >User</button>
      {/* onClick={handleLoginClick}  */}
     
     <IoNotificationsOutline id='set'/>
     <FaRegCircle id='set2'/>
    </div>
    
     
     
    <div className="header">
     
      <div className="search-bar">
      <div className='se'><MdOutlineSearch/></div>
      
      <input type="text" placeholder="Search" onChange={(e) => onSearch(e.target.value)}/>
      </div>
      <div className="header-actions">
     
        <button> <PiExportBold />Export</button>
        <button><IoFilterSharp />Add Filter</button>
        <button id="Add-Filter">Add Filter</button>
      </div>
    </div>
    </>
  );
};

export default Header;