module.exports = rawRequest => {
  const arr = rawRequest.split(' ');
  //split the request
  //console.log(arr, '|| | ||');
  const [method, path] = arr; 
  //destructour method, path from arr
  //there were originally 5 elements in arr, 
  //split up both to make 2 variables: one with a body, 
  //the other just with method and path
  const [, body] = rawRequest.split('\r\n\r\n');
  //destortour body and then split out the \r's and \n from HTTP Rawrequest
  
  return (body) 
  //if body exists return this.
    ?
    {
      method,
      path, 
      body
    }
    //just return the method and path
    : 
    {
      method: method, 
      path: path
    };
};
