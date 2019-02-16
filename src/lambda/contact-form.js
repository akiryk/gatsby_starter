import querystring from "querystring";

exports.handler = (event, context, callback) => {
  // When the method is POST, the name will no longer be in the event’s
  // queryStringParameters – it’ll be in the event body encoded as a query string
  const params = querystring.parse(event.body);
  const name = params.name || "World";
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      msg: `Hello ${name}`
    })
  });
};
