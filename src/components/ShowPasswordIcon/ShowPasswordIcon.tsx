import PasswordIcon from "@mui/icons-material/Password";
import { SxProps, Theme } from "@mui/material";
import { keyframes } from "@mui/system";

export type ShowPasswordIconProps = {
  onClick?: () => void;
  sx?: SxProps<Theme>;
};

const shake = keyframes`
0% {
  transform: scale(1);
}
12.5% {
  transform: scale(1.2);
}
17% {
  transform: scale(1);
}
20% {
  transform: scale(1.1);
}
25% {
  transform: scale(1);
}
37.5% {
  transform: rotate(0deg);
}
50% {
  transform: rotate(-15deg);
}
62.5% {
  transform: rotate(15deg);
}
75% {
  transform: rotate(-15deg);
}
87.5% {
  transform: rotate(15deg);
}
100% {
  transform: rotate(0deg);
}
`;

export const ShowPasswordIcon = ({ onClick, sx }: ShowPasswordIconProps) => {
  return (
    <PasswordIcon
      onClick={onClick}
      sx={{
        position: "absolute",
        top: 15,
        left: 40,
        fontSize: "4rem",
        cursor: "pointer",
        ...sx,
        animation: `${shake} 2s cubic-bezier(0.25, 0.84, 0.44, 1) infinite`,
      }}
    />
  );
};
