import { LangSwitcher } from "@/components/LangSwitcher";
import { TLink } from "@/components/TLink";
import useTranslation from "next-translate/useTranslation";

const SecondPage = () => {
  const { t } = useTranslation();
  return (
    <main>
      <h2
        style={{
          textAlign: "center",
          padding: "20px 0px",
          color: "greenyellow",
        }}
      >
        {t("common:welcome")}
      </h2>
      <LangSwitcher />
      <TLink style={{ marginTop: "20px", display: "block" }} href="/">
        Go to home
      </TLink>
    </main>
  );
};

export default SecondPage;
