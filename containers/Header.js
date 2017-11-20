import React from 'react';
import { Header, Image, Icon, Label} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
export default class HeaderSection extends React.Component {
 render () {
   return (
     <Header as='h3' block className='header-height'>
       <Image circular src='../images/myAvatar.png' />
       <Header.Content>
         Juan Diego Díaz Mosquera
         <Header.Subheader>
           Santiago, Chile
          <a href="http://github.com/jddm11/" target='_blank'>
            <Label basic horizontal>
             <Icon name='github'/>
               /jddm11
            </Label>
          </a>
         </Header.Subheader>
       </Header.Content>
     </Header>
   )
 }
}
