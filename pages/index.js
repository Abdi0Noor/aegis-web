import Link from 'next/link';
import React from 'react';
import BaseLayout from '../components/shared/BaseLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from '../components/layout/HeroIndex';



class Index extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="indexWrapper">
                <BaseLayout />
                <Hero />
                </div>
               
            </React.Fragment>
        )
    }
}
export default Index;