import { printTemplate as Pokemon } from '../../pages/Pokemon/Pokemon'
import { printTemplate as EnRaya} from '../../pages/EnRaya/EnRaya'
import { printTemplate as HangMan } from '../../pages/HangMan/HangMan'
import { printTemplate as MemoryGame } from '../../pages/MemoryGame/MemoryGame'
import { printTemplate as QuizNeo } from '../../pages/QuizNeo/QuizNeo'
import { printTemplate as Wakatopo } from '../../pages/Wakatopo/Wakatopo'
import { printTemplate as Login } from '../../pages/Login/Login'
import { printTemplate as Dashboard } from '../../pages/Dashboard/Dashboard'

export const initControler = (route) => {

    switch (route) {
  
      case undefined:
      localStorage.getItem("user") ? Dashboard() : Login();
      break;
  
      case "Pokemon":
        Pokemon();
      break;
  
      case "EnRaya":
        EnRaya();
      break;
  
      case "HangMan":
        HangMan();
      break;
  
      case "MemoryGame":
        MemoryGame();
      break;
  
      case "QuizNeo":
        QuizNeo();
      break;
  
      case "Wakatopo":
        Wakatopo();
      break;
  
      case "Dashboard":
        Dashboard();
      break;
  
      case "Login":
        Login();
      break;
  
    }
  
  };

