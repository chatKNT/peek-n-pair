# React and 3rd Party API Project

- [Welcome!](#welcome)
- [Deliverables](#deliverables)
- [App Overview](#app-overview)
  - [APIs and Keys](#apis-and-keys)
  - [Deployment](#deployment)
- [Proposal and Timeline](#proposal-and-timeline)
  - [Timeline:](#timeline)
- [Scrum Board](#scrum-board)
- [Project Presentation](#project-presentation)
- [Agile Written Reflection](#agile-written-reflection)
- [Tech Checklist](#tech-checklist)
  - [Project Fundamentals (7)](#project-fundamentals-7)
  - [React Fundamentals (8)](#react-fundamentals-8)
  - [State Management (10)](#state-management-10)
  - [React Router (3)](#react-router-3)
  - [Forms \& Events (5)](#forms--events-5)
  - [Style (15)](#style-15)
  - [A11y (12)](#a11y-12)
  - [README (4)](#readme-4)

## Welcome!
Hello everyone, it's been a whirlwind, but believe it or not, you know more than enough to get your React project started! You've already built projects just like this one using Vanilla JS. The whole idea behind this one is that you'll see how much faster and farther you can build when you use a tool like React.

## Learning Objectives

* Demonstrate your skills learned from Mod 7: 
* Develop teamwork skills, including communication, problem-solving, compromise, and task management
* Strengthen your Git workflow fundamentals, managing branches, navigating merge conflicts, and maintaining a repository
* Practice Agile methodologies by managing a scrum board and by performing daily stand-up and stand-down.
* Deploy a project!
* Practice your technical communication through a presentation.


## Deliverables

For this project, your team will collectively be on the hook for the following:

- A proposal document
- GitHub Organization (you only need one repo)
- High Fidelity Wireframe(figma, Miro, draw.io, photoshop etc...)
- Scrum Board with Backlog, In Progress, and Done 
- A React app that meets the technical requirements listed below
- A presentation slideshow + Walkthrough demo video
- A reflection on your use of Agile methodologies
- A deployed project link(optional)

## Roles

* Software Engineer
* Scrum Master
* Engineering Manager (instructor)


## App Overview
Your app will have to use a third party API to fetch data, but instead of only 2 fetches, you'll have to make 3! And unlike your previous projects that all took place using a single page, this time you're going to use client side routing to create multiple "pages"! And while it does not need to be everywhere, you must use context at least *once* in your app.

There are, of course more specifics below in the checklist, but at its heart, all we're asking for is an app that:
* makes three fetches ✅ 
* is made with React ✅ 
* uses client-side routing ✅ 
* implements context ✅ 

### APIs and Keys

You are free to use any API that you choose; there are a few things we will require

* It must be free.
* APIs that do not require an API key are preferred as these can be deployed.
* It can require an API key but you MUST NOT push it to your repo. Use `.gitignore` to hide your API key. If you go this route, include instructions for how your application uses the API key and what another developer can do to get their own (check out the [Giphy API homework](https://github.com/The-Marcy-Lab-School/7-0-2-assignment-key?tab=readme-ov-file#hiding-your-api-key-from-github) for an example of these instructions) 
* You can use `json-server` to create your own API. If you go this route, deployment will be an extra step but it will be possible.

### Deployment

Deployment will not be a requirement for this project.

Depending on which of the above options you choose, you may or may not be able to easily deploy your application. That said, you are strongly encouraged to use a free API without an API key as it is MUCH easier to deploy. Here is the list of APIs we recommend: [free APIs](https://gist.github.com/MostlyFocusedMike/2a0825c062b79d33e5003f0f767ad0fa)

As a reminder, check out this resource for [deploying a Vite project to Github pages](https://github.com/The-Marcy-Lab-School/2-3-3-resource_deploying-with-github-pages).

## Proposal and Timeline

As a part of your proposal, you will need to submit a document that includes the following:
  * A mission statement for the app (who its for, what it does, and why they would use it)
  * The API and specific endpoints you plan on using
  * MVP user stories (users can...)
  * Stretch user stories
  * Timeline for reaching MVP in 1 week
  * Wireframes of each page in your application

Use this template that has been provided for you: [proposal template](./proposal.md).

### Timeline:

This one is up to you! But here's the catch: we'll hold you to it. You've done a few of these projects by now, so you should know about how much work you can get done in a week. You know what we're expecting you to get done by the end (3 fetches, multi-page routing, React), so you can work backward from there.

**Before you start your project, you'll have to submit the deadlines you think you can hit and get it approved**. Don't go crazy! This exercise is about setting *realistic deadlines for your team*. 

> **💡 Pro Tip:** It's always better to <u>under-promise and over-deliver</u>.

Make sure you look over the entire project and think about what will take the most time.

## Scrum Board

Your team must create a GitHub Organization and a Scrum board to manage your tasks. Each morning during stand-up, you will update your scrum board and assign tasks.

Use this [scrumboard](https://github.com/users/EMarcantonio/projects/1/views/1?layout=board) as an example.

## Project Presentation

At the end of the project week, your team will present your project to the class in the form of a presentation! The presentation should feature speaking roles by each member of the team and include a short (under 2 minutes) recording of the built application. The entire presentation should last no longer than 5 minutes. 

Use the following [template](https://docs.google.com/presentation/d/1X3OVnZ1EEatqc9lL-3VS8mkGDjeBqfyqBgdGqZgOuEs/edit?usp=sharing) and [example](https://docs.google.com/presentation/d/1zyfnu7PDpf5E3Ff7FIUdqAyvMGiAzdh_06RHAau4nF4/edit#slide=id.g2b32ee03b40_0_140)

## Agile Written Reflection

During project weeks at Marcy, you get to practice the [Agile Methodology](https://www.atlassian.com/agile). Your team will:
* Use agile rituals like **daily stand-up** to transparently communicate progress and roadblocks.
* Use agile tools like a **scrum board** to visualize and manage tasks.
* Use agile strategies like creating a **timeline** to guide and structure your priorities.
* Perform a **retrospective** and reflect on what went well and what could be improved.

In addition to the technical component of this project, your team will write a short reflection on your week (~250 words) thinking critically about how you and your team practiced the Agile methodology. 

See the [Agile Methodology Reflection document](./agile-methodology-reflection.md) for the specific questions you are expected to reflect on.

**Only one reflection per group is required**.

## Tech Checklist

### Project Fundamentals (7)
- [ ] Used Vite for this project
- [ ] Used React
- [ ] Used React Router for client side routing
- [ ] Made a fetch to get multiple resources
- [ ] Made a fetch to get a single, specific resource
- [ ] Made a third fetch for whatever you want
- [ ] Use Context at least once (set up a dark mode)
- [ ] **Bonus: Were able to get it deployed in a functional state**

### React Fundamentals (8)
- [ ] Created at least 3 components
- [ ] Have all components in their own files (1 export per file)
- [ ] Passed props to a component at least 3 times
  - [ ] 1st check box
  - [ ] 2nd check box
  - [ ] 3rd check box
- [ ] Rendered an array of items to the screen at least once
- [ ] At no point did you ever use any vanilla DOM JS methods

### State Management (10)
- [ ] The `useContext` hook is used at least once
- [ ] Used the `useEffect` hook at least 2 times
  - [ ] 1st check box
  - [ ] 2nd check box
- [ ] Used the `useState` hook at least 3 times
  - [ ] 1st check box
  - [ ] 2nd check box
  - [ ] 3rd check box
- [ ] Lifted state up out of a component at least once
     - That is a fancy way of saying that you had the state of a component and then passed down the getter and setter functions for the hook to a child component. You've seen us do this!
- [ ] A Context is created to manage global state
 
     

### React Router (3)
- [ ] Had at least 2 different pages in the application
- [ ] Used the proper `Link` components to navigate between pages
- [ ] Used the `useParams` hook at least once

### Forms & Events (5)
- [ ] Handled at least 2 non-submission events (clicking on something causes a UI change)
  - [ ] 1st check box
  - [ ] 2nd check box
- [ ] Handled form submission event properly with React syntax
- [ ] Demonstrated a working controlled Form

### Style (15)
- [ ] Navigation bar fits cleanly on mobile and desktop
- [ ] Navigation visually indicates what page you are on (look into `NavLink`)
  - Think underlines, bolding, etc. this should change as you move around the site
- [ ] Used Flexbox or Grid to style list of components
- [ ] Repeated elements have a consistent "card" style
- [ ] Site has a primary color
- [ ] Site has a secondary color
- [ ] Site has an accent color
  - This is for things like buttons, links, etc.
- [ ] No more than 2 different fonts were used on any one page
- [ ] Buttons have altered visual states for hover, active, and focus
- [ ] Links have altered visual states for hover, active, and focus

### A11y (12)
- [ ] There is a `main` element on *each* page
- [ ] There is a `nav` element on *each* page
- [ ] The `nav` contains a `ul` of links
- [ ] At least one `h1` element on *each* page
- [ ] At least one `section` is used properly on *each* page
- [ ] Heading tag hierarchy is always correct
- [ ] `div` is never used in place of `ul` and `li`
- [ ] Every `form` `input` has a proper `label`
- [ ] Each `form` is `aria` labelled properly to make it a landmark
- [ ] Every `img` has a unique `alt` (if applicable, get points if no image)
- [ ] All colors have a AAA difference
  - https://color.a11y.com can check your site for you!
- [ ] All buttons look like buttons, all links look like links

### README (4)

- [ ] Includes a README.md file
- [ ] The README file describes the purpose and audience for the application
- [ ] The README file describes the user stories 
- [ ] The README file include screenshots of the final project
