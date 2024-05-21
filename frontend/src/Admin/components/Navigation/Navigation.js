import React from 'react';
import './Navigation.css'; // Optional: for styling
import { LuLayoutDashboard } from "react-icons/lu";
import { RiMiniProgramFill } from "react-icons/ri";
import { GrChannel } from "react-icons/gr";
const Navigation = () => {
  return (
    <>
    
    <div className="sidebar">
    
      <nav>
        <ul>
          <li><a href="#dashboard"><LuLayoutDashboard />Dashboard</a></li>
          <li><a href="#channel"><GrChannel />Channel</a></li>
          <li><a href="#program"><RiMiniProgramFill />Program</a></li>
        </ul>
      </nav>
    </div>
    </>
  );
};

export default Navigation;