import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductFilters from './ProductFilters';
import ProductsContainer from './ProductsContainer';

const MainSection = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	return (
		<>
			<ProductFilters setSearchParams={setSearchParams} />
			<ProductsContainer searchParams={searchParams} />
		</>
	);
};

export default MainSection;
