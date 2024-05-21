import React from 'react';
     import styled from 'styled-components';
     import MovieCard from '../MovieCard/MovieCard';
     import SearchBar from '../SearchBar/SearchBar';

     const Main = styled.div`
       flex: 1;
       padding: 20px;
       background-color: #f5f5f5;
       display: flex;
       flex-direction: column;
     `;

     const Content = styled.div`
       display: flex;
       flex-wrap: wrap;
     `;

     const MainLayout = () => {
       return (
         <Main>
           <SearchBar />
           <Content>
             <MovieCard title="Grey's Anatomy" />
             <MovieCard title="Movie Title 1" />
             <MovieCard title="Movie Title 2" />
             {/* Add more MovieCards as needed */}
           </Content>
         </Main>
       );
     };

     export default MainLayout;