import React from 'react';
     import styled from 'styled-components';

     const Card = styled.div`
       width: 200px;
       margin: 10px;
       padding: 10px;
       background-color: white;
       box-shadow: 0 4px 8px rgba(0,0,0,0.1);
       border-radius: 8px;
     `;

     const MovieCard = ({ title }) => {
       return (
         <Card>
           <h3>{title}</h3>
           <p>Some description...</p>
         </Card>
       );
     };

     export default MovieCard;