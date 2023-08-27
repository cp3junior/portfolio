export const getTranslatedData = (
  language: string,
  item: any,
  key_en: string,
  key_fr: string
) => {
  return language === "en" ? item[key_en] : item[key_fr];
};
