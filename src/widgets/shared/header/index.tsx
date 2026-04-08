import { Layout, Select } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const { Header } = Layout;

export const TopHeader = () => {
  const { i18n } = useTranslation();

  const [lang, setLang] = useState<'ru' | 'uz'>((i18n.language as 'ru' | 'uz') || 'ru');

  const changeLanguage = (lng: 'ru' | 'uz') => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    setLang(lng);
  };

  return (
    <Header className="bg-white border-b px-6 flex items-center justify-end">
      <Select
        value={lang}
        onChange={changeLanguage}
        options={[
          { value: 'ru', label: 'Русский' },
          { value: 'uz', label: "O'zbek" },
        ]}
        style={{ width: 120 }}
      />
    </Header>
  );
};