import React from 'react';
import { Segment, Icon, Divider, Container} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import './App.css';
export default class FooterSection extends React.Component {
 render () {
   return (
     <Segment className='footer-height' textAlign='center'>
     <Container>
       <a href="http://linkedin.com/in/jddm11/" target='_blank'>
         <Icon name='linkedin' /> LinkedIn
       </a>
     </Container>
     <Divider />
       Copyright © 2017 Juan Diego Díaz Mosquera - All rights reserved
     </Segment>
   )
 }
}
