import _ from "lodash";

exports.handler = async (event) => {
  // TODO implement
  const num = _.random(100, 999);
  const response = {
    statusCode: 200,
    body: JSON.stringify(`Generating random number in lambda ${num}`),
  };
  return response;
};
