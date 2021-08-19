import { FC } from 'react';
import './companys.module.scss';
export const CompanysYemek: FC = () => {
    return (
        <div>
            <div className="flex justify-center getir-componys-product_companys">
                <div className="container">
                    <div className="hidden lg:grid grid-cols-3">
                        <div className="">
                            <img
                                width="400"
                                src="https://cdn.getiryemek.com/cuisines/1619220044852_480x300.jpeg"
                                alt=""
                            />
                            <span>Döner</span>
                        </div>
                        <div className="">
                            <img
                                width="400"
                                src="https://cdn.getiryemek.com/cuisines/1619220143647_480x300.jpeg"
                                alt=""
                            />
                            <span>Kebap</span>
                        </div>
                        <div className="">
                            <img
                                width="400"
                                src="https://cdn.getiryemek.com/cuisines/1619220158478_480x300.jpeg"
                                alt=""
                            />
                            <span>Makarna</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
