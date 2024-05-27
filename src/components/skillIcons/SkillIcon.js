import React from "react";
export function SkillIcon({Icon, Text}) {
  return (
    <div className="SkillIcon">
      {Icon}
      <span>{Text}</span>
    </div>
  );
}
