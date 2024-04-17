import { useTranslation } from "react-i18next";
import { useForm } from "../../../hooks/useForm";
import { contactForm } from "../../../validations/contactForm";
import { useState } from "react";
import { SendEmail } from "./SendEmail";

export const Contact = () => {
  const { t } = useTranslation();
  const { formState, onInputChange, onResetForm } = useForm({
    fullname: "",
    email: "",
    message: "",
    privacyPolicy: false,
  });

  const { fullname, email, message, privacyPolicy } = formState;
  const [submitted, setSubmitted] = useState(false);
  const [validated, setValidated] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    const isValidated = contactForm({ ...formState });
    setValidated(isValidated);
    setSubmitted(true);
    isValidated && onResetForm();
  };
  return (
    <div>
      <div>
        <p>{t("contactPage.form.title")}</p>
        <p>{t("contactPage.form.text")}</p>
      </div>
      <div>
        <form className="">
          <div className="mb-3 ">
            <label htmlFor="fullname" className="form-label">
              {t("contactPage.form.fullname")} *
            </label>
            <input
              type="text"
              className="form-control"
              name="fullname"
              id="fullname"
              aria-describedby="nameHelp"
              placeholder={t("contactPage.form.placeholder.fullname")}
              required
              value={fullname}
              onChange={onInputChange}
            />
          </div>
          <div className="mb-3 ">
            <label htmlFor="email" className="form-label">
              {t("contactPage.form.email")} *
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder={t("contactPage.form.placeholder.email")}
              required
              value={email}
              onChange={onInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              {t("contactPage.form.message")} *
            </label>
            <textarea
              type="textarea"
              className="form-control"
              id="message"
              name="message"
              placeholder={t("contactPage.form.placeholder.message")}
              required
              value={message}
              onChange={onInputChange}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="privacyPolicy"
              name="privacyPolicy"
              required
              checked={privacyPolicy}
              onChange={onInputChange}
            />
            <label className="form-check-label" htmlFor="privacyPolicy">
              {t("privacy.policy")} *
            </label>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="privacyCommunication"
            />
            <label className="form-check-label" htmlFor="privacyCommunication">
              {t("privacy.communication")}
            </label>
          </div>
          <div>
            <button
              type="button"
              name="contactForm"
              value="contactForm"
              className="btn btn-primary"
              onClick={onResetForm}
            >
              Reset
            </button>
            <button
              type="submit"
              name="contactForm"
              value="contactForm"
              className="btn btn-primary"
              onClick={onSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      {submitted && <SendEmail validated={validated} />}
    </div>
  );
};
