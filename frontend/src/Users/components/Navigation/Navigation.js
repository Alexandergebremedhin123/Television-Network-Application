import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
       height: 60px;
       display: flex;
       align-items: center;
       justify-content: space-between;
       padding: 0 20px;
       background-color: #2c2c54;
       color: white;
`;
const Navigation = () => {
    return (
        <Nav>
           <h1>App Name</h1>
           <div>User Icon</div>
         </Nav>
       );
     };

export default Navigation;