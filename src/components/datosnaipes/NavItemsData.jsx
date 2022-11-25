export const NavItems =[
    {
        name : 'Mi Perfil', 
        links: [
            { title: 'Sub Menu',to: "#" },
        ],
        open: false,
    },
    {
        name : 'Mis contactos', 
        links: [
            { title: 'Sub Menu',to: "#" },
        ],
        open: false,
    },
    {
        name : 'Reuniones', 
        links: [
            { title: 'Agendar reunión',to: "/horario" }, //Cambia el to para ir a donde quieras pero hay que añadirlo en el app_router
            { title: 'Reuniones pasadas',to: "/menuanalisis" },
        ],
        open: false,
    },
    {
        name : 'Ajustes', 
        links: [
            { title: 'Sub Menu',to: "#" },
        ],
        open: false,
    },
];