type ValidationError = {
    deliveryTime?: string
}

function isValidDeliveryTime(value: string) {
    if (!value) return true;
    const currentDate = new Date();
    const date = new Date(value);
    const milis = date.getTime() - currentDate.getTime();
    const days = milis / (1000 * 60 * 60 * 24);
    return (days <= 7 && days > 0);
}

export function validateDeliveryTimeInput(input: any) {
    let validationErrors: ValidationError = {  };

    if (!isValidDeliveryTime(input.deliveryTime)) {
        validationErrors.deliveryTime = 'La fecha debe ser entre hoy y 7 días.'
    }

    if (Object.keys(validationErrors).length > 0) {
        throw validationErrors;
    }
}
