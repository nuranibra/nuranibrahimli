import myPhoto from './assets/image/416855127_723542679499176_3075711643017700937_n.jpg'
import appStyle from './App.module.css'
import Skill from './pages/skils/skil';
import Project from './pages/project/project';

export default function App () {
  return(
    <section className={appStyle.mainBox}>
      <section className={appStyle.textAndPhoto}>
        <div>
          <h3 className={appStyle.textProfil}>Hi 👋,My name is Nuran Ibra build things for web</h3>
          <div>
            <button className={appStyle.hireBtn} onClick={() => {
              window.location.href='/contact'
            }}>Hire Me</button>
          </div>
        </div>
        <div>
          <img src={myPhoto} alt='416855127_723542679499176_3075711643017700937' className={appStyle.imageProfil}/>
        </div>
      </section>
      <section>
        <Skill />
      </section>
      <section>
        <Project />
      </section>
    </section>
  );
}