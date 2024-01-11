import aboutStyle from './about.module.css'

export default function About () {
    return(
        <section className={aboutStyle.box}>
            <h2 className={aboutStyle.text}>About Me</h2>
            <div className={aboutStyle.paragBox}>
                <p>Hello my friend, I am Nuran İbra, I am also known as another web developer. So Junior Front End Developer. I'm currently learning Back-end. If you want to take a look at my projects, you can contact me from the Projects section or Github.</p>
            </div>
            <div className={aboutStyle.btnBox}>
                <button className={aboutStyle.btn} onClick={() => {
                    window.location.href='https://github.com/nuranibra'
                }}>Github</button>
                <button className={aboutStyle.btn} onClick={() => {
                    window.location.href='/contact'
                }}>Hire Me</button>
            </div>
        </section>
    );
}