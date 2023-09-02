import { Typography, Box } from "@mui/material";
import { GlassBox } from "../GlassBox/GlassBox";
import sxStyles from "./sxStyles";
import { useEffect, useState, useCallback } from "react";
import { generateRandomCharacterWithSpecial } from "../../utils/characters";

export type PasswordRevealProps = {
  password: string;
};

export const PasswordReveal = ({ password }: PasswordRevealProps) => {
  const [characters, setCharacters] = useState(
    Array(password.length).fill("*")
  );

  const handleCharacterSwap = useCallback(
    async (index: number, realPassword: boolean) => {
      for (let i = 0; i < (realPassword ? 1 : 30); i++) {
        await new Promise<void>((resolve) => {
          setTimeout(() => {
            setCharacters((prev) => {
              const newCharacters = [...prev];
              newCharacters[index] = realPassword
                ? password.charAt(index)
                : generateRandomCharacterWithSpecial();
              return newCharacters;
            });
            resolve();
          }, 100);
        });
      }
    },
    [password, setCharacters]
  );

  //   useEffect(() => {
  //     const animatePassword = async () => {
  //       for (let i = 0; i < password.length; i++) {
  //         await handleCharacterSwap(i, false);
  //         await handleCharacterSwap(i, true);
  //       }
  //     };
  //     animatePassword();
  //   }, [password.length, handleCharacterSwap, password]);

  useEffect(() => {
    const animatePassword = async () => {
      await Promise.all(
        password.split("").map((_, index) => handleCharacterSwap(index, false))
      );
      for (let i = 0; i < password.length; i++) {
        handleCharacterSwap(i, true);
      }
    };
    animatePassword();
  }, [password.length, handleCharacterSwap, password]);

  return (
    <GlassBox sx={sxStyles.container}>
      <Box>
        <Typography
          sx={{ fontFamily: "Orbitron", fontSize: "5rem" }}
          variant="h1"
        >
          The password for the next level:
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "5rem",
          }}
        >
          {characters.map((_, index) => (
            <Typography
              key={index}
              sx={{ fontFamily: "Orbitron", fontSize: "10rem" }}
              variant="h1"
            >
              {characters[index]}
            </Typography>
          ))}
        </Box>
      </Box>
    </GlassBox>
  );
};
