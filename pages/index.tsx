import type { NextPage } from 'next';
import { Layout } from '../components/Layout/Layout';
import {HomeSlider} from '../components/HomeSlider';
import {Categorys} from '../components/Categorys';
import {GetirWidgetMobil} from '../components/GetirWidgetMobil';
import {Companys} from '../components/Companys';
const HomePage: NextPage = () => {
    return (
        <Layout title="Getir">
            
            <HomeSlider/>
            
           
            <div>
            <Categorys/>
            <Companys/>
            <GetirWidgetMobil/>
            </div>
        </Layout>
    );
};

export default HomePage;
