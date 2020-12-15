import React from 'react';
import { About, Awards, Education, Experience, Interests, Skills } from './components/sections';
import { Container } from 'reactstrap';
import { Divider } from './components/atoms';
import { Navigation } from './components/organisms';
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
    <Provider store={store}>
        <div className="App">
            <Navigation />
            <Container className="p-0" fluid>
                <About />
                <Divider />

                <Experience />
                <Divider />

                <Education />
                <Divider />

                <Skills />
                <Divider />

                <Interests />
                <Divider />

                <Awards />
            </Container>
        </div>
    </Provider>
);

export default App;
