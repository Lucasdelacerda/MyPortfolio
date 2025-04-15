import { useLanguage } from "./LanguageContext";

export default function Projects() {
    const context = useLanguage();
    if (!context) return null;

    const { english } = context;

    return (
        <section className='flex flex-col items-center justify-center bg-Gray-200 pb-[80px] h-screen'>
            <h3 className="text-Red font-light text-xl md:text-2xl  inconsolata lg:mt-20">
                {english ? "My Job" : "Meu trabalho"}
            </h3>
            <h2 className="font-semibold text-White text-2xl md:text-3xl asap w-[60vw]">
                {english ? "See my featured projects" : "Veja meus Projetos em destaque"}
            </h2>

            <div className="flex md:flex-row md:flex-wrap justify-center items-center w-[98vw] md:w-[80vw] mt-24 gap-6">
                <a href="https://nextjs-dashboard-flax-five-81.vercel.app/" target="_blank" className="cursor-pointer flex justify-center lg:flex-row flex-col items-center p-6 p-4 bg-Gray-300 w-[80%] gap-3 rounded-xl hover:transform hover:scale-105 duration-300">
                    <img className="rounded-lg max-w-[64vw] md:max-w-[220px] max-h-[156px] ml-1 md:m-0" src="./images/dashboard.png" alt="Em desenvolvimento" />
                    <div className='flex flex-col'>
                        <h3 className="font-bold text-Gray-600 asap text-xl mt-4 text-center">Fluxo Digital</h3>
                        <p className="font-thin text-Gray-500 maven text-sm text-start mt-2">
                            {english
                                ? "Development of the Fluxo Digital website, creating a visually attractive and functional platform. Implementation of a responsive design, aligned with the visual identity, with intuitive navigation and optimized for different devices. Use of NEXTJS, Tailwind and Typescript to structure, style and add interactivity to the website, ensuring an engaging user experience."
                                : "Desenvolvimento do site Fluxo Digital criando uma plataforma visualmente atrativa e funcional. Implementação de um design responsivo, alinhado à identidade visual, com navegação intuitiva e otimizada para diferentes dispositivos. Utilização de NEXTJS, Tailwind e Typescript para estruturar, estilizar e adicionar interatividade ao site, garantindo uma experiência envolvente ao usuário."
                            }
                        </p>
                        <ul className="flex gap-2 flex-wrap pt-2 mt-2">
                            <li className="font-bold maven rounded-full px-3 py-1 bg-Red text-Gray-200 cursor-pointer text-sm">NextJS</li>
                            <li className="font-bold maven rounded-full px-3 py-1 bg-Blue text-Gray-200 cursor-pointer text-sm">TailwindCSS</li>
                            <li className="font-bold maven rounded-full px-3 py-1 bg-White text-Gray-200 cursor-pointer text-sm">TYPESCRIPT</li>
                        </ul>
                    </div>
                </a>
           </div>
        </section>
    );
}