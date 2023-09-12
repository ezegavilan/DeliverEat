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
    const matches: RouteMatch[] = useMatches();
    const activeRoute = matches[matches.length-1].pathname;    
    const isCheckoutRootPage: boolean = (activeRoute === '/checkout' || activeRoute === '/checkout/');
    const [cta, setCta] = useState(isCheckoutRootPage);    
    return (

        <main className="container m-5 px-5">
            <section className="title">
                <h1 className=" text-xl font-bold">Completá tu pedido</h1>
                <span className="text-sm">
                    <p className="">| One Burger</p>
                </span>
            </section>

            <section className="summary mt-12">
                <div className="summary-item">
                    <span className="item-description">
                        <span className="img">
                            <img src="/img/burger-1.png" alt="burger-1" />
                        </span>
                        <div className="item-name">
                            <p>Burger Premium</p>
                            <p className="units">x1</p>
                        </div>
                    </span>
                    <span><p>$ 3.500</p></span>
                </div>

                <div className="summary-item">
                    <span className="item-description">
                        <span className="img">
                            <img src="/img/burger-2.png" alt="lomito-1" />
                        </span>
                        <div className="item-name">
                            <p>Burger XL</p>
                            <p className="units">x1</p>
                        </div>
                    </span>
                    <span><p>$ 2.500</p></span>
                </div>
                {
                    (cta) && (
                        <div className="mt-7 p-2">
                            <Link className="cta" to={'steps/step-1'} onClick={() => setCta(false)}>
                                <span>Continuar</span>
                            </Link>
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
