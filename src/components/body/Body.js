import React from 'react'
import BodyStyles from './styles/body.css'
import About from './About'
import Projects from './Projects'

const Body = () => {
    return(
        <div className={BodyStyles.body}>
            <div className={BodyStyles.wrapper}>
                <a name="About"/>
                <About />
                <br />
                <a name="Projects"/>
                <Projects />
            </div>
        </div>
    )
}

export default Body