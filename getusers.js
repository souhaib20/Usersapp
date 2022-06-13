import { users } from "./dataapp.js";

export let getAllUserFunc = () => {
    users.map((element) => {
      document.querySelector("#usersData").innerHTML += `
            <tr>
                <td>${element.id}</td>
                <td>${element.createdDate
                  .substr(0, 10)
                  .split("-")
                  .reverse()
                  .join("/")}</td>
                <td><p class="${
                  element.status == "ValidÃ©"
                    ? "valide"
                    : element.status == "RejetÃ©"
                    ? "rejected"
                    : "on-validation"
                }">${element.status}</p></td>
                <td>${element.firstName}</td>
                <td>${element.lastName}</td>
                <td>${element.userName}</td>
                <td>${element.registrationNumber}</td>
            </tr>
            `;
    });
  };