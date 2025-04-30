import "./Timeline.scss";

const Timeline = () => {
  return (
    <div className="timeline">
      <h3 className="timeline_title">Timeline</h3>


      <div className="timeline_item">
        <div className="timeline_item_top">
          <p>СБОР ГОСТЕЙ У ЗАГСА</p>
          <p>14:00</p>
        </div>
        <div className="timeline_item_middle">
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        <div>
          встречаемся, настраиваемся на веселую
          <br />
          свадьбу, главное не опаздывать.
        </div>
      </div>

      <div className="timeline_item">
        <div className="timeline_item_top">
          <p>СБОР ГОСТЕЙ У ЗАГСА</p>
          <p>14:00</p>
        </div>
        <div className="timeline_item_middle">
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        <div>
          встречаемся, настраиваемся на веселую
          <br />
          свадьбу, главное не опаздывать.
        </div>
      </div>

    </div>
  );
};

export default Timeline;
