import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LogIn, Eye, EyeOff } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    // Login check
    const r = login(email, password);

    if (!r?.ok) {
      setError(r?.message || "Invalid email or password.");
      setLoading(false);
      return;
    }

    
    // Send Login Email using EmailJS
    try {
      await emailjs.send(
        "service_ju1gwmv",
        "template_9b0lrhb",
        {
          user_email: email,
          login_time: new Date().toLocaleString(),
        },
        "zIhO7LInWldfAtvai"
      );

      console.log("Login email sent successfully");
    } catch (emailError) {
      console.error("EmailJS Error:", emailError);

      
    }

    setLoading(false);

    navigate(
      location.state?.from || "/dashboard",
      { replace: true }
    );
  };

  return (
    <section className="auth-page">
      <div className="auth-card">

        <div className="auth-logo">✦</div>

        <span className="eyebrow">
          WELCOME BACK
        </span>

        <h1>
          Sign in to <em>learn.</em>
        </h1>

        <p>
          Continue your heritage learning journey.
        </p>

        {error && (
          <div className="alert error">
            {error}
          </div>
        )}

        <form onSubmit={submit}>

          <label>
            Email

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </label>

          <label>
            Password

            <div className="password-input">

              <input
                type={show ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Minimum 6 characters"
                required
              />

              <button
                type="button"
                onClick={() => setShow(!show)}
              >
                {show ? <EyeOff /> : <Eye />}
              </button>

            </div>
          </label>

          <button
            type="submit"
            className="btn btn-primary full"
            disabled={loading}
          >
            <LogIn size={18} />

            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        <p className="auth-footer">
          New here?{" "}
          <Link to="/register">
            Create an account
          </Link>
        </p>

      </div>
    </section>
  );
}
