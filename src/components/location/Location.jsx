import image from "../../images/location/church_image.webp";
import image_1 from "../../images/location/restaurant_image.jpg";
import "./Location.scss";

function Location() {
  const link1 = '';
  const link2 = '';

  return (
    <div className="location_main">
      <div className="location_content">
        <p className="loc_res_text">Սուրբ Հովհաննես եկեղեցի</p>

        <div className="location_img_div">
          <p className="location_text">
            Հասցե։ ք. Աբովյան
          </p>

          <img src={image} alt="location_icon" className="location_img" />

          <a className="location_map" href={link1} target="_blank">
            <button className="map_button">ՏԵՍՆԵԼ ՔԱՐՏԵԶԻ ՎՐԱ</button>
          </a>
        </div>

        
      </div>
      <div className="location_content">
          <p className="loc_res_text">Ռեստորան Ոսկե Ծիրան Պրեմիում Հոլ</p>

          <div className="location_img_div">
            <p className="location_text">
              Հասցե։ ք. Արտաշատ, փ. Աբովյան 91
            </p>
            <img src={image_1} alt="location_icon" className="location_img" />

            <a className="location_map" href={link2} target="_blank">
              <button className="map_button">ՏԵՍՆԵԼ ՔԱՐՏԵԶԻ ՎՐԱ</button>
            </a>
          </div>
        </div>
    </div>
  );
}
export default Location;
