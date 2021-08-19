import { FC } from 'react';

export const RegisterCard: FC = () => {
    return (
        <div>
                      <div className="">
        <div className="max-w-md mx-auto  rounded-lg overflow-hidden  md:max-w-md lg:mr-9 w-75">
          <div className="md:flex">
            <div className="w-full p-3 px-6 py-10 bg-white lg:mt-20">
              <div className="text-center "> <span className="text-xl text-purple-500">Giriş yap veya kayıt ol</span> </div>
             
              <div className="mt-4 relative"> <span className="absolute p-1 bottom-8 ml-2 hover:bg-Purple-700 text-gray-400 ">Telefon Numarası</span> <input type="tel" className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-purple-600" /> </div>
              <div className="mt-4"> <button className="h-12 w-full bg-yellow-400 text-white rounded hover:bg-Purple-600">Kayıt Ol<i className="fa fa-long-arrow-right" /></button> </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};