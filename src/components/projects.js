import MMatricaIMG from '../assets/background.jpg'
import DataBankIMG from '../assets/background.jpg'
import CardGamesIMG from '../assets/background.jpg'

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
        helped me practise Gatsby so there is no sign up system od way to add new data through the site, those need to be 
        added manually through Contentful`, 
        "image" : DataBankIMG
    },
    {
        "id": 3,
        "title": "CardGames",
        "link": "link",
        "github": "https://github.com/LukaJankovic7/CardGames",
        "description": `A web aplication that has 2 luck based card games made for two players. A React application using Deck of cards
        API to shuffle decks and draw cards. It has a score system keeping track of the current score as well as the best score.`,
        "image" : CardGamesIMG
    }
]

export default PROJECTS