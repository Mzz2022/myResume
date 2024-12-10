import React from "react";
import "./Header.css";
interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <>
      <h4 className={"section-header"}>{title}</h4>
      <hr className="custom" />
      {/* <p>更多的文本...</p> */}
    </>
  );
};

export default SectionHeader;
