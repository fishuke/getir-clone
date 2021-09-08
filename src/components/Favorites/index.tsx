import { FC,useState, useEffect } from 'react';
import Products from '../../api/products.json'
import ProductItem from '../ui/ProductItem'
export const Favorites: FC = () => {

    const [products, setProducts] = useState([] as any);

	useEffect(() => {
		setProducts(Products)
	}, [])

    return (
        <div className="container mt-16">
			<div className="overflow-hidden rounded-lg grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-0.1">
				{products && products.map((product: any) => <ProductItem product={product}/>)}
			</div>
        </div>
    );
};
