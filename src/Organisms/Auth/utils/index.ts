export const replaceWithValue = (
  sentence: string,
  value: string,
  pattern = '<>'
) => {
  return sentence.replace(pattern, value);
};
