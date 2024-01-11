import ProjectItem from "../../components/projectItem/projectItem";
import projectStyle from './project.module.css'

export default function Project () {


    return (
        <section className={projectStyle.box}>
            <div className={projectStyle.textBox}>
                <h2 className={projectStyle.h2}>Projects</h2>
                <h3>Things I’ve built so far</h3>
            </div>
            <div className={projectStyle.projeBox}>
                <ProjectItem />
            </div>
        </section>
    );
}