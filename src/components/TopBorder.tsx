import { Box } from "@mui/material";

export default function TopBorder() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      marginBottom="-100px"
    >
      <Box
        sx={{ width: "100%" }}
        component="img"
        alt="Floral Top Border"
        src="/wedding/img/top_border1.png"
      />
    </Box>
  );
}