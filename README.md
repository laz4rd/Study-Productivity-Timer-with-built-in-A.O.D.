Project Overview
This is a minimalist timer web app inspired by the design language of the Android app "BlockIt". The interface is designed for simplicity and focus, featuring a clean, grid-based layout with preset countdown options for 15 minutes, 30 minutes, 1 hour, 2 hours, and 3 hours. The timer display is styled with a bold, digital font, ensuring high visibility.

Key Features
1. Modern UI with a Focus Mode ("Silent Mode")
The design follows a minimalist aesthetic, with a color scheme of black, white, and red accents.

When the user is inactive for 30 seconds, the app enters Silent Mode:

The background turns black.

The timer text is outlined in white using -webkit-text-stroke, while the inner text color turns black, creating a hollow effect.

The header (h1) remains visible in solid white, but all other UI elements fade away.

Buttons and extra elements disappear to eliminate distractions.

Moving the mouse restores the UI to its normal state.

2. Dark Mode Toggle
A dedicated moon icon button allows users to toggle between light mode and dark mode.

The preference is saved in localStorage, so it persists even after a page refresh.

3. Functional Timer with Presets
Users can start a countdown by selecting a preset time.

The timer updates in real-time, displaying hours, minutes, and seconds dynamically.

A bold, digital-style font enhances readability.

The timer buttons disable while counting down to prevent interruptions.

4. Responsive & Accessible UI
The interface is built using CSS Grid and Flexbox, ensuring it adapts well to different screen sizes.

Buttons are large and well-spaced for ease of interaction on both desktop and mobile devices.

Hover effects and transitions improve user experience.

Technical Details
1. CSS Styling
Custom Fonts:

"Square" for the timer display.

"PixelifySans" for general text.

Color Theme:

Light Mode: E1E3D4 (background) with dark text.

Dark Mode: 1D1D1D (background) with light text.

Silent Mode: black background with white outlines for text.

Animations & Effects:

-webkit-text-stroke is used in Silent Mode to create an outline effect.

Buttons have a hover effect that changes color and slightly scales up.

Elements fade in/out when entering and exiting Silent Mode.

2. JavaScript Functionality
Timer Logic:

Starts counting down when a button is clicked.

Uses setInterval() to update the display every second.

Stops when the timer reaches zero.

Silent Mode Activation:

A mousemove event listener detects inactivity for 30 seconds, then enables Silent Mode.

Moving the mouse brings back the full UI.

Dark Mode Toggle:

Uses localStorage to remember the user’s theme preference.
