import {useLanguage} from "./LanguageContext"

export default function Home() {
    const {english, toggleLanguage} = useLanguage();

    return (

        <section className="flex flex-col bg-cover bg-center justify-center items-center bg-[url('/images/Background_Home.png')] h-screen ">
            <a className="ml-[88%]" onClick={toggleLanguage} href="#">
                {english ? <img className=' w-6 h-6' src='./icons/BrazilFlag.svg' alt='USA flag icon' /> : <img className=' w-6 h-6' src='./icons/USAflag.svg' alt='USA flag icon' />}

            </a>
            <img className="rounded-full w-[112px] h-[112px] mt-2 border-2 border-Red mb-14" src="images/perfil.jpg" alt="Perfil Image" />


            {english ? <h3 className="text-Gray-500 text-xl font-light w-[80vw] asap md:text-2xl"><span className='font-light text-Gray-500 inconsolata'>Hello World!</span> My name is <span className="text-Red">Lucas de Lacerda</span> i'm</h3> : <h3 className="text-Gray-500 text-xl font-light w-[80vw] asap md:text-2xl"><span className='font-light text-Gray-500 inconsolata'>Hello World!</span> Meu nome é <span className="text-Red">Lucas de Lacerda</span> e sou</h3>}
            {english ? <h1 className="font-bold text-4xl mt-4 w-[80vw] text-center asap md:text-6xl md:w-[80vw]">Front-end Developer</h1> : <h1 className="font-bold text-4xl mt-4 w-[80vw] text-center asap md:text-6xl md:w-[80vw]">Desenvolvedor Front-end</h1>}
            {english ? <p className="mt-5 font-normal text-Gray-400 w-2/3 max-w-[780px] maven text-sm md:text-base">I transform needs into real, evolving and functional applications. I develop systems through my passion for technology, contributing innovative and effective solutions to complex challenges.</p> : <p className="mt-5 font-normal text-Gray-400 w-2/3 max-w-[780px] maven text-sm md:text-base">Transformo necessidades em aplicações reais, evolventes e funcionais. Desenvolvo sistemas através da minha paixão pela tecnologia, contribuindo com soluções inovadoras e eficazes para desafios complexos.</p>}

            <ul className="flex font-semibold text-sm gap-3 w-[80vw] flex-wrap justify-center mt-8 md:mt-20">
                <li className="font-bold maven rounded-full px-3 py-1 bg-Green text-Gray-200 cursor-pointer text-sm md:text-base">GitHub</li>
                <li className="font-bold maven rounded-full px-3 py-1 bg-Red text-Gray-200 cursor-pointer text-sm md:text-base" >HTML</li>
                <li className="font-bold maven rounded-full px-3 py-1 bg-Blue text-Gray-200 cursor-pointer text-sm md:text-base">CSS</li>
                <li className="font-bold maven rounded-full px-3 py-1 bg-Yellow text-Gray-200 cursor-pointer text-sm md:text-base">JAVASCRIPT</li>
                <li className="font-bold maven rounded-full px-3 py-1 bg-White text-Gray-200 cursor-pointer text-sm md:text-base">TYPESCRIPT</li>
                <li className="font-bold maven rounded-full px-3 py-1 bg-Blue text-Gray-200 cursor-pointer text-sm md:text-base">ReactJS</li>
                <li className="font-bold maven rounded-full px-3 py-1 bg-Red text-Gray-200 cursor-pointer text-sm md:text-base">NextJS</li>
                <li className="font-bold maven rounded-full px-3 py-1 bg-Green text-Gray-200 cursor-pointer text-sm md:text-base">NODEJS</li>
                <li className="font-bold maven rounded-full px-3 py-1 bg-Blue text-Gray-200 cursor-pointer text-sm md:text-base">TailwindCSS</li>

            </ul>
        </section>
    )
}