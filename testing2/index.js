const _ = require("lodash");
exports.handler = async (event) => {
  // TODO implement
  const num = _.random(10, 100);
  console.log("sddsfaasdadssssdsd");
  const response = {
    statusCode: 200,
    body: JSON.stringify(
      `Hello from Lambda! ${num}this is testing2 function!!abs brakes!!!`
    ),
  };
  return response;
};
