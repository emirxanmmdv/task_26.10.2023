const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const age = document.getElementById("age");
const isMarried = document.getElementById("isMarried");
const submit = document.getElementById("button");
const userTable = document.getElementById("userTable");

submit.addEventListener("click", (event) => {
  event.preventDefault(); //clickdən sonra refresh olunmur
  const tr = document.createElement("tr");
  const firstNameColumn = document.createElement("td");
  const lastNameColumn = document.createElement("td");
  const ageColumn = document.createElement("td");
  const isMarriedColumn = document.createElement("td");
 
  if (age.value <= -1) {
    alert("Yaş yanlış daxil edildi.")
    return    
  } 
  // input boşdursa alert verilərək user yaradılmır
  if (
    firstname.value === "" ||
    lastname.value === "" ||
    age.value === ""
  ) {
    alert("Boş xana saxlamaq olmaz.");
    return -1;
  }
  tr.append(firstNameColumn);
  tr.append(lastNameColumn);
  tr.append(ageColumn);
  tr.append(isMarriedColumn);
  userTable.append(tr);

  if (isMarried.checked === true) {
    isMarriedColumn.textContent = "Married";
  } else {
    isMarriedColumn.textContent = "Not Married";
  }

  //inputda verilən dəyərlər cədvəlin elementlərinə mənimsədilir
  firstNameColumn.textContent = firstname.value;
  lastNameColumn.textContent = lastname.value;
  ageColumn.textContent = age.value;
  //dəyərlər daxil edildikdən sonra inputlar sıfırlansın
  firstname.value = "";
  lastname.value = "";
  age.value = "";
  isMarried.checked = false
});
