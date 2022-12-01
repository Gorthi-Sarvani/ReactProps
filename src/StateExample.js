import React from 'react'
class StateExample extends React.Component{
	state={name:"rolls royce", year:"1989"}
	render(){
		return(

				<div>
					<h1>this is a message</h1>
					<p>{this.state.name} {this.state.year}</p>

				</div>

			)

		

		}
	}
	export default StateExample



		


		
