import logo from './logo.svg';
import './App.css';
import Footer from './components/footer/Footer';
import Welcome from './components/welcome/Welcome';
import Contacts from './components/contacts/Contacts';

function App() {
  return (
    <div>
      <Welcome />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
