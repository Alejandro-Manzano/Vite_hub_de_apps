import "./QuizNeo.css"
  
const template = () => {

     return `
    <div class="supercontainer-div">
   
        <div class="container-quiz">

      
        </div>

    </div>
     `
}

let objectFootball;

const addListeners = () => {

    

}

export const printTemplate = () => {

    document.querySelector("main").innerHTML = template();
    addListeners();
    
}