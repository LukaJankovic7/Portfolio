import React, {Component} from 'react';
import Header from './Header'
import Intro from './Intro'
import Body from './body/Body'
import Footer from './Footer'

const App = () => {

    return(
        <div>
            <Header />
            <a name="Intro"/>
            <Intro/>
            <Body/>
            <a name="Footer"/>
            <Footer/>
        </div>
    )
}

export default App;