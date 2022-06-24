# Express.js: Note Taker Application

## Table of Contents

- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Usage](#usage)
- [Contact Me](#contact-me)
- [My Development Environment](#my-development-environment)
- [Languages, Technologies and Packages used](#languages-technologies-and-packages-used)

## Description

I was tasked to create a Note Taker application that can be used to write and save notes. This application uses a Express.js back end and saves and retrieves note data from a JSON file.

On the back end, the application includes a `db.json` file that is used to store and retrieve notes using the `fs` module.

The following HTML routes have been created:

- `GET /notes` - Returns the `notes.html` file.

- `GET *` - Returns the `index.html` file.

The following API routes have been created:

- `GET /api/notes` - Reads the `db.json` file and returns all saved notes as JSON.

- `POST /api/notes` - Receives a new note to save on the request body, adds it to the `db.json` file, and then returns the new note to the client. I used the uuid (v4) npm package to assign each new note a unique id when it's saved to the database file.

- `DELETE /api/notes/:id` - Receives a query parameter that contains the id of a note to delete, reads all notes from the `db.json` file, removes the note with the given `id` property, and then rewrites the notes to the `db.json` file.

## User Story

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```

## Screenshots

The following images show the web application's appearance and functionality:

![Existing notes are listed in the left-hand column with empty fields on the right-hand side for the new note’s title and text.](./public/assets/img/11-express-homework-demo-01.png)

![Note titled “Balance accounts” reads, “Balance account books by end of day Monday,” with other notes listed on the left.](./public/assets/img/11-express-homework-demo-02.png)

## Installation

The application will be invoked by entering the following 3 commands line by line into your terminal / CLI

```

git clone git@github.com:faisal244/express.js-note-taker.git
cd express.js-note-taker
npm install

```

## Usage

Once installed, please execute the following command in your terminal to run this application:

```

npm run start



```

You can then press ctrl+click on the link that appears in your terminal to launch the application (or cmd+click if you are using MacOS).

Alternatively, please navigate to http://localhost:4000/ in your browser to use this application.

This application has also been deployed to Heroku cloud Infrastructure and can be accessed directly and immediately by clicking the following link:

https://frozen-stream-53119.herokuapp.com/

## Contact me

- Contact me by Email: [m.faisal244@gmail.com](mailto:m.faisal244@gmail.com)

- [Connect with me on linkedin](https://www.linkedin.com/in/faisal244/)

- [View my Portfolio](https://faisal244.github.io/Portfolio/)

## My Development Environment

- MacOS Monterey
- VScode
- Nodemon (developer dependancy)
- Heroku
- Terminal
- Github
- Git

## Languages, Technologies and Packages used

- Javascript
- Node.JS
- Express.js
- uuid v4
- Bootstrap
- jQuery
- Font Awesome

---

---
