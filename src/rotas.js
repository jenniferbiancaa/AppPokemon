import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home.js';
import Search from './Components/PokemonPesquisa';
import PokemonDetail from './Components/PokemonDetalhe'; 
import Padrao from './Padrao/index.js';
import NaoEncontrado from './NaoEncontrado/index.js';
import Footer from './Footer/footer.js';
import About from './Components/Sobre.js';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Padrao />}>
          <Route index element={<Home />} />
          <Route path="Pesquisar" element={<Search />} />
          <Route path="pokemon/:id" element={<PokemonDetail />} /> 
          <Route path="Sobre" element={<About />} />
          <Route path="*" element={<NaoEncontrado/>}/> 
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
