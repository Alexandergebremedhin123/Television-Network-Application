import React from 'react';
import styled from 'styled-components';

const Side = styled.div`
       width: 200px;
       height: 100vh;
       background-color: #1b1b2f;
       color: white;
       display: flex;
       flex-direction: column;
       align-items: center;
       padding-top: 20px;
`;

const SidebarItem = styled.div`
       margin: 20px 0;
       cursor: pointer;
`;

const Sidebar = () => {
       return (
         <Side>
           <SidebarItem>Home</SidebarItem>
           <SidebarItem>Live TV</SidebarItem>
           <SidebarItem>Movies</SidebarItem>
           <SidebarItem>TV Shows</SidebarItem>
           <SidebarItem>Sports</SidebarItem>
         </Side>
       );
};

export default Sidebar;