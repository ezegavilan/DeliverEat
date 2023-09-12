type ValidationError = {
    street?: string
    'street-number'?: string
    city?: string
}

function isValidStreet(value: string) {
    return value && value.trim().length > 0;
}

function isValidStreetNumber(value: number) {
    return !isNaN(value) && value > 0;
}

function isValidCity(value: string) {
    const cities: string[] = ['Córdoba', 'Villa María', 'Río Cuarto'];
    return cities.includes(value);
}


export function validateLocationInput(input: any) {
    let validationErrors: ValidationError = {  };

    if (!isValidStreet(input.street)) {
        validationErrors.street = 'Ingresá el nombre de tu calle.'
    }

    if (!isValidStreetNumber(input["street-number"])) {
        validationErrors["street-number"] = 'Ingresá el número de tu calle.'
    }

    if (!isValidCity(input.city)) {
        validationErrors.city = 'Seleccioná tu ciudad.'
    }

    if (Object.keys(validationErrors).length > 0) {
        throw validationErrors;
    }
}
