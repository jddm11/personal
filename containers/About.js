import React from 'react';
import { Segment, Grid, Container, Header} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import HeaderSection from './Header';
import FooterSection from './Footer';
import SideMenuSection from './SideMenu';
import './App.css';

export default class About extends React.Component {
 render () {
   return (
     <div className='full-height'>
       <HeaderSection />
       <Segment basic className='content-height'>
         <Grid>
           <Grid.Column width={4}>
             <SideMenuSection active='about_me'/>
           </Grid.Column>
           <Grid.Column stretched width={12}>
             <Segment>
               <Container fluid>
                 <Header as='h2'>About</Header>
                 <p>About Section</p>
               </Container>
             </Segment>
           </Grid.Column>
         </Grid>
       </Segment>
       <FooterSection/>
     </div>
   )
 }
}
