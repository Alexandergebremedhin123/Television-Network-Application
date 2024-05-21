import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MainLayout from './MainLayout/MainLayout';
import Sidebar from './Sidebar/Sidebar';
import Navigation from './Navigation/Navigation';

const Users=()=>{
 const AppContainer = styled.div`
 display: flex;
  height: 100vh;
    font-family: Arial, sans-serif;
  `;
 return (
   <AppContainer>
     <Sidebar />
     <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
       <Navigation />
       <MainLayout />
     </div>
  </AppContainer>
);
}
export default Users;









