import React from 'react';
import { Container, Header} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
export default class Home extends React.Component {
 render () {
   return (
     <div>
       <Container fluid>
         <Header as='h2'>Home</Header>
         <p>Home Section</p>
       </Container>
     </div>
   )
 }
}
