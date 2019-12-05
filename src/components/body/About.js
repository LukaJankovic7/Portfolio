import React from 'react' 
import AboutStyles from './styles/about.css'

const About = () => {
    return(
        <div id={AboutStyles.about} >
            <h1>About me</h1>
            <p>
                &emsp;I am a student at the Faculty of Technical Sciences in Novi Sad, Serbia, currently attending the third year 
                of the Electrical and computer engeneering programme. Besides college I study web development, 
                in desire of becoming a full stack front end developer, for starters.  
                <br/>
            </p>
            <p>
                From my early years in high school I have start learning HTML and CSS and playing around with them. I had some school
                 projects which requiered those skills, but I also worked on some of my smaller projects. Also I started fiddling 
                 with JQuery since it made my work more alive and I was always looking for ways to improve my work and expand my 
                 knowledge. Since not so long ago I started learning ReactJS and making my work more dynamic.
            </p>
            <p>
                WIth a few bigger projects behind me I could say I know what I am doing. I look to complete tasks ahead as simple
                as I can, making clean code and also fast and user friendly websites with spotless looks and flawless functionality.
                I always look to surpass myself and push the limits of my knowledge and creativity.
            </p>           
        </div>
    )
}

export default About