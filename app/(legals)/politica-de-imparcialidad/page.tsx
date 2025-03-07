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
                    Política de Imparcialidad
                </h1>
            </div>
            <div className={`flex flex-col px-4 max-w-5xl my-12`}>
                <span className="leading-7 [&:not(:first-child)]:mt-6">
                    INTERCERT está comprometida con la imparcialidad en las actividades de
                    certificación de sistemas de gestión. La Política de Imparcialidad de INTERCERT
                    es una declaración disponible públicamente que establece que comprende la
                    importancia de la imparcialidad en la realización de sus actividades de
                    certificación de sistemas de gestión, gestiona los conflictos de intereses
                    y garantiza la objetividad de sus actividades de certificación de sistemas de gestión.
                </span>
                <span className="leading-7 [&:not(:first-child)]:mt-6">
                    INTERCERT cumple con los requisitos de la norma ISO 17021:2015 y garantiza la
                    imparcialidad de todo su personal relacionado con las actividades de certificación
                    y dentro de todas sus actividades de certificación.
                </span>
                <span className="leading-7 [&:not(:first-child)]:mt-6">
                    INTERCERT ha establecido procesos para identificar, analizar, evaluar, tratar,
                    monitorear y documentar los riesgos relacionados con los conflictos de intereses
                    que surgen de la provisión de la certificación, incluido cualquier conflicto
                    que surja de sus relaciones de manera continua. En caso de amenazas a la
                    imparcialidad, Intercert documenta y demuestra la eliminación o minimización
                    de dichas amenazas y documenta el riesgo residual, si lo hubiera, este riesgo
                    residual se revisa para determinar si se encuentra dentro del nivel de riesgo
                    aceptable. La demostración cubre todas las amenazas potenciales que se identifican,
                    ya sea que surjan dentro de INTERCERT o de las actividades de otras personas,
                    organismos u organizaciones. Siempre que una relación represente una amenaza
                    inaceptable para la imparcialidad, no se proporcionará la certificación.
                </span>
                <span className="leading-7 [&:not(:first-child)]:mt-6">
                    Para garantizar lo anterior, INTERCERT ha establecido un comité de partes interesadas
                    que incluye clientes, representantes de asociaciones industriales, ONG, incluidas
                    organizaciones de clientes.
                </span>
                <span className="leading-7 [&:not(:first-child)]:mt-6">
                    <strong>
                        Para demostrar la implementación efectiva de la política de imparcialidad de INTERCERT:
                    </strong>
                </span>
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                    <li>
                        <span className="leading-7 [&:not(:first-child)]:mt-6">
                            INTERCERT no certifica a otro organismo de certificación para su Sistema
                            de Gestión de la Calidad.
                        </span>
                    </li>
                    <li>
                        <span className="leading-7 [&:not(:first-child)]:mt-6">
                            INTERCERT y cualquier parte de INTERCERT como persona jurídica y entidades bajo el
                            control organizacional de INTERCERT no brindan servicios de Consultoría de Sistemas
                            de Gestión.
                        </span>
                    </li>
                    <li>
                        <span className="leading-7 [&:not(:first-child)]:mt-6">
                            INTERCERT y cualquier parte de INTERCERT como persona jurídica y entidades
                            bajo el control organizacional de INTERCERT no realizan auditorías
                            internas de sus clientes certificados ni ofrecen servicios de auditoría
                            interna.
                        </span>
                    </li>
                    <li>
                        <span className="leading-7 [&:not(:first-child)]:mt-6">
                            INTERCERT no subcontrata las auditorías a una organización de consultoría
                            de sistemas de gestión
                        </span>
                    </li>
                    <li>
                        <span className="leading-7 [&:not(:first-child)]:mt-6">
                            Las actividades de INTERCERT no se comercializan ni se ofrecen como vinculadas
                            con las actividades de una organización que brinda consultoría en sistemas
                            de gestión. INTERCERT toma medidas para corregir enlaces o declaraciones
                            inapropiadas de cualquier organización consultora que afirmen o sugieran
                            que la certificación sería más simple, más fácil, más rápida o menos costosa
                            si se utilizara INTERCERT.
                        </span>
                    </li>
                    <li>
                        <span className="leading-7 [&:not(:first-child)]:mt-6">
                            INTERCERT no declara ni implica que la certificación sería más simple, más fácil, más rápida
                            o menos costosa si se utilizara una organización de consultoría específica.
                        </span>
                    </li>
                    <li>
                        <span className="leading-7 [&:not(:first-child)]:mt-6">
                            Para garantizar que no haya conflicto de intereses, el personal que haya
                            brindado consultoría en sistemas de gestión, incluidos aquellos que
                            en calidad de gerentes, no debe ser utilizado por INTERCERT para participar
                            en una auditoría u otras actividades de certificación si han estado
                            involucrados. en consultoría de sistemas de gestión hacia el cliente en
                            los últimos dos años.
                        </span>
                    </li>
                    <li>
                        <span className="leading-7 [&:not(:first-child)]:mt-6">
                            INTERCERT actúa para responder a cualquier amenaza a su imparcialidad
                            derivada de la actuación de otras personas, órganos u organizaciones.
                        </span>
                    </li>
                    <li>
                        <span className="leading-7 [&:not(:first-child)]:mt-6">
                            INTERCERT y su personal, ya sea interno o externo, o comités, que puedan
                            influir en las actividades de certificación, actúan con imparcialidad y
                            no permiten que presiones comerciales, financieras o de otro tipo comprometan
                            la imparcialidad.
                        </span>
                    </li>
                    <li>
                        <span className="leading-7 [&:not(:first-child)]:mt-6">
                            INTERCERT requiere que el personal, interno y externo, revele cualquier
                            situación de su conocimiento que pueda presentarles o INTERCERT con un
                            conflicto de intereses. INTERCERT registra y utiliza esta información como
                            insumo para identificar las amenazas a la imparcialidad planteadas por las
                            actividades de dicho personal o de las organizaciones que lo emplean, y no
                            utiliza dicho personal, interno o externo, a menos que pueda demostrar que
                            no existe un conflicto de intereses.
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
}