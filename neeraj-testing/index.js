const _ = require("lodash");

exports.handler = async (event) => {
  // TODO implement
  const num = _.random(100, 999);
  console.log("numasssssssdasaassdaadasssssaszdss7");
  const response = {
    statusCode: 200,
    body: JSON.stringify(
      `3Generating random number in lambda${num}. I am gonna make this thing work!!!!`
    ),
  };
  return response;
};
