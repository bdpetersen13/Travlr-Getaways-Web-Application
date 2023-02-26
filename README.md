# Travlr Getaways

The Travlr Getaways is a web application that facilitates vacation bookings and reviews through RESTful APIs. The web application serves two types of users: the primary user is the customer, and the secondary user is the administrator. The application's client side is content-focused and requires a fast initial load time for short user durations. On the other hand, the administrator side is feature-focused, requires more user interaction, and needs a fast and responsive user experience rather than just a fast initial load time. Additionally, administrators are expected to have longer user durations.


## About

Overall, this project aimed to develop a functioning prototype of a full-stack web application utilizing the MongoDB, Express.js, Angular.js, and Nodejs technologies with a Model View Controller app design pattern.

### Backend 

The Travlr Getaways web application utilizes Express.js and Node.js as the main frameworks for the web server. In addition, MongoDB is the NoSQL database solution sued to contain all the data information. Mongoose is the chosen object data modeling library used for the project.

### Frontend

The application's client side utilizes a templating engine and Express.js to generate the HTML requests dynamically. In contrast, the administrator side of the web application utilizes a Single Page Application designed using Angualr.js. 

### Security

In the context of web applications that handle sensitive information, security is a critical consideration throughout the Software Development Life Cycle (SDLC) process. Travlr Getaways uses authentication and authorization schemes based on JSON web tokens (JWT) to secure the API endpoints. The JWT contains encoded information about the user, such as their user ID and roles, and is verified by the server to ensure the user is authorized to access the requested resource. Additionally, Travlr Getaways uses one-way encryption to store user passwords. One-way encryption, also known as hashing, is a process that converts a plaintext password into a fixed-length string of characters that is not reversible.