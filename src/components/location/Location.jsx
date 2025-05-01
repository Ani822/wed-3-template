import image from '../../images/location/location_icon.jpg';
import image_1 from '../../images/location/restaurant_icon.jpg';
import './Location.scss';


function Location() {
    return (
        <div className="location_main">
            <div className="location_content">

                <p className="loc_res_text">Место проведения регистрации</p>

                <div className="location_img_div" style={{ width: `calc(${100 / 3}%)` }}>
                    <p className="location_title">ЖДЕМ ВАС: <br />
                        ЗАГС «Дворец Бракосочетания №1»</p>

                    <p className="location_text">ПО АДРЕСУ: <br />
                        ул. Свободы, 2Б, Котовск</p>

                    <img src={image} alt="location_icon" className="location_img" />
                </div>

                {/* <div>
                    <a className="location_map" href={link} target="_blank">
                        Քարտեզ
                    </a>
                </div> */}

                <div className="location_content">

                    <p className="loc_res_text">Место проведения банкета</p>

                    <div className="location_img_div" style={{ width: `calc(${100 / 3}%)` }}>
                        <p className="location_title">ЖДЕМ ВАС: <br />
                            «Петергоф лофт» </p>
                        <p className="location_text"> ПО АДРЕСУ: <br />
                            территория Троицкая гора, д. 33
                        </p>
                        <img src={image_1} alt="location_icon" className="location_img" />

                        {/* <div>
                            <a className="location_map" href={link} target="_blank">
                                Քարտեզ
                            </a>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>



    );
};
export default Location;