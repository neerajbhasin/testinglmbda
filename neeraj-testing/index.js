const _ = require("lodash");

exports.handler = async (event) => {
  // TODO implement
  const num = _.random(100, 999);
  console.log("numassssssaassssaszdss7");
  const response = {
    statusCode: 200,
    body: JSON.stringify(`Generating random number in lambda ${num}`),
  };
  return response;
};
