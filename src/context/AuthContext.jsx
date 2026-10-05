import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem("heritage_user")) || null; }
    catch { return null; }
  });

  useEffect(() => {
    if (user) localStorage.setItem("heritage_user", JSON.stringify(user));
    else localStorage.removeItem("heritage_user");
  }, [user]);

  const login = (email, password) => {
    if (!email || !password) return { ok: false, message: "Email and password are required." };
    const users = JSON.parse(localStorage.getItem("heritage_users") || "[]");
    const found = users.find((u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
    if (!found) return { ok: false, message: "Invalid email or password. Please register first." };
    setUser({ name: found.name, email: found.email });
    return { ok: true };
  };

  const register = (name, email, password) => {
    if (!name || !email || !password) return { ok: false, message: "All fields are required." };
    if (password.length < 6) return { ok: false, message: "Password must contain at least 6 characters." };
    const users = JSON.parse(localStorage.getItem("heritage_users") || "[]");
    if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
      return { ok: false, message: "An account with this email already exists." };
    }
    users.push({ name, email, password });
    localStorage.setItem("heritage_users", JSON.stringify(users));
    setUser({ name, email });
    return { ok: true };
  };

  const logout = () => setUser(null);

  return <AuthContext.Provider value={{ user, login, register, logout }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);