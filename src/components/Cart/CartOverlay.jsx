import { useState } from 'react';

const CartOverlay = () => {
	const [isCartOpen, setIsCartOpen] = useState(true);
	return (
		<div
			className={`h-screen w-screen fixed top-0 left-0 flex z-50 ease-in-out duration 200 ${
				isCartOpen ? 'translate-x-0' : 'translate-x-full'
			}`}
		>
			<section
        id='outside-of-cart'
        onClick={() => setIsCartOpen(false)}
				className='w-3/4 bg-slate-950 opacity-50'
			></section>
			<section
				id='cart'
				className='w-1/4 bg-slate-950 min-w-96 border-l-4 border-slate-400 p-5 flex flex-col justify-between text-white'
			></section>
		</div>
	);
};

export default CartOverlay;
