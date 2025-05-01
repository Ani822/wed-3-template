import welcome_image from "../../images/main_background.png";
import Sound from '../sound/Sound.jsx';
import "./Welcome.scss";

const Welcome = () => {
  return (
    <div className="welcome_main">
      <p className="welcome_text">Invitation to wedding</p>
      <img
        src={welcome_image}
        alt="image"
        width={200}
        height={200}
        className="welcome_image"
      />
      <div className="calendar_name">
        Calendar
      </div>
      <p className="welcome_names">Tigran & Mariam</p>
      <Sound />
      <div style={{maxWidth: '450px', textAlign: 'center'}}>
      <h3>Дорогие родные и друзья!</h3>
      <p>С радостью приглашаем Вас на нашу свадьбу! Мы счастливы объединить наши жизни и хотели бы поделиться этим с Вами.</p>
      </div>
      
      <div className="welcome_month_year" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '24px',
        maxWidth: '400px',
      }}>
        <div style={{
          borderTop: '3px black solid',
          borderBottom: '3px black solid',
          padding: '24px',
          lineHeight: '150%'
        }}>June</div>
        <div>25</div>
        <div style={{
          borderTop: '3px black solid',
          borderBottom: '3px black solid',
          padding: '24px',
          lineHeight: '150%'
        }}>2025</div>
      </div>
    </div>
  );
};

export default Welcome;
