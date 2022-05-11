#How to Run General Store app

##Installations

mui:
`npm install @mui/material @emotion/react @emotion/styled`

react-router:
`npm install react-router-dom@6`

Moesif Origin & CORS Changer Extension for Google Chrome:
https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc?hl=en-US
//I had a problem with not being able to access the json file with fetch because
I was blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
I figured out that I could use a local extension to provide a workaround for this.

for testing:
`npm install @testing-library/react react-test-renderer jest-dom --save-dev`

##To Run

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

##To Test

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
