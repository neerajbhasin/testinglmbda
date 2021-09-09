exports.handler = async (event) => {
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify(
      "This is my first time playing with lambda and ci/cd!"
    ),
  };
  return response;
};
