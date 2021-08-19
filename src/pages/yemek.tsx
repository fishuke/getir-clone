import type { NextPage } from 'next';
import { Layout } from '../components/Layout/LayoutYemek';
import {HomeSliderGetirYemek} from '../components/HomeSliderGetirYemek';
import {Categorys} from '../components/Categorys';
import {GetirWidgetMobil} from '../components/GetirWidgetMobil';
import {CompanysYemek} from '../components/CompanysYemek';
const HomePage: NextPage = () => {
    return (
        <Layout title="Getir">
            
            <HomeSliderGetirYemek/>
            
           
            <div>
            <Categorys/>
            <CompanysYemek/>
            <GetirWidgetMobil/>
            </div>
        </Layout>
    );
};

export default HomePage;
