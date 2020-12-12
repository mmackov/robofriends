import React from 'react';
import {
	SOURCE_API,
	SOURCE_LOCAL
} from '../constants.js';

const SwitchSourceButton = ({ switchSource, label }) => {
	return (
		<div>
			<button 
				className='f6 link dim pv2 mb2 dib w5 br4 white bg-near-black'
				type='button' 
				name='switch source'
				onClick={switchSource}
			>Switch robots source to <span class="b">{label === SOURCE_API ? SOURCE_LOCAL : SOURCE_API}</span></button>
		</div>
	);
}

export default SwitchSourceButton;