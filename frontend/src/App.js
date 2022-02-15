import './App.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from './screens/LandingPage/LandingPage';
import MyNotes from './screens/MyNotes/MyNotes';
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Route path='/' component={LandingPage} exact />
        <Route path='/mynotes' component={() => <MyNotes />} />
      </main>
      <Footer />
    </BrowserRouter>

  );

}

export default App;
