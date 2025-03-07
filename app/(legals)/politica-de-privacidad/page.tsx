export default function PrivacyPolicyPage(){
    return (
        <div className={`flex flex-col items-center mb-12`}>
            <div className={`flex`}>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Política de Privacidad
                </h1>
            </div>
            <div className={`flex flex-col px-4 max-w-5xl`}>
                <span className="leading-7 [&:not(:first-child)]:mt-6">
                    En INTERCERT, respetamos su privacidad y nos comprometemos a
                    proteger la información personal que pueda proporcionarnos a
                    través de nuestro sitio web. Esta política de privacidad describe
                    cómo recopilamos, utilizamos y compartimos su información personal
                    cuando visita nuestro sitio web. Al utilizar nuestro sitio web,
                    usted acepta los términos de esta política de privacidad.
                </span>
                <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                    Información Personal
                </h2>
                <span className="leading-7 [&:not(:first-child)]:mt-6">
                    Podemos recopilar información personal que usted nos proporciona
                    voluntariamente, como su nombre, dirección de correo electrónico,
                    número de teléfono y dirección postal, cuando se registra en nuestro sitio web,
                    realiza compras en nuestra tienda virtual, se comunica con nosotros o completa
                    formularios en nuestro sitio.
                </span>
                <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                    Información de Navegación
                </h2>
                <span className="leading-7 [&:not(:first-child)]:mt-6">
                    Cuando visita nuestro sitio web, recopilamos automáticamente cierta
                    información de su dispositivo, como su dirección IP, tipo de navegador,
                    sistema operativo, páginas visitadas y tiempo de navegación.
                    Esta información nos ayuda a mejorar la experiencia del usuario y
                    la seguridad de nuestro sitio web
                </span >
                <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                    Uso de la Información
                </h2>
                <span className="leading-7 [&:not(:first-child)]:mt-6">
                    Utilizamos la información recopilada para los siguientes fines:
                </span>
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                    <li>
                        Procesar sus pedidos y pagos en nuestra tienda virtual.
                    </li>
                    <li>
                        Responder a sus consultas y proporcionarle información solicitada.
                    </li>
                    <li>
                        Enviarle actualizaciones sobre nuestros productos y
                        servicios si nos ha dado su consentimiento.
                    </li>
                    <li>
                        Personalizar su experiencia en nuestro sitio web.
                    </li>
                    <li>
                        Mejorar la seguridad y el rendimiento de nuestro sitio web.
                    </li>
                    <li>
                        Cumplir con las leyes y regulaciones aplicables.
                    </li>
                </ul>
                <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                    Compartir Información
                </h2>
                <span className="leading-7 [&:not(:first-child)]:mt-6">
                    No vendemos, alquilamos ni compartimos su información personal
                    con terceros no afiliados, excepto cuando sea necesario para brindarle nuestros servicios o cumplir con la ley.
                </span>
                <span className="leading-7 [&:not(:first-child)]:mt-6">
                    Podemos compartir su información personal con proveedores de
                    servicios que nos ayuden en la operación de nuestro sitio web
                    y en la prestación de servicios. Estos proveedores están obligados
                    a mantener la confidencialidad de su información y solo pueden utilizarla
                    para los fines acordados.
                </span>
                <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                    Cookies y Tecnologías Similares
                </h2>
                <span className="leading-7 [&:not(:first-child)]:mt-6">
                    Utilizamos cookies y tecnologías similares para mejorar su experiencia en
                    nuestro sitio web. Puede configurar su navegador para rechazar todas las cookies
                    o para recibir una notificación cuando se envíen cookies. Sin embargo, esto puede
                    afectar su capacidad para utilizar algunas funciones de nuestro sitio web.
                </span>
                <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                    Seguridad de la Información
                </h2>
                <span className="leading-7 [&:not(:first-child)]:mt-6">
                    Tomamos medidas para proteger su información personal y mantener su confidencialidad.
                    Sin embargo, no podemos garantizar la seguridad absoluta de los datos transmitidos por Internet.
                </span>
                <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                    Sus Derechos
                </h2>
                <span className="leading-7 [&:not(:first-child)]:mt-6">
                    Usted tiene derechos sobre su información personal, que pueden incluir el acceso
                    , rectificación, eliminación y la limitación del procesamiento. Puede ejercer
                    estos derechos contactándonos a través de la información de contacto proporcionada
                    al final de esta política.
                </span>
                <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                    Cambios en la Política de Privacidad
                </h2>
                <span className="leading-7 [&:not(:first-child)]:mt-6">
                    Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento.
                    Cualquier cambio será efectivo cuando se publique en esta página, y se le notificará de
                    cualquier cambio material. Le recomendamos que revise periódicamente esta política de
                    privacidad.
                </span>
                <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                    Contacto
                </h2>
                <span className="leading-7 [&:not(:first-child)]:mt-6">
                    Si tiene preguntas o inquietudes acerca de esta política de privacidad, por favor,
                    póngase en contacto con nosotros a través de la siguiente información de contacto
                </span>
                {/*TODO: add contacto page link*/}
            </div>
        </div>
    );
}