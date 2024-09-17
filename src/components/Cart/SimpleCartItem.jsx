import { catalogIndexedById } from '../../utils/catalog';

const SimpleCartItem = ({ id, amount }) => {
	const { price, name, image } = catalogIndexedById[id];
	return (
		<article className='flex bg-stone-100 p-1 border rounded-mg relative'>
			<img
				src={image}
				alt={`Imagem do produto ${id}, ${name}.`}
				className='h-24'
			/>
			<div className='flex flex-col justify-around mx-2'>
				<p className='text-slate-950 text-sm'>{name}</p>
				<p className='text-slate-400 text-xs'>Tamanho M</p>
				<p className='text-green-700 text-lg'>{price}</p>
				<div className='flex text-slate-950 absolute right-2 bottom-0 mb-2'>
					<p className='p-2 w-8 mx-auto'>{amount}</p>
				</div>
			</div>
		</article>
	);
};

export default SimpleCartItem;
