// src/components/RegisterForm.jsx
import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      setError("");
      console.log("Usuario registrado:", userCredential.user);
    } catch (error) {
      setError(error.message);
      console.error("Error registrando usuario:", error.message);
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
        <button onClick={handleRegister}>Registrarse</button>
        {user && <p>Usuario registrado: {user.email}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
   
  );
}

export default SignUpForm;
