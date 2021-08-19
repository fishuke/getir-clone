import type { NextPage } from 'next';
import { Layout } from '../components/Layout/Layout';
import {HomeSlider} from '../components/HomeSlider';
import {Categorys} from '../components/Categorys';
import {GetirWidgetMobil} from '../components/GetirWidgetMobil';
import {Companys} from '../components/Companys';
import { LocationBarMobile } from '../components/LocationBarMobile';
const HomePage: NextPage = () => {
    return (
        <Layout title="Getir">
            <LocationBarMobile/>
            <HomeSlider/>
            <Categorys/>
            <Companys/>
            <GetirWidgetMobil/>
        </Layout>
    );
};

export default HomePage;
