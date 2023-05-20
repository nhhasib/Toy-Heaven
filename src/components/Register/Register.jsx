
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useContext } from 'react';

const Register = () => {
    const {createUser} = useContext(AuthContext);

    const handleCreateUser = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(name,photo,email,password)

        
    }
    return (
        
            <form onSubmit={handleCreateUser}>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10 w-4/5">
                        <div className="text-center lg:text-left">
                            <p className='font-bold text-2xl'>A world of toys at your fingertips.</p>
            <h1 className="text-6xl font-bold text-indigo-900"> Welcome to our TOY HEAVEN!</h1>
            
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            
                            <div className="card-body">
                            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                                    type="text"
                                    name='name'
                  placeholder="Enter name"
                  className="input input-bordered"
                />
                                </div>
                                <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Link</span>
                </label>
                <input
                                    type="text"
                                    name='photo'
                  placeholder="Enter photo link"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                                    type="email"
                                    name='email'
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                                    type="password"
                                    name='password'
                  placeholder="password"
                  className="input input-bordered"
                />

              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
                          </div>
                          <p className="text-center">Already have account? <Link to='/login' className="text-indigo-700 font-bold">Login</Link></p>
            </div>
          </div>
              </div>
              
      </div>
    </form>
        
    );
};

export default Register;