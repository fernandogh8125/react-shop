import React from "react";
import OrderResume from "@components/OrderResume";
import '@styles/ViewOrders.scss';

const ViewOrders = () => {
    return (
        <div class="my-order">
            <div class="my-order-container">
                <h1 class="title">My orders</h1>

                <div class="my-order-content">
                    <OrderResume/>
                    <OrderResume/>
                    <OrderResume/>
                    <OrderResume/>
                    <OrderResume/>
                    <OrderResume/>
                </div>
            </div>
        </div>
    );
}

export default ViewOrders;