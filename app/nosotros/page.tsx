import bg from "@/public/img-nosotros.webp";
export default function AboutPage() {
    return (
        <div className={`flex flex-col items-center `}>
            <div className="w-full py-12 md:py-24 lg:py-40  "
                 style={{
                     backgroundImage: `url(${bg.src})`,
                     width: '100%',
                     objectFit: 'contain',
                 }}>
                <h1 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                    NOSOTROS
                </h1>
                <span className="block text-center text-xl font-bold italic tracking-tighter sm:text-2xl md:text-3xl text-white">
                        Más de 17 años brindando calidad
                </span>
            </div>
            <div className={`flex flex-col px-4 max-w-5xl my-12`}>
                <h1 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">
                    ACERCA DE <strong>INTERCERT</strong>
                </h1>
                <span className="leading-7 [&:not(:first-child)]:mt-6">
                    Somos un organismo de Evaluación de la  Conformidad Acreditados en La Norma ISO 17021-1:2015 norma
                    la cual evalúa, acredita y regula a los Organismos de Certificación de Sistemas de Gestión para mantener
                    las buenas prácticas de auditoría y certificación ISO.
                </span>
                <span className="leading-7 [&:not(:first-child)]:mt-6">
                    El equipo de <strong>INTERCERT</strong> posee experiencia en todas las industrias y sectores a nivel mundias,
                    aplica buenas prácticas para planificar, evaluar y dar conformidad a sus procesos y operaciones, para asegurar
                    el cumplimiento de las normas, regulaciones y otras exigencias requeridas por el mercado.
                </span>
            </div>
        </div>
    );
}