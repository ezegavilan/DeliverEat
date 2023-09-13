type ValidationError = {
    amount?: string
    amountDiff?: string
    creditCard?: string
    expires?: string
}

function isValidAmount(value: string) {
    const amount: number = Number(value);
    return (amount > 0 && amount <= 100000 && value !== '');
}

function isValidDifferenceAmount(value: string) {
    const amount: number = Number(value);
    return (amount >= 6000);
}

export function validateCashPaymentInput(amount: any) {
    let validationErrors: ValidationError = {  };

    if (!isValidAmount(amount)) {
        validationErrors.amount = 'Podés pagar desde $ 0 hasta $ 100.000.';
    }

    if (!isValidDifferenceAmount(amount)) {
        validationErrors.amountDiff = 'Necesitás cubrir el total del pedido.'
    }

    if (Object.keys(validationErrors).length > 0) {
        throw validationErrors;
    }
}

function isValidCardNumber(value: string) {
    return value.length === 16+3 && value.startsWith("4");
}

function isValidExpired(value: string) {
    const month: number = Number(value.split("/")[0]);
    const year: number = Number(value.split("/")[1]);
    return (month > 8 && year >= 23) && (year >= 23);
}

export function validateCreditCardInput(input: any) {
    let validationErrors: ValidationError = {  };

    if (!isValidCardNumber(input.card)) {
        validationErrors.creditCard = 'Datos de tarjeta visa inválidos.';
    }

    if (!isValidExpired(input.vto)) {
        validationErrors.expires = 'Revisá el vencimiento de tu tarjeta.';
    }

    if (Object.keys(validationErrors).length > 0) {
        throw validationErrors;
    }
}
