import { getPokemon } from './services/pokemon.service';
import './style.css'
//inyecto el template con el header
import { initTemplate } from './utils/MainUtils/initTemplate';
//inyecto el switch
import { initControler } from './utils/MainUtils/rout';


initTemplate();
initControler();

