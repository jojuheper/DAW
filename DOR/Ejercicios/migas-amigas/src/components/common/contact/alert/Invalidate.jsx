import { Modal } from "bootstrap";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Icon } from "../../icon/Icon";

export const Invalidate = () => {
  const { t } = useTranslation();
  const close = "close";
  useEffect(() => {
    const modal = document.getElementById("modalInvalidate");
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
    <div className="modal" id="modalInvalidate">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <Icon icon={close} />
            <h5 className="modal-title">
              {t("contactPage.form.alert.ko.title")}
            </h5>
          </div>
          <div className="modal-body">
            <p>{t("contactPage.form.alert.ko.text")}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary close-button"
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
