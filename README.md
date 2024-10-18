# Prize Selector App

This is a fun prize selector app built with Vue.js. It displays a list of participant names and animates a process to select a random winner.

## Features

- Displays a background image (`app-logo.png`) as the app's logo.
- Fades in/out a white overlay and name cards with animations.
- Uses a configuration file (`src/config.js`) to manage the list of participant names, excluded names, and modal text.

## How to Run

1. **Clone the repository**:
   ```bash
   git clone <your-repository-url>
   cd <your-repository-directory>
2. **Install dependencies**:
   ```bash
   npm install
3. **Run the development server**:
4. **Open the app in your browser at http://localhost:5173**.

## How to Use

- Modify the participant names, excluded names, and modal text in src/config.js.
- The app automatically picks a winner from the list of names (excluding those specified in excludedNames).
- You can replace the logo in src/assets by providing a new app-logo.png.  

## Configurable files 
- src/config.js: The configuration file that holds the list of names and modal text.
- src/assets/app-logo.png: The logo displayed in the app.

## License
This project is for fun and is free to use.
