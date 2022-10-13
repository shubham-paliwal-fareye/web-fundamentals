// How to fetch Data from server.

function fetchDataFromServer() {
  fetch("https://dummyjson.com/users")
    .then((response) => response.json())
    .then((json) => printData(json));
}

function printData(data) {
  console.log(data);
  //let ele = document.getElementById("code");
  //let tempData = data.filter((a) => a.id < 50);
  //console.log(tempData)
 // ele.innerHTML = JSON.stringify(tempData, null, 4);

//  fruits.forEach(myFunction);
 let {limit,skip,total,users}=data
//      console.log(users)
// }
let fullnames=users.map(user=>user.firstName+" "+user.lastName)

let filtermap =users.filter(user=>user.age<50);
console.log("filter Map"+filtermap)


console.log(fullnames)
}
fetchDataFromServer();
