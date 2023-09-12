import { redirect, type ActionArgs, type ActionFunction } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { useState } from "react";
import { validateDeliveryTimeInput } from "~/validations/delivery.server";

export const action: ActionFunction = async ({ request }: ActionArgs) => {
    const formData = await request.formData();
    const deliveryTime = Object.fromEntries(formData);
    if (deliveryTime.deliveryTime === 'skip') {
        return redirect('/checkout/steps/step-3');
    }

    try {
        console.log({ deliveryTime });
        validateDeliveryTimeInput(deliveryTime);
    } catch (error) {
        console.error(error);
        return error;
    }

    return redirect('/checkout/steps/step-3');
}

export default function DeliveryTimeStepPage() {
    const validationErrors = useActionData();
    const [selected, setSelected] = useState('sooner');

    const handleSelectCard = (card: string) => {
        setSelected(card);
    }

    return (
        <Form method="POST">
            <div className="delivery-time mt-5">
                <div className={`card ${(selected === 'sooner') ? 'selected' : ''}`} onClick={() => handleSelectCard('sooner')}>
                    <span className="text-2xl"><p>¡Lo antes posible!</p></span>
                </div>

                <div className={`card ${(selected !== 'sooner') ? 'selected' : ''}`} onClick={() => handleSelectCard('later')}>
                    {
                        (selected !== 'later') && (
                            <>
                                <span className="text-2xl"><p>Quiero elegir cuando</p></span>
                                <input defaultValue={'skip'} type="text" name="deliveryTime" hidden={true} />
                            </>
                        )
                    }

                    {
                        (selected === 'later') && (
                            <div className="schedule-order">
                                <span className="text-2xl"><p>¿Cuando lo querés?</p></span>
                                <input name="deliveryTime" type="datetime-local" id="deliveryTime" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="¿Cuando lo querés?" required />
                            </div>
                        )
                    }
                </div>
            </div>

            {
                validationErrors && (
                    <ul className="mt-5">
                        {
                            Object.values(validationErrors).map((error: any) => (
                                <li className="text-xs text-red-300" key={error}>{error}</li>
                            ))
                        }
                    </ul>
                )
            }

            {<div className="mt-16 flex justify-end">
                <button className="cta sm" >
                    Siguiente
                </button>
            </div>}
        </Form>
    )
}
