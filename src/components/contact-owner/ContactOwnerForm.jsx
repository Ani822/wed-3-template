import { useState } from "react";
import { Formik, Form, Field } from "formik";
import { PhoneInput } from "react-international-phone";
import { sendInviteRequest } from "../../api/invite-api";
import BadgeIcon from "@mui/icons-material/Badge";
import GroupIcon from "@mui/icons-material/Group";
import { Button } from "@mui/material";
import toast from "react-hot-toast";
import "./ContactOwnerForm.scss";

const initialValue = {
  name: "",
  phone: "",
  guestCount: 1,
  isVisiting: "Yes",
};

const ContactOwnerForm = () => {
  const [phone, setPhone] = useState();

  return (
    <>
      {/* <Formik
        validateOnMount
        validateOnChange
        initialValues={initialValue}
        onSubmit={async (values) => {
          const response = await sendInviteRequest({ ...values, phone });
          console.log('response', response);

          if (response.ok) {
            console.log("Success");

            toast.success("Հարգելի հյուր Ձեր մասնակցության հայտը մեծ սիրով ընդունվեց❤️");
          } else {
            toast.error("Տեղի ունեցավ սխալ, փորձեք մի փոքր ուշ😔");
          }
        }}
      >
        {({ values,isValid,handleChange }) => (
          <Form>
            <div className="contact_main_div" id="form">
              <div className="contact_form">
                <div className="contact_form_input_div">
                  <div className="contact_form_input_div_span">
                    <p className="contact_form_input_span">Անուն Ազգանուն</p>
                    <div className="contact_form_input_div_border">
                      <div className="contact_form_input_and_icon_div">
                        <BadgeIcon className="contact_form_input_icon" sx={{ fontSize: 37 }} />
                        <Field
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Անուն Ազգանուն"
                          onChange={handleChange}
                          className="contact_input"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="contact_form_input_div_span">
                    <p className="contact_form_input_span">Հեռախոսահամար</p>
                    <div className="contact_form_input_div_border">
                      <div className="contact_form_input_and_icon_div" style={{ padding: '12px 16px' }}>
                        <PhoneInput
                          defaultCountry="am"
                          value={phone}
                          onChange={(phone) => setPhone(phone)}
                          style={{
                            width: '100%',
                            height: '100%',
                            border: 'none',
                            outline: 'none',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="contact_form_input_div_span">
                    <p className="contact_form_input_span">Հյուրերի քանակ</p>
                    <div className="contact_form_input_div_border">
                      <div className="contact_form_input_and_icon_div">
                        <GroupIcon className="contact_form_input_icon" sx={{ fontSize: 37 }} />
                        <Field
                          id="guestCount"
                          name="guestCount"
                          type="number"
                          placeholder="Հյուրերի քանակ"
                          onChange={handleChange}
                          className="contact_input"
                        />
                      </div>
                    </div>
                  </div>

                </div>
                <div className="contact_div_general_2">
                  <p className="contact_paragraph">Արարողությանը ներկա ե՞ք լինելու</p>

                  <div id="contact_input">
                    <div className="contact_input_flex">
                      <Field type="radio" name="isVisiting" id="Yes" value="Yes" />
                      <label className="contact_radio_label">Այո</label>
                    </div>
                    <div className="contact_input_flex">
                      <Field type="radio" name="isVisiting" id="No" value="No" />
                      <label className="contact_radio_label">Ոչ</label>
                    </div>
                  </div>

                  <Button
                    className={isValid ? "contact_button" : "contact_button_disabled"}
                    type="submit"
                    disabled={!isValid}
                  >Ուղարկել</Button>
                </div>
              </div>

            </div>
          </Form>
        )}
      </Formik> */}
      <div
        className="contact_main_div"
        style={{
          height: "auto",
          margin: "60px auto 20px auto",
          padding: "12px",
          minHeight: '0',
          width: 'auto'
        }}
      >
        <p
          style={{
            maxWidth: "500px",
            textAlign: "center",
            // margin: "0",
          }}
        >
          Երբ սերը դառնում է ճակատագիր, օրը դառնում է տոն։ Մեր սրտերը միավորվում
          են մեկ երջանիկ պատմության մեջ։ Հրավիրում ենք Ձեզ՝ նշելու մեր սիրո
          հաղթանակը միասին։
        </p>
      </div>
    </>
  );
};

export default ContactOwnerForm;
