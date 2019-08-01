import Link from 'next/link';
import React from 'react';
import BaseLayout from '../components/shared/BaseLayout';
import { Button } from 'reactstrap';
import TeamsLayout from '../components/layout/TeamsLayout'
import 'bootstrap/dist/css/bootstrap.min.css';



class Teams extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="teams-wrapper">            
                <BaseLayout />
                <TeamsLayout />
                </div>
            </React.Fragment>
        )
    }
}
export default Teams;