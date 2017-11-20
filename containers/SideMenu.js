import React from 'react';
import { Header, Image, Icon, Label, Menu} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import './App.css';

export default class SideMenuSection extends React.Component {

  state = { activeItem: 'home' }

  componentDidMount(){
      this.setState({
          activeItem: this.props.active
      });
  }

  render () {

   const { activeItem } = this.state;

   return (
     <Menu pointing vertical compact={true} className='full-height'>
       <Link to="/">
         <Menu.Item name='home' active={activeItem === 'home'}>
           <Header as='h4'>Home</Header>
           <p>Welcome, this is my personal website</p>
         </Menu.Item>
       </Link>
       <Link to="/academia">
         <Menu.Item name='academia' active={activeItem === 'academia'}>
           <Header as='h4'>Academia</Header>
           <p>Teaching experiences, investigations and papers </p>
         </Menu.Item>
        </Link>
        <Link to="/industry">
         <Menu.Item name='industry' active={activeItem === 'industry'}>
           <Header as='h4'>Industry</Header>
           <p>Professional experiences, jobs and lessons learned</p>
         </Menu.Item>
        </Link>
        <Link to="/about_me">
         <Menu.Item name='about_me' active={activeItem === 'about_me'}>
           <Header as='h4'>About Me</Header>
           <p>My aspirations, thoughts, tastes and more</p>
         </Menu.Item>
        </Link>
        <Link to="/resume">
         <Menu.Item name='resume' active={activeItem === 'resume'}>
           <Header as='h4'>Resume</Header>
           <p>More detailed information about who I am</p>
         </Menu.Item>
        </Link>
     </Menu>
   )
  }
}
