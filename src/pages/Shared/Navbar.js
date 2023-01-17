import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';


const Navbar = () => {
	const [user] = useAuthState(auth);
	const products = useSelector((state) => state.cart.products);

	const logout = () => {
		signOut(auth);
	}

	const [open, setOpen] = useState(false);

	return (
		<div className="navbar bg-base-100">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
					</label>
					<ul tabIndex={0} className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
						<li><Link to='/'>Women</Link></li>
						<li><Link to='/'>Men</Link></li>
						<li><Link to='/'>Children</Link></li>
						<li><Link to='/products'>Store</Link></li>
					</ul>
				</div>
				<Link to='/' className="text-xl normal-case btn btn-ghost">Walker Store</Link>
			</div>
			<div className="hidden navbar-center lg:flex">
				<ul className="px-1 menu menu-horizontal">
					<li><Link to='/'>Women</Link></li>
					<li><Link to='/'>Men</Link></li>
					<li><Link to='/'>Children</Link></li>
					<li><Link to='/products'>Store</Link></li>
				</ul>
			</div>
			<div className="navbar-end">
				<div className="flex-none gap-2">
					<div className=" form-control">
						<input type="text" placeholder="Search" className="input input-bordered" />
					</div>
				</div>
				<label tabIndex={0} className="ml-1 btn btn-ghost btn-circle">
					<div onClick={() => setOpen(!open)} className="indicator">
						<label tabIndex={0} className="btn btn-ghost btn-circle">
							<div className="indicator">
								<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
								<span className="badge badge-sm indicator-item">{products.length}</span>
							</div>
						</label>
					</div>
				</label>
				{user?.uid ? <div className="dropdown dropdown-end">
					<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
						<div className="w-10 ml-1 rounded-full">
							<img src={user?.photoURL} alt='men' />
						</div>
					</label>
					<ul tabIndex={0} className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
						<li><button onClick={logout}>Logout</button></li>
					</ul>
				</div> :
					<div className="hidden navbar-center lg:flex">
						<ul className="px-1 menu menu-horizontal">
							<li><Link to='login'>Login</Link> </li>
						</ul>
					</div>
				}
				{open && <Cart />}
			</div>
		</div>
	);
};

export default Navbar;