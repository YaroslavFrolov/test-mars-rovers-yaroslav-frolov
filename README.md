# demo https://yaroslavfrolov.github.io/test-mars-rovers-yaroslav-frolov/

## There is my own api-key, because demo-key has few requests (see .env)

## To see any photo, please select sol = 50 and camera = FHAZ

## React Task ( Mars Rovers ) - Yaroslav Frolov
Create a react app that utilizes NASA's API to display photos taken by their
various rovers on Mars.
Go to https://api.nasa.gov/ and scroll down to "Mars Rover Photos" API
section.
Create main intro page which includes information for each existing rover in a
row.
Each rover info includes name, status launch date and landing date.
For each rover, add "view photos" button that will lead to a rover photos view.
Rover's photos view will include the rover name, max sol ( "sol" is NASA's term
for a single day in Mars), total number of available photos and a simple form
for querying by Martian sol which consist of input for sol number and
dropdown for camera type. Don't forget to validate the form for incorrect
values or exceeding max sol.
For each form submission display the returned photos as a carousel.
Notes:
Use "DEMO_KEY" as an API key.
Make appealing design and experience. Feel free to use React UI Libraries
(bootstrap, semantic etc) to ease your process
Feel free to use any CSS preprocessor or css in JS Styled components)
Make sure you handle proper navigation
