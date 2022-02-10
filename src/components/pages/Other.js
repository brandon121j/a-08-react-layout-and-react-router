import React from 'react';
import Layout from '../layout/Layout';
import {useNavigate} from 'react-router-dom'

const Other = () => {
    let navigate = useNavigate();

    const redirect = () => {
        navigate('/')
    }

	return (
		<div>
			<Layout>
				<h1>Other page</h1>
                <p>Ohter page content and stuff for content on the other page</p>
				<h1 onClick={() => redirect()}>CLICK TO GO HOME</h1>
			</Layout>
		</div>
	);
};

export default Other;
