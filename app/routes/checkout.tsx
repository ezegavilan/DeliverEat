import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Stepper, Step, Button } from "@material-tailwind/react";

import checkoutStyles from '~/styles/checkout.css';
import { useEffect, useState } from "react";

export const meta: MetaFunction = () => {
    return { title: "Completá tu pedido" };
}

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: checkoutStyles }];
}

export default function CheckoutPage() {
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
            </section>

            <section className="location-container mt-5">
                <StepperWithContent />
            </section>
        </main>


    )
}


export function StepperWithContent() {
    const [activeStep, setActiveStep] = useState(0);
    const [isLastStep] = useState(false);
    const [isFirstStep] = useState(false);
    const [selected, setSelected] = useState('sooner');

    const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);


    const handleSelectCard = (card: string) => {
        setSelected(card);
    }

    return (
        <div className="w-full px-24 py-4">
            <Stepper activeLineClassName="!bg-delivereat-secondary"
                activeStep={activeStep}
            >
                <Step activeClassName="!bg-delivereat-primary" completedClassName="!bg-delivereat-secondary" onClick={() => setActiveStep(0)}>
                    1
                    <div className="absolute -bottom-[4.5rem] w-max text-center">
                    </div>
                </Step>

                <Step activeClassName="!bg-delivereat-primary" completedClassName="!bg-delivereat-secondary" onClick={() => setActiveStep(1)}>
                    2
                    <div className="absolute -bottom-[4.5rem] w-max text-center">
                    </div>
                </Step>

                <Step activeClassName="!bg-delivereat-primary" completedClassName="!bg-delivereat-secondary" onClick={() => setActiveStep(2)}>
                    3
                    <div className="absolute -bottom-[4.5rem] w-max text-center">
                    </div>
                </Step>
            </Stepper>

            {
                activeStep === 0 && (
                    <LocationStep />
                )
            }

            {
                activeStep === 1 && (
                    <DeliveryTimeStep selected={selected} handleSelectCard={handleSelectCard} />
                )
            }

            {
                activeStep === 2 && (
                    <PayMethodStep total={6000} />
                )
            }

            <div className="mt-16 flex justify-between">
                <Button onClick={handlePrev} disabled={isFirstStep}>
                    Anterior
                </Button>
                <Button onClick={handleNext} disabled={isLastStep}>
                    Siguiente
                </Button>
            </div>
        </div>
    );
}

const LocationStep = () => {
    return (
        <div className="mt-10 location">
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>

                </div>
                <select defaultValue={"default"} id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Seleccioná tu ciudad">
                    <option value="default">Seleccioná tu ciudad</option>
                    <option value="Córdoba">Córdoba</option>
                    <option value="Villa María">Villa María</option>
                    <option value="Río Cuarto">Río Cuarto</option>
                </select>
            </div>

            <div className="mt-5 columns-2">
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Calle" required />

                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Número" required />
            </div>

            <div className="mt-5 columns-2">
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Depto" required />

                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Referencia para cadete" required />
            </div>
        </div>
    )
}

const DeliveryTimeStep = ({ selected, handleSelectCard }: any) => {
    return (
        <div className="delivery-time mt-5">
            <div className={`card ${(selected === 'sooner') ? 'selected' : ''}`} onClick={() => handleSelectCard('sooner')}>
                <span className="text-2xl"><p>¡Lo antes posible!</p></span>
            </div>

            <div className={`card ${(selected !== 'sooner') ? 'selected' : ''}`} onClick={() => handleSelectCard('later')}>
                {
                    (selected !== 'later') && (
                        <span className="text-2xl"><p>Quiero elegir cuando</p></span>
                    )
                }

                {
                    (selected === 'later') && (
                        <div className="schedule-order">
                            <span className="text-2xl"><p>¿Cuando lo querés?</p></span>
                            <input type="datetime-local" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="¿Cuando lo querés?" required />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

const PayMethodStep = ({ total }: any) => {
    const [selected, setSelected] = useState('cash');
    const [amount, setAmount] = useState(0);

    useEffect(() => {

    }, [amount]);

    const handleSelectCard = (card: string) => {
        setSelected(card);
    }

    const handleChangeAmount = (e: any) => {
        setAmount(Number(e.target.value));
    }

    const calculateExchange = (amount: number) => {
        return amount - total;
    }

    return (
        <div className="payment-container mt-10">
            <div className="payment mx-5">
                <div className="payment-method">
                    <span>
                        <p>¿Cómo vas a pagar?</p>
                    </span>

                    <div className="methods-cards-container mt-5">
                        <span className={`method-card ${(selected === 'cash') ? 'selected' : ''}`} onClick={() => handleSelectCard('cash')}>
                            <span className="mx-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                                </svg>

                            </span>
                            <p>CASH</p>
                        </span>

                        <span className={`method-card ${(selected === 'visa') ? 'selected' : ''}`} onClick={() => handleSelectCard('visa')}>
                            <span className="mx-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                                </svg>

                            </span>
                            <p>VISA</p>
                        </span>
                    </div>

                    <div className="payment-details mt-5">
                        {selected === 'cash' && (
                            <>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <input id="amount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="¿Con cúanto vas a abonar?" onChange={handleChangeAmount} />
                                </div>

                                {
                                    amount > 0 && amount > total && (
                                        <span className="amount-exchange">
                                            <p>Tu vuelto es de $ {calculateExchange(amount)}</p>
                                        </span>
                                    )
                                }
                            </>
                        )}

                        {selected === 'visa' && (
                            <>
                                <div className="mt-5 columns-2">
                                    <input type="text" id="card" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Número en la tarjeta" required />
                                    <input type="date" id="vto" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Vencimiento" required />
                                </div>

                                <div className="mt-5 columns-2">
                                    <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nombre en la tarjeta" required />

                                    <input type="text" id="cvv" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="CVV" required />
                                </div>
                            </>
                        )}
                    </div>

                </div>
            </div>

            <div className="payment-amount">
                <span>
                    <p>Total</p>
                </span>

                <div className="separator mt-2"></div>

                <div className="amount-info">
                    <span>
                        <p>$ 6.000</p>
                    </span>
                </div>
            </div>
        </div>
    )
}
