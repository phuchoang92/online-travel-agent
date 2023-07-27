# online-travel-agent
## Run project

## Backend
### Run ASP.Net API
Step 1. Open the project using Visual Studio
Step 2. Open the NuGet package
Step 3. Install the following packages
```
Microsoft.EntityFrameworkCore.SqlServer
Microsoft.EntityFrameworkCore
Microsoft.AspNetCore.Authentication.JwtBearer
```

#### Setting up SQL Server Database
Step 1. Open appsettings.json and you will see the following code:
```
"ConnectionStrings": {
    "MyDb": "Server=localhost;Database=BookingHotel;User=sa;Password=password;Initial Catalog=BookingHotel;Integrated Security=True"
  },
```
Step 2. Change password with the password of sa user in your sql server management
Step 3. Run the project

### Using ngrok
Step 1. Download ngrok from https://ngrok.com/download
Step 2. Open ngrok that you have installed
Step 3. Run the following command:
```
ngrok http --host-header=localhost https://localhost:your_port/
```
Step 4. Copy the URL that can be used to access your API

## App Booking (Mobile App)
### Install Android virtual device

### Set up 
```
yarn install
```
#### Open the file axios.js in the folder BookingApp/src
#### Change the value of baseURL to the ngrok URL that you have gotten
#### Run the cmd 
```
yarn react-native run-android
```
## Admin App (Web App)
### Project setup
```
npm install
```

### Compiles and minifies for production
```
npm run build
```
