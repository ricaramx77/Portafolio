import React from "react" 
import { connect} from "react-redux" //<----Connect nos permite conectar nuestro componente a un store

const Jugadores =({jugadores, agregarTitular, agregarSuplente}) =>( //<----Recibimos el prop gracias a mapStateToProps
    <section>
		<h1>Jugadores</h1>
		<div className="contenedor-jugadores">
		{
		   jugadores.map(j=>(
				<article className="jugador" key={j.id}>
				  <img src={j.foto} alt={j.nombre} />
				   <h3>{j.nombre}</h3>
				   <div>
					  <button onClick={()=> agregarTitular(j)}>Titular</button>
					  <button onClick={()=> agregarSuplente(j)}>Suplente</button>
				   </div>
				</article>
		   ))
		}
		
		</div>
	</section>
	
) 

//Función que devuelve un objeto
const mapStateToProps = state => ({ 
	jugadores: state.jugadores //<---Del estado que estas recibiendo obten a jugadores
}) 

//Funciones que se convierten por propiedades
//Son las encargadas de llevar las acciones que van a ser leídas
//por nuestro reducer para poder cambiar al estado
const mapDispatchToProps = dispatch => ({

    agregarTitular(jugador){
	   dispatch({ //<---------------------Action
	      type: "AGREGAR_TITULAR",
		  jugador
	   })
	},
	agregarSuplente(jugador){
	   dispatch({ //<---------------------Action
	      type: "AGREGAR_SUPLENTE",
		  jugador
	   })
	},
})

export default connect(mapStateToProps, mapDispatchToProps) (Jugadores) //<------Función que recibe otra función