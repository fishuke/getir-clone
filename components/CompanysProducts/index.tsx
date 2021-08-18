import { FC } from 'react';
import './companys.module.scss';
export const CompanysProducts: FC = () => {
    return (
        <div>
            <div className="flex justify-center getir-componys-product_companys">
                <div className="container">
                    <div className="hidden lg:grid grid-cols-3">
                        <div className="">
                            <img
                                width="400"
                                src="https://cdn.getir.com/misc/6108d98045818d03d40820b7_banner_tr_1627970004737.jpeg"
                                alt=""
                            />
                        </div>
                        <div className="">
                            <img
                                width="400"
                                src="https://cdn.getir.com/misc/611a0d93cc5c8530dd61e91c_banner_tr_1629097393548.jpeg"
                                alt=""
                            />
                        </div>
                        <div className="">
                            <img
                                width="400"
                                src="https://cdn.getir.com/misc/61126de4c58d98f10e7b18d6_banner_tr_1628861615929.jpeg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
