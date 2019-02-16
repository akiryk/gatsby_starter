module.exports.handler = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      msg: "This is a great day! In France!"
    })
  });
};
