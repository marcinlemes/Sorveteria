import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PaginaInicial from "../Paginas/Home";
import PaginaSabores from "../Paginas/Sabores";
import PaginaSobre from "../Paginas/Sobre";

const Rotas = () =>(
    <BrowserRouter>
        <Routes>
            <Route path ="/" element={ <PaginaInicial /> } />
            <Route path ="/Sabores" element={ <PaginaSabores /> } />
            <Route path ="/Sobre" element={ <PaginaSobre /> } />
        </Routes>
    </BrowserRouter>
)

export default Rotas;