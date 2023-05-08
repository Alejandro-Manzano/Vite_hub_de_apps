import { initControler } from "../../utils/MainUtils/rout";
import "./Login.css"

const template = () => `
  
 <div class="login-container">
 <section>
 <h3>Sign In</h3>
 <div class="input-container">
 <input type="text" id="inputLogIn" placeholder="Username"/>
 <input type="password" placeholder="Password" id="inputPassword"/>
 </div>
 <a href="#" class="button-login"><button id="buttonLogin">LOGIN</button></a>
 </section>
 </div>
  
`
;

const addListeners = () => {
    
  const buttonLogin = document.getElementById("buttonLogin"); //llamo al botón

  buttonLogin.addEventListener("click", () => { //evento al botón

    const inputLogin = document.querySelector("#inputLogIn"); //cojo los dos input

    localStorage.setItem("user", inputLogin.value);

    if (localStorage.getItem("user"))
      document.querySelector("nav").style.display = "flex";
    initControler();

  });
};

// ----> 3) Pintar
export const printTemplate = () => {

  if (!localStorage.getItem("user"))
    document.querySelector("nav").style.display = "none";

  document.querySelector("main").innerHTML = template();

  addListeners();
};
