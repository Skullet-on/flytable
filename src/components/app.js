import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import CarsList from './cars/carslist';

export default class App extends Component{
	render(){
		return(
			<div>
				<Header />
				<CarsList />
				<Footer />
			</div>
		);
	}
}
