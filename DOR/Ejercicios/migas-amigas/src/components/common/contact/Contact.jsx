import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
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
              placeholder="full name"
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
              placeholder="email@email.com"
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
              placeholder="Your Message Here"
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
