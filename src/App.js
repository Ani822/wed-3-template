import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/welcome/Welcome";
import Location from "./components/location/Location";
import Contacts from "./components/contacts/Contacts";
import Timeline from "./components/timeline/Timeline";
import ContactOwnerForm from "./components/contact-owner/ContactOwnerForm";
import CountDown from './components/count-down/CountDown';
import "react-international-phone/style.css";


function App() {
  return (
    <div className="app">
      <Welcome />
      <Location />
      <Timeline />
      <ContactOwnerForm />
      <Contacts />
      <CountDown />
    </div>
  );
}

export default App;
