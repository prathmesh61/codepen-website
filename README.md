# CodeEdii - code editor like JSFiddle

# Description: This project is a web application similar to JSFiddle where users can write, save, and share code snippets with their friends. It allows users to create, edit, save, and delete their code snippets. Additionally, users have their own profile pages where they can view their email and all their projects.

# Tech Stack  <br>
Next.js: Used for server-side rendering and client-side routing. <br>
MongoDB: Database for storing user information and code snippets. <br>
CodeMirror: Provides the code editor functionality. <br>
Axios: Handles HTTP requests. <br>
Zustand: State management library. <br>
TypeScript: Programming language for type safety and enhanced developer experience. <br>
Playwright: Utilized for end-to-end testing. <br>

# API Endpoints
/api/save-code: Endpoint for saving code snippets.
/api/all-repos: Retrieves all projects from the database.
/api/delete-code: Deletes a code snippet.
/api/share-code: Generates a project page that can be shared with friends.
/api/user/[id]: Retrieves user information and all their projects.

# Pages
Code Page: A page where users can share their saved code snippets with friends.
Editor Page: Allows users to write and edit their code snippets using the CodeMirror editor.
Profile Page: Every user has their own profile page where they can view their email and all their projects.

# Getting Started
Clone the repository.
Install dependencies using npm install.
Configure MongoDB connection.
Run the application using npm run dev.
Access the application through the specified port.

# Contributing
Contributions are welcome! Please follow the contribution guidelines outlined in CONTRIBUTING.md.

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
