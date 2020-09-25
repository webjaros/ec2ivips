'use strict';

module.exports = (error, data, statusCode = null, customHeader = null) => {
    const isBase64Encoded = false;
    const contentTypes = ['text/csv'];
    let body;
    let headers = {
        "content-type": "application/json",
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
    };

    if (customHeader) {
        headers = {...headers, ...customHeader};
    }

    if (error) {
        if (null === statusCode) {
            statusCode = 500;
        }
        console.dir(error);
        body = JSON.stringify(data);
    } else {
        if (null === statusCode) {
            statusCode = 200;
        }

        if (customHeader && contentTypes.indexOf(customHeader['Content-type']) !== -1) {
            body = data;
        } else {
            body = JSON.stringify(data);
        }
    }

    return {
        statusCode,
        body,
        headers,
        isBase64Encoded
    };
};
