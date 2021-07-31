import * as React from 'react';
import Box from '@material-ui/core/Box';
import Navbar from "./navbar";

export default function Header() {
    return (
        <>
            <Navbar></Navbar>
            <Box sx={{height: '75px', backgroundColor: "primary.main"}}>

            </Box>
        </>

    );
}