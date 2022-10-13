// How to fetch Data from server.

function fetchDataFromServer() {
  // fetch("https://jsonplaceholder.typicode.com/todos")
  //   .then((response) => response.json())
  //   .then((json) => printData(json));
    // fetch('https://dummyjson.com/users')
    //  .then(res => res.json())
    // .then.apply((json) => printData(json));
    fetch("https://dummyjson.com/users")
    .then((response) => response.json())
    .then((json) => printData(json));
            
}

function printData(data) {


  console.log(data);
  let ele = document.getElementById("code");
  let tempData = data.filter((a) => a.id < 50);
  console.log(tempData)
  ele.innerHTML = JSON.stringify(tempData, null, 4);
}



fetchDataFromServer();
