import { signOut } from "firebase/auth";
import { auth } from "../firebase";


function LogoutButton({ onLogout }) {
  const handleLogout = async () => {
    try {
      console.log("Usuario actual:", auth.currentUser);
      await signOut(auth);
      console.log("Sesión cerrada correctamente");
      if (onLogout) onLogout(); // callback opcional
    } catch (error) {
      console.error("Error al cerrar sesión:", error.message);
    }
  };

  return (
    <button className="logOutButton" onClick={handleLogout}>
      Log Out
    </button>
  );
}

export default LogoutButton;
