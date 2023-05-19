import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10 w-4/5">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold"> Please Login!</h1>
            <p className="py-6 text-2xl text-indigo-800">
            A world of toys at your fingertips.
                      </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                          </div>
                          <div className=" flex gap-4 justify-center items-center my-4">
                              <h1 className="font-bold">Login with</h1>
                              <button className="btn btn-outline btn-secondary px-8"><FaGoogle></FaGoogle></button>
                              <button className="btn btn-outline btn-accent px-8"><FaGithub></FaGithub></button>
                          </div>
                          <p className="text-center">New to this website? <Link to='/register' className="text-indigo-700 font-bold">Register</Link></p>
            </div>
          </div>
              </div>
              
      </div>
    </div>
  );
};

export default Login;
