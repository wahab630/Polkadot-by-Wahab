import React from "react";
import Aabout from "../components/elements/Aabout";
import Acards from "../components/elements/Acards";
import Afounded from "../components/elements/Afounded";

import Amission from "../components/elements/Amission";
import Apress from "../components/elements/Apress";
import Atouch from "../components/elements/Atouch";
import Awhobuild from "../components/elements/Awhobuild";
import BlogSec from "../components/elements/BlogSec";
import Commonbase from "../components/utils/Commonbase";

const About = () => {
  return (
    <>
      <Aabout />
      <Amission />
      <Awhobuild />
      <Afounded />
      <Acards />
      <Apress />
      <Atouch />
      <BlogSec />
      <Commonbase
        heading="Want to get involved?"
        btnName="Join the Community"
      />
    </>
  );
};

export default About;
