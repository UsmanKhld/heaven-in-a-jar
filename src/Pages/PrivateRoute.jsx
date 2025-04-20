import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [authorized, setAuthorized] = useState(false);

	useEffect(() => {
		const unsub = onAuthStateChanged(auth, (user) => {
			const adminUID = import.meta.env.VITE_ADMIN_UID;
			if (user && user.uid === adminUID) {
				setAuthorized(true);
			} else {
				setAuthorized(false);
			}
			setLoading(false);
		});
		return () => unsub();
	}, []);

	if (loading) return <div>Loading...</div>;
	return authorized ? children : <Navigate to="/admin" />;
};

export default PrivateRoute;
