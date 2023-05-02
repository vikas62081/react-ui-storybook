export const replaceWithValue = (
  sentence: string,
  value: string,
  pattern = '<>'
) => {
  if (!sentence) null;
  return sentence?.replace(pattern, value);
};
