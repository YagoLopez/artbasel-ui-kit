export const truncateText = (text, values) => {
  const state = text?.length > values;

  return {
    state,
    text: state ? text.substring(0, values - 3) : text,
  };
};
