import React from "react";

import { Stack, Img } from "components";

const OnePage = () => {
  return (
    <>
      <Stack className="lg:h-[4620px] xl:h-[5284px] 2xl:h-[5944px] 3xl:h-[7132px] mx-[auto] w-[100%]">
        <Img
          src="images/img_11.png"
          className="absolute bottom-[0] lg:h-[5196px] xl:h-[5942px] 2xl:h-[6685px] 3xl:h-[8020px] w-[100%]"
          alt="Eleven"
        />
      </Stack>
    </>
  );
};

export default OnePage;
