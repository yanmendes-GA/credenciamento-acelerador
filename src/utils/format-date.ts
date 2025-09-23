export const formatDate = (value: string) => {
  const numbers = value.replace(/\D/g, "");
  if (numbers.length <= 8) {
    return numbers.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");
  }
  return value;
};
