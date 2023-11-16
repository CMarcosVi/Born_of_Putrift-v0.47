import React from "react";
import LifePersonagem from "./LifePersonagem";
import './Personagem.css'
import Inventario from "./InventarioPersonagem";


export default function Personagem(){
    return(
        <section className="personagem">
            <LifePersonagem />
            <Inventario />
        </section>
    );
}