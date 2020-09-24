import React, { Component } from 'react';
import Map from './Map';

import Header from '../Header/';

//import listFactories from '../../data/fabricas.json';



class Home extends Component {

	render() {
		//const data = listFactories.dados;
		//console.log(Word);
		//const Quant = listFactories.count;
		//console.log(Quant);
		return (
			<div>
				<Header></Header>
				<div style={{ margin: '100px' }}>

					<Map
						google={this.props.google}
						center={{ lat: -23.4273, lng: -51.9375 }}
						height='300px'
						zoom={15}

					/>
				</div>
			</div>
		);
	}
}

export default Home;