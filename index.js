
//get index
var a;
function show_h()
{
  if (a==1){
    document.getElementById("lol").style.display = "inline";
    return a=0;
  } else {
    document.getElementById("lol").style.display = "none";
    return a=1;
  }
}
function getIndex() {
  var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let currentIndex = array.length, randomIndex;


  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array.join("");
}



const form = document.querySelector('.form');
const table = document.querySelector('.tableBody');
const add = document.querySelector('.hide');
const background = document.querySelector('.background');
const warning = document.getElementById('warning');
const ajouter = document.getElementById('ajouter');

var td;
var object = {};
const etatArray = [
  [`<button class="btn on-validation "> En validation </button> `],
  [`<button class="btn valide "> Validé </button> `],
  [`<button class="btn rejected "> Rejeté </button> `]
]
const etatValue = ['En validation', 'Validé', 'Rejeté']

function Etat(etat) {
  etatValue.forEach((value, index) => {
    if (value === etat) {
      td = etatArray[index];
      return td;
    }
  });

}

ajouter.addEventListener('click', () => {
  add.classList.toggle('show');

})

//

const userForm = document.getElementById("submitFormID")

userForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
 form = new FormData(e.target);

  document.querySelector("#errorsList").innerHTML = "";

  let firstName = form.get("fname");
  let lastName = form.get("lname");
  let state = form.get("status");
  let userName = form.get("name");
  let createdAt = form.get("createAt");
  let matricule = form.get("maticule");
  let userID = Date.now();

//   matricule = parseInt(matricule);
  createdAt = createdAt + ":00.000Z";

  const isValidUserInfo = checkUser(
    userID,
    firstName,
    lastName,
    state,
    userName,
    createdAt,
    matricule
  );

  if (isValidUserInfo.length != 0) {
    isValidUserInfo.map((error) => {
      document.querySelector("#errorsList").innerHTML += `
                      <li>${error}</li>
                  `;
    });
    return;
  }

  document.querySelector("#usersData").innerHTML = "";
  users.push({
    id: userID,
    createdDate: createdAt,
    status: state,
    firstName: firstName,
    lastName: lastName,
    userName: userName,
    registrationNumber: matricule,
  });

  modale.style.display = "none";
  overlay.innerHTML = "";
  userForm.reset()

  getAllUserFunc();
});



users.forEach(element => {
  Etat(element['status'])
  table.innerHTML += `
  <tr >
  
  <th  scope="row"> ${element['id']}</th>
  <td> ${element['createdDate']} </td>
  <td> ${td} </td>
  <td> ${element['firstName']} </td>
  <td> ${element['lastName']} </td>
  <td> ${element['userName']} </td>
  <td> ${element['registrationNumber']} </td>
  
</tr>
  
  `

});
window.onclick = function (event) {
  if (event.target == background) {
    background.classList.add('hide')
    background.classList.remove('show')
  }
}
