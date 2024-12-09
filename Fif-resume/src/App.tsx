// import mySvg from './assets/dui.svg'
import "./App.css";
import SectionHeader from "./components/Header";
// const dui=<img src={mySvg} alt='my svg' style={{ width: '30px', height: 'auto' }}></img>
function App() {
  return (
    <>
      <div className="App">
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
      </div>
    </>
  );
}

export default App;
