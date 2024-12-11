import SectionHeader from "./Header";
import React from "react";

// import { useEffect } from "react";
import "./Resume.css";

const Resume: React.FC = () => {
  // useEffect(() => {
  //   // 导入 CSS 文件的逻辑
  //   import("./Resume.css")
  //     .then((module) => {
  //       // 可以在这里处理导入成功的逻辑
  //       console.log("App.css module imported successfully:", module);
  //     })
  //     .catch((error) => {
  //       // 可以在这里处理导入失败的逻辑
  //       console.error("Failed to load App.css module:", error);
  //     });

  // import("../index.css")
  //   .then((module) => {
  //     // 可以在这里处理导入成功的逻辑
  //     console.log("index.css module imported successfully:", module);
  //   })
  //   .catch((error) => {
  //     // 可以在这里处理导入失败的逻辑
  //     console.error("Failed to load index.css module:", error);
  //   });
  // }, []);

  return (
    <div className="Resume-page">
      <div className="resume-container">
        <div className="person">个人信息</div>
        <div className="school">
          <SectionHeader title="教育经历" />
        </div>
        <div className="work">
          <SectionHeader title="实习经历" />
        </div>
        <div className="projects">
          <SectionHeader title="项目经历" />
        </div>
        <div className="skills">
          <SectionHeader title="技能" />
        </div>
      </div>
      <div className="k"></div>
    </div>
  );
};
export default Resume;
