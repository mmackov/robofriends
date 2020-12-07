import React from 'react';

const SwitchSourceButton = ({ switchSource, label }) => {
	return (
		<div>
			<button 
				className='f6 link dim ph3 pv2 mb2 dib w-20 white bg-near-black'
				type='button' 
				name='switch source'
				onClick={switchSource}
			>Robots source: {label}</button>
		</div>
	);
}

export default SwitchSourceButton;