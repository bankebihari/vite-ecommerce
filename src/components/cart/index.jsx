import React, { useState } from "react";
import Product from "../product";
import {
    Link
} from 'react-router-dom';

function Index({ cart, setCart, show, setShow }) {
    const [total, setTotal] = useState(0);
    return (
        <>
            <div className="w-full h-full z-20 bg-black bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0" id="chec-div">
                <div className="w-full absolute z-20 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="checkout">
                    <div className="flex md:flex-row flex-col justify-end" id="cart">
                        <div className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen" id="scroll">
                            <div className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer" onClick={() => setShow(!show)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <polyline points="15 6 9 12 15 18" />
                                </svg>
                                <p className="text-sm pl-2 leading-none">Back</p>
                            </div>
                            <p className="text-5xl font-black leading-10 text-gray-800 pt-3">Bag</p>

                            {
                                cart.length > 0 ? (
                                    cart.map((item, index) => (
                                        <Product key={index} {...item} cart={cart} setCart={setCart} />
                                    ))
                                ) : (
                                    <p className="text-2xl font-bold text-gray-800 pt-3">Your cart is empty</p>
                                )
                            }

                        </div>
                        <div className="md:w-1/3 xl:w-1/4 w-full bg-gray-100 h-full">
                            <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                                <div>
                                    <p className="text-4xl font-black leading-9 text-gray-800">Summary</p>
                                    <div className="flex items-center justify-between pt-16">
                                        <p className="text-base leading-none text-gray-800">Subtotal</p>
                                        <p className="text-base leading-none text-gray-800">${
                                            cart.reduce((acc, item) => acc + item.price, 0)
                                        }</p>
                                    </div>
                                    <div className="flex items-center justify-between pt-5">
                                        <p className="text-base leading-none text-gray-800">Shipping</p>
                                        <p className="text-base leading-none text-gray-800">${
                                            cart.reduce((acc, item) => acc + item.price, 0) > 100 ? 0 : 10
                                        }</p>
                                    </div>
                                    <div className="flex items-center justify-between pt-5">
                                        <p className="text-base leading-none text-gray-800">Tax</p>
                                        <p className="text-base leading-none text-gray-800">${
                                            cart.reduce((acc, item) => acc + item.price, 0) * 0.1
                                        }</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                                        <p className="text-2xl leading-normal text-gray-800">Total</p>
                                        <p className="text-2xl font-bold leading-normal text-right text-gray-800">${
                                            cart.reduce((acc, item) => acc + item.price, 0) > 100 ? cart.reduce((acc, item) => acc + item.price, 0) * 1.1 : cart.reduce((acc, item) => acc + item.price, 0) * 1.1 + 10
                                        }</p>
                                    </div>
                                    <Link to="/checkout" onClick={() => setShow(!show)} className="text-base px-4 leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                                        Checkout
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>
                {` /* width */
                #scroll::-webkit-scrollbar {
                    width: 1px;
                }

                /* Track */
                #scroll::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }

                /* Handle */
                #scroll::-webkit-scrollbar-thumb {
                    background: rgb(133, 132, 132);
                }
`}
            </style>
        </>
    );
}

export default Index;
