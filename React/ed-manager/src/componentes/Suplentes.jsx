import React from "react"
import { connect } from "react-redux";

const Suplentes = ({suplentes, quitarTitular}) => (

	<section>
	   <h2>Suplentes</h2>
	   <div className="suplentes">
	   {
	        suplentes.map(j=>(
				<article className="suplentes" key={j.id}>
					<div>
						<img src={j.foto} alt={j.nombre} />
						<button onClick={()=>quitarTitular(j)}>X</button>
					</div>		
					<p>{j.nombre}</p>
				</article>
		   ))
	   }	   
	   </div>
	</section>
)

//Función que devuelve un objeto
const mapStateToProps = state => ({ 
	suplentes: state.suplentes //<---Del estado que estas recibiendo obten a jugadores
}) 

const mapDispatchToProps = dispatch => ({

	quitarTitular(jugador){
	   dispatch({ //<---------------------Action
	      type: "QUITAR_SUPLENTE",
		  jugador
	   })
	},
})

export default connect(mapStateToProps, mapDispatchToProps) (Suplentes) //<------Función que recibe otra función