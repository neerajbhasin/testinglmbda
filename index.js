exports.handler = async (event) => {
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello neeraj, from Lambda!"),
  };
  return response;
};
