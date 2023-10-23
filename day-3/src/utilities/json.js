export const isObjEmpty = (data) => {
  if (!data || typeof data !== "object") return;
  return Object.keys(data).length === 0;
};
