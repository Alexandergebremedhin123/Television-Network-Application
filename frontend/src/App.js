import React, { useState, useEffect } from 'react';
import Navigation  from './Admin/components/Navigation/Navigation';
import Header from './Admin/components/Header_layout/Header';
import Dashboard from './Admin/components/Dashboard/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import './App.css'; 
import Admin from './Admin/Admin';
import Users from './Users/components/Users';
// import styled from 'styled-components';
// import MainLayout from './Users/components/MainLayout/MainLayout';
// import Sidebar from './Users/components/Sidebar/Sidebar';
// import Navigation from './Users/components/Navigation/Navigation';


const App = () => {
    const [query, setQuery] = useState('');
//    const AppContainer = styled.div`
//    display: flex;
//    height: 100vh;
//    font-family: Arial, sans-serif;
//  `;
  // const [movies, setMovies] = useState([]);
  // const [filteredMovies, setFilteredMovies] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  //  const [selectedNetwork, setSelectedNetwork] = useState('');
  // const [selectedCategory, setSelectedCategory] = useState('');
  // const [watchLater, setWatchLater] = useState([]);
  // const [favorites, setFavorites] = useState([]);
  // useEffect(() => {
  //   fetchMovies();
  //  }, [currentPage, selectedNetwork, selectedCategory, query]);
  //  const fetchMovies = async () => {
  //   // Replace with your API endpoint and query parameters
  //    const API_URL = `https://api.example.com/movies?page=${currentPage}&network=${selectedNetwork}&category=${selectedCategory}&query=${query}`;
    
  //    try {
  //     const response = await fetch(API_URL);
  //     const data = await response.json();
  //      setMovies(data.movies);
  //      setFilteredMovies(data.movies);
  //     } catch (error) {
  //      console.error('Error fetching movies:', error);
  //      }
  //   };
    const handleSearch = (query) => {
      setQuery(query);
      // Implement search logic here
    };
  //  const handleNetworkChange = (network) => {
  //    setSelectedNetwork(network);
  // };

  //  const handleCategoryChange = (category) => {
  //    setSelectedCategory(category);
  //   };

  //  const handlePageChange = (page) => {
  //    setCurrentPage(page);
  //  };
  //  const addToWatchLater = (movie) => {
  //   setWatchLater([...watchLater, movie]);
  // };

  // const addToFavorites = (movie) => {
  //   setFavorites([...favorites, movie]);
  // };
  //  app.get('/movies', async (req, res) => {
  //   const { page, network, category, query } = req.query;
  
  //   // Fetch movies from your database or external API based on the query parameters
  //   const movies = await fetchMoviesFromDatabaseOrAPI({ page, network, category, query });
  
  //   res.json({ movies });
  // });
  // const fetchMoviesFromDatabaseOrAPI = async ({ page, network, category, query }) => {
  //   // Implement the logic to fetch movies based on the parameters
  //   // This is just a placeholder function
  //   return [
  //     { title: 'Movie 1', description: 'Description 1', posterUrl: '/path/to/poster1.jpg' },
  //     { title: 'Movie 2', description: 'Description 2', posterUrl: '/path/to/poster2.jpg' },
  //     // Add more movies as needed
  //   ];
  // };
  // const logLists = () => {
  //   console.log('Watch Later:', watchLater);
  //   console.log('Favorites:', favorites);
  // };
  //  return (
  //   <Layout>
  //     <SearchBar onSearch={handleSearch} />
  //     <div className="filters">
  //       <select onChange={(e) => handleNetworkChange(e.target.value)}>
  //         <option value="">All Networks</option>
  //         <option value="network1">Network 1</option>
  //         <option value="network2">Network 2</option>
  //       </select>
  //       <select onChange={(e) => handleCategoryChange(e.target.value)}>
  //         <option value="">All Categories</option>
  //         <option value="action">Action</option>
  //         <option value="drama">Drama</option>
  //       </select>
  //       <div className="pagination">
  //         <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
  //         <span>Page {currentPage}</span>
  //         <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
  //       </div>
  //     </div>
  //     <div>
  //       <button onClick={logLists}>Log Lists</button>
  //     </div>
  //     <div className="movie-list">
  //       {filteredMovies.map((movie, index) => (
  //         <MovieCard 
  //           key={index} 
  //           title={movie.title} 
  //           description={movie.description} 
  //           posterUrl={movie.posterUrl} 
  //           addToWatchLater={addToWatchLater}
  //           addToFavorites={addToFavorites}
  //         />
  //       ))}
  //     </div>
  //   </Layout>
  // );
  //#####this is  the admin display
    return (
       
         <Routes>
            <Route path="/" element={ <Login/>} />
          <Route path="/Admin" element={<Admin/>} />     
         <Route path="/Users" element={<Users/>} />
        </Routes>
   
   );
//###this is the user display
// return (
//   <AppContainer>
//     <Sidebar />
//     <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
//       <Navigation />
//       <MainLayout />
//     </div>
//   </AppContainer>
// );
  // const [movies, setMovies] = useState([]);
  // const [filteredMovies, setFilteredMovies] = useState([]);

  // useEffect(() => {
  //   // Fetch movies from an API or use static data
  //   const fetchMovies = async () => {
  //     // Replace with your API call
  //     const movieData = [
  //       { title: 'Movie 1', description: 'Description 1', posterUrl: '/path/to/poster1.jpg' },
  //       { title: 'Movie 2', description: 'Description 2', posterUrl: '/path/to/poster2.jpg' },
  //       // Add more movies as needed
  //     ];
  //     setMovies(movieData);
  //     setFilteredMovies(movieData);
  //   };

  //   fetchMovies();
  // }, []);

  // const handleSearch = (query) => {
  //   const filtered = movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()));
  //   setFilteredMovies(filtered);
  // };

  //  return (
  //    <Layout>
  //      <Header></Header>
  //      {/* <SearchBar onSearch={handleSearch} /> */}
  //      <div className="movie-list">
  //        {filteredMovies.map((movie, index) => (
  //          <MovieCard 
  //            key={index} 
  //            title={movie.title} 
  //            description={movie.description} 
  //           posterUrl={movie.posterUrl} 
  //          />
  //        ))}
  //       </div>
  //    </Layout>
  //  );
};

export default App;