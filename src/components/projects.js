import MMatricaIMG from '../assets/projectImages/MMatrica.jpg'
import DataBankIMG from '../assets/projectImages/DataBank.jpg'
import CardGamesIMG from '../assets/projectImages/CardGames.jpg'
import DataDisplayIMG from '../assets/projectImages/DataDisplay.jpg'

const PROJECTS = [
    {
        "id": 1,
        "title": "MMatrica",
        "link": "http://mmatrica.com/",
        "github": "",
        "description": `A website for a local driving school. Project I worked on in a team, with my friends.
        Two of us worked on the basic HTML and CSS look of the site. This was a great and important experience for me since it was my
        first real project.`,
        "image" : MMatricaIMG
    },
    {
        "id": 2,
        "title": "DataBank",
        "link": "https://musing-euclid-9f6c2f.netlify.com/account/",
        "github": "https://github.com/LukaJankovic7/DataBank",
        "description": `This project uses Gatsby and its plugins to manage contentful data and display it on the web application.
        It features a log in system which allows you to display different data for different users. This was a test project which
        helped me practice Gatsby so there is no sign up system or way to add new data through the site, those need to be 
        added manually through Contentful`, 
        "image" : DataBankIMG
    },
    {
        "id": 3,
        "title": "CardGames",
        "link": "https://gallant-ride-bc9fc6.netlify.app/",
        "github": "https://github.com/LukaJankovic7/CardGames",
        "description": `A web application that has 2 luck based card games made for two players. A React application using Deck of cards
        API to shuffle decks and draw cards. It has a score system keeping track of the current score as well as the best score.`,
        "image" : CardGamesIMG
    },
    {
        "id": 4,
        "title": "DataDisplay",
        "link": "https://ecstatic-cray-32db7f.netlify.app/",
        "github": "https://github.com/LukaJankovic7/college-dataDisplay",
        "description": `A simple web application used for displaying data from virtual sensors. Data is being randomly generated and displayed in charts. 
        Users can see characteristic values like the minimum and maximum values in the whole dataset, as well as in the currently visible dataset. Users also 
        have control over some chart properties.`,
        "image" : DataDisplayIMG
    }
]

export default PROJECTS
