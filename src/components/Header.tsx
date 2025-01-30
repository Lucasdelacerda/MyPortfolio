
export default function Header() {
    return ( 
        <section className="flex items-center  bg-black w-[100vw] height-[66px] font-bold font-base py-[10px] px-[65px] ">
            {/* colocar um ease-in-out no underliner para efeito de transição */}
            <div className="flex gap-[33px] items-center mr-0 ">
                <a className="opcoes-header" href="">Sobre mim</a>
                <a className="opcoes-header" href="">Skills</a>
                <a className="opcoes-header" href="">Portfólio</a>
                <a className="font-white bg-white py-2 px-3 rounded-[30px]" href="">Contacte-me</a>
                
            </div>
        </section>
    )
}