const url1 = "https://kea2021-907c.restdb.io/rest/bags?max=5";
const options1 = {
  headers: {
    "x-apikey": "602e264f5ad3610fb5bb6267",
  },
};

fetch(url1, options1)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })

  .then((dataa) => {
    handleRec(dataa);
  })
  .catch((e) => {
    console.error("an error occured:", e.message);
  });

function handleRec(data) {
  console.log(data);
  data.forEach((e) => showRec(e));
}

function showRec(rec) {
  //grab the template
  const template = document.querySelector("#recBags").content;
  //clone it
  const copy = template.cloneNode(true);
  //change the content
  copy.querySelector(".p").textContent = rec.name;
  copy.querySelector(".price").textContent = `${rec.price} DKK`;
  copy.querySelector("img").src = rec.photo;

  //grab the parent
  const parent = document.querySelector(".recProducts");
  //append
  parent.appendChild(copy);
}
