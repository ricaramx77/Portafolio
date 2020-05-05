import React from "react"
import { connect } from "react-redux";
import cancha from "../cancha.svg";

const Titulares = ({titulares, quitarTitular}) => (

	<section>
	   <h2>Titulares</h2>
	   <div className="cancha">
	   {
	        titulares.map(j=>(
				<article className="jugador" key={j.id}>
					<div>
						<img src={j.foto} alt={j.nombre} />
						<button onClick={()=>quitarTitular(j)}>X</button>
					</div>		
					<p>{j.nombre}</p>
				</article>
		   ))
	   }	   
	   <img src={cancha} alt="Cancha de futbol" />
	   </div>
	</section>
)

//Función que devuelve un objeto
const mapStateToProps = state => ({ 
	titulares: state.titulares //<---Del estado que estas recibiendo obten a jugadores
}) 

const mapDispatchToProps = dispatch => ({

	quitarTitular(jugador){
		dispatch({ //<---------------------Action
		   type: "QUITAR_TITULAR",
		   jugador
		})
	 },

})

export default connect(mapStateToProps, mapDispatchToProps) (Titulares) //<------Función que recibe otra función