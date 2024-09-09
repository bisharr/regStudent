"use strict";
const nameInput = document.querySelector(".name-input");
const ageInput = document.querySelector(".age-input");
const numberInput = document.querySelector(".number-input");
const brtn = document.querySelector("button");
const table = document.querySelector("table");
const datastudent = [];

// console.log(storedProducts);

brtn.addEventListener("click", function () {
  console.log("btn clicked");
  let nameValue = nameInput.value;
  let ageValue = ageInput.value;
  let numValue = numberInput.value;
  console.log(nameValue, numValue, ageValue);

  const html = `   <thead>
        <tr>
          <th>Student Name</th>
          <th>Student Age</th>
          <th>Student Number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${nameValue}</td>
          <td>${ageValue}</td>
          <td>${numValue}</td>
        </tr>
      </tbody>`;
  datastudent.push(ageInput.value, numValue, nameValue);
  console.log(datastudent);
  table.insertAdjacentHTML("afterbegin", html);
  ageInput.value = nameInput.value = numberInput.value = "";
  const data = localStorage.setItem("data", JSON.stringify(datastudent));
  JSON.parse(localStorage.getItem("data")) || [];
  console.log(data);
});
