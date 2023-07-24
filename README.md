# online-travel-agent
## Hướng dẫn chạy chương trình

## Backend
### Run ASP.Net API
1. Open the project using Visual Studio
#### Setting up SQL Server Database
1. Open appsettings.json and you will see the following code:
```
"ConnectionStrings": {
    "MyDb": "Server=localhost;Database=BookingHotel;User=sa;Password=password;Initial Catalog=BookingHotel;Integrated Security=True"
  },
```
2. Change password with the password of sa user
3. Run the project

### Using ngrok
1. Download ngrok from https://ngrok.com/download
2. Open ngrok that you have installed
3. Run the following command:
```
ngrok http --host-header=localhost https://localhost:your_port/
```
4. Copy the url that can be used to access your API

## App Booking (Mobile App)
### Install Android virtual device

## Admin App (Web App)
### Project setup
```
npm install
```

### Compiles and minifies for production
```
npm run build
```
