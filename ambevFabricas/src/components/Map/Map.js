import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Geocode from "react-geocode";
//import Autocomplete from 'react-google-autocomplete';
//import listFactories from '../../data/fabricas.json';
import { GoogleMapsAPI } from '../../client-config';
//import { data } from 'jquery';
//import { PushNotificationIOS } from 'react-native';


Geocode.setApiKey(GoogleMapsAPI);
Geocode.enableDebug();

class Map extends Component {

	constructor(props) {
		super(props);
		this.state = {
			address: '',
			city: '',
			area: '',
			state: '',
			mapPosition: {
				lat: this.props.center.lat,
				lng: this.props.center.lng
			},
			markerPosition: {
				lat: this.props.center.lat,
				lng: this.props.center.lng
			}
		}
	}
	/**
	 
	 */
	
	componentDidMount() {
		
		Geocode.fromLatLng(this.state.mapPosition.lat, this.state.mapPosition.lng).then(
			
  
			response => {
				const address = response.results[0].formatted_address,
					addressArray = response.results[0].address_components,
					city = this.getCity(addressArray),
					area = this.getArea(addressArray),
					state = this.getState(addressArray);

				console.log('city', city, area, state);

				this.setState({
					address: (address) ? address : '',
					area: (area) ? area : '',
					city: (city) ? city : '',
					state: (state) ? state : '',
				})
			},
			error => {
				console.error(error);
			}
		);
	};
	/**
	 * 
	 *
	 * @param nextProps
	 * @param nextState
	 * @return {boolean}
	 */
	shouldComponentUpdate(nextProps, nextState) {
		console.log(nextProps, nextState);
		if (
			this.state.markerPosition.lat !== this.props.center.lat ||
			this.state.address !== nextState.address ||
			this.state.city !== nextState.city ||
			this.state.area !== nextState.area ||
			this.state.state !== nextState.state
		) {
			return true
		} else if (this.props.center.lat === nextProps.center.lat) {
			return false
		}
	}
	/**
	 * 
	 * @param addressArray
	 * @return {string}
	 */
	getCity = (addressArray = []) => {
		let city = '';
		for (let i = 0; i < addressArray.length; i++) {
			if (addressArray[i].types[0] && 'administrative_area_level_2' === addressArray[i].types[0]) {
				city = addressArray[i].long_name;
				return city;
			}
		}
	};
	/**
	 * 
	 *
	 * @param addressArray
	 * @return {string}
	 */
	getArea = (addressArray = []) => {
		let area = '';
		for (let i = 0; i < addressArray.length; i++) {
			if (addressArray[i].types[0]) {
				for (let j = 0; j < addressArray[i].types.length; j++) {
					if ('sublocality_level_1' === addressArray[i].types[j] || 'locality' === addressArray[i].types[j]) {
						area = addressArray[i].long_name;
						return area;
					}
				}
			}
		}
	};
	/**
	 * 
	 * @param addressArray
	 * @return {string}
	 */
	getState = (addressArray = []) => {
		let state = '';
		for (let i = 0; i < addressArray.length; i++) {
			for (let i = 0; i < addressArray.length; i++) {
				if (addressArray[i].types[0] && 'administrative_area_level_1' === addressArray[i].types[0]) {
					state = addressArray[i].long_name;
					return state;
				}
			}
		}
	};
	/**
	 * 
	 * @param event
	 */
	onChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};
	/**
	 * 
	 *
	 * @param event
	 */
	onInfoWindowClose = (event) => {
        
	};

	/**
	 * 
	 *
	 * @param event
	 */
	onMarkerDragEnd = (event) => {
		let newLat = event.latLng.lat(),
			newLng = event.latLng.lng();

		Geocode.fromLatLng(newLat, newLng).then(
			response => {
				const address = response.results[0].formatted_address,
					addressArray = response.results[0].address_components,
					city = this.getCity(addressArray),
					area = this.getArea(addressArray),
					state = this.getState(addressArray);
				this.setState({
					address: (address) ? address : '',
					area: (area) ? area : '',
					city: (city) ? city : '',
					state: (state) ? state : '',
					markerPosition: {
						lat: newLat,
						lng: newLng
					},
					mapPosition: {
						lat: newLat,
						lng: newLng
					},
				})
			},
			error => {
				console.error(error);
			}
		);
	};





	
    

	render() {
		
		/*const Word = listFactories.dados;
        console.log(Word);
        const Quant = listFactories.count;
		console.log(Quant);*/
		//const data = listFactories.dados;
		const pin = "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
		
		const markerStyle = {
			position: "absolute",
			top: "100%",
			left: "100%",
			transform: "translate(-50%, -100%)"
		};
		
		const data = [
			{
			  name: "CERVEJARIA ÁGUAS DA SERRA",
			  address: [-5.570557, -50.325882]
			},
			{
			  name: "CERVEJARIA PÉ DE SERRA",
			  address: [-40.570558, -65.325882]
			},
			{
			  name: "CERVEJARIA GOLIAS",
			  address: [-25.570558, -65.325882]
			},
			{
			  name: "CERVEJARIA RODRIGUES",
			  address: [-20.570558, -50.325882]
			},
			{
			  name: "CERVEJARIA GUIMARAES",
			  address: [-25.570558, -55.325882]
			},
			{
			  name: "CERVEJARIA SILVA",
			  address: [-15.570558, -59.325882]
			},
			{
			  name: "CERVEJARIA DO LUCIO",
			  address: [-5.570558, -70.325882]
			}
		  ];
		
		

		const AsyncMap = withScriptjs(
			
			withGoogleMap( 
				props => (
					
					<GoogleMap google={this.props.google}
						defaultZoom={this.props.zoom}
						defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
					>
						{/* InfoWindow on top of marker */}
						<InfoWindow
							onClose={this.onInfoWindowClose}
							position={{ lat: (this.state.markerPosition.lat + 0.0018), lng: this.state.markerPosition.lng }}
						>
							<div>
								<span style={{ padding: 0, margin: 0 }}>{this.state.address}</span>
							</div>
						</InfoWindow>
						{/*Marker*/}
						
						
						<Marker google={this.props.google}
							name={'Local'}
							draggable={true}
							onDragEnd={this.onMarkerDragEnd}
							position={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng }}
							
						/>
					
        
						
						
						
					</GoogleMap>
				)
			)
		);

		let map;
		if (this.props.center.lat !== undefined) {
			map = <div>
				<div>
					<div className="form-group">
						<label htmlFor="">City</label>
						<input type="text" name="city" className="form-control" onChange={this.onChange} readOnly="readOnly" value={this.state.city} />
					</div>
					<div className="form-group">
						<label htmlFor="">Area</label>
						<input type="text" name="area" className="form-control" onChange={this.onChange} readOnly="readOnly" value={this.state.area} />
					</div>
					<div className="form-group">
						<label htmlFor="">State</label>
						<input type="text" name="state" className="form-control" onChange={this.onChange} readOnly="readOnly" value={this.state.state} />
					</div>
					<div className="form-group">
						<label htmlFor="">Address</label>
						<input type="text" name="address" className="form-control" onChange={this.onChange} readOnly="readOnly" value={this.state.address} />
					</div>
				</div>

				<AsyncMap
					googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GoogleMapsAPI}&libraries=places`}
					loadingElement={
						<div style={{ height: `100%` }} />
					}
					containerElement={
						<div style={{ height: this.props.height }} />
					}
					mapElement={
						<div style={{ height: `100%` }} />
					}
				/>
			</div>

           
		} else {
			map = <div style={{ height: this.props.height }} />
		}
		return (map)
	}
}
export default Map


