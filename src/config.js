// src/config.js: Configuration for the app, including participant names, excluded names, and modal text

export const config = {
    // List of participant names. Replace with the real ones!
    names: ['John Doe', 'Jane Smith', 'Emily Davis', 'Michael Brown', 'Sarah Wilson',
        'David Johnson', 'Daniel Lee', 'Laura Garcia', 'Chris Anderson', 'Sophia Martinez',
        'James Clark', 'Olivia Adams', 'Robert Lewis', 'Emma Perez', 'Lucas Walker',
        'Liam Harris', 'Isabella Robinson', 'Benjamin Allen', 'Mason Young', 'Charlotte King',
        'Ethan Scott', 'Mia Turner', 'Noah Phillips', 'Harper Hall', 'Oliver Campbell',
        'Elijah Parker', 'Ava Mitchell', 'Logan Roberts', 'Abigail Carter', 'Jacob Rivera'],

    // Names to exclude from the drawing while still displaying them
    excludedNames: ['John Doe', 'Sarah Wilson'],

    // Modal title shown during the drawing
    modalTitle: 'The <b>Official</b><br />App Prize Selector',

    // Description text for the modal (uses [count] for the number of participants)
    modalDescription: '<b>[count]</b> participants ready for a prize!',

    // Button text for starting the draw
    buttonText: 'Let\'s Pick a Winner',

    // Title shown when a winner is selected
    winnerModalTitle: 'We have a winner!',

    // Description for the winner modal, dynamically replaces [name] with the selected participant's name
    winnerModalDescription: 'Congratulations, <b>[name]</b>!',
};
