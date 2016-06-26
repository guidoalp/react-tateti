import React from 'react';

class Casillero extends React.Component{
	render() {
		var clases = "btn btn-default"; 
		switch(this.props.marca){
			case "O":
				clases = "btn btn-primary disabled";
				break;
			case "X":
				clases = 'btn btn-success disabled';
		}

		return (
			<div className="col-xs-4 game-cell">
                <button className={clases} onClick={this.props.clickHandle.bind(this,this.props)} type="submit">
                	{this.props.marca}
                </button>
            </div>
		)
	}
}

export default Casillero;