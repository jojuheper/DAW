import { useTranslation } from "react-i18next";
import { LeftCompose } from "../components/content/LeftCompose";
import { RightCompose } from "../components/content/RightCompose";

export const PasteleriaBolleria = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("patisserie.titlePatisserieBoulangerie")}</h1>
      {/* Lo hacemos a lo bruto para luego hacer el componente */}
      <LeftCompose />
      <RightCompose />
      <LeftCompose />
      <RightCompose />
      <LeftCompose />
      <RightCompose />
      <LeftCompose />
      <RightCompose />
    </div>
  );
};
