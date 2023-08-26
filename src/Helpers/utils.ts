export const getTranslatedData = (
  language: string,
  item: any,
  key_fr: string,
  key_en: string
) => {
  return language === "en" ? item[key_en] : item[key_fr];
};
