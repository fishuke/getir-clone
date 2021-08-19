/* eslint-disable react/jsx-key */
import { FC } from 'react';
import './categorys.module.scss';
import ProductsData from './product.json';
import { Counter } from '../productCounter/Counter';
import { Buttons } from '../productCounter/Buttons';

import {Provider} from 'react-redux';

import store from '../../store';
const data = ProductsData.products;
console.log(data);

export const Products: FC = () => {
    return (
        <Provider store={store}>
            <p className="categorytext hidden lg:grid">Kategoriler</p>
            <div className="flex justify-center">
                <div className="margintop product">
                    <div className="grid grid-cols-4 lg:grid-cols-4  gap-4">
                    
                        {data.map((products, index) => (
                            <div key={index} className="col-span-1">
                                <img
                                    
                                    src={products.product_img}
                                    alt={products.product_name}
                                />
                                <p>{products.product_name}</p>
                                <Counter />
                                <Buttons />
                            </div>
                            
                        ))}
                    </div>
                </div>
            </div>
        </Provider>
    );
};
