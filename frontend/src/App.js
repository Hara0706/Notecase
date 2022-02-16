// cloudinary API Base URL --->
// https://api.cloudinary.com/v1_1/dreosjljo/image/upload


import './App.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from './screens/LandingPage/LandingPage';
import MyNotes from './screens/MyNotes/MyNotes';
import { BrowserRouter, Route } from 'react-router-dom'
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Route path='/' component={LandingPage} exact />
        <Route path='/login' component={LoginScreen} exact />
        <Route path='/register' component={RegisterScreen} exact />
        <Route path='/mynotes' component={() => <MyNotes />} />
      </main>
      <Footer />
    </BrowserRouter>

  );

}

export default App;
