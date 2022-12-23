import { Link } from "react-router-dom"
import "./register.scss"

export const Register = () => {
    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>Naamakirja</h1>
                    <p>Lorem ipsum dolor sit 
                        amet consectetur, adipisicing elit.
                         Quos magni consectetur, iusto sit cumque delectus doloribus aut eveniet 
                         inventore, qui odio esse. Reprehenderit atque neque ipsam, quod labore maxime.</p>
                    <span>Don't you have an account?</span>
                    <Link to="/Login">
                        <button>Login</button>
                    </Link>                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <input type="text" placeholder="Name" />
                        <button>Register</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
