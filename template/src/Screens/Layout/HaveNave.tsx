import React from 'react';

import { Container, ThemeProvider } from 'react-bootstrap';
import Nav from './Navbar';

export default (props: any) => {
    return (
        <ThemeProvider>
            <Nav />
            <Container fluid className="bg-white">
                {props.children}
            </Container>
        </ThemeProvider>
    );
}