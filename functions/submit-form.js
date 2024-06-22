// functions/submit-form.js
exports.handler = async function(event, context) {
    const data = JSON.parse(event.body);
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Form submitted successfully", data })
    };
};
