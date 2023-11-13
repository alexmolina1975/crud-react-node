import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth.context';

const FetchData = () => {
	const { number } = useContext(AuthContext);

	console.log(number);

	// fetchData();
	return (
		<>
			<h1>hola Fetch data</h1>
		</>
	);
};

/*
const fetchData = async () => {
	// const response = await fetch('http://localhost:3000');     //  ==> Hace un GET

	const response = await fetch('http://localhost:3000', {
		//  ==> Hace un POST
		method: 'POST'
	});
	const data = await response.json();
	console.log(data);
};
*/

export default FetchData;
