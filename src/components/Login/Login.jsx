import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { signIn, googleLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location)

  const from = location.state?.from?.pathname || '/';

    
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
              navigate(from, { replace: true });
              toast.success(`${user.displayName},Login Successfully`);

            })
            .catch(error => {
                console.log(error)
            toast.error(error.message)
            })
    }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log( email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
              toast.success(`${user.displayName},Login Successfully`);
              navigate(from, { replace: true });
                form.reset()
               
            })
            .catch(error =>
            {
                console.log(error);
                toast.error(error.message)
                });
    }

    
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 py-10">
        <div className="hero-content flex-col gap-10 w-4/5">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl text-center font-bold"> Please Login!</h1>
            <p className="pt-6 text-2xl text-indigo-800">
            A world of toys at your fingertips.
                      </p>
          </div>

                  <div className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100 pb-6">
                <form onSubmit={handleLogin}>
                          <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                                  type="text"
                                  name="email"
                  placeholder="email"
                  className="input input-bordered" required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                                  type="text"
                                  name="password"
                  placeholder="password"
                  className="input input-bordered" required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-secondary">Login</button>
                              </div>
                              </div>
                </form>
                          <div className=" flex gap-4 justify-center items-center my-4">
                              <h1 className="font-bold">Login with</h1>
                              <button onClick={handleGoogleLogin} className="btn btn-outline btn-secondary px-8"><FaGoogle></FaGoogle></button>
                              <button className="btn btn-outline btn-accent px-8"><FaGithub></FaGithub></button>
                          </div>
                          <p className="text-center">New to this website? <Link to='/register' className="text-indigo-700 font-bold" >Register</Link></p>
                          
            </div>
          </div>

              </div>
              
      </div>
  );
};

export default Login;
