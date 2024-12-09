import React from "react";
import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <>
      <h4 className={styles["section-header"]}>{title}</h4>
      <hr className="custom" />
      {/* <p>更多的文本...</p> */}
    </>
  );
};

export default SectionHeader;
