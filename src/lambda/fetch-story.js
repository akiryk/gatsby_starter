// https://cranky-nobel-b9c54d.netlify.com/.netlify/functions/fetch-story
exports.handler = (event, context, callback) => {
  const getMessage = () => {
    return `Hello there, ${event.queryStringParameters.name}, you just made a ${
      event.httpMethod
    }`;
  };

  console.log(event, context);

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      msg: getMessage()
    })
  });
};
