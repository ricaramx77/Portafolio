import React from 'react'; 
import { Provider} from "react-redux" 
import store from "./store" 
import Jugadores from './componentes/Jugadores';
import EquipoSelecionado from './componentes/EquipoSeleccionado';
import "./styles.scss"

const App = () => ( //<---Hay que proveer el store

	<Provider store={store}>
	    <main>
		  <h1>ED Manager</h1>
		  <Jugadores/>
      <EquipoSelecionado />
		  		
		</main>
	</Provider>

)

export default App; 