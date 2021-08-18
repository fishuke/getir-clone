import type { NextPage } from 'next';
import { Layout } from '../components/Layout/Layout';
import {HomeSliderGetirYemek} from '../components/HomeSliderGetirYemek';
import {Categorys} from '../components/Categorys';
import {GetirWidgetMobil} from '../components/GetirWidgetMobil';
import {Companys} from '../components/Companys';
const HomePage: NextPage = () => {
    return (
        <Layout title="Getir">
            
            <HomeSliderGetirYemek/>
            
           
            <div>
            <Categorys/>
            <Companys/>
            <GetirWidgetMobil/>
            </div>
        </Layout>
    );
};

export default HomePage;
