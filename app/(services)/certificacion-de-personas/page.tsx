import bg from "@/public/mockup-certificado-personas.webp"

export default function PeopleCertificacionsPage(){
    return (
        <>
            <div className={`flex flex-col items-center `}>
                <div className="w-full py-12 md:py-24 lg:py-40  "
                     style={{
                         backgroundImage: `url(${bg.src})`,
                         width: '100%',
                         objectFit: 'contain',
                     }}>
                    <h1 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                        Certificación de Personas
                    </h1>
                    <span
                        className="block text-center text-xl font-bold italic tracking-tighter sm:text-2xl md:text-3xl text-white">
                        "Que el mundo evidencia tus competencias, es posible"
                    </span>
                </div>
                <div className={`flex flex-col px-4 max-w-5xl my-12`}>
                    <span className="leading-7 [&:not(:first-child)]:mt-6">
                        A partir de la globalización, el comercio requiere que un tercero especializado
                        regule sus transacciones, es aquí donde entran a tallar entes importantes, los
                        entes reguladores encargados de crear las normativas y acreditar a organismos
                        de tercera parte que vigilen su cumplimiento, etos organismos de tercera
                        dan conformidad a las empresas en sus procesos y las avalan mediante un certificado.
                    </span>
                    <span className="leading-7 [&:not(:first-child)]:mt-6">
                        Para ello realizan auditorías de certificación.
                    </span>
                    <span className="leading-7 [&:not(:first-child)]:mt-6">
                        Los auditores son los encargados de gestionar la auditoría y comprobar que todos los
                        procesos en ella sean llevados a cabo.
                    </span>
                    <span className="leading-7 [&:not(:first-child)]:mt-6">
                        También son los responsables de las decisiones finales con relación al desarrollo de la
                        auditoría, la distribución, la categorización de hallazgos y recomendación de la certificación.
                    </span>
                    <span className="leading-7 [&:not(:first-child)]:mt-6">
                        En Intercert, certificamos a profesionales como auditores líderes en las principales
                        normativas internacionales
                    </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 place-items-center p-4">
                    {[...Array(15)].map((_, index) => (
                        <img
                            key={index}
                            src={`/peaple-certificacions/img${index + 1}.png`}
                            alt={`Imagen ${index + 1}`}
                            className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] object-cover rounded-lg shadow-md"/>
                    ))}
                </div>
            </div>
        </>
);
}
