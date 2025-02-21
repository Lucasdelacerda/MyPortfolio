
export default function Home() {
    return (
        <section className="flex flex-col bg-cover bg-center justify-center items-center bg-[url('/images/Background_Home.png')] h-screen ">
            <img className="rounded-full w-[112px] h-[112px] mt-2 border-2 border-Red mb-14" src="images/perfil.jpg" alt="Perfil Image" />
            <h3 className="text-Gray-500 text-xl font-light w-[80vw] asap md:text-2xl"><span className='font-light text-Gray-500 inconsolata'>Hello World!</span> Meu nome é <span className="text-Red">Lucas de Lacerda</span> e sou</h3>
            <h1 className="font-bold text-4xl mt-4 w-[80vw] text-center asap md:text-6xl md:w-[80vw]">Desenvolvedor Front-end</h1>
        <p className="mt-5 font-normal text-Gray-400 w-2/3 max-w-[780px] maven text-sm md:text-base">Transformo necessidades em aplicações reais, evolventes e funcionais. Desenvolvo sistemas através da minha paixão pela tecnologia, contribuindo com soluções inovadoras e eficazes para desafios complexos.</p>
            <ul className="flex font-semibold text-sm gap-3 w-[80vw] flex-wrap justify-center mt-8 md:mt-20">
                <li className="font-bold maven rounded-full px-3 py-1 bg-Green text-Gray-200 cursor-pointer text-sm md:text-base">GitHub</li>
                <li className="font-bold maven rounded-full px-3 py-1 bg-Red text-Gray-200 cursor-pointer text-sm md:text-base" >HTML</li>
                <li className="font-bold maven rounded-full px-3 py-1 bg-Blue text-Gray-200 cursor-pointer text-sm md:text-base">CSS</li>
                <li className="font-bold maven rounded-full px-3 py-1 bg-Yellow text-Gray-200 cursor-pointer text-sm md:text-base">JAVASCRIPT</li>
                <li className="font-bold maven rounded-full px-3 py-1 bg-White text-Gray-200 cursor-pointer text-sm md:text-base">TYPESCRIPT</li>
                <li className="font-bold maven rounded-full px-3 py-1 bg-Blue text-Gray-200 cursor-pointer text-sm md:text-base">ReactJS</li>
                <li className="font-bold maven rounded-full px-3 py-1 bg-Red text-Gray-200 cursor-pointer text-sm md:text-base">NextJS</li>
                <li className="font-bold maven rounded-full px-3 py-1 bg-Green text-Gray-200 cursor-pointer text-sm md:text-base">NODEJS</li>

            </ul>
        </section>
    )
}