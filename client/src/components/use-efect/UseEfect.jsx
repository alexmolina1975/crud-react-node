import { useEffect, useState } from 'react';

const UseEffect = () => {
	const [counter, setCounter] = setState(0);
	useEffect(() => {
		console.log('USER EFFECT');
	}, []);
	console.log('RENDER');

	return (
		<>
			<h1>User Effect</h1>
		</>
	);
};

export default UseEffect;
