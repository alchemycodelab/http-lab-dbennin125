module.exports = rawRequest => {
  const arr = rawRequest.split(' ');
  //splitting the rawRequest,
  //then destructoring to only get the 3 things we want arr 
  //which has 5 elements
  const [method, path, , , body] = arr;
  //console.log(arr)
  if(body.includes('\n')) {
    //getting rid of \nHost \nAccept from arr
    const arr = body.split('\n');
    //spliting it again to get method, path, and object of arr
    //console.log(arr[2]) --arr[2] is the body! horray!
    return { 
      method: method, 
      path: path, 
      body: arr[2] 
    };
  
  } else { 
    return {
      method: method, 
      path: path
    };
  }
};
