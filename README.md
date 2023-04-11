## Real Estate Marketplace SPA Documentation

### Overview

This is a React Single Page Application that serves as a real estate marketplace. The application allows users to browse listed properties and read comments from other users. Users can also register and login to the application to gain access to additional features. Registered users have their own personal area from where they can add new properties, manage their properties, and view their personal information. Features

* Homepage: The homepage displays a list of properties that guests can browse. Guests can also access a detailed page for each property where they can read more information about the property and leave comments.

* Authentication: The application uses Firebase Authentication to handle user registration and login. Guests can access a Login and Register component to create an account or login to their existing account.

* User Area: Once logged in, users have access to their own personal area where they can view their personal information, add new properties, and manage their existing properties.

* Property Management: Logged in users can add new properties and manage their existing properties from their personal area. Users can edit, preview, or delete their properties from this section.

* Comments: Logged in users can leave comments about properties from the detailed property page.

* Image Upload: When adding a new property, users can upload images of the property.

* Context: The application uses Context to get the logged in user across the app.

* Controlled Forms: All forms in the application are controlled. Router: The application uses React Router to handle navigation between pages and dynamically load components based on the URL path.

* Router Guards: Router guards have been implemented to limit access to pages that require authentication.

* Static Components: The application also includes a few static components that are not dynamically loaded based on the URL path.

### Technologies Used

The application uses the following technologies:

* React: A JavaScript library for building user interfaces.

* Firebase: A cloud-based platform for building web and mobile applications.

* Firebase Storage: A cloud-based storage solution for storing user-generated content.

* Firebase Firestore: A NoSQL document database for storing and syncing data in real time.

* Firebase Authentication: A service that handles user authentication and verification.

* React Router: A routing library for React applications.


### Conclusion

This React SPA is a real estate marketplace that allows guests to browse properties and registered users to add and manage their own properties. The application uses Firebase for its backend services and React Router for navigation.
