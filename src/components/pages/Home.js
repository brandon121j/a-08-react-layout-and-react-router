import React from 'react';
import Layout from '../layout/Layout';

const Home = () => {
	return (
		<div>
			<Layout>
				<h1>Home</h1>
				<p>
					Home page content goes here this is home page content where homepage
					stuff goes
				</p>
				<div>
					<a href="/account">Account</a>
				</div>
				<div>
					<a href="/other">Other</a>
				</div>
			</Layout>
		</div>
	);
};

export default Home;
