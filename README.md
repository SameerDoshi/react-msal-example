# react-msal-example
An example showing how to make a REACT app that is protected by an Azuer Active Directory login.  A starter pack for react + msal + AAD

# Steps to run
1. Clone this repo
2. Create an APP ID in Azure
    a. Ensure Access Token and ID Token are both checked
    b. Ensure replyurl is set to http://localhost/
3. Replace client ID and tenant ID on lines 11 and 12 of src/App.js
4. Install all dependencies by running
```
    node install
```
5. Start the app by running:
```
    node start
```
6. When you go to http://localhost:3000 you'll be prompted to login