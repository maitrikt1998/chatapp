import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData ] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        image :null,
    }) 
    const [errors, setErrors] = useState({});
    const {name, email, password, password_confirmation, image} = formData;
    return(
        <div className='container mt-4'>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <article className="card-body">
                            <h4 className="card-title text-center mb-4">
                                Create Account
                            </h4>
                            <form>
                                <div className="form-group">
                                    <label htmlFor='name'>Name</label>
                                    <input type='text' 
                                        className={`form-control ${errors.name ? 'is-invalid' : ''}`} 
                                        id="name"
                                        placeholder="Name"
                                        name="name"
                                        value={name}
                                        onChange={e => onchange(e)}
                                        required
                                        />
                                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                        id="email"
                                        placeholder="Email Address"
                                        name="email"
                                        value={email}
                                        onChange={e => onChange(e)}
                                        required
                                    />
                                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                        id="password"
                                        placeholder="Password"
                                        name="password"
                                        value={password}
                                        onChange={e => onChange(e)}
                                        minLength="6"
                                        required
                                    />
                                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password_confirmation">Confirm Password</label>
                                    <input
                                        type="password"
                                        className={`form-control ${errors.password_confirmation ? 'is-invalid' : ''}`}
                                        id="password_confirmation"
                                        placeholder="Confirm Password"
                                        name="password_confirmation"
                                        value={password_confirmation}
                                        onChange={e => onChange(e)}
                                        minLength="6"
                                        required
                                    />
                                    {errors.password_confirmation && <div className="invalid-feedback">{errors.password_confirmation}</div>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="image">Profile Image</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="image"
                                        name="image"
                                        onChange={e => onChange(e)}
                                    />
                                </div>
                                <div className="form-group mt-4">
                                    <button type="submit" className="btn btn-primary btn-block"> Register </button>
                                </div>
                            </form>
                            <p className="text-center">Already have an account? <Link to="/login">Log In</Link></p>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Register;