import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Container, Header, Grid, Segment } from 'semantic-ui-react'
import HeaderSection from './Header';
import FooterSection from './Footer';
import SideMenuSection from './SideMenu';
import {Link} from 'react-router-dom';
import './App.css';

class App extends Component {

    render () {
        return (
					<div className='full-height'>
	          <HeaderSection />
						<Segment basic className='content-height'>
							<Grid>
				        <Grid.Column width={4}>
									<SideMenuSection active='home'/>
				        </Grid.Column>
				        <Grid.Column stretched width={12}>
									<Segment>
										<Container fluid>
						          <Header as='h2'>Home</Header>
						          <p>Home Section</p>
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

export default connect(state => state)(App);
