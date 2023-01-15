import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import Cart from '../Cart';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';


const Navbar = () => {
	const [user] = useAuthState(auth);

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
						<li><Link to='/'>Stores</Link></li>
					</ul>
				</div>
				<Link to='/' className="text-xl normal-case btn btn-ghost">Walker Store</Link>
			</div>
			<div className="hidden navbar-center lg:flex">
				<ul className="px-1 menu menu-horizontal">
					<li><Link to='/'>Women</Link></li>
					<li><Link to='/'>Men</Link></li>
					<li><Link to='/'>Children</Link></li>
					<li><Link to='/stores'>Stores</Link></li>
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
						<AddShoppingCartOutlinedIcon />
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