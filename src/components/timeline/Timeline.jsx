import "./Timeline.scss";

const Timeline = () => {
  return (
    <div className="timeline">
      <h3 className="timeline_title">Օրվա ծրագիր</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <div className="timeline_item">
          <div className="timeline_item_top">
            <p style={{ margin: 0 }}>Հարսի տուն</p>
            <p style={{ margin: 0 }}>11:30</p>
          </div>
          <div className="timeline_item_middle">
            <div className="line"></div>
            <div className="circle"></div>
          </div>
          <div className="timeline_text">
            Քաղաք Աբովյան, Սուրբ Հովհաննես եկեղեցի
          </div>
        </div>

        <div className="timeline_item">
          <div className="timeline_item_top">
            <p style={{ margin: 0 }}>Եկեղեցի</p>
            <p style={{ margin: 0 }}>13:30</p>
          </div>
          <div className="timeline_item_middle">
            <div className="line"></div>
            <div className="circle"></div>
          </div>
        </div>

        <div className="timeline_item">
          <div className="timeline_item_top">
            <p style={{ margin: 0 }}>Փեսայի տուն</p>
            <p style={{ margin: 0 }}>16:00</p>
          </div>
          <div className="timeline_item_middle">
            <div className="line"></div>
            <div className="circle"></div>
          </div>
        </div>

        <div className="timeline_item">
          <div className="timeline_item_top">
            <p style={{ margin: 0 }}>Ռեստորան</p>
            <p style={{ margin: 0 }}>17:30</p>
          </div>
          <div className="timeline_item_middle">
            <div className="line"></div>
            <div className="circle"></div>
          </div>
          <div className="timeline_text">
            Ոսկե Ծիրան Պրեմիում Հոլ, ք. Արտաշատ, փ. Աբովյան 91
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
