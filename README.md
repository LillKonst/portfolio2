# Portfolio
![image](https://github.com/user-attachments/assets/ce8448c4-e75b-4680-b892-18f39d645ba1)


This is my portfolio!

## Description
This is my portfolio where you can view my earlier projects and read about me.

## Build width
- JavaScript
- React
- Tailwind

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Getting started
To get a closer look at this website you can 
1. Clone my github repo: https://github.com/LillKonst/portfolio2 
2. Open website with the Netlify app using this link: https://lillkonst-portfolio.netlify.app/

## Getting Started
### Installing
This is where you list how to get the project started. It typically just includes telling a person to clone the repo and then to install the dependencies e.g.

### Clone the repo:
git clone https://github.com/LillKonst/portfolio2

### Install the dependencies:
npm install

###Running
Here is where you detail how to run the app. It typically involves the commands you'd need to run to start the project e.g.

To run the app, run the following commands:

npm run start



<pre> ```javascript import React, { useState } from "react"; const WorkExperience = () => { const [showMore, setShowMore] = useState(false); return ( <div className="mb-5"> <h3 className="text-2xl font-semibold mb-3">WORK EXPERIENCE</h3> {showMore ? ( <div> <p>2023 Danser og koreograf, IDYLL Festivalen, Eventshow</p> <button className="text-blue-600 cursor-pointer mt-3" onClick={() => setShowMore(false)} > Back </button> </div> ) : ( <div> <p> 2012 - Currently | Dancer, choreographer and danceteacher{" "} <button className="text-red-600 cursor-pointer" onClick={() => setShowMore(true)} > read more </button> </p> </div> )} </div> ); }; export default WorkExperience; ``` </pre>

## Contact 
If you are interessted in more details or want to get in contact with me, you are welcome to sending me an email at konstlillkristine@gmail.com
 
