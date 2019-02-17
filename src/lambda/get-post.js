import faunadb from "faunadb";

const q = faunadb.query;
const client = new faunadb.Client({
  secret: "fnADHZCWpsACB1sxl5UgB2Vk_W-G3Mi9fbWqBgI9"
});

exports.handler = async (event, context, callback) => {
  return client
    .query(q.Get(q.Ref(q.Class("posts"), "224493754100220423")))
    .then(response => response.json())
    .then(data => ({
      statusCode: 200,
      body: `you have run out of time... but it worked!`
    }));
};
