// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LibraryList from '../components/LibraryList';
// import { getAllResources} from '../utils/libraryActions';
import AddResource from '../components/AddResource';
import DeleteResource from '../components/DeleteResource';
import ResourceDetail from '../components/ResourceDetail';
// import RandomResource from '../components/RandomResource';
import FavoriteResources from '../components/FavoriteResources';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LibraryList />} />
        <Route path="/add" element={<AddResource/>} />
        <Route path="/delete" element={<DeleteResource/>} />
        <Route path="/detail/:id" element={<ResourceDetail/>} />
        {/* <Route path="/random" element={<RandomResource/>} /> */}
        <Route path="/favorites" element={<FavoriteResources/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
