import React from 'react';
import Article from '../components/Article';
const articles = [
    {
        id: 1,
        title: 'How to win friends',
        author: 'John Smith',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit alias ex culpa tempora ipsa earum consequuntur velit architecto deserunt? Enim.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit alias ex culpa tempora ipsa earum consequuntur velit architecto deserunt? Enim.'
    },
    {
        id: 1,
        title: 'How to influence people',
        author: 'Mary Smith',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit alias ex culpa tempora ipsa earum consequuntur velit architecto deserunt? Enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit alias ex culpa tempora ipsa earum consequuntur velit architecto deserunt? Enim.'
    },
    {
        id: 1,
        title: 'How to become successful',
        author: 'Tom Smith',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit alias ex culpa tempora ipsa earum consequuntur velit architecto deserunt? Enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit alias ex culpa tempora ipsa earum consequuntur velit architecto deserunt? Enim.'
    },
]

const HomePage = () => {
const artList = articles.map(article => (
    <Article key={article.id} {...article}/>
))
    return ( 
       <div>
           {artList}
       </div>
     );
}
 
export default HomePage;