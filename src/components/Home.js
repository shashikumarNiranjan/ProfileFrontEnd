import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import _ from 'lodash';

class Home extends Component {
	constructor() {
		super();
		this.state = {
			profileData:""
		};
		this.profileDeatils = this.profileDeatils.bind(this);
	}

	componentDidMount() {
		document.title = 'Profile';
		let Config = {
			headers: {
				'Content-Type': 'application/json;charset=UTF-8',
				'Access-Control-Allow-Origin': '*'
			}
		};
		axios
			.get('http://localhost:8081/api/profile-data', Config)
			.then((response) => {
				console.log(response);
				this.setState({
					profileData: response.data.result
				});
				console.log(this.state.profileData);
			})
			.catch((err) => {
				console.log(err);
			});
			
	}

	profileDeatils() {
		return _.map(this.state.profileData, (list,index) => {
			console.log(list.firstName)
			return (
				<div><div class="container profileContainer">
					<h4 class="mt-3 ml-3 text-uppercase font-weight-bold">Personal Deatils</h4>
				<div class="user ml-3">
				<i class="fas fa-user-circle fa-5x userIcon" />
			</div>
			<div class="deatils ml-4">
				<div class="mt-3 mb-2">
					<span class="text-capitalize">{list.firstName} {list.lastName}</span>
				</div>
				<div class="mt-3 mb-2">
					<i class="fas fa-map-marker-alt mr-2" />
					<span class="ml-2">{list.location}</span>
				</div>
				<div class="mt-3 mb-2">
					<i class="fas fa-envelope mr-2" />
					<span class="ml-2">{list.email}</span>
				</div>
				<div class="mt-3 mb-2">
				<i class="fas fa-user mr-2"></i>
					<span class="ml-2">{list.gender}</span>
				</div>
				<div class="mt-3 mb-4">
					<i class="fas fa-phone-alt mr-2" />
					<span class="ml-2">{list.mobileNo}</span>
				</div>
				
			</div>
			<div class="details1">
			<div  class="mt-2 mb-2">
				<span >Pincode  : </span>
				<span class="ml-3">{list.pincode}</span>
			</div>
			<div  class="mt-2 mb-2">
				<span >DOB  : </span>
				<span class="ml-3">{list.DOB}</span>
			</div>
			<div  class="mt-2 mb-2">
				<span >Marital Status  : </span>
				<span class="ml-3">{list.maritalStatus}</span>
			</div>
			<div  class="mt-2 mb-2">
				<span >Hometown  : </span>
				<span class="ml-3">{list.hometown}</span>
			</div>
			</div>
			
			</div>
			<div class="container summary">
			<div class="mt-3 mb-2 ml-3">
				<h4 class="text-uppercase font-weight-bold">Profile summary</h4>
				<span class="">{list.profileSummary}</span>
			</div>
			<div class="mt">
			<h4 class="text-uppercase font-weight-bold ml-3">Profile Data</h4>
			<div class="mt-3 mb-2 ml-3">
			<span class="font-weight-bold">Experience  : </span>
				<span class="ml-3">{list.experience}</span>
			</div>
			<div class="mt-3 mb-2 ml-3">
			<span class="font-weight-bold">Current Salary  : </span>
				<span class="ml-3">{list.currentSalary}</span>
			</div>
			<div class="mt-3 mb-2 ml-3">
			<span class="font-weight-bold">Expected Salary  : </span>
				<span class="ml-3">{list.expectedSalary}</span>
			</div>
			<div class="mt-3 mb-2 ml-3">
			<span class="font-weight-bold">employment  : </span>
				<span class="ml-3">{list.employment}</span>
			</div>
			<div class="mt-3 mb-2 ml-3">
			<span class="font-weight-bold">Address  : </span>
				<span class="ml-3">{list.address}</span>
			</div>
			<div class="mt-3 mb-2 ml-3">
			<span class="font-weight-bold">Education  : </span>
				<span class="ml-3">{list.education}</span>
			</div>
			<div class="mt-3 mb-2 ml-3">
			<span class="font-weight-bold">Key Skills  : </span>
				<span class="ml-3">{list.keyskills}</span>
			</div>
			<div class="mt-3 mb-2 ml-3">
			<span class="font-weight-bold">It Skills  : </span>
				<span class="ml-3">{list.itSkills}</span>
			</div>
			<div class="mt-3 mb-4 ml-3">
			<span class="font-weight-bold">Project  : </span>
				<span class="ml-3">{list.project}</span>
			</div>
			
			</div>
			</div>
			</div>
		
			);
			
		});
	}

	render() {
		// console.log(this.state.profileData);
		return (
			<div>
				<Header />
				
			
				{this.profileDeatils()}
				
				{/* <Footer /> */}
			</div>
		);
	}
}

export default Home;
