import { useState } from "react";
import { Box } from "@mui/material";
// import { useTranslation } from "react-i18next";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";

import slides from "../data/slides";

export default function Photos() {
  //   const { t } = useTranslation();
  const [index, setIndex] = useState(-1);

  return (
    <Box maxWidth="800px">
      <PhotoAlbum
        layout="rows"
        photos={slides}
        targetRowHeight={200}
        rowConstraints={{ maxPhotos: 3 }}
        onClick={({ index: current }) => setIndex(current)}
      />
      <Lightbox
        index={index}
        slides={slides}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </Box>
  );
}