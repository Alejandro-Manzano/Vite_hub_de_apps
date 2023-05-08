import { changeColor } from "../../utils/ChangeColor/ChangeColors"
import { initControler } from "../../utils/MainUtils/rout"
import "./Header.css"


const template = () => {
    return `
            <h1>MZN - VGames</h1>
            <nav>
                <a href="#" class="nav-link" id="changeColor"><img id="color-img" src="https://res.cloudinary.com/dul2s17m2/image/upload/v1683131701/invert_colors_FILL0_wght400_GRAD0_opsz48_am7imn.png" class="nav-img"></a>
                <a href="#" class="nav-link" id="buttonHome"><img id="game-img" src="https://res.cloudinary.com/dul2s17m2/image/upload/v1683131699/stadia_controller_FILL0_wght400_GRAD0_opsz48_dsfdwk.png" class="nav-img"></a>
                <a href="#" class="nav-link" id="buttonLogOut"><img id="log-out-img" src="https://res.cloudinary.com/dul2s17m2/image/upload/v1683131695/login_FILL0_wght400_GRAD0_opsz48_mh6ngb.png" class="nav-img"></a>
            </nav>
    `
}

const addListeners = () => {

        const buttonChangeColor = document.querySelector("#changeColor"); //llamo al botón de cambiar color
        buttonChangeColor.addEventListener("click", () => {
            const color = changeColor(); //le doy un evento con la función de cambiar color
            document.body.style.background = color;
        });

        const buttonHome = document.querySelector("#buttonHome");
        buttonHome.addEventListener("click", () => {        //botón que me lleva al Dashboard
            initControler("Dashboard");
        });

        const buttonLogOut = document.querySelector("#buttonLogOut");
        buttonLogOut.addEventListener("click", () => {  //botón que me lleva al logOUt
            localStorage.removeItem("user");
            initControler("Login"); //no le meto nada porque el LOgin es undefined
            
            if(!localStorage.getItem("user"))
            document.querySelector("nav").style.display = "none";
        })
}

export const printTemplate = () => {

    document.querySelector("header").innerHTML = template();
    addListeners();
    
}