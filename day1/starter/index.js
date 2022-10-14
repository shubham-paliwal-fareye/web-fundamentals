const nameFormatter = (user) => `${user.firstName} ${user.lastName}`;
const companyPositionFormatter = (user) => `${user.company.title}`;
const companyNameFormatter = (user) => `${user.company.name}`;
let fields = [
  {
    label: "Name ",
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

async function fetchData() {
    try {
      let data = await fetch("https://dummyjson.com/users");
      let mainContainer = document.getElementsByClassName("main-container")[0];
      let result = await data.json();
      console.log(result)
      result.users.forEach((ele) => {
        console.log(ele)
        mainContainer.appendChild(renderCard(ele));
      });
    } catch (ex) {
      console.log(ex);
    }
  }


function createDetailsAttribute(label, value) {
   
    let detailspara = document.createElement("div");
        detailspara.setAttribute("class","details-para")

        let keyspan = document.createElement("span");
        detailspara.setAttribute("class","key");
        keyspan.innerText=label;
         
        
        let valuespan = document.createElement("span");
        detailspara.setAttribute("class","value")  
        valuespan.innerText=":"+value

        detailspara.appendChild(keyspan)
        detailspara.appendChild(valuespan)

 
    return detailspara;

  }

  function renderCard(user) {
    let cardContainer = document.createElement("div");
    cardContainer.setAttribute("class", "card");
    let imagePart = document.createElement("div");
    imagePart.setAttribute("class","imagepart");
    let img = document.createElement("img");
    img.setAttribute("class", "img");
    img.setAttribute("src", user.image);
    let detailsContainer = document.createElement("div");
    detailsContainer.setAttribute("class", "details");


    let nodes = fields.forEach((ele) => {
      let { label, formatter, value } = ele;
      if (formatter) {
        value = formatter(user);
      } else {
        value = user[value];
      }
      detailsContainer.appendChild(createDetailsAttribute(label, value));
    });
    imagePart.appendChild(img)
    cardContainer.appendChild(imagePart);
    cardContainer.appendChild(detailsContainer);
    return cardContainer;
  }


  fetchData()