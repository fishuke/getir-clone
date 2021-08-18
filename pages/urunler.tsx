import type { NextPage } from 'next';
import { Layout } from '../components/Layout/LayoutProducts';
import {HomeSliderGetirYemek} from '../components/HomeSliderGetirYemek';
import {Categorys} from '../components/Categorys';
import {GetirWidgetMobil} from '../components/GetirWidgetMobil';
import {CompanysProducts} from '../components/CompanysProducts';
const HomePage: NextPage = () => {
    return (
        <Layout title="Getir">
          
            <CompanysProducts/>
            <Categorys/>
            
            <GetirWidgetMobil/>
        </Layout>
    );
};

export default HomePage;
