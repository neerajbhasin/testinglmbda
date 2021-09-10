const _ = require("lodash");

exports.handler = async (event) => {
  // TODO implement
  const num = _.random(100, 999);
  console.log("numassssssssdassaassdaadasssssaszdss7");
  const response = {
    statusCode: 200,
    body: JSON.stringify(
      `7Generating random number in lambda${num}. I am gonna make this thing work!!!!`
    ),
  };
  return response;
};
