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


        //This was used for manipulating length of projects description (longer if expanded, shorter if collapsed)
    // modifyState = (state, projectTitle) => {
    //     projectsExpanded = this.state.projectsExpanded;
    //     projectsExpanded.forEach( project => {
    //         if (project.title === projectTitle) project.isExpanded = state;
    //     })
    //     this.setState({projectsExpanded});
    // }

    expandProject (projectTitle)  {
        const project = document.getElementById(projectTitle);
        if(!project.classList.contains(`${ProjectStyles.projectExpanded}`)) {
            project.classList.add(`${ProjectStyles.projectExpanded}`);
            // this.modifyState(true, projectTitle)
            
        }
        else {
            project.classList.remove(`${ProjectStyles.projectExpanded}`);
            
            // this.modifyState(false, projectTitle);
        }
    }

    render(){
        return (
            <div id = "projects">
                <div id="test"></div>
                <h1>My projects</h1>
                {
                    PROJECTS.map(PROJECT => {
                        let {description, image, title, link, github} = PROJECT;
                        // let projects = this.state.projectsExpanded;
                        // projects.forEach( project => {
                        //     if (project.title===title) {
                        //         if(!project.isExpanded) description = `${PROJECT.descriptionShort}...`;
                        //         else description = PROJECT.descriptionLong;
                        //     }
                        // })

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