import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Components/Header'
import Footer from './Components/Footer'

import Home from './Pages/Home'
import Login from './Pages/Login'
import People from './Pages/People'
import Item from './Pages/Item'
import Media from './Pages/Media'
import Post from './Pages/Post'
import Project from './Pages/Project'
import Valuation from './Pages/Valuation'
import Portfolio from './Pages/Portfolio'
import Blog from './Pages/Blog'


export default function App() {  
  return (    
    <BrowserRouter>            
      <Header/>
      <Routes>        
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/people" element={<People/>} />
        <Route path="/item" element={<Item/>} />
        <Route path="/media" element={<Media/>} />
        <Route path="/post" element={<Post/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/valuation" element={<Valuation/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/blog" element={<Blog/>} />
      </Routes>  
      <Footer/>          
    </BrowserRouter>
  );
}
