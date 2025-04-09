import { useLanguage } from "./LanguageContext";

export default function Projects() {
    const { english, toggleLanguage } = useLanguage();
    return (
        <section className='flex flex-col items-center bg-Gray-200  pb-[80px]'>
            {english ? <h3 className="text-Red font-light text-xl md:text-2xl mt-8 md:mt-32 inconsolata">My Job</h3> : <h3 className="text-Red font-light text-xl md:text-2xl mt-8 md:mt-32 inconsolata">Meu trabalho</h3>}
            {english ? <h2 className="font-semibold text-White text-2xl md:text-3xl asap w-[60vw]">See my featured projects</h2> : <h2 className="font-semibold text-White text-2xl md:text-3xl asap w-[60vw]">Veja meus Projetos em destaque</h2>}

            <div className="flex md:flex-row md:flex-wrap justify-center items-center w-[98vw] md:w-[80vw] mt-24 gap-6">
                {english ? <a href="https://nextjs-dashboard-flax-five-81.vercel.app/" target="_blank" className="cursor-pointer flex flex-col justify-center items-center  p-4  p-3 bg-Gray-300 w-3/4 max-lg:max-w-[250px] max-w-[468px] gap-3 rounded-xl hover:transform hover:scale-105 duration-300">
                    <img className="rounded-lg max-w-[64vw] md:max-w-[220px] max-h-[156px] ml-1 md:m-0" src="./images/dashboard.png" alt="Em desenvolvimento" />
                    <div className='flex flex-col '>
                        <h3 className="font-bold text-Gray-600 asap text-xl mt-4 text-center">Fluxo Digital</h3>
                        <p className="font-thin text-Gray-500 maven text-sm text-start mt-2">Development of the Fluxo Digital website, creating a visually attractive and functional platform. Implementation of a responsive design, aligned with the visual identity, with intuitive navigation and optimized for different devices. Use of NEXTJS, Tailwind and Typescript to structure, style and add interactivity to the website, ensuring an engaging user experience.
                        </p>
                        <ul>
                            <ul className="flex gap-2 flex-wrap pt-2 mt-2 ">
                                <li className="font-bold maven rounded-full px-3 py-1 bg-Red text-Gray-200 cursor-pointer text-sm ">NextJS</li>
                                <li className="font-bold maven rounded-full px-3 py-1 bg-Blue text-Gray-200 cursor-pointer text-sm ">TailwindCSS</li>
                                <li className="font-bold maven rounded-full px-3 py-1 bg-White text-Gray-200 cursor-pointer text-sm ">TYPESCRIPT</li>
                            </ul>
                        </ul>
                    </div>
                </a> : <a href="https://nextjs-dashboard-flax-five-81.vercel.app/" target="_blank" className="cursor-pointer flex p-4  p-3 bg-Gray-300 flex-col w-3/4 max-lg:max-w-[250px] max-w-[468px] gap-3 rounded-xl hover:transform hover:scale-105 duration-300 items-center">
                    <img className="rounded-lg max-w-[64vw] md:max-w-[220px] max-h-[156px] ml-1 md:m-0" src="./images/dashboard.png" alt="Em desenvolvimento" />
                    <div className='flex flex-col '>
                        <h3 className="font-bold text-Gray-600 asap text-xl mt-4 text-center">Fluxo Digital</h3>
                        <p className="font-thin text-Gray-500 maven text-sm text-start mt-2">Desenvolvimento do site Fluxo Digital criando uma plataforma visualmente atrativa e funcional. Implementação de um design responsivo, alinhado à identidade visual, com navegação intuitiva e otimizada para diferentes dispositivos. Utilização de NEXTJS, Tailwind e Typescript para estruturar, estilizar e adicionar interatividade ao site, garantindo uma experiência envolvente ao usuário.</p>
                        <ul className="flex gap-2 flex-wrap pt-2 mt-2">
                            <li className="font-bold maven rounded-full px-3 py-1 bg-Red text-Gray-200 cursor-pointer text-sm ">NextJS</li>
                            <li className="font-bold maven rounded-full px-3 py-1 bg-Blue text-Gray-200 cursor-pointer text-sm ">TailwindCSS</li>
                            <li className="font-bold maven rounded-full px-3 py-1 bg-White text-Gray-200 cursor-pointer text-sm ">TYPESCRIPT</li>
                        </ul>
                    </div>
                </a>}
                {english ? <a className="cursor-pointer flex p-[16px] items-center bg-Gray-300 flex-col w-[436px] h-[428px] max-w-[468px] gap-3 rounded-xl hover:transform hover:scale-105 duration-300">
                    <img className="rounded-lg max-w-[64vw] md:max-w-[220px] max-h-[156px] ml-1 md:m-0" src="./images/progress.jpg" alt="Em desenvolvimento" />
                    <div className='flex flex-col items-start'>
                        <h3 className="font-bold text-Gray-600 asap text-lg text-center">Project title</h3>
                        <p className="font-thin text-Gray-500 maven text-sm text-start">Project description</p>
                        {/* <ul>Linguagens dos projetos individuais</ul> */}
                    </div>
                </a> : <a className="cursor-pointer flex p-[16px] items-center bg-Gray-300 flex-col w-[436px] h-[428px] max-w-[468px] gap-3 rounded-xl hover:transform hover:scale-105 duration-300">
                    <img className="rounded-lg max-w-[64vw] md:max-w-[220px] max-h-[156px] ml-1 md:m-0" src="./images/desenvolvimento.png" alt="Em desenvolvimento" />
                    <div className='flex flex-col items-start'>
                        <h3 className="font-bold text-Gray-600 asap text-lg text-center">Titulo do projeto</h3>
                        <p className="font-thin text-Gray-500 maven text-sm text-start">Descrição do projeto</p>
                        {/* <ul>Linguagens dos projetos individuais</ul> */}
                    </div>
                </a>}
            </div>
        </section>
    );
}