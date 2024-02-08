import "./About.css";
import { motion } from "framer-motion";

const About = () => {
    return (
      <motion.div
        className="About"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h1 className="Sobre">Sobre mi</h1>
        <p>
          Soy Nilo Jácome, Desarrollador Web Full Stack e Ingeniero Eléctrico de
          la Universidad Politécnica Salesiana. Apasionado por la programación y
          el gusto por el manejo de datos, junto a mi experiencia de 14 años
          como Analista y Técnico, me hacen un candidato diferente al de un
          programador normal. Dentro de mis habilidades esta el manejo de
          personal técnico, administrativo, así como la Planificación, Dirección
          y Ejecución de proyectos.
        </p>
        <p>
          Estoy en constante preparación y actualización de mis conocimiento y
          habilidades. Considero que soy una persona creativa e investigativa,
          doy siempre el máximo esfuerzo y dedicación al trabajo, tengo la
          disponibilidad de ayudarte de forma inmediata.
        </p>
      </motion.div>
    );
};

export default About;