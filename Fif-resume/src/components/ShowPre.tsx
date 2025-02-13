import React, { CSSProperties } from "react";
import Reactsvg from "../../public/react.svg";
import tssvg from "../../public/typescript.svg";
import nodejs from "../../public/nodejs.svg";
import webpack from "../../public/Webpack.svg";
import github from "../../public/github.svg";
import juejin from "../../public/juejin.svg";
import mingren from "../../public/mingren.jpg";
import "./ShowPre.css";

// 自定义类型扩展 CSSProperties
interface CustomCSSProperties extends CSSProperties {
  "--i"?: number;
}
const ShowPre: React.FC = () => {
  // useEffect(() => {
  //   // 导入 CSS 文件的逻辑
  //   import("./ShowPre.css")
  //     .then((module) => {
  //       // 可以在这里处理导入成功的逻辑
  //       console.log("CSS module imported successfully:", module);
  //     })
  //     .catch((error) => {
  //       // 可以在这里处理导入失败的逻辑
  //       console.error("Failed to load CSS module:", error);
  //     });
  // }, []);

  return (
    <div className="ShowPre">
      <div className="bars-animation">
        {[6, 5, 4, 3, 2, 1].map((item, index) => (
          <div
            key={index}
            className="bar"
            style={{ "--i": item } as CustomCSSProperties}
          ></div>
        ))}
      </div>
      <section className="home">
        <div className="home-info">
          <h1>Welcome</h1>
          <h2>
            I'm a
            <span
              style={{ "--i": 4 } as CustomCSSProperties}
              data-text="Frontend Developer"
            >
              Frontend Developer
            </span>
            <span
              style={{ "--i": 3 } as CustomCSSProperties}
              data-text="Student"
            >
              Student
            </span>
            <span
              style={{ "--i": 2 } as CustomCSSProperties}
              data-text="Chinese"
            >
              Chinese
            </span>
            <span
              style={{ "--i": 1 } as CustomCSSProperties}
              data-text="Cool boy"
            >
              Cool boy
            </span>
          </h2>
          <p></p>
          <div className="skill">
            <div className="mySkills">
              <h2>mySkills:</h2>
            </div>
            <div className="skills">
              <a href="#">
                <img src={Reactsvg} alt="react" />
              </a>
              <a href="#">
                <img src={tssvg} alt="typescript" />
              </a>
              <a href="#">
                <img src={nodejs} alt="nodejs" />
              </a>
              <a href="#">
                <img src={webpack} alt="webpack" />
              </a>
            </div>
          </div>
          <div className="btn-sci">
            <a href="#">
              <i className="btn">my Resume</i>
            </a>
            <div className="sci">
              <a
                href="https://github.com/Mzz2022"
                target="_blank"
                rel="noopener"
              >
                <img src={github} alt="github" />
              </a>
              <a
                href="https://juejin.cn/user/3186806055252135/posts"
                target="_blank"
                rel="noopener"
              >
                <img src={juejin} alt="juejin" />
              </a>
            </div>
          </div>
        </div>
        <div className="home-img">
          <div className="img-box">
            <div className="img-item">
              <img src={mingren} alt="mingren" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShowPre;
