# Github App Project
SPA created as a test prototype for an job interview. The website should make an API request to github public API, retrieve and render specific details about the user that was found.

The project had some rules like _"mandatory use of routes"_, _"error handling"_, _"conditional rendering if user was not found"_. Since I was on the mood to push myself in this test, I learned and put in practice some technologies that I didn't knew, like _Atomic Design_ and _Styled Components_.

The result was pretty satisfying, but it was highly time consuming. I spent 4 days from a deadline of 7 days, to work just on the project architecture, structure and componentization, including the learning curve to apply Atomic Design and Styled Components to the project.

As a conclusion of this project, I would only recommend Styled Components + Atomic Design, if your project is aiming to make a complete design system from scratch. Anything different than that, is best to go with some opinionated design like Bootstrap and Page/Container/Component structure.

Hope that someone enjoy this project as I did and can be of some sort of help. Even with the pitfall of time spent, I did a heavy effort on this and enjoyed the end result.

## Project Installation

In order to run the project, you must have installed in your local machine:
- node v@ 13.x
- npm v@ 6.x
- yarn v@ 1.22.x

#### That said, do the following:

- git clone the repo
- cd into `github-app`
- run `yarn` to install dependencies
- run `yarn start` to run the webserver development
- to see the tests, just run `yarn test`



## Technologies used on this project

- **create-react-app** - _project boilerplate with zero config_
- **React** - _main SPA reactive library_
- **ReactDOM** - _React main render library_
- **React Router DOM** - _for routes on the project_
- **Styled Components** - _for css component library_
- **Axios** - _promises based fetch library_
- **React Extras** - _for conditional component rendering_
- **StandardJS** - _as a JavaScript Linter_
- **Atomic Design System** - _as a folder and component and code splitting_

## License

MIT License, 2020.

## Author

Diogo Fonseca, aka @devMozao 