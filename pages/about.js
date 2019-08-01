import Link from 'next/link';
import React from 'react';
import BaseLayout from '../components/shared/BaseLayout';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



class About extends React.Component {
    render() {
        return (
            <React.Fragment>
                <BaseLayout />
                <h1>About page</h1>
                <Button color="primary">Hi</Button>
            </React.Fragment>
        )
    }
}
export default About;