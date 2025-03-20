import bg from "@/public/certificate-background.png";

export default function ImpartialityPolicyPage(){
    return (
        <div className={`flex flex-col items-center `}>
            <div className="w-full py-12 md:py-24 lg:py-40  "
                 style={{
                     backgroundImage: `url(${bg.src})`,
                     width: '100%',
                     objectFit: 'contain',
                 }}>
                <h1 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                    Certificacion de Sistemas de Gestión
                </h1>
                <span
                    className="block text-center text-xl font-bold italic tracking-tighter sm:text-2xl md:text-3xl text-white">
                        "Obtén el sello de confianza que tu organización necesita"
                </span>
            </div>
            <div className={`flex flex-col px-4 max-w-5xl my-12`}>
                <span className="leading-7 [&:not(:first-child)]:mt-6">
                        En la actualidad, en el Mercado Internacional, las empresas están tomando mayor conciencia de la
                        importancia que tiene el certificarse bajo normativas internacionales ISO.
                </span>
                <span className="leading-7 [&:not(:first-child)]:mt-6">
                        En el mercado de hoy en día exige evidencia de calidad, seguridad, ética y compromiso con el medio
                        ambiente en los procesos productivos, industriales y de servicios, para garantizar un estándar de
                        excelencia y desarollo sostenible.
                </span>
                <span className="leading-7 [&:not(:first-child)]:mt-6">
                    La crisis, la globalización y los avances tecnológicos han cambiado la naturaleza de los negocios y le
                    han dado una nueva definición a un concepto clave para que la economía tenga éxito: la connfianza. La
                    confianza se construye mediante la transparencia en todo proceso, se requiere que las organizaciones
                    brinden la información necesaria de su estado actual y para que este proceso sea más transparente aún,
                    se necesita que un tercero especializado recopile, analice, estructure la informacion con rigor, recomiende
                    y otrogue la certificación.
                </span>
                <span className="leading-7 [&:not(:first-child)]:mt-6">
                    La certificación es utilizada como herramienta de generación de confianza ne las emrpresas, en los mercados
                    y en conjunto de la sociedad.
                </span>
                <span className="leading-7 [&:not(:first-child)]:mt-6">
                    En Intercert hemos desarrollado una metodología de certificación de excelencia, con la experiencia
                    que solo un grupo de profesionales apasionados por la gestión de la calidad puede crear.
                </span>
                <span className="leading-7 [&:not(:first-child)]:mt-6">
                    Los invitamos a ser parte de la red exclusiva de clientes certificados por Intercert.
                </span>
            </div>
        </div>
    );
}