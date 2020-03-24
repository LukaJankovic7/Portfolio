import React, {Component} from 'react'
import PROJECTS from '../projects.js'
import ArrowDown from '../../assets/arrowDown.svg'
import GitIcon from '../../assets/socialMediaIcons/github.png'
import Link from '../../assets/redirect.svg'
import ProjectStyles from './styles/project.css'

var projectsExpanded = [];
PROJECTS.forEach( project => {
    const title = `${project.title}`;
    projectsExpanded.push({title, isExpanded: false})
}) 

class Projects extends Component {
    // state = {projectsExpanded};

    constructor() {
        super();
        this.state = {projectsExpanded}; 
    }

    expandProject(projectTitle) {
        const project = document.getElementById(projectTitle);
        if(!project.classList.contains(`${ProjectStyles.projectExpanded}`)) {
            project.classList.add(`${ProjectStyles.projectExpanded}`);
            
        }
        else {
            project.classList.remove(`${ProjectStyles.projectExpanded}`);       
        }
    }

    render(){
        return (
            <div id = "projects">
                <h1>My projects</h1>
                {
                    PROJECTS.map(PROJECT => {
                        let {description, image, title, link, github} = PROJECT;

                        return (
                            <div className={ProjectStyles.projectInstance} key={title} id={title}>
                                <h2>{title}</h2>
                                <div className={ProjectStyles.projectContent}>
                                    <div className={ProjectStyles.projectImageContainer}>
                                        <div className={ProjectStyles.centerImageGrow}/>
                                        <img className={ProjectStyles.projectImage} src={image} alt='project image'></img>
                                    </div>
                                    <div className={ProjectStyles.projectTextContainer}>
                                        <p>{description}</p>
                                        <span className={ProjectStyles.links}>
                                            <a href={link} target="_blank" rel="noopener noreferrer"><img className={ProjectStyles.linkIcon} src={Link} title="Visit the application"/></a>
                                            {
                                                github ?  <a href={github} target="_blank" rel="noopener noreferrer"><img className={ProjectStyles.linkIcon} src={GitIcon} title="Visit the GitHub repository"/></a>
                                                        : <a style={{cursor: 'not-allowed'}}><img className={ProjectStyles.linkIcon} src={GitIcon} title="Visit the GitHub repository"/></a>
                                            }
                                            
                                        </span>
                                    </div>
                                </div>
                                <div className={ProjectStyles.expand} onClick={()=>this.expandProject(title)}>
                                    <img src={ArrowDown}/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Projects
