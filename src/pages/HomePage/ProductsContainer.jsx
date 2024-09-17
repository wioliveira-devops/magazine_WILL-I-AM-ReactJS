import { catalog } from '../../utils/catalog';
import ProductCard from './ProductCard';

const ProductsContainer = ({ searchParams }) => {
	return (
		<section className='container flex flex-wrap mx-auto p-10 justify-center gap-10'>
			{(searchParams.get('filterby') !== null
				? catalog.filter(
						(p) =>
							p.feminine ===
							(searchParams.get('filterby') === 'fem')
				  )
				: catalog
			).map((product) => (
				<ProductCard
					key={`product_${product.id}_key`}
					{...product}
				/>
			))}
		</section>
	);
};

export default ProductsContainer;
