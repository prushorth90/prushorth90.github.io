import React from 'react'
import Title from '../layouts/Title'
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1  gap-6 xl:gap-14">
        <ProjectsCard
          title="Google Chrome Extension For US Real Estate Websites: Realtor and Zillow "
          des="Date: November 2022 - April 2023 - Supervised Individual Project"
          lang="React, TypeScript, MaterialUI, JEST, Webpack, Node "
          about="100% code coverage. 144 integration and unit tests. Mocked Google Cloud API"
          challenge="Asynchronous Features: Promises, React Hooks, Chrome Browser APIs"
          vid={<iframe width="100%" height="500" title="extension"
            src="https://www.youtube.com/embed/ALbQ7LkAP8U">
          </iframe>}
        />
    
        <ProjectsCard
          title="Built Machine Learning Agents From Scratch - QLearn, DecisionTree, MDP, BFS"
          des="Date: October 2022 - March 2023 - Individual Work"
          lang="Python and NumPy"
          about='QLearning, DecisionTree, MDP, BFS'
          challenge="Worked on 2D(Two-Dimensional) grid to build these agents"
          vid={<iframe width="100%" height="600" title="pac"
            src="https://www.youtube.com/embed/UMq6wEV1wbs">
          </iframe>}
        />
        <ProjectsCard
          title="Book Recommender System For Web App"
          des="Date: Feb 2022 - March 2022 - Group Project "
          lang="Python, Django, Surprise Library, Pandas"
          about='SVD seemed to have the optimal metrics especially as the RMSE score was 1.58 which was 57% less than the next best'
          challenge="To recommend books to clubs I had to merge all members into 1 imaginary user to represent club."
          vid={<iframe width="100%" height="600" title="pac"
            src="https://youtube.com/embed/9FUmkWxQFc0">
          </iframe>}
        />
        <ProjectsCard
          title="Thread Pool Image Filter - Individual Work"
          des="Date: Feb 2022 - March 2022"
          lang="Java"
          about='Image filter application which uses threads'
          challenge="Thread pool size cannot be exceeded so newly added threads are kept in a waiting queue until current threads reach a terminated state"
        vid={<iframe width="100%" height="600" title="pac"
          src="https://www.youtube.com/embed/Y9vQdt-SEL8">
        </iframe>}
        />
        <ProjectsCard
          title="AirBnb London 2021 Desktop App - Group Project"
          des="Dates: March 2021 - April 2021"
          lang="Java"
          about='Used Java Stream API to perform data analysis on AirBnb dataset'
          vid={<iframe width="100%" height="600" title="pac"
            src="https://www.youtube.com/embed/7kgYt4kZsR8">
          </iframe>}
        />
       
      </div>
    </section>
  );
}

export default Projects