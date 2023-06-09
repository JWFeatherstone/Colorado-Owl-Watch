# Colorado Owl Watch

Birds are neat; owls are even neater. Colorado Owl Watch allows you to monitor recent owl sightings across Colorado, learn more about - and see all recent sightings for - a particular owl species, and track your favorite owls.

![FrontPage](https://i.gyazo.com/37040ca3a07eb8d90f3fe7020414781c.jpg)

 ## Quick Start
 
 Visit the deployed site.
 
 ## Preview
 
![Demo](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2I3Nzg1YjkwZmU2ZDE5NTdlMDA1NzQxNjMxYmQ1MDYxM2EzNDdiMiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/ziu1CABGk4KTuMxasL/giphy.gif)
 
 ## Technologies Used
 
 ### Core
 - JavaScript
 - CSS & HTML
 - React
 - Webpack
 - Cypress End-to-End Testing

### Libraries
- Leaflet
- DayJS
- Swiper

### Other
- Git
- GitHub
- GitHub Projects
- Trello
- Adobe Illustrator

## Sources

[eBird V2 API](https://documenter.getpostman.com/view/664302/S1ENwy59)

eBird is an online database of bird observations providing scientists, researchers and amateur naturalists with real-time data about bird distribution and abundance. It relies primarily on individual birders from across the US submitting checklists of observations to provide large-scale statistical data. You can download the eBird app on your phone or [visit the website](https://ebird.org/home) to sign up and get started.

## Project Spec and Background

This application was developed over the course of five days for the [Turing School of Software](https://frontend.turing.edu/) and Design's Module 3 [showcase project](https://frontend.turing.edu/projects/module-3/showcase.html). The project is designed to serve as a summative assessment of students' familiarity with the technologies introduced during the module - namely the React framework, creating multiple-page applications using React Router, performing end-to-end testing using Cypress, and making use of asynchronous JavaScript. To do so, students were encouraged to define a narrow target audience. 

In this case, I chose Colorado birders specifically interested in owls, given the limited number of species and the potential to build upon this application in the future for a publicly-distributed application addressing larger groups of birds (e.g. warblers) for which there's a real culture of tracking down rare species and sharing observations. It's worth noting this isn't really the case with owls, both due to their rarity and ethical concerns.

## Features

- A landing page displaying observations of owls reported within the last thirty days both via a carousel and a map of the sightings' coordinates.
- The ability to explore all species of owls that have been observed and reported within Colorado to eBird and to visit those owls' individual details pages to get some high-level identification information, view a list of their recent sightings, and understand when and where they're likely to be seen.
- The capacity to favorite/track individual owl species - adding them to a list of tracked birds and giving them a distinctive marker so that you can easily spot the particular birds you're after on the home page map.

## Contributors
John Featherstone [GitHub](https://github.com/JWFeatherstone) [LinkedIn](https://www.linkedin.com/in/john-w-featherstone/)

## Project Reflections
### Wins
- As a planner and someone who has spent a painstaking amount of time with mapping softwares like ArcGIS, I was really happy I managed to incorporate a fairly clean-looking spatial component into the site.
- There were a few iterations on the original design over the course of the project, but overall I think the UI looks fairly clean and consistent and I'm happy that it appears to be pretty responsive to a range of screen sizes - although this will be something I focus on as a stretch feature if the app is expanded.
- Despite the unanticipated size of the component library, I think the repository is pretty well organized and easy to navigate.

## Challenges
- My intial attempt to incorporate Swiper in its web element form proved tricky and ultimately I changed gears to use the React component version instead. Ultimately, it was a lot of time spent on a relatively superfluous feature which I really ought to have prioritized last.
- If I had a longer runway for this project I'd like to have been a lot more mindful about creating modular components for the sake of a consistent design and to avoid the repetition of work and code. As it was, the short time frame pushed me to be less considerate of this and it's something I'd really like to improve upon.
- The images and facts are both held repository-side, due to the inability to find another API that ticked the boxes in terms of providing that info/content. If this were a real project I'd probably opt for hosting these on a server of my own instead and pull them in as needed.
