# Rancid Tomatillos

## Overview

Rancid Tomatillos is a paired project built using React. The application allows the user to navigate to different "pages" or views via implemention of React Router.

![Gif home page](https://media.giphy.com/media/3ucvdJt724vXFOaexJ/giphy.gif)

On the home page, the user can view all movies and their average user rating. A user can click on various links that navigate the user to different "pages". These pages include an all movies page, movie details page and movie trailer page.

Also on the home page, a random movie image displays on page load. The random image is diaplayed in the banner and provides links that navigates the user to view the random movie's details. The movie details "page" displays the movie's title, poster, overview, rating, and release date.

Click here to demo the fully responsive and mobile friendly application, [Rancid Tomatillos](https://rancid-tomatillos-blue.vercel.app/).

# Learning Goal

- React fundamentals
- Build a multipage application via Router
- Testing React components with User Acceptance Testing (UAT) & End-to-End testing

# Technologies Used

- React
- React Router
- Cypress
- JavaScript
- HTML
- CSS
- React Dev Tools (Chrome Dev Tools)

## Accessibility

- WAVE (Chrome extension)

# Features

## Home page

![RandomMovie](https://media.giphy.com/media/7TSltAwXaadaGtSrIk/giphy.gif)

The home page shows a random movie image in the banner with a "See Movie Details" button. This button will navigate the user to the random movie's details page. From here the user can navigate to the movie trailer page or return to the page that displays all movies page by the click of a button.

![Mulan 2](https://media.giphy.com/media/M9pAFLfqox02B7ysTu/giphy.gif)

A sorting feature is on the home page that sorts the list of movies alphabetically or sorts the movies by their rating.

## View Movie Details

![Gif 1](https://media.giphy.com/media/aooFim06ULI1TlUyJe/giphy.gif)

The user can view the movie details by clicking on a movie image in the list of movies on the home page.

The movie details page displays the movie title, poster, release date, average rating, and movie summary/overview.

## View Movie Trailer

![MovieTrailer](https://media.giphy.com/media/009K73Iep9Qzz0N8sn/giphy.gif)

The user can navigate to the movies trailer page by clicking the "See Movie Trailer" button. This button is only displayed when a user has selected to view the movies detail.

![Gif 2](https://media.giphy.com/media/657pkDahvCs0yU2t9u/giphy.gif)

Once on the movie trailer page, the user will see an embed YouTube video of a movie trailer. The vidoe has control options for the user to play, mute, enable full screen, etc. In addition, there are two navigation buttons that navigate the user to view movie details and view all movies.

# Getting Started

To get a local copy up and running follow these simple steps.

## Installation

1. In your terminal, clone the repo
   ```sh
   git clone git@github.com:lswatson16/Rancid_Tomatillos.git
   ```
2. cd into the root directory
   ```sh
   cd Rancid_Tomatillos
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Start the server to see the local site
   ```sh
   npm start
   ```

<!-- # Code Architecture
If you want to know more about our code architecture, [click here](). -->

# Challenges and Wins

This was our first time building an application in React. In comparison to vanilla JavaScript, React is a breath of fresh air because of its ability to reuse components.

Cypress testing was a bit of a challenge to learn and we hope to improve on testing sad paths in our application.

# Future Additions

- User can filter movies by rating, release date, and genre
- User can search for a movie by title
- User can add their own review/rating to the movie
- Sad path testing

# Deployment

Skip installation by using this deployment link to view the application: [Rancid Tomatillos](https://rancid-tomatillos-blue.vercel.app/)

- No installlation is needed with the provided deploy link.

- The application was deployed using [Vercel](https://vercel.com/).

# Contributors

- [Lauralyn Watson](https://github.com/lilydev16)
- [Emili Kaiman](https://github.com/Ekaiman)

# Credits

- [Fontawesome](https://fontawesome.com/icons)
- [Google fonts](https://fonts.google.com/)
- [Favicon generator](https://favicon.io/favicon-generator/)
- [Vercel](https://vercel.com/)
- [Create React App](https://create-react-app.dev/)

<!-- ![Gif 1](https://media.giphy.com/media/aooFim06ULI1TlUyJe/giphy.gif)

![Gif 3](https://media.giphy.com/media/HBR9OszEHTLlpJ3ajP/giphy.gif) -->
