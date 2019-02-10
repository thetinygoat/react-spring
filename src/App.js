import React from 'react';
import { useSpring, animated, useSprings } from 'react-spring';
const App = () => {
	let items = ['sachin', 'saini'];
	const springs = useSprings(
		10,
		items.map(item => ({
			opacity: 1,
			height: '100px',
			backgroundColor: 'blue',
			padding: '10px'
		}))
	);
	return springs.map(props => <animated.div style={props} />);
};

export default App;
