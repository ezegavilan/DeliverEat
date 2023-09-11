import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Stepper, Step, Button } from "@material-tailwind/react";

import checkoutStyles from '~/styles/checkout.css';
import { useState } from "react";

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
                    <PayMethodStep />
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

const PayMethodStep = () => {
    return (
        <div className="payment-container mt-10">
            <div className="payment mx-5">
                <div className="payment-method">
                    <span>
                        <p>¿Cómo vas a pagar?</p>
                    </span>
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
