import {
  BeakerIcon,
  SparklesIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";

export const Skills = () => {
  const { t } = useTranslation();

  const programming = ["Java", "AEM", "JavaScript"];
  const soft = [
    t("skills.soft.communication"),
    t("skills.soft.collaboration"),
    t("skills.soft.dedicated"),
  ];
  const general = [
    t("skills.general.photo"),
    t("skills.general.notion"),
    t("skills.general.scrum"),
  ];
  return (
    <section className="mt-6 md:grid md:justify-between">
      <p className="flex text-3xl uppercase md:col-span-12 md:justify-left">{t("skills.name")}</p>
      <div className="mt-5 px-12 md:p-0 md:col-span-4">
        <div className="flex gap-2 items-center">
          <BeakerIcon className="h-6 w-6 text-blue-600 bg-blue-50 rounded-[50%]" />
          <p>{t("skills.programming")}</p>
        </div>
        <ul role="list" className="marker:text-blue-600 list-disc pl-5 space-y-2 text-left">
          {programming.map((p, index) => {
            return <li className="ml-10 text-blue-600" key={index}>{p}</li>;
          })}
        </ul>
      </div>
      <div className="mt-5 px-12 md:p-0 md:col-span-4">
        <div className="flex gap-2 items-center">
          <UserGroupIcon className="h-6 w-6 text-blue-600  bg-blue-50 rounded-[50%]" />
          <p>{t("skills.softskill")}</p>
        </div>
        <ul role="list" className="marker:text-blue-600 list-disc pl-5 space-y-2 text-left">
          {soft.map((s, index) => {
            return <li className="ml-10 text-blue-600" key={index}>{s}</li>;
          })}
        </ul>
      </div>
      <div className="mt-5 px-12 md:p-0 md:col-span-4">
        <div className="flex gap-2 items-center">
          <SparklesIcon className="h-6 w-6 text-blue-600  bg-blue-50 rounded-[50%]" />
          <p>{t("skills.generalskill")}</p>
        </div>
        <ul role="list" className="marker:text-blue-600 list-disc pl-5 space-y-2 text-left">
          {general.map((g, index) => {
            return <li className="ml-10 text-blue-600" key={index}>{g}</li>;
          })}
        </ul>
      </div>
    </section>
  );
};
