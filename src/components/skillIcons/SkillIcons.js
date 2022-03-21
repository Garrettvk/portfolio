import React from "react";
import "./SkillIcons.css";

// svg icons
import { Inky } from "./Inky";
import { Litmus } from "./Litmus";
import { Github } from "./Github";
import { PhotoShop } from "./PhotoShop";
import { VsCode } from "./VsCode";
import { Python } from "./Python";
import { Git } from "./Git";
import { NodeJs } from "./NodeJs";
import { ReactSVG } from "./ReactSVG";
import { JavaScript } from "./JavaScript";
import { CSS } from "./CSS";
import { HTML } from "./HTML.js";

export function SkillIcons() {
  return (
    <>
      {/* first row */}
      <div className="skillIcons">
        <HTML />
        <CSS />
        <JavaScript />
        <ReactSVG />
        <NodeJs />
        <Git />
      </div>
      {/* second row */}
      <div className="skillIcons">
        <Python />
        <VsCode />
        <PhotoShop />
        <Github />
        <Litmus />
        <Inky />
      </div>
    </>
  );
}
