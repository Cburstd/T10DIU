import React from 'react'
import SideItem from "./SideItem"
import { NavItems } from './datosnaipes/NavItemsData';


const SideNav = () => {
    
    return(
        <div style={naipestile}>
            <h2>Soy la tormenta</h2>
            {NavItems.map((navItem, index) => {
                return  <SideItem key={index}  items={navItem}/>;
            })} 
        </div>
    );
};

// Estilo y facha
const naipestile ={
    height: "60vh",
    width: "350px",
    background: "rgb(22,82,131)",
    position: "absolute",
    border: "lpx solid transparent",
    right: 4,
    color: "#fff",
    textAlign: "left",

};

export default SideNav