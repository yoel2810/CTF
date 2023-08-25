const sxStyles = (isCorrect: boolean) => {
  return {
    backdropFilter: "blur(9.6px)",
    WebkitBackdropFilter: "blur(9.6px)",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderColor: isCorrect ? "green" : "red",
    borderWidth: "0.05em",
    borderStyle: "solid",
    borderRadius: "0.25em",
    boxShadow: `0 0 1em 0 ${isCorrect ? "green" : "red"}`,
    padding: "1rem",
    width: "100%",
    fontSize: "1.5rem",
  };
};

export default sxStyles;
