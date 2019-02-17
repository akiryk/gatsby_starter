import faunadb from "faunadb";

const q = faunadb.query;
const client = new faunadb.Client({
  secret: "fnADHZCWpsACB1sxl5UgB2Vk_W-G3Mi9fbWqBgI9"
});

exports.handler = (event, context, callback) => {
  return client
    .query(q.Get(q.Ref(q.Class("posts"), "224493754100220423")))
    .then(response => {
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify(response)
      });
    })
    .catch(error => {
      console.log("error", error);
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify(error)
      });
    });
};
