import dressCode1 from "../../images/dress-code/dress-code-1.jpg";
import dressCode2 from "../../images/dress-code/dress-code-2.jpg";
import dressCode3 from "../../images/dress-code/dress-code-3.jpg";
import dressCode4 from "../../images/dress-code/dress-code-4.jpg";

const DressCode = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "auto",
          background: "rgba(255, 255, 255, 0.4)",
          padding: "48px",
          borderRadius: "16px",
        }}
      >
        <h2 style={{ fontSize: "35px", textAlign: 'center' }}>Dress code</h2>{" "}
        <p style={{ fontSize: "18px", textAlign: "center" }}>
          Мы очень старались сделать праздник красивым и будем рады, если в
          своих нарядах Вы поддержите цветовую гамму нашей свадьбы:
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                background: `url(${dressCode1})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                border: "1px white solid",
                marginLeft: "8px",
              }}
            ></div>{" "}
            <div
              style={{
                background: `url(${dressCode2})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                border: "1px white solid",
                marginLeft: "-8px",
              }}
            ></div>{" "}
            <div
              style={{
                background: `url(${dressCode3})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                border: "1px white solid",
                marginLeft: "-8px",
              }}
            ></div>
            <div
              style={{
                background: `url(${dressCode4})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                border: "1px white solid",
                marginLeft: "-8px",
              }}
            ></div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DressCode;
