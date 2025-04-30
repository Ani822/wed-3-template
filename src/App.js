import logo from './logo.svg';
import './App.css';
import Footer from './components/footer/Footer';
import Welcome from './components/welcome/Welcome';
import Contacts from './components/contacts/Contacts';
import CountDown from './components/count-down/CountDown';
import Timeline from './components/timeline/Timeline';

function App() {
  return (
    <div className="app">
      <Welcome />
      <Timeline />
      <Contacts />
      <CountDown />
      <Footer />
    </div>
  );
}

export default App;
