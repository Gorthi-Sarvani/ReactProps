import {useState} from 'react'
function About(){
	const [name,setName]=useState("cams");
	const [rollnum,setRollnum]=useState("606")
	const [password,setPassword]=useState("deepu")
	return(
		<div>
			{/*<h1>{rollnum}</h1>
					<p>{name}</p>*/}
			<p>
				 <input
				 onChange={(e)=>setName(e.target.value)}
				 placeholder="Enter your name"/></p>
			<p>
				<input 
				onChange={(e)=>setPassword(e.target.value)}
				placeholder="Enter your password"/>
			</p>
			<button onClick={()=>console.log(name,rollnum)}>Submit</button>
		</div>
		)
}
export default About