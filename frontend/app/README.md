# Front end structer 
```
project-root/
│
├──src/
│   ├── css/
│   │   ├── base/
│   │   │   ├── _reset.css              // CSS reset or normalize
│   │   │   ├── _typography.css         // Base typography styles
│   │   │   └── _variabl.css            // colors ...
│   │   │       
│   │   ├── components/     
│   │   │   ├── _buttons.css            // Button styles ; hover, focuse, sizing ...
│   │   │   ├── _forms.css              // Form styles ; registration, login, signin and edit
│   │   │   ├── _list.css               // Form styles ; registration, login, signin and edit
│   │   │   └── _modals.css             // styles specifically designed for modal windows or dialog boxes
│   │   │
│   │   ├── layout/
│   │   │   ├── _horizontal_nav.css     
│   │   │   ├── _vertical_nav.css       
│   │   │   └── _grid.css              
│   │   │
│   │   ├── pages/
│   │   │   ├── _home.css        
│   │   │   ├── _about.css       
│   │   │   ├── _registration.css     
│   │   │   ├── _profile.css 
│   │   │   ├── _leaderboard.css     
│   │   │   ├── _friends_list.css     
│   │   │   ├── _chat.css
│   │   │   ├── (...)   
│   │   │   └── _grid-page.css   
│   │   │
│   │   ├── themes/
│   │   │   ├── _light-theme.css        // (maghadich ndiroh a zakariya kon hani)
│   │   │   └── _dark-theme.css         // Dark theme styles
│   │   │       
│   │   ├── utils/      
│   │   │   └── _animations.css         // Animations and transitions
│   │   │       
│   │   └── main.css                    // Main entry point for all styles
│   ├── assets/
│   │   ├── icons/
│   │   └── images/
│   └──js/
│       ├── component/
│       │   ├── nav.js
│       │   ├── subNav.js
│       │   ├── cards.js
│       │   └── (...)
│       ├── template/
│       │   ├── message.js
│       │   ├── friends.js
│       │   ├── game.js
│       │   ├── home.js
│       │   ├── profile.js
│       │   └── (...)
│       ├── services/
│       │   ├── api.js
│       │   ├── route.js
│       │   └── auth.js
│       └── app.js
└── index.html
```