module.exports = rawRequest => {
  const arr = rawRequest.split(' ');
  //split the request
  const [method, path] = arr; 
  //destructour method, path from arr
  const [, body] = rawRequest.split('\r\n\r\n');
  //destortour body and then split out the \r's and \n from HTTP
  
  if(body) {
  //if body exists return this.
    return { 
      method,
      path, 
      body
    };
  } else {
    //just return the method and path
    return {
      method: method, 
      path: path
    };
  }
};
