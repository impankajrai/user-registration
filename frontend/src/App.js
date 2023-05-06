import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<div className='App'>
			<Header />
			<Outlet />
			<ToastContainer
				position='bottom-left'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='light'
			/>
		</div>
	);
}

export default App;
