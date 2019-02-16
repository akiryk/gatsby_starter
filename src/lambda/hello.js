// // For more info, check https://www.netlify.com/docs/functions/#javascript-lambda-functions
// https://cranky-nobel-b9c54d.netlify.com/.netlify/functions/hello
exports.handler = (event, context, callback) => {
  callback(null, {
    // return null to show no errors
    statusCode: 200, // http status code
    body: JSON.stringify({
      msg: "Hello, The World! " + Math.round(Math.random() * 10)
    })
  });
};
