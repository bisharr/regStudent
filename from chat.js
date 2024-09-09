"use strict";
const nameInput = document.querySelector(".name-input");
const ageInput = document.querySelector(".age-input");
const numberInput = document.querySelector(".number-input");
const rollNumber = document.querySelector(".roll-input");
const brtn = document.querySelector("button");
const table = document.querySelector("table");

// Retrieve any stored student data from localStorage
let datastudent = JSON.parse(localStorage.getItem("data")) || [];

// Function to render the table rows from the student data
function renderTable() {
  table.innerHTML = `   <thead>
        <tr>
          <th>Student Name</th>
          <th>Student Age</th>
          <th>Student Number</th>
          <th>Student Roll</th>
        </tr>
      </thead>
      <tbody></tbody>`;

  const tbody = table.querySelector("tbody");

  datastudent.forEach((student) => {
    const html = `
      <tr>
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.number}</td>
        <td>${student.roll}</td>
      </tr>`;

    tbody.insertAdjacentHTML("beforeend", html);
  });
}

// Initial rendering of the table on page load
renderTable();

brtn.addEventListener("click", function () {
  console.log("btn clicked");

  let nameValue = nameInput.value;
  let ageValue = ageInput.value;
  let numValue = numberInput.value;
  let rollValue = rollNumber.value;

  // Create a student object with the input values
  const student = {
    name: nameValue,
    age: ageValue,
    number: numValue,
    roll: rollValue,
  };

  // Add the new student to the datastudent array
  datastudent.push(student);

  // Update localStorage with the new student data
  localStorage.setItem("data", JSON.stringify(datastudent));

  // Re-render the table with updated data
  renderTable();

  // Clear the input fields
  nameInput.value = ageInput.value = numberInput.value = "";
});
