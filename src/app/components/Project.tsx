import Image from "next/image";
import { useTranslations } from "next-intl";

type ProjectProps = {
  img: string;
  title: string;
  paragraph: string;
  deployLink: string;
  codeLink: string;
  id: string;
};

export default function Project({
  img,
  title,
  paragraph,
  deployLink,
  codeLink,
  id,
}: ProjectProps) {
  const t = useTranslations("Projects");

  return (
    <div
      className=" flex flex-col gap-3 w-52 bg-slate-400/5 rounded-xl p-2 border-slate-400/20 border"
      id={id}
    >
      <div
        className="bg-[--foreground] w-[100%] h-40 rounded-lg text-2xl text-[--background]"
      > DevKiit</div>

      <div className="flex flex-col gap-1 py-2">
        <div>
          <h3 className="text-lg font-bold">{title}</h3>
          <p>
            {paragraph}
          </p>
        </div>
        <div className="flex gap-2">
          <a href={deployLink} className="bg-slate-400/20 px-1 rounded">
            {t("deploy-button")}
          </a>
          <a href={codeLink} className="bg-slate-400/20 px-1 rounded">
            {t("code-button")}
          </a>
        </div>
      </div>
    </div>
  );
}
