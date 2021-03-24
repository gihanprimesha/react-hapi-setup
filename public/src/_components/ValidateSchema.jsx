import React from 'react';

const Validator = async (values, validateShema) => {
    const validator = validateShema();
    try {
        await validator.validate(values, { abortEarly: false });
    } catch (err) {
        const errors = err.inner.reduce(
            (formError, innerError) => ({
                ...formError,
                [innerError.path]: innerError.message,
            }),
            {}
        );
        return errors;
    }
};

export default Validator;
