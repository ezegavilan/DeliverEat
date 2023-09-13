import type { LinksFunction, LoaderArgs, LoaderFunction, MetaFunction } from "@remix-run/node";
import checkoutStyles from '~/styles/checkout.css';
import { useState } from "react";
import { Outlet, type RouteMatch, useMatches } from "@remix-run/react";
import { Link } from "react-router-dom";

export const meta: MetaFunction = () => {
    return { title: "Completá tu pedido" };
}

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: checkoutStyles }];
}

export const loader: LoaderFunction = ({ params }: LoaderArgs) => {
    return params;
}

export default function CheckoutPage() {
    const items = [
        { id: 1, name: 'Burger Premium', img: '/img/burger-1.png', price: 3500 },
    ];
    const [itemsState, setItemsState] = useState(items);
    const matches: RouteMatch[] = useMatches();
    const activeRoute = matches[matches.length - 1].pathname;
    const isCheckoutRootPage: boolean = (activeRoute === '/checkout' || activeRoute === '/checkout/');
    const [cta, setCta] = useState(isCheckoutRootPage);

    const handleRemoveItem = (id: number) => {
        setItemsState(itemsState.filter(item => item.id !== id));
    }

    const handleReturnToCheckout = () => {
        setItemsState(items);
    }

    return (

        <main className="container m-5 px-5">
            <section className="title">
                <h1 className=" text-xl font-bold">Completá tu pedido</h1>
                <span className="text-sm">
                    <p className="">| One Burger</p>
                </span>
            </section>

            <section className="summary mt-12">
                {
                    itemsState.map(item => (
                        <div key={item.name} className="summary-item">
                            <span className="item-description">
                                <span className="img">
                                    <img src={item.img} alt={item.name} />
                                </span>
                                <div className="item-name">
                                    <p>{item.name}</p>
                                    <p className="units">x1</p>
                                </div>
                            </span>
                            <div className="price-remove">
                                <span><p>$ {item.price}</p></span>
                                {
                                    (cta) && (
                                        <button className="remove" onClick={() => handleRemoveItem(item.id)}>
                                            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                                            </svg>
                                            </span>
                                        </button>
                                    )
                                }
                            </div>
                        </div>
                    ))
                }

                {
                    (cta && itemsState.length > 0) && (
                        <div className="mt-7 p-2">
                            <Link className="cta" to={'steps/step-1'} onClick={() => setCta(false)}>
                                <span>Continuar</span>
                            </Link>
                        </div>

                    )
                }

                {
                    (itemsState.length <= 0) && (
                        <div className="empty-items">
                            <h1>¡Agregá productos al carrito para continuar!</h1>
                            <button className="cta sm" onClick={handleReturnToCheckout}>Volver</button>
                        </div>
                    )
                }
            </section>

            <section className="location-container mt-5">
                <Outlet />
            </section>
        </main>
    )
}
