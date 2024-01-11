import skillStyle from './skil.module.css'
import reactImage from './../../assets/image/skillsImage/logos_react.png'
import jsImage from './../../assets/image/skillsImage/vscode-icons_file-type-js-official.png'
import htmlImage from './../../assets/image/skillsImage/vscode-icons_file-type-html.png'
import cssImage from './../../assets/image/skillsImage/vscode-icons_file-type-css.png'
import gitImage from './../../assets/image/skillsImage/logos_git-icon.png'
import gitHubImage from './../../assets/image/skillsImage/akar-icons_github-fill.png'
import bootStrapImage from './../../assets/image/skillsImage/logos_bootstrap.png'
import vscodeImage from './../../assets/image/skillsImage/vscode-icons_file-type-vscode.png'

export default function Skill () {
    return(
        <section className={skillStyle.box}>
            <div className={skillStyle.sectionBox}>
                <div className={skillStyle.text}>
                    <h2 className={skillStyle.textContent}>My Skills</h2>
                    <h3>Technologies I've been working on lately</h3>
                </div>
                <div className={skillStyle.photoBox}>
                    <img src={reactImage} alt='logos_react'/>
                    <img src={jsImage} alt='vscode-icons_file-type-js-official'/>
                    <img src={htmlImage} alt='vscode-icons_file-type-html'/>
                    <img src={cssImage} alt='vscode-icons_file-type-css'/>
                    <img src={gitImage} alt='logos_git-icon'/>
                    <img src={gitHubImage} alt='akar-icons_github-fill'/>
                    <img src={bootStrapImage} alt='logos_bootstrap'/>
                    <img src={vscodeImage} alt='vscode-icons_file-type-vscode'/>
                </div>
            </div>
        </section>
    );
}