'use strict';

const response = require("../helper/apiResponse");

module.exports.handler = async (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    if (event.source === 'serverless-plugin-warmup') {
        return callback(null, 'Lambda is warm!');
    }

    return response(null, 'ok');
};
