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
    <div className="contact__container w-100 h-100 m-0 p-0">
      <div className="contact__top">
        <p className="contact__top-title fs-3 m-0 p-3 fw-bold">
          {t("contactPage.form.title")}
        </p>
        <p className="contact__top-text m-0 p-3">
          {t("contactPage.form.text")}
        </p>
      </div>
      <div className="contact__form-container">
        <form className="contact__form m-0 p-3 row">
          <div className="contact__form mb-3 col-md-6">
            <label
              htmlFor="fullname"
              className="contact__form-label fw-bold form-label"
            >
              {t("contactPage.form.fullname")} *
            </label>
            <input
              type="text"
              className="contact__form-input form-control"
              name="fullname"
              id="fullname"
              aria-describedby="fullname"
              placeholder={t("contactPage.form.placeholder.fullname")}
              required
              value={fullname}
              onChange={onInputChange}
            />
          </div>
          <div className="contact__form mb-3 col-md-6">
            <label
              htmlFor="email"
              className="contact__form-label fw-bold form-label"
            >
              {t("contactPage.form.email")} *
            </label>
            <input
              type="email"
              className="contact__form-input form-control"
              id="email"
              name="email"
              placeholder={t("contactPage.form.placeholder.email")}
              required
              value={email}
              onChange={onInputChange}
            />
          </div>
          <div className="contact__form mb-3 col-md-12">
            <label
              htmlFor="message"
              className="contact__form-label fw-bold form-label"
            >
              {t("contactPage.form.message")} *
            </label>
            <textarea
              type="textarea"
              className="contact__form-input textArea form-control"
              id="message"
              name="message"
              placeholder={t("contactPage.form.placeholder.message")}
              required
              value={message}
              onChange={onInputChange}
            />
          </div>
          <div className="contact__form mb-3 form-check col-md-12 w-100">
            <div className="checkbox-container">
              <input
                type="checkbox"
                className="contact__form-checkbox form-check-input"
                id="privacyPolicy"
                name="privacyPolicy"
                required
                checked={privacyPolicy}
                onChange={onInputChange}
              />
            </div>
            <div className="checkbox-container">
              <label
                className="contact__form-label form-check-label"
                htmlFor="privacyPolicy"
              >
                {t("privacy.policy")} *
              </label>
            </div>
          </div>
          <div className="contact__form mb-3 form-check">
            <div className="checkbox-container">
              <input
                type="checkbox"
                className="contact__form-checkbox form-check-input"
                id="privacyCommunication"
              />
            </div>
            <div className="checkbox-container">
              <label
                className="contact__form-label form-check-label"
                htmlFor="privacyCommunication"
              >
                {t("privacy.communication")}
              </label>
            </div>
          </div>
          <div className="contact__form-bottom d-flex justify-content-center gap-5">
            <button
              type="button"
              name="contactForm"
              value="contactForm"
              className="btn contact__form-bottom-reset"
              onClick={onResetForm}
            >
              Reset
            </button>
            <button
              type="submit"
              name="contactForm"
              value="contactForm"
              className="btn contact__form-bottom-submit"
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
