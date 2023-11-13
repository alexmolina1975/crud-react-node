import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { AuthContext } from '../contexts/auth.context';
import { verifyTokenRequest } from '../api/auth';

const AuthProvider = ({ children }) => {
	const [userData, setUserData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	// Un estado con todo
	const [elEstado, setElEstado] = useState({
		userData: null,
		loading: true,
		isAuthenticated: false
	});

	console.log(Cookies.get());

	useEffect(() => {
		checkLogin(setElEstado);
	}, []);

	return (
		<>
			<AuthContext.Provider value={elEstado}>{children}</AuthContext.Provider>
		</>
	);
};

const checkLogin = async (setUserData, setIsAuthenticated, setLoading) => {
	const cookies = Cookies.get();

	// Si no existe la cookie borramos datos de sesión.
	if (!cookies.token) {
		return setElEstado({
			userData: null,
			loading: true,
			isAuthenticated: false
		});
	} else {
		try {
			const res = await verifyTokenRequest(false);

			// No llega usuario
			if (!res.data)
				return setElEstado({
					userData: null,
					loading: false,
					isAuthenticated: false
				});

			setElEstado({
				userData: null,
				loading: true,
				isAuthenticated: true
			});
		} catch (err) {
			setElEstado({
				userData: null,
				loading: false,
				isAuthenticated: false
			});
		}
	}
	// Petición al servidor
	// Si el usuario es correcto
	// Si el usuario  NO es correcto
};

export default AuthProvider;
