import React from 'react';
     import styled from 'styled-components';
     import { FaSearch } from "react-icons/fa";
     const Search = styled.div`
       margin-bottom: 20px;
     `;

     const Input = styled.input`
       width: 70%;
       padding: 10px;
       font-size: 16px;
     `;
    

     const SearchBar = () => {
       return (
         <div>
         <Search>
           <Input type="text" placeholder="Search..." />
           <button style={{height:42}}><FaSearch /></button>
         </Search>
        
         </div>

       );
     };

     export default SearchBar;