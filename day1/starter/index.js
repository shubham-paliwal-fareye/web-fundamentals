// api call

async function data() {
  try {
    let data = await fetch("https://dummyjson.com/users");
    let mainContainer = document.getElementsByClassName("main-container")[0];
    mainContainer.setAttribute("class","display");
    let result = await data.json();
    result.users.forEach((ele) => {
      mainContainer.appendChild(cardDetails(ele));
    });
  } catch (ex) {
    console.log(ex);
  }
}

const nameFormatter = (users) => `${users.firstName} ${users.lastName}`;
const companyPositionFormatter = (user) => `${user.company.title}`;
const companyNameFormatter = (user) => `${user.company.name}`;

let config = [
  {
    label: "Name",
    value: "name",
    formatter: nameFormatter,
  },
  {
    label: "Age",
    value: "age",
  },
  {
    label: "Phone ",
    value: "phone",
  },
  {
    label: "Blood Group",
    value: "bloodGroup",
  },
  {
    label: "Company",
    value: "name",
    formatter: companyNameFormatter,
  },
  {
    label: "Position",
    value: "name",
    formatter: companyPositionFormatter,
  },
  {
    label: "weight ",
    value: "weight",
  },
];

function cardDetails(user) {
  console.log(user);
  let cardContainer = document.createElement("div");
  cardContainer.setAttribute("class","card");
  let img = document.createElement("img");
  img.setAttribute("class", "card-img");
  img.setAttribute("src", user.image);
  let detailsContainer = document.createElement("div");
  detailsContainer.setAttribute("class","cardDetails");
  let nodes = config.forEach((ele) => {
    let { label, formatter, value } = ele;
    if (formatter) {
      value = formatter(user);
    } else {
      value = user[value];
    }
    detailsContainer.appendChild(createDetailsAttribute(label, value));
  });
  cardContainer.appendChild(img);
  cardContainer.appendChild(detailsContainer);
  return cardContainer;
}

function createDetailsAttribute(label, value) {
  let details = document.createElement("div");
  details.setAttribute("class","detail-config");
  let detailKey = document.createElement("h4");
  detailKey.setAttribute("class","detailKey");
  detailKey.innerText = label;
  let detailValue = document.createElement("span");
  detailValue.innerText =value;
  details.appendChild(detailKey);
  details.appendChild(detailValue);
  return details;
}

data();
