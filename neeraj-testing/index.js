const _ = require("lodash");

exports.handler = async (event) => {
  // TODO implement
  const num = _.random(100, 999);
  console.log("12ab");
  const response = {
    statusCode: 200,
    body: JSON.stringify(
      `10Generating random number in lambda${num}. I am gonna make this thing work!!!!`
    ),
  };
  return response;
};
