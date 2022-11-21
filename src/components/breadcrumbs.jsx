import React from 'react'
import {Box, Breadcrumbs, Link , Typography} from '@mui/material'

export const MuiBreadcrumbs = () => {
    return( 
    <Box m={2}>
        <Breadcrumbs aria-label='breadcrumb'>
            <Link underline='hover' href='#'>Home</Link>
            <Link underline='hover' href='#'>Catalog</Link>
            <Link underline='hover' href='#'>Acceories</Link>
            <Typography color='text.primary'>Shoes</Typography>
        </Breadcrumbs>
    </Box>
    )
}