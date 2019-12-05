import React from 'react' 
import FooterStyles from './styles/footer.css'
import socialMedia from './socialMedia';

const Footer = () => {
    return (
        <div id={FooterStyles.footer}>
            <h1>Connect with me!</h1>
            <div className={FooterStyles.SocialMedia}>
                {
                    socialMedia.map(Media => {
                        return(
                            <a key={Media.name} target="_blank" rel="noopener noreferrer" href={Media.link} >
                                <div className={FooterStyles.SocialMediaDiv}>
                                    <img className={FooterStyles.SocialMediaIcon} src={Media.icon}/>
                                    <p>{Media.name}</p>
                                </div>
                            </a>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Footer;