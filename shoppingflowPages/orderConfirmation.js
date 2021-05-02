fetch(
  "https://kea2021-907c.restdb.io/rest/orderdetails/608a94183e285151000452ce",
  {
    method: "GET",
    headers: {
      "x-apikey": "602e264f5ad3610fb5bb6267",
    },
  }
)
  .then((res) => res.json())
  .then((response) => {
    showConfirmation(response);
  })
  .catch((err) => {
    console.error(err);
  });

function showConfirmation(data) {
  console.log(data);
  document.querySelector(".orderNumber").textContent = "#" + data._id;
  document.querySelector(".orderSummaryConf .orderNumber").textContent =
    "#" + data._id;
  document.querySelector(".email").textContent = data.email;
  document.querySelector(".orderDate").textContent = Date.now();
  document.querySelector(".firstName").textContent = data.firstName + " ";
  document.querySelector(".lastName").textContent = data.lastName;
  document.querySelector(".address").textContent = data.address;
  document.querySelector(".postCode").textContent = data.postCode + " ";
  document.querySelector(".city").textContent = data.city;
  document.querySelector(".country").textContent = data.country;
  document.querySelector(".phoneNumber").textContent = data.phoneNumber;
}

function showConfirmation2(data) {
  console.log(data);
  document.querySelector(".orderNumber").textContent = "#" + data._id;
  document.querySelector(".orderSummaryConf .orderNumber").textContent =
    "#" + data._id;
  document.querySelector(".email").textContent = form.elements.email.value;
  document.querySelector(".orderDate").textContent = Date.now();
  document.querySelector(".firstName").textContent =
    form.elements.firstName.value + " ";
  document.querySelector(".lastName").textContent =
    form.elements.lastName.value;
  document.querySelector(".address").textContent = form.elements.address.value;
  document.querySelector(".postCode").textContent =
    form.elements.postCode.value + " ";
  document.querySelector(".city").textContent = form.elements.city.value;
  document.querySelector(".country").textContent = form.elements.country.value;
  document.querySelector(".phoneNumber").textContent =
    form.elements.phoneNumber.value;
}
