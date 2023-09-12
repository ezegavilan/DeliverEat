import { useState } from "react";

export default function PayMethodStep({ total = 6000 }: any) {
    const [selected, setSelected] = useState('cash');
    const [amount, setAmount] = useState(0);

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
