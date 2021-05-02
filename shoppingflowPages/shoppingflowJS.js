const form = document.querySelector(".paymentForm");
const urlParams = new URLSearchParams(window.location.search);
const orderId = urlParams.get("article");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(form.elements.firstName.value);
  console.log(form.elements.lastName.value);
  console.log(form.elements.address.value);
  console.log(form.elements.city.value);
  console.log(form.elements.country.value);
  console.log(form.elements.postCode.value);
  console.log(form.elements.phoneNumber.value);
  console.log(form.elements.email.value);

  const payload = {
    firstName: form.elements.firstName.value,
    lastName: form.elements.lastName.value,
    address: form.elements.address.value,
    city: form.elements.city.value,
    country: form.elements.country.value,
    postCode: form.elements.postCode.value,
    phoneNumber: form.elements.phoneNumber.value,
    email: form.elements.email.value,
  };

  document.querySelector("input[type=submit]").disabled = true;

  fetch("https://kea2021-907c.restdb.io/rest/orderdetails", {
    method: "POST",
    headers: {
      "x-apikey": "602e264f5ad3610fb5bb6267",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      console.log(response);
      document.querySelector("input[type=submit]").disabled = false;
      form.elements.firstName.value = "";
      form.elements.lastName.value = "";
      form.elements.address.value = "";
      form.elements.city.value = "";
      form.elements.country.value = "";
      form.elements.postCode.value = "";
      form.elements.phoneNumber.value = "";
      form.elements.email.value = "";
      document.querySelector("#orderDetails").classList.add("hidden");
      document.querySelector("#orderConfirmation").classList.remove("hidden");
    })
    .catch((err) => {
      console.error(err);
    });
});
