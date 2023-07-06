import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './navigators/Navigation';
import { AuthProvider } from "./context/AuthContext";

function App() {

  return (
      <NavigationContainer>
          <Navigation />
      </NavigationContainer>
  );
}

export default App;
