import { useState } from "react";
import { useForm } from "../../../hooks/useForm";
import { SendEmail } from "./SendEmail";
import { contactForm } from "../../../validations/contactForm";
import { useTranslation } from "react-i18next";

export const FormContact = () => {
  const { t } = useTranslation();
  // const nameInputRef = useRef(null);
  const { formState, onInputChange, onResetForm } = useForm({
    name: "",
    surname: "",
    email: "",
    subject: "",
    message: "",
  });

  const { name, surname, email, subject, message } = formState;
  const [submitted, setSubmitted] = useState(false);
  const [validated, setValidated] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    const isValidated = contactForm({ ...formState });
    setSubmitted(true);
    setValidated(isValidated);
    onResetForm();
  };
  // useEffect(() => {
  //   // Enfocar el input de nombre cuando la página se carga
  //   nameInputRef.current.focus();
  // }, []);

  return (
    <div className="mt-5 flex justify-center rounded-2xl border-4 border-slate-50 shadow-2xl shadow-blue-300">
      <form onSubmit={onSubmit} className="w-[80%]">
        <div>
          <div className="">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"></div>
          </div>

          <div className="pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="name"
                  className="block text-sm font-bold leading-6"
                >
                  {t("contact.form.field.name")}
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder={t("contact.form.placeholder.name")}
                    required
                    className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-blue-600 text-blue-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={name}
                    onChange={onInputChange}
                    // ref={nameInputRef}
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="surname"
                  className="block text-sm font-bold leading-6"
                >
                  {t("contact.form.field.surname")}
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="surname"
                    id="surname"
                    placeholder={t("contact.form.placeholder.surname")}
                    required
                    className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-blue-600 text-blue-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={surname}
                    onChange={onInputChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-bold leading-6"
                >
                  {t("contact.form.field.email")}
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder={t("contact.form.placeholder.email")}
                    required
                    className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-blue-600 text-blue-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={email}
                    onChange={onInputChange}
                  />
                </div>
              </div>
              <div className="sm:col-span-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-bold leading-6"
                >
                  {t("contact.form.field.subject")}
                </label>
                <div className="mt-2">
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    autoComplete="additional-name"
                    placeholder={t("contact.form.placeholder.subject")}
                    className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-blue-600 text-blue-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={subject}
                    onChange={onInputChange}
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="message"
                  className="block text-sm font-bold leading-6"
                >
                  {t("contact.form.field.message")}
                </label>
                <div className="mt-2">
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder={t("contact.form.placeholder.message")}
                    className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-blue-600 text-blue-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={message}
                    onChange={onInputChange}
                  />
                </div>
              </div>
              <div className="col-span-full">
                <button
                  type="button"
                  className="min-h-[44px] mr-3 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-[#e6e6e6] shadow-sm hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={onResetForm}
                >
                  {t("contact.form.field.reset")}
                </button>
                <button
                  type="submit"
                  onClick={onSubmit}
                  className="min-h-[44px] rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-[#e6e6e6] shadow-sm hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {t("contact.form.field.send")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      {submitted && <SendEmail inputs={formState} validated={validated} />}
    </div>
  );
};
