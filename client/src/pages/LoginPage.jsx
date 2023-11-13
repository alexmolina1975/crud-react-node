import { useState } from 'react';
import { loginRequest } from '../api/auth';

const loginPage = () => {
	const [loginData, setLoginData] = useState({
		email: '',
		password: ''
	});

	return (
		<>
			<h1>Login Page</h1>

			<form onSubmit={event => handleSubmit(event, loginData)}>
				<div>
					<label htmlFor='email'>Email&nbsp;&nbsp;</label>
					<input
						type='text'
						id='email'
						onChange={event =>
							setLoginData({ ...loginData, email: event.target.value })
						}
					/>
				</div>
				<br></br>
				<div>
					<label htmlFor='password'>Password&nbsp;&nbsp;</label>
					<input
						type='password'
						id='password'
						onChange={event =>
							setLoginData({ ...loginData, password: event.target.value })
						}
					/>
				</div>
				<b></b>
				<button>PULSA</button>
			</form>
		</>
	);
};

const handleSubmit = async (event, loginData) => {
	event.preventDefault();

	try {
		await loginRequest(loginData);
	} catch (err) {
		console.log('Error en inicio de sesion: ', err);
	}
};

export default loginPage;
