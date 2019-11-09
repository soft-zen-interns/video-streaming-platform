# VIDEO STREAMING PLATFORM

## Server routes
- [http://localhost:8000](http://localhost:8000)

    - Index page

        - Can't really do anything here

- [http://localhost:8000/genres](http://localhost:8000/genres)

    - Genres route
    
        - From here you can manipulate the music genres in the databas

    - [http://localhost:8000/genres/all-genres](http://localhost:8000/all-genres)
        
        - Get a JSON with all the genres from the database

    - [http://localhost:8000/genres/create-genre/](http://localhost:8000/genres/create-genre/)
        
        - The name you write after the last '/' will be added to the database, if it doesn't exists. Like:
        
        
            http://localhost:8000/genres/create-genre/hip-hop
            http://localhost:8000/genres/create-genre/rap
            http://localhost:8000/genres/create-genre/jazz
            http://localhost:8000/genres/create-genre/bluse
            
            

## Available SERVER Scripts
All custom server scripts will be listed here:

### `npm run server`
This command will start the server locally on port 8000. 
[http://localhost:8000](http://localhost:8000)


### `npm run dbMigrate`
This command will migrate the available MySQL tables on your local MySQL server in database 'softzen'.
The existence of database called 'softzen' is necessary! 

######// To create and use the database 'softzen' run the following commands.

`mysql> CREATE DATABASE softzen`

`mysql> USE softzen`






## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
