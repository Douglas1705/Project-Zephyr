import { FaFigma } from 'react-icons/fa';
import CapePages from '../../components/capePages/PagesCape';

function About() {
  return (
    <section className="space-y-5 max-w-screen-2xl mx-auto">
      <CapePages title="About" />

      <article className="flex flex-col px-4 py-10 md:px-10 justify-center space-y-5">
        <h2 className="text-start border-b-4 py-4 font-semibold text-2xl md:text-4xl tracking-wider">
          Original Project
        </h2>
        <div className="flex flex-col xl:flex-row justify-center items-center gap-10 md:px-6 md:bg-cyan-950 py-10 rounded-2xl">
          <div className="w-full xl:w-4/12 text-justify text-sm md:text-lg text-black md:text-white font-light tracking-wider leading-relaxed break-words hyphens-auto">
            <p>
              This website was designed based on an existing free-to-use project
              on Figma. The website consists of a virtual store for selling
              furniture, as seen in the figure. I would like to credit the
              creator, but I was unable to locate them due to the large number
              of replications of this project.
            </p>
            <p className=" text-start pt-5 leading-loose ">
              One of the project links:
              <a
                href="https://www.figma.com/community/file/1331381641303792117/furniture-ecommerce-website-ui"
                className="flex items-center gap-4 text-2xl py-4 mt-4 border-4 justify-center rounded-3xl hover:border-Goldenrod"
                target="_blank"
              >
                {' '}
                <FaFigma /> Figma Project
              </a>
            </p>
          </div>

          <a
            href="https://i.ibb.co/63JxPjR/Captura-de-tela-2025-02-19-090651.png"
            className="w-full xl:w-6/12 border-2 border-gray-200 rounded-xl"
            target="_blank"
          >
            <img
              src="https://i.ibb.co/63JxPjR/Captura-de-tela-2025-02-19-090651.png"
              alt=""
            />
          </a>
        </div>
      </article>      
    </section>
  );
}

export default About;
