import React, { CSSProperties, useEffect } from "react";
// 自定义类型扩展 CSSProperties
interface CustomCSSProperties extends CSSProperties {
  "--i"?: number;
}
const ShowPre: React.FC = () => {
  useEffect(() => {
    // 导入 CSS 文件的逻辑
    import("./ShowPre.css")
      .then((module) => {
        // 可以在这里处理导入成功的逻辑
        console.log("CSS module imported successfully:", module);
      })
      .catch((error) => {
        // 可以在这里处理导入失败的逻辑
        console.error("Failed to load CSS module:", error);
      });
  }, []);

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
                <img src="../../public/react.svg" alt="react" />
              </a>
              <a href="#">
                <img src="../../public/typescript.svg" alt="typescript" />
              </a>
              <a href="#">
                <img src="../../public/nodejs.svg" alt="nodejs" />
              </a>
              <a href="#">
                <img src="../../public/Webpack.svg" alt="webpack" />
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
                <img src="./public/github.svg" alt="github" />
              </a>
              <a
                href="https://blog.csdn.net/Mz0127"
                target="_blank"
                rel="noopener"
              >
                <img src="./public/juejin.svg" alt="juejin" />
              </a>
            </div>
          </div>
        </div>
        <div className="home-img">
          <div className="img-box">
            <div className="img-item">
              <img src="./public/mingren.jpg" alt="pic" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShowPre;
