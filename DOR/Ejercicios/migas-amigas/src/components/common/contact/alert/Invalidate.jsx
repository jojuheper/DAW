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
          <div className="invalidate__top d-flex gap-5 modal-header">
            <Icon icon={close} />
            <div className="invalidate__top-title fs-4 modal-title">
              {t("contactPage.form.alert.ko.title")}
            </div>
          </div>
          <div className="invalidate__middle p-3 modal-body">
            <p>{t("contactPage.form.alert.ko.text")}</p>
          </div>
          <div className="invalidate__button modal-footer">
            <button
              type="button"
              className="btn invalidate__button-btn close-button"
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
