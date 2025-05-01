import "./Timeline.scss";

const Timeline = () => {
  return (
    <div className="timeline">
      <h3 className="timeline_title">Timeline</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <div className="timeline_item">
          <div className="timeline_item_top">
            <p style={{ margin: 0 }}>СБОР ГОСТЕЙ У ЗАГСА</p>
            <p style={{ margin: 0 }}>14:00</p>
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
            <p style={{ margin: 0 }}>СБОР ГОСТЕЙ У ЗАГСА</p>
            <p style={{ margin: 0 }}>14:00</p>
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
            <p style={{ margin: 0 }}>СБОР ГОСТЕЙ У ЗАГСА</p>
            <p style={{ margin: 0 }}>14:00</p>
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
            <p style={{ margin: 0 }}>СБОР ГОСТЕЙ У ЗАГСА</p>
            <p style={{ margin: 0 }}>14:00</p>
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
    </div>
  );
};

export default Timeline;
