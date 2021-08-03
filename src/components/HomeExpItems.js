import pacman from "../images/pacman.jpeg";
import kaggle from "../images/ML_kaggle.jpeg";
import nlp from "../images/nlp.jpeg"
import pics from "../images/pics.png";
import videos from "../images/videos.png";
import todos from "../images/todos.png";
import ums from "../images/UMS.png";

export const HomeExpItems = [
    {title: "User Management System", src: ums, text:["React.js / Hooks / Redux", "Node.js / Express", "MongoDB Cloud", "Restful APIs"], github: "https://github.com/Viclin0127/express-user-management-system", demo: {isDemo: true, url: "https://yuan-ums.netlify.app"}},
    {title: "Unsplash Pictures Searching App", src: pics, text:["React.js / Hooks", "JavaScript ES6 and above", "axios"], github: "https://github.com/Viclin0127/unsplash-pictures-searching", demo: {isDemo: true, url: "https://yuan-pics-app.netlify.app"}},
    {title: "Youtube Videos Searching App", src: videos, text:["React.js / Hooks", "JavaScript ES6 and above", "axios"], github: "https://github.com/Viclin0127/youtube-videos", demo: {isDemo: true, url: "https://yuan-videos-app.netlify.app"}},
    {title: "Todo List", src: todos, text:["React.js / Hooks", "JavaScript ES6 and above"], github: "https://github.com/Viclin0127/react-todo-app", demo: {isDemo: true, url: "https://yuan-todo-list.netlify.app"}},
    {title: "Automated PacMan", src: pacman, text:["Python3", "MCTS", "Q-learning", "SARSA", "BFS"], github: "https://github.com/Viclin0127/PacMan_contest", demo: {isDemo: false, url: ""}},
    {title: "ML contest on Kaggle", src: kaggle, text:["Python3", "sklearn"], github: "https://github.com/Viclin0127/Music_Genre_Classification", demo: {isDemo: false, url: ""}},
    {title: "Rumour Detection (NLP)", src: nlp, text:["Python3", "Logistic Regression / FFNN / LSTMs / BERT"], github: "", demo: {isDemo: true, url: ""}}
];