import React from 'react'

const SideItem = ({items}) => {
    const {name,links,open } = items;
    const [isOpen, setOpen] = React.useState(open);

    const openSideNav = () => {
        setOpen(!isOpen);
    };
    return (
    <div onClick={() => openSideNav()} style={sideItemstylo}>
        <p style={stylo}>{name}</p>
        {isOpen && 
            links.map((link, index) => {
            const {title, to} = link;
            return(
                <div key={index} style={linkContainerStyle}>
                    <a href = {to} style={linkStyle}>
                        <p style={stylo}>{title}</p>
                    </a>
                </div>
            );
        })}
    </div>
    );
};

//Estilachos, cambiarlos para cambiar estilos

const stylo = {
    margin: "20px",
    fontWeight: "600",
};

const sideItemstylo = {
    height: "auto",
    minHeight: "50px",
    width: "350px",
    borderTop: "1px solid #CBCBCB",
    color: "#fff",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
};

const linkContainerStyle ={
    height: "auto",
    width: "350px",
    background: "#FAFAFA",
    borderTop: "1px solid #D6D6D6",
};
const linkStyle ={
    textDecoration: "none",
    color: "#555555",
};

export default SideItem