import { useState } from "react";
import { auth, signInWithEmailAndPassword } from "../firebase";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			const res = await signInWithEmailAndPassword(auth, email, password);
			const adminUID = import.meta.env.VITE_ADMIN_UID;
			if (res.user.uid === adminUID) {
				console.log("worked");
				navigate("/admin/dashboard");
			} else {
				setError("Access denied.");
			}
		} catch (error) {
			setError("Invalid login credentials");
		}
	};

	return (
		<div className="admin-login">
			<h2>Admin Login</h2>
			{error && <p className="error">{error}</p>}
			<form onSubmit={handleLogin}>
				<div>
					<label>Email:</label>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<div>
					<label>Password:</label>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				<button type="submit">Login</button>
			</form>
		</div>
	);
}

export default AdminLogin;
