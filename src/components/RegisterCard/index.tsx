
import { useState,FC } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import {FaFacebook} from 'react-icons/fa';
export const RegisterCard: FC = () => {

  const [selected, setSelected] = useState('TR');
  
  const flags = {
		US: '+1',
		GB: '+5',
		FR: '+70',
		DE: '+30',
		IT: '+11',
		TR: '+90',
	}
    return (
      <div className="w-[400px] bg-white rounded-lg px-5 py-6 max-w-md mx-auto  rounded-lg overflow-hidden  md:max-w-md lg:mr-9 w-75">
      <h3 className="text-center mb-4 font-semibold text-purple-600">Giriş yap veya kayıt ol</h3>
      <div className="flex flex-col gap-y-3">
        <div className="flex gap-x-3">
          <ReactFlagsSelect
            countries={Object.keys(flags)}
            customLabels={flags}
            selected={selected}
            onSelect={code => setSelected(code)}
          />
          <label className="relative flex-1 group">
            <input required
                   className="h-full rounded px-4 pt-2 hover:border-purple-700 focus:border-purple-700 transition-colors outline-none text-sm w-full border-2 border-gray-200 peer"/>
            <span
              className="absolute top-0 left-0 h-full flex items-center px-4 text-sm text-gray-500 transition-all group-focus-within:h-7 group-focus-within:text-xs group-focus-within:text-purple-600 peer-valid:h-7 peer-valid:text-xs peer-valid:text-purple-600">
            Telefon Numarası
          </span>
          </label>
        </div>
        <button
          className="h-12 rounded-lg transition-colors bg-yellow-300 text-purple-700 text-sm font-semibold hover:bg-purple-700 hover:text-yellow-300">
          Telefon numarası ile devam et
        </button>
        <div className="h-[1px] bg-gray-100"></div>
        <button
          className="h-12 flex items-center rounded-lg px-4 transition-colors bg-blue-700 bg-opacity-10 text-blue-900 text-sm font-semibold hover:bg-blue-900 hover:text-white">
          <FaFacebook size={26} className="justify-self-start"/>
          <span className="mx-auto">
            Facebook ile devam et
          </span>
        </button>
      </div>
    </div>
    );
};