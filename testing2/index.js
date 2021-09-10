exports.handler = async (event) => {
  // TODO implement
  console.log("sd");
  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda! this is testing2 function!!a!!!"),
  };
  return response;
};
