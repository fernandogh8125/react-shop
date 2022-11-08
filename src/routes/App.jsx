import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "@containers/Layout";
import Login from "../pages/Login";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import RecoveryPassword from "../pages/RecoveryPassword";
import '@styles/global.css';
import NewPassword from "../pages/NewPassword";
import NewAccount from "../pages/NewAccount";
import ViewAccount from "../pages/ViewAccount";
import OrderDetail from "@containers/OrderDetail";
import ViewOrders from "../pages/ViewOrders";
import AppContext from "@context/AppContext";
import useInitialState from "@hooks/useInitialState";

const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/new-password" element={<NewPassword />} />
                        <Route exact path="/recovery-password" element={<RecoveryPassword />} />
                        <Route exact path="/new-account" element={<NewAccount />} />
                        <Route exact path="/view-account" element={<ViewAccount />} />
                        <Route exact path="/order-detail" element={<OrderDetail />} />
                        <Route exact path="/view-orders" element={<ViewOrders />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;