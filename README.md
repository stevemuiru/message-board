📬 Mini Messageboard
A simple full-stack messageboard web app built with Node.js, Express, and EJS. Users can view messages on the homepage and submit new ones through a form.

🚀 Getting Started
Prerequisites
Make sure you have the following installed:

Node.js (v14 or higher)
npm (comes with Node.js)

Installation

Clone the repository

bash   git clone https://github.com/your-username/mini-messageboard.git

Navigate into the project folder

bash   cd mini-messageboard

Install dependencies

bash   npm install

Start the server

bash   node app.js

Open your browser and go to

   http://localhost:3000

📁 Project Structure
mini-messageboard/
│
├── app.js                  # Main server file
├── package.json            # Project metadata and dependencies
│
├── public/                 # Static assets served by Express
│   └── css/
│       └── style.css       # App styling
│
└── views/                  # EJS templates
    ├── index.ejs           # Homepage — displays all messages
    └── form.ejs            # New message form page

🛠️ Built With

Node.js — JavaScript runtime
Express — Web framework
EJS — Templating engine for dynamic HTML


💡 Features

View all messages on the homepage
Submit a new message via a form
Messages display the author's name, text, and date added
Clean and minimal UI


📌 Routes
MethodRouteDescriptionGET/Homepage — displays all messagesGET/newShows the new message formPOST/newHandles form submission

🔮 Possible Future Improvements

Connect to a real database (e.g. MongoDB or PostgreSQL) so messages persist after server restart
Add the ability to delete or edit messages
Add user authentication
Deploy to a platform like Render or Railway


📄 License
This project is open source and available under the MIT License.