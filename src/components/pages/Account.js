import React from 'react';
import Layout from '../layout/Layout';
import {Link} from 'react-router-dom'

const Account = () => {
	return (
		<div>
			<Layout>
				<h1>Account page</h1>
				<p>Account page content goes here</p>
				<div>
					<label>Account input box</label>
					<input type="text" onClick={() => window.alert('This input does nothing')}/>
				</div>
                <div>
                    <Link to='/'>
                    <button>Home</button>
                    </Link>
                </div>
			</Layout>
		</div>
	);
};

export default Account;
