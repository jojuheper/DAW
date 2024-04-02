import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const Visit = () => {
  const { t } = useTranslation();
  const [contador, setContador] = useState(0);

  useEffect(() => {
    // Incrementar el contador de visitas cuando el componente se monta
    // Lo ideal seria ponerlo en una BBDD
    setContador((prevContador) => prevContador + 1);
  }, []);

  return (
    <div>
      {t("footer.counter.start")}
      {contador}
      {t("footer.counter.end")}
    </div>
  );
};
