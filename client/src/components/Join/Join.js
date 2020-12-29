//we import useState to use Hooks inside function components
import React, {useState} from 'react';
//we import link to ink to chat paths
import {Link} from 'react-router-dom'; 
import './join.css';

const Join = () => {

	//we are creating two set variables one for the name of the person that
	//would change from person to person and hence we need to change the state in that 
	// and an other for the change of room
	const [name, setName] = useState('');
	const [room, setRoom] = useState('');

	return(

		<div className="join-outerContainer">

				{/* <video class="join-video" autoplay='' muted loop>
				<source src="/back-vid.mp4" type="video/mp4" />
				<source src="/back-vid_webm.webm" type="video/webm" />
				Your browser is not supported!
				</video>
				 */}

			<div className="join-innerContainer">
				<h1 className="join-heading">Flash Chat</h1>
				{/* the onChange property has a anonymous function with a paramter event and the event.target.value and set it to the name variable in useState */}
					<div><input placeholder="Name" className="join-input" type="text" onChange={(event) =>{setName(event.target.value)}}/></div>
					<div><input placeholder="Room" className="join-input mt-20" type="text" onChange={(event)=>{setRoom(event.target.value)}} /></div>
					{/* we are not going to pass the data as a prop or by using redux, but by strings, we will use To property of link to lead the string as a url to someplace
					and it will be to the chat page, we can add parameters to the url using ?, by this and now we can read the paramters from the 'chat' page using these paramters,
					this is one way to pass the paramters, we could also do it using props */}
					{/* if the user does not add any name and room then he cannotmove forward */}
					<Link to={`/chat?name=${name}&room=${room}`} onClick={event => (!name || !room)?event.preventDefault : null }>
						<button className="join-button mt-20" type="submit">Sign In</button>
					</Link>
					
			</div>
			<img src='/join-img_t.png' alt="join page logo" class="join-img"/>
		</div>
	);
		
};

export default Join;