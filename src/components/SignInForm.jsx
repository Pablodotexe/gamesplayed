// src/components/SignInForm.jsx
import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      setError("");
      console.log("Usuario autenticado:", userCredential.user);
    } catch (error) {
      setError(error.message);
      console.error("Error al iniciar sesión:", error.message);
    }
  };

  return (
    <div className="form-container">
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn}>Iniciar sesión</button>
      {user && <p>Bienvenido: {user.email}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default SignInForm;
