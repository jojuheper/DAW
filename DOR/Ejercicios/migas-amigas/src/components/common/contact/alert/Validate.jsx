import { Modal } from "bootstrap";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Icon } from "../../icon/Icon";

export const Validate = () => {
  const { t } = useTranslation();
  const check = "check";
  useEffect(() => {
    const modal = document.getElementById("modalValidate");
    // activate the button
    const myModal = new Modal(modal, {});
    // close modal if user push button close
    const closeButton = modal.querySelector(".close-button");
    closeButton.addEventListener("click", () => {
      myModal.hide();
    });
    myModal.show();
    // clean listener of button
    return () => {
      closeButton.removeEventListener("click", () => {
        myModal.hide();
      });
    };
  }, []);
  return (
    <div className="modal" id="modalValidate">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="validate__top gap-5 modal-header">
            <Icon icon={check} />
            <div className="validate__top-title fs-4 modal-title">
              {t("contactPage.form.alert.ok.title")}
            </div>
          </div>
          <div className="validate__middle modal-body">
            <p>{t("contactPage.form.alert.ok.text")}</p>
          </div>
          <div className="validate__button modal-footer">
            <button
              type="button"
              className="btn validate__button-btn close-button"
              data-bs-dismiss="modal"
            >
              {t("contactPage.form.alert.button")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
