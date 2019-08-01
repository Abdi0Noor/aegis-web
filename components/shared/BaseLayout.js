import React from 'react';
import Link from 'next/link';
import "../../styles/main.scss";
import ActiveLink from '../../ActiveLink';
import Logo from "../../static/img/logo/Aegis2Full2.png";



 class BaseLayout extends React.Component {
    state = {
        headerShow: false,
       }
 
   componentDidMount() {
       window.addEventListener('scroll', this.handleScroll);
   }

   handleScroll = () => {
       if(window.scrollY > 100) {
           this.setState({headerShow: true})
       } else {
           this.setState({ headerShow:false})
       }
   }
    render() {

            return(
                <div className="navBar"
                    position="fixed"
                    style={{
                        backgroundColor: this.state.headerShow ? 'white' : 'transparent'
                    }}
                >
                    <div className="navHeader">
                        <img src={Logo}/>
                    </div>
                    <div className="navContainer" >
                    <nav>
                        <ActiveLink activeClassName="active"  href="/"><a >Home</a></ActiveLink>
                        <ActiveLink activeClassName="active"  href="/teams"><a >Teams</a></ActiveLink>
                        <ActiveLink activeClassName="active"  href="/about"><a >About</a></ActiveLink>
                    </nav>
                    </div>
                   
                </div>
             
            )
        
    }
}
export default BaseLayout;
