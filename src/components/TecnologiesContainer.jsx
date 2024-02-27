import '../styles/components/TecnologiesContainer.sass'
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact
} from 'react-icons/di'

const technologies = [
  {id: "html", name: "HTML", icon: <DiHtml5 />, text: "Toda estruturação do site, realizando procedimentos SEO para facilitar a utilização de motores de busca."},
  {id: "css", name: "CSS", icon: <DiCss3 />, text: "Toda a estilização do site, tornando ele único."},
  {id: "js", name: "JavaScript", icon: <DiJsBadge />, text: "Tornando o site mais dinamico, com efeitos e transições diferenciadas."},
  {id: "node", name: "NodeJS", icon: <DiNodejsSmall />, text: "Utilizado para criar novos mecanismos para o site."},
  {id: "mysql", name: "MySQL", icon: <DiMysql />, text: "Utilizado para salvar informações do site, de forma segura."},
  {id: "react", name: "React", icon: <DiReact />, text: "Utilizado para criar o site a partir de modulos, realizando a conteinerização."},
];

function TecnologiesContainer() {
  return (
    <section className="tecnologies-container">
      <h2>Tecnologias</h2>
      <div className="tecnologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TecnologiesContainer
