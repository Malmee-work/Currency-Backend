# Currency - Backend
An application to save search for countries by name and get relevant information about the countries including the exchange rates to SEK

## Getting Started - How to run Currency - Backend locally

### Setup
1. Clone the repository

2. Install Dependencies
```command prompt
npm install
```

3. Run the application (served on http://localhost:4000)
```command prompt
npm run start
```

### Description
1. Login to the application entering a username (http://localhost:4000/login)
 - If login is successful, a jwt token is returned
2. Use graphql endpoint to search for countries (http://localhost:4000/graphql)
 - Use the jwt token with every request for authroization
3. There is a rate limit of 30 requests per minute applied for each token.

### Improvments to be done
1. Add unit tests
2. Configure https
3. Persistent user signup and login
4. Error handling and logging




