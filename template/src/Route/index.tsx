import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import * as Screen from "../Screens";

export * from './hooks';

export default (props: any) => {
    return (
        <Router>


            <Routes>
                <Route path="/" element={<Screen.NavLayout><h1>this is /</h1></Screen.NavLayout>} />
                <Route path="/basket" element={<Screen.NavLayout><Screen.Basket /></Screen.NavLayout>} />
                <Route path="/dashboard" element={ <Screen.NavLayout>  <Screen.Dashboard></Screen.Dashboard> </Screen.NavLayout>}/>
                <Route path="/login" element={<Screen.NavLayout><Screen.Login/></Screen.NavLayout>} />
                <Route path="/logout" element={<Screen.NavLayout> <div><h2>logout</h2></div> </Screen.NavLayout>} />
                <Route path="/products" element={<Screen.NavLayout> <Screen.Products /> </Screen.NavLayout>} />
                <Route path="/product/:id" element={<Screen.NavLayout><Screen.Product /></Screen.NavLayout>} />
                <Route path="/about" element={<Screen.splash />} />
                <Route path="*" element={<Screen.Error404 />} />
            </Routes>
        </Router>

    );
}