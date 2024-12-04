import { useTranslations } from "next-intl";
import Header from "../components/Header";
import Main from "../components/Main";
import Projects from "../components/Projects";

export default function HomePage() {
  return (
    <div className="px-6 py-10 flex justify-center">
      <div className="w-[100%] max-w-[660px] flex gap-4 flex-col">
        <Header />
        <Main />
        <Projects />
      </div>
    </div>
  );
}
