import "./Blessings.scss";

const Blessings = () => {
  return (
    <div className="blessings">
      <p>Blessings</p>

      <div className="blessing_item">
        <p style={{ margin: 0}}>ПОДАРКИ</p>
        <div
          style={{
            display: "flex",
            justifyContent: 'center',
            alignItems: "center",
            textAlign: 'center',
            maxWidth: "180px",
            width: "100%"
          }}
        >
          <div
            style={{
              width: "16px",
              height: "16px",
              backgroundColor: "black",
              borderRadius: "50%",
            }}
          ></div>
          <div
            style={{
              width: "100%",
              maxWidth: "200px",
              height: "4px",
              backgroundColor: "black",
            }}
          ></div>
          <div
            style={{
              width: "16px",
              height: "16px",
              backgroundColor: "black",
              borderRadius: "50%",
            }}
          ></div>
        </div>
        <p style={{textAlign: 'center',  margin: 0}}>
          Свои тёплые слова и пожелания приносите в сердцах, а подарки – в
          конверте.
        </p>
      </div>

      <div className="blessing_item">
        <p style={{ margin: 0}}>ЦВЕТЫ</p>
        <div
          style={{
            display: "flex",
            justifyContent: 'center',
            alignItems: "center",
            textAlign: 'center',
            maxWidth: "180px",
            width: "100%"
          }}
        >
          <div
            style={{
              width: "16px",
              height: "16px",
              backgroundColor: "black",
              borderRadius: "50%",
            }}
          ></div>
          <div
            style={{
              width: "100%",
              maxWidth: "200px",
              height: "4px",
              backgroundColor: "black",
            }}
          ></div>
          <div
            style={{
              width: "16px",
              height: "16px",
              backgroundColor: "black",
              borderRadius: "50%",
            }}
          ></div>
        </div>
        <p style={{textAlign: 'center', margin: 0}}>
          Приятным комплиментом для нас будет, если вместо цветов Вы решите
          подарить нам бутылочку вина для нашей семейной винотеки.
        </p>
      </div>

      <div></div>
    </div>
  );
};

export default Blessings;
