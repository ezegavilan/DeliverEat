import { redirect, type ActionArgs, type ActionFunction } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { validateLocationInput } from "~/validations/location.server";


export const action: ActionFunction = async ({ request }: ActionArgs) => {
    const formData = await request.formData();
    const location = Object.fromEntries(formData);

    try {        
        validateLocationInput(location);
    } catch (error) {
        console.error(error);
        return error;
    }

    return redirect('/checkout/steps/step-2');
}

export default function LocationStepPage() {
    const validationErrors = useActionData();

    return (
        <Form method="POST" className="mt-10 location">
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>

                </div>
                <select name="city" defaultValue={"default"} id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Seleccioná tu ciudad" required>
                    <option value="default">Seleccioná tu ciudad</option>
                    <option value="Villa Carlos Paz">Villa Carlos Paz</option>
                    <option value="Santa Rosa de Calamuchita">Santa Rosa de Calamuchita</option>
                    <option value="Villa General Belgrano">Villa General Belgrano</option>
                    <option value="Cosquin">Cosquin</option>
                    <option value="Mina Clavero">Mina Clavero</option>
                    <option value="Nono">Nono</option>
                </select>
            </div>

            <div className="mt-5 columns-2">
                <input type="text" id="street" name="street" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Calle" required />

                <input type="number" id="street-number" name="street-number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Número" required />
            </div>

            <div className="mt-5 columns-2">
                <input type="text" id="ref" name="ref" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Referencia para cadete" />
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
