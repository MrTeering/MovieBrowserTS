import 'bootstrap/dist/css/bootstrap.css'
import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import SearchPage from './components/pages/SearchPage';
import MovieDetailPage from './components/pages/MovieDetailPage';

function App() {
  const [searchResults, setSearchResults] = useState([])
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/movie?include_adult=true&query=${searchText}&language=en-US&api_key=3c8d059046e9bb1392d6c5f0d03dbac5`)
    .then(response => response.json())
    .then(data => {
      setSearchResults(data.results)
    })
  }, [searchText])

  const links = [
    {
      title: 'home',
      link: '/'
    }, 
    {
      title: 'about',
      link: '/about'
    }
  ]

  return (
    <div className="App">
    <BrowserRouter>
    <Header linkList={links} searchText={searchText} setSearchText={setSearchText}/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/search" element={<SearchPage searchText={searchText} searchResult={searchResults}/>} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
      </Routes>
    </BrowserRouter>
    
  </div>

    
  );
}

export default App;
