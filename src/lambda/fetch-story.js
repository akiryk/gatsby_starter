module.exports = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: "You successfully failed to succeed!"
  });
};
