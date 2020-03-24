import React, {Component} from 'react'
import IntroStyles from './styles/intro.css'
import profileImg from '../assets/profile.jpg'

const INTRO_TEXT = [
    'A web developer in possession of HTML, CSS and JS skills',
    'Experience in React, Redux, Gatsby',
    'Passionate about learning more every day'
]

class Intro extends Component {
    // state = {textIndex: 0, fadeIn: true};

    constructor() {
        super();
        this.state = {textIndex: 0, fadeIn: true};
    }
    
    componentDidMount() {
        this.timeout = setTimeout(()=>{
                this.setState({fadeIn:false});
            }, 4300);    
            this.changeText();
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
        clearInterval(this.titleInterval);
    }

    changeText() {
        this.titleInterval = setInterval( () => {
            const textIndex = (this.state.textIndex + 1) % INTRO_TEXT.length;
            this.setState({textIndex, fadeIn: true})

            this.timeout = setTimeout(()=>{this.setState({fadeIn: false})}, 4300)
        }, 5000)
    }

    render()
        { 
        return (
            <div className={IntroStyles.intro}>
                <img src={profileImg} alt="img"></img>
                <h1>Luka Janković</h1>
                <p className={this.state.fadeIn ? (IntroStyles.textFadeIn) : (IntroStyles.textFadeOut)}>
                    {
                        INTRO_TEXT[this.state.textIndex]
                    }
                </p>
            </div>
        )
    }
}

export default Intro;
