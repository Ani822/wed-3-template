import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/footer/Footer";
import Welcome from "./components/welcome/Welcome";
import Contacts from "./components/contacts/Contacts";
import Timeline from "./components/timeline/Timeline";
import ContactOwnerForm from "./components/contact-owner/ContactOwnerForm";
import "react-international-phone/style.css";

function App() {
  return (
    <div className="app">
      <Welcome />
      <Timeline />
      <ContactOwnerForm />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
