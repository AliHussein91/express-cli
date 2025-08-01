
# Express App Generator CLI

A powerful and interactive Command Line Interface (CLI) for scaffolding modern Express.js applications. This tool allows you to quickly generate a new project with a robust, scalable, and maintainable structure, complete with your choice of database, boilerplate resources, and common middleware.

## Features

-   **Interactive Setup**: An easy-to-use interactive prompt guides you through the setup process.
    
-   **Database Integration**: Choose from popular databases:
    
    -   MongoDB (with Mongoose)
        
    -   PostgreSQL (with pg)
        
    -   MySQL (with mysql2)
        
-   **Boilerplate Resources**: Optionally include a pre-built `User` resource with a model, controller, and service layer.
    
-   **Common Middleware**: Automatically include and configure essential middleware:
    
    -   Authentication with JSON Web Tokens (JWT)
        
    -   Request logging with Morgan
        
    -   Centralized error handling
        
-   **Modern JavaScript**: Uses ES Modules (`import`/`export`) syntax.
    
-   **Scalable Architecture**: Generates a clean, layered project structure (routes, controllers, services, models).
    

## Installation

To use the Express App Generator, you need to install it globally on your machine using npm.

```
npm install -g .

```

_(Note: Run this command from within the `express-cli` project directory. If you were to publish this to npm, the command would be `npm install -g express-cli`)_

## Usage

Once installed, you can create a new application by running the `create-express-app` command followed by your desired project name.

```
create-express-app my-new-api

```

This will launch the interactive setup process, which will ask you the following questions:

1.  Which database would you like to use?
    
2.  Would you like to include a boilerplate User resource?
    
3.  Which common middleware would you like to include?
    

After you answer the prompts, the CLI will create a new directory with your project name, scaffold the entire application structure, and install all the necessary dependencies.

## Generated Project Structure

The CLI generates the following project structure:

```
my-new-api/
├── .env
├── .gitignore
├── package.json
└── public/
└── src/
    ├── app.js
    ├── index.js
    ├── config/
    │   └── db.js
    ├── constants.js
    ├── controllers/
    │   └── user.controller.js
    ├── middlewares/
    │   ├── auth.middleware.js
    │   └── error.middleware.js
    ├── models/
    │   └── user.model.js
    ├── routes/
    │   └── user.routes.js
    ├── services/
    │   └── user.service.js
    └── utils/
        ├── ApiError.js
        ├── ApiResponse.js
        └── asyncHandler.js

```

## Development

To contribute to the development of this CLI tool:

1.  **Clone the repository:**
    
    ```
    git clone <your-repo-url>
    cd express-cli
    
    ```
    
2.  **Install dependencies:**
    
    ```
    npm install
    
    ```
    
3.  Link the package:
    
    Use npm link to create a symbolic link. This allows you to run the create-express-app command globally while testing your local changes without having to reinstall it every time.
    
    ```
    npm link
    
    ```
    

## License

This project is licensed under the MIT License.