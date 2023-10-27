const { response, request } = require('express');
const { validationResult } = require('express-validator');

const customErrorFormatter = ({ location, msg, param }) => {
    // Customize the error format here as you want
    return {
        msg,
        param,
        location,
    };
};

const validarCampos = (req = request, res = response, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        // Format the errors using the custom error formatter
        const formattedErrors = errors.formatWith(customErrorFormatter).array();

        return res.status(400).json({ errors: formattedErrors });
    }

    next();
};

module.exports = {
    validarCampos
}