import bg from '../../../public/certificate-background.png'

export default function QualityPolicyPage(){
    return (
        <div className={`flex flex-col items-center `}>
            <div className="w-full py-12 md:py-24 lg:py-40  "
                 style={{
                     backgroundImage: `url(${bg.src})`,
                     width: '100%',
                     objectFit: 'contain',
                 }}>
                <h1 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                    Política de Calidad
                </h1>
            </div>
            <div className={`flex flex-col px-4 max-w-5xl my-12`}>
                <span className="leading-7 [&:not(:first-child)]:mt-6">
                    <strong>INTERCERT</strong> es un organismo de certificación de sistemas de gestión
                    que se encarga de brindar servicios de auditoría de tercera parte de
                    calidad a personas naturales y jurídicas a nivel nacional e internacional
                    con la finalidad de verificar una correcta implementación, funcionamiento
                    y sostenibilidad de su sistema de gestión, junto a un equipo competente
                    para el correcto desarrollo del proceso de certificación teniendo en
                    cuenta desde el primer interés del usuario y comprometidos en brindar
                    una satisfacción al cliente mediante la cultura del orden, limpieza,
                    disciplina y mejora continua.
                </span>
                <span className="leading-7 [&:not(:first-child)]:mt-6">
                    <strong>
                        Nuestra política de calidad y 5s se basa en los siguientes principios:
                    </strong>
                </span>
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                    <li>
                        <span className="leading-7 [&:not(:first-child)]:mt-6">
                            Satisfacer de manera oportuna las necesidades y expectativas del cliente
                            mediante un conforme desarrollo de proceso de certificación
                            respetando los principios básicos de transparencia, confidencialidad,
                            integridad e imparcialidad.
                        </span>
                    </li>
                    <li>
                        <span className="leading-7 [&:not(:first-child)]:mt-6">
                            Capacitar y motivar continuamente a todo el personal de nuestro organismo
                            de certificación de sistemas de gestión buscando el desarrollo de talento
                            humano y la mejora de sus competencias enfocada en brindar un servicio de
                            certificación de manera ordenada, limpia y disciplinada en busca de mantener
                            y mejorar la calidad del servicio.
                        </span>
                    </li>
                    <li>
                        <span className="leading-7 [&:not(:first-child)]:mt-6">
                            Establecer mediciones y evaluaciones para encaminar y mantener el sistema de la clasificación,
                            orden, limpieza y disciplina dentro de nuestro organismo de certificación de sistema de gestión.
                        </span>
                    </li>
                    <li>
                        <span className="leading-7 [&:not(:first-child)]:mt-6">
                            Brindar a todo el personal y partes interesadas las herramientas necesarias para
                            que puedan cumplir con los objetivos y metas del organismo de certificación
                            de sistemas de gestión.
                        </span>
                    </li>
                    <li>
                        <span className="leading-7 [&:not(:first-child)]:mt-6">
                            Los responsables de cada proceso deberán comprender sus funciones asignadas,
                            interdependencia entre ellos para cumplir con los objetivos de nuestro
                            organismo de certificación de sistemas de gestión.
                        </span>
                    </li>
                    <li>
                        <span className="leading-7 [&:not(:first-child)]:mt-6">
                            Selección de auditores externos y proveedores de servicios que cumplan con
                            las competencias, principios y requisitos necesarios para brindar un
                            servicio de certificación de calidad.
                        </span>
                    </li>
                    <li>
                        <span className="leading-7 [&:not(:first-child)]:mt-6">
                            Tomar decisiones y acciones basadas en un análisis profundo y
                            detallista para brindar soluciones a nuestros clientes internos y externos.
                        </span>
                    </li>
                    <li>
                        <span className="leading-7 [&:not(:first-child)]:mt-6">
                            Contar con una comunicación clara, abierta y objetiva para la integración óptima
                            de nuestras actividades para el desarrollo del sistema del orden, limpieza y disciplina.
                        </span>
                    </li>
                    <li>
                        <span className="leading-7 [&:not(:first-child)]:mt-6">
                            Mejora continua.
                        </span>
                    </li>

                </ul>
            </div>
        </div>
    );
}