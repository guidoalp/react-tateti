import React from 'react';
import Fila from './components/Fila.js';
import lodash from 'lodash';

class Tateti extends React.Component{
	constructor(){
		super();
		this.state = {
			'tablero': [
				['?', '?', '?'],
				['?', '?', '?'],
				['?', '?', '?']
			],
			turnoJugador1: true
		}
	}

	casilleroHandleClick(casillero){
		var tablero = this.state.tablero;
		if(this.state.turnoJugador1){
			var marca = 'X'
		}else{
			var marca = 'O'
		}
		tablero[casillero.numeroFila][casillero.numeroCasillero] = marca;
		this.setState({
			'tablero' : tablero,
			turnoJugador1 : !this.state.turnoJugador1
		});
	}
	
	render() {
	    var filas = _.map(this.state.tablero, (fila, key) => {
	      return <Fila key={key} numeroFila={key} clickHandle={this.casilleroHandleClick.bind(this)} valoresFila={this.state.tablero[key]} />
		});

		return (
			<div id='tateti-container'>
				<div className="row">
					 <div className="col-xs-12">
					 	<div className="center-block game-container">
					 		<div className="row">
					 			<div className="col-xs-12 text-center">
					 				<h1>React - Ta te ti</h1>
					 			</div>
					 		</div>
					 		<div className='row board-container'>
					 			<div className="col-xs-12">
					 				{filas}
					 			</div>
					 		</div>
					 	</div>
					 </div>
        		</div>
			</div>
		);
	}
}

export default Tateti;