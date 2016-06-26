import React from 'react';
import Casillero from './Casillero.js';

class Fila extends React.Component {
	render() {
		var casilleros = _.map(this.props.valoresFila, (marca, key) => {
	      return <Casillero key={this.props.numeroFila,key} numeroFila={this.props.numeroFila} numeroCasillero={key}
	      			 clickHandle={this.props.clickHandle} marca={marca}/>
	    });

		return (
			<div className="row">
				{casilleros}
			</div>
		);
	}
}

export default Fila;