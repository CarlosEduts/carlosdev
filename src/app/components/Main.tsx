import Image from "next/image";
import { useTranslations } from "next-intl";

// Icons: Tabler-icons
const mailIcon: JSX.Element = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-mail"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
    <path d="M3 7l9 6l9 -6" />
  </svg>
);

const githubIcon: JSX.Element = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
  </svg>
);

const linkedinIcon: JSX.Element = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M8 11v5" />
    <path d="M8 8v.01" />
    <path d="M12 16v-5" />
    <path d="M16 16v-3a2 2 0 1 0 -4 0" />
    <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
  </svg>
);

export default function Main() {
  const t = useTranslations("Main");

  return (
    <div className="flex gap-8 flex-col">
      <div className="flex gap-4 items-center mt-12 flex-col text-center">
        <div className="border-[--foreground] border max-w-48 p-1 rounded-full">
          <Image
            src="/profile.png"
            alt="d"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className=" text-2xl font-bold">{t("title")}</h1>
          <p className="opacity-80 max-w-96">{t("subtitle")}</p>
          <div className="flex gap-2 items-center justify-center">
            <a href="">{mailIcon}</a>
            <a href="">{githubIcon}</a>
            <a href="">{linkedinIcon}</a>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <h2
            className="pb-1 font-bold text-lg underline decoration-slate-400"
            style={{ textDecorationStyle: "wavy" }}
          >
            {t("about-me-title")}
          </h2>
          <p className="opacity-80">{t("about-me-content")}</p>
        </div>

        <div>
          <h2
            className="pb-1 font-bold text-lg underline decoration-slate-400"
            style={{ textDecorationStyle: "wavy" }}
          >
            {t("skills-title")}
          </h2>
          <p className="opacity-80">{t("skills-content")}</p>
        </div>

        <div>
          <h2
            className="pb-1 font-bold text-lg underline decoration-slate-400"
            style={{ textDecorationStyle: "wavy" }}
          >
            {t("more-about-me-title")}
          </h2>
          <p className="opacity-80">
            {t("more-about-me-content-start")}{" "}
            <a href="" className=" bg-slate-400/20 px-1 rounded">
              {t("cv")}
            </a>{" "}
            {t("more-about-me-content-end")}{" "}
            <a href="" className=" bg-slate-400/20 px-1  rounded">
              Dev Journal
            </a>
            .{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
