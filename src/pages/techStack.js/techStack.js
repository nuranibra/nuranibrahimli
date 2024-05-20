import './techStack.css'
import reactImage from './../../assets/image/skillsImage/logos_react.png'
import jsImage from './../../assets/image/skillsImage/vscode-icons_file-type-js-official.png'
import htmlImage from './../../assets/image/skillsImage/vscode-icons_file-type-html.png'
import cssImage from './../../assets/image/skillsImage/vscode-icons_file-type-css.png'
import gitImage from './../../assets/image/skillsImage/logos_git-icon.png'
import gitHubImage from './../../assets/image/skillsImage/akar-icons_github-fill.png'
import bootStrapImage from './../../assets/image/skillsImage/logos_bootstrap.png'
import vscodeImage from './../../assets/image/skillsImage/vscode-icons_file-type-vscode.png'
import typeScriptImage from './../../assets/image/skillsImage/download.png'
import dockerImage from './../../assets/image/skillsImage/docker.png'
import expressImage from './../../assets/image/skillsImage/express.png'
import nodejsImage from './../../assets/image/skillsImage/nodejs.png'
import restApiImage from './../../assets/image/skillsImage/rest-api.png'
import mysqlImage from './../../assets/image/skillsImage/mysql.png'
import nextjsImage from './../../assets/image/skillsImage/nextjs.png'

export default function TechStack () {
    return(
        <section className='box'>
            <div >
                <div className='textBox'>
                    <h2 >My Skills</h2>
                    <h3>Technologies I've been working on lately</h3>
                </div>
                <div className='photoBox'>
                    <img src={reactImage} alt='logos_react'/>
                    <img src={jsImage} alt='vscode-icons_file-type-js-official'/>
                    <img src={htmlImage} alt='vscode-icons_file-type-html'/>
                    <img src={cssImage} alt='vscode-icons_file-type-css'/>
                    <img src={gitImage} alt='logos_git-icon'/>
                    <img src={gitHubImage} alt='akar-icons_github-fill'/>
                    <img src={bootStrapImage} alt='logos_bootstrap'/>
                    <img src={vscodeImage} alt='vscode-icons_file-type-vscode'/>
                    <img src={typeScriptImage} alt="TypeScript Image" />
                    <img src={dockerImage} alt="Docker Image" />
                    <img src={expressImage} style={{width:'300px'}} alt="Express.js Image" />
                    <img src={nodejsImage} style={{width:'150px'}} alt="Node.js Image" />
                    <img src={restApiImage} alt="REST API Image" />
                    <img src={mysqlImage} alt="MySQL Image" />
                    <img src={nextjsImage} alt="Next.js Image" />
                </div>
            </div>
        </section>
    );
}