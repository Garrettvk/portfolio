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
import { SkillIcon } from "./SkillIcon";

export function SkillIcons() {
  return (
    <div className="skillIcons">
      {/* first row */}
      <div className="skillIcons__row">
        <SkillIcon Icon={<HTML />} Text={'HTML'} />
        <SkillIcon Icon={<CSS />} Text={'CSS'} />
        <SkillIcon Icon={<JavaScript />} Text={'JavaScript'} />
        <SkillIcon Icon={<ReactSVG />} Text={'React'} />
        <SkillIcon Icon={<NodeJs />} Text={'Node.js'} />
        <SkillIcon Icon={<Git />} Text={'Git'} />
      </div>
      {/* second row */}
      <div className="skillIcons__row">
        <SkillIcon Icon={<Litmus />} Text={'Litmus'} />
        <SkillIcon Icon={<Inky />} Text={'Foundation'} />
        <SkillIcon Icon={<Python />} Text={'Python'} />
        <SkillIcon Icon={<VsCode />} Text={'VS Code'} />
        <SkillIcon Icon={<PhotoShop />} Text={'Photoshop'} />
        <SkillIcon Icon={<Github />} Text={'GitHub'} />
      </div>
    </div>
  );
}
