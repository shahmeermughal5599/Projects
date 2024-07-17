const button = document.querySelector("#button");
const output = document.querySelector("#output");

button.addEventListener("click", function (event) {
  event.preventDefault();
  //   console.log("button clicked");

  // fetch("data.txt")
  //   .then((data) => data.text())
  //   .then((data) => {
  //     console.log(data, "data");
  //     output.innerHTML = data;
  //   })
  //   .catch(console.error);

  // return;
  //   // .catch((error) => console.error(error));

  //with xml http request

  //create an xhr object
  // const xhr = new XMLHttpRequest();
  // //open
  // xhr.open("GET", "data.txt", true);

  // //optional - use for showing the spinner or loader
  // xhr.onprogress = function () {
  //   // console.log(xhr.readyState, "xhr.readyState");
  // };

  // xhr.onload = function () {
  //   // console.log(xhr.readyState, "xhr.readyState");
  //   // console.log(this.status, "this.status");
  //   if (this.status == 200) {
  //     output.innerHTML = this.responseText;
  //   }
  // };

  // xhr.onerror = function (error) {
  //   console.error(error, "Request error...");
  // };

  // xhr.send();

  //2nd Request
  fetch("customers.json")
    .then((response) => response.json())
    .then((data) => {
      let outputTemp = "";
      data.forEach((singleData) => {
        outputTemp += `<ul>
                <li>Id: ${singleData.id}</li>
                <li>Name: ${singleData.name}</li>
                <li>Company: ${singleData.company}</li>
                <li>Phone: ${singleData.phone}</li>
                </ul>`;
      });
      console.log(outputTemp, "outputTemp");
      output.innerHTML = outputTemp;
    })
    .catch(console.error);
});
