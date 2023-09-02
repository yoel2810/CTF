export const generateRandomCharacterWithSpecial = (): string => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
  const randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
};
