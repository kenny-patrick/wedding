import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Intro() {
  const { t } = useTranslation();
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h4">{t("ourWedding")}</Typography>
      <Typography variant="h4">Kenny</Typography>
      <Typography>&</Typography>
      <Typography variant="h4">Elizabeth</Typography>
    </Box>
  );
}