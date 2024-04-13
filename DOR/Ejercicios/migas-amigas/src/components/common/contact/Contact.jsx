import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation();
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
              id="fullname"
              aria-describedby="nameHelp"
              placeholder={t("contactPage.form.placeholder.fullname")}
              aria-invalid="true"
              required
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
              aria-describedby="emailHelp"
              placeholder={t("contactPage.form.placeholder.email")}
              aria-invalid="true"
              required
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
              placeholder={t("contactPage.form.placeholder.message")}
              aria-invalid="true"
              required
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="privacyPolicy"
              required
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
          <button
            type="submit"
            name="contactForm"
            value="contactForm"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
