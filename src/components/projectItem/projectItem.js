import projectJson from './../../json/project.json'
import projectItemStyle from './projectItem.module.css'
import {IoLinkOutline} from 'react-icons/io5'

export default function ProjectItem () {

    var project = []

    projectJson.map((item, index) => {
        project.push(<div key={`project-${index}`} style={{position:"relative"}} className={projectItemStyle.item} onClick={() => {
            window.location.href=`${item.href}`
        }}>
            <img src={item.background} alt={item.background} className={projectItemStyle.photo}/>
            <div className={projectItemStyle.textBox}>
                <h3>{item.title}</h3>
                <p className={projectItemStyle.comment}>{item.comment}</p>
                <h5>Tech Stack: {item.techStack.map(tech => tech)}</h5>
            </div>
            <div>
                <h4 className={projectItemStyle.h4} onClick={() => {
                    window.location.href=`${item.href}`
                }}>
                    <IoLinkOutline style={{transform:'rotate(-50deg)'}}/>
                    Live Preview
                </h4>
            </div>
        </div>)
    })

    return (
        <div className={projectItemStyle.box}>
            {project}
        </div>
    )
}