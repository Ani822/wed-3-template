import "./App.css";
import Welcome from "./components/welcome/Welcome";
import Location from "./components/location/Location";
import Timeline from "./components/timeline/Timeline";
import ContactOwnerForm from "./components/contact-owner/ContactOwnerForm";
import CountDown from './components/count-down/CountDown';
import "react-international-phone/style.css";
import Footer from "./components/footer/Footer";
// import { useEffect } from "react";
// import {getGuests} from '../src/api/invite-api';


function App() {
  // useEffect(() => {
  //   getGuests();
  // }, [])

  return (
    <div className="app">
      <Welcome />
      <Location />
      <Timeline />
      <ContactOwnerForm />
      <CountDown />
      <Footer />
    </div>
  );
}

export default App;
