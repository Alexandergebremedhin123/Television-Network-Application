import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header_layout/Header';
import Dashboard from './components/Dashboard/Dashboard';

const Admin=()=>{
    const [query, setQuery] = useState('');
    const handleSearch = (query) => {
        setQuery(query);
        // Implement search logic here
      };
      return (
        // <Router>
        //   <Routes>
        <div className="app">
           <Navigation />
           <div className="main-content">
             <Header onSearch={handleSearch} />
             <Dashboard />
          </div>
         </div>
        //  </Routes>
        //  </Router>
     );
}
export default Admin;