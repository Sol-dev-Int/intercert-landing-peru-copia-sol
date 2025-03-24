"use client";
import { useState } from "react";
import bg from "@/public/intercert-partner.webp";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PartnersPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);


    const items = [
        "Dominio, hosting y correo coporativo",
        "Tarifa plana exclusiva en certificaciones",
        "Soporte 24/7 y atención personalizada",
        "Entrega de certificados en 5 días",
        "Amplia red de contactos",
        "Contar con el respaldo de las acreditaciones, reconocimientos y know how de Intercert",
        "Mentoría con el CEO de Intercert",
        "Masterclass de Marketing y Ventas para Consultores y Auditores ISO",
        "Agencia de Markenting y CRM: Genera +30 Prospectos Calificados",
        "Precios exclusivos para formación de Partners"
    ];

    const descriptions = [
        "Obtén soluciones integrales para tu presencia en línea con nuestros servicios de dominio," +
        "hosting y correo corporativo. Asegura un rendimiento confiable, una identidad" +
        "digital profesional y una comunicación fluida para tu empresa, todo con el respaldo de " +
        "tecnología de vanguardia y soporte especializado de Intercert.",
        "Obtén acceso a tarifas planas en nuesstros servicios de cartificación y capacitación." +
        "Genera dinero mientras fortaleces la calidad y excelencia en tu organización posicionándolo como líder en tu sector.",
        "Tendrás a tu disposición un equipo completo de soporte continuo y atención personalizada las 24 horas del día, los" +
        "7 días de la semana. Nuestro equipo de expertos está siempre disponible para brindarte soluciones rápidas y eficaces, " +
        "asegurando que tu experiencia sea siempre óptima y sin interrupciones.",
        "Recibe tus certificados en un plazo rápido y garantizado de 5 días. Nuestro compromiso es " +
        "ofrecerte una entrega ágil y eficiente, asegurando que obtengas los documentos que necesitas en " +
        "el menor tiempo posible, sin sacrificar calidad, logrando mayor satisfacción del cliente.",
        "Conecta con otros profesionales y empresas afiliadas en nuestra red. Establece alianzas " +
        "estratégicas, asiste a eventos corporativos, comparte experiencias y accede a nuevas oportunidades de negocios.",
        "Respaldo total, al pertenecer al esquema Intercert Partner tendrás automáticamente el respaldo de las " +
        "acreditaciones y los reconocimientos que avalan a Intercert, además de herramientas y recursos " +
        "exclusivos, los cuales podrás usar para escalar tu negocio.",
        "Recibe orientación estratégica y apoyo personalizado para mejorar tus habilidades de marketing, ventas y gestión,y llevar tu " +
        "negocio ISO al siguiente nivel. Esta mentoria te ayudará a posicionar tu negocio, atraer y fidelizar a tus clientes ideales",
        "Descubre las estrategias más efectivas para atraer más clientes, aumentar tus ventas y posicionarte como líder en el mercado de " +
        "consultoría, autoría y certificación ISO.",
        "Te ayudamos a generar más de 30 prospectos calificados cada mes los cuales estarán interesados y solicitarán cotización " +
        "de tus servicios. Con nuestras estrategias de marketing y gestión CRM, garantizamos que tu negocio  atraiga clientes interesados " +
        "y automatices y digitalices la atención de estos a traves de nuestro servicio de CRM.",
        "Obtén precios exclusivos en formación, capacitación y certificación en gestión empresarial y cursos " +
        "de Auditor Líder con INTERCERT PARTNERS, impulsando tu crecimiento profesional y calidad organizacional"
    ];

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const columnData = [
        {
            image: "/public/Imagen1.webp",
            title: "Registro a esquema de Intercert Partner",
            list: ["Ten tu reunión de presentación de Intercert y Esquema Intercert Partners",
                "Envía tus documentos para tu registro",
                "Firma tu contrato y obtén tu certificado digital",
                "Conectados contigo",
                "Aprende la parte técnica de Intercert",
                "Aprende la parte comercial de Intercert"]
        },
        {
            image: "/public/Imagen2.webp",
            title: "Bienvenida a Intercert Partner Cloud TI",
            list: ["Obtén tu Intercert Cloud",
                "Configura tu perfil de Intercert Cloud con asesoría del equipo Intercert TI",
                "Empieza a navegar con todo el conocimiento, explora la plataforma y los beneficios de Intercert Partners"]
        },
        {
            image: "/public/Imagen3.webp",
            title: "Escalar tu negocio",
            list: ["Conectados contigo a través del canal de telegram Intercert Partners",
                "Navega por Telegram Intercert Partner",
                "Crea tus redes sociales para llegar a tu clientes",
                "Personaliza tus canales de comunicación",
                "Crea tu tienda digital",
                "Configura y segmenta tu primera campaña en redes y google",
                "Configura tu primer funnel de ventas",
                "Genera tu primera venta"]
        }
    ];

    return (
        <>
            <section
                id="presentation"
                className="w-full py-12 md:py-24 lg:py-32 bg-muted bg-cover bg-right"
                style={{ backgroundImage: `url(${bg.src})` }}
            >
                <div className="container max-w-full px-4 md:px-6 flex justify-end">
                    <div className="space-y-4 text-right max-w-[600px] ml-auto mt-10">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                            INTERCERT PARTNER
                        </h1>
                        <p className="text-muted-foreground sm:text-4xl md:text-xl  ">
                            Sé parte de la mejor red global de certificación
                        </p>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row justify-end">
                            <Button size="lg" asChild className="bg-blue-400 text-white hover:bg-blue-900 text-sm lg:px-10 lg:py-8 sm:text-base sm:px-6 sm:py-3">
                                <Link
                                    href="https://wa.me/51992387031?text=Hola,%20quiero%20ser%20el%20nuevo%20Intercert%20Partner"
                                    passHref
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Conviértete en Intercert Partner y <br/> empieza tu negocio ahora
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
            <div className={`flex flex-col items-center `}>
                <div className={`flex flex-col px-4 max-w-5xl my-12`}>
                    <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">
                        ¿Quiénes Somos?
                    </h2>
                    <span className="leading-7 [&:not(:first-child)]:mt-6">
                        <strong>INTERCERT</strong> es un organismo de asesoría, adutoría, capacitación y certificación
                        internacional, acreditado bajo los estándares ISO 17021 Y 17024. Con presencia en más de 17 países,
                        ayudamos a empresas y profesionales a obtener certificaciones en sistemas de gestión empresarial,
                        mejorando su competitividad y eficiencia. Nuestro enfoque se basa en ofrecer soluciones personalizadas
                        que se adapten a las necesidades de cada cliente, garantizando un acopañamiento integral en cada etapa
                        del proceso. Con nuestra experiencia y compromiso, impulsando el crecimiento y la sostenibiliad de
                        nuestros clientes a nivel global.
                    </span>
                </div>
                <div className="w-full text-center bg-blue-500 p-6 text-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div className={`flex flex-col px-5 max-w-xl my-12`}>
                            <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">
                                ¿Qué es Intercert Partner?
                            </h2>
                            <span className="leading-7 [&:not(:first-child)]:mt-6">
                                Es un esquema que Intercert ha desarrollado con el objetivo de respaldar y escalar los
                                negocios de todos aquellos profesionales del rubro de la gestión y de la calidad que no
                                cuentan con el tiempo, formación, recursos humanos e inversión financiera para crear su propio
                                organismo de certificación.
                            </span>
                            <span className="leading-7 [&:not(:first-child)]:mt-6">
                                Beneficios de ser Partner de Intercert
                            </span>
                        </div>
                        <div className="p-4 bg-blue-500 shadow-lg rounded-lg max-w-6xl mx-auto md:w-5/6 text-black">
                            <ul className="space-y-1">
                                {items.map((item, index) => (
                                    <li key={index} className="border-b pb-2">
                                        <button
                                            onClick={() => toggleItem(index)}
                                            className="w-full text-left font-semibold p-2 max-w-5xl hover:bg-gray-100 rounded"
                                        >
                                            {item}
                                        </button>
                                        {openIndex === index && (
                                            <div className="mt-2 p-2 bg-gray-200 rounded transition-all">
                                                {descriptions[index]}
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 max-w-6xl">
                    {columnData.map((col, index) => (
                        <div key={index} className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg">
                            <img src={`/numbers-partners/Imagen${index + 1}.webp`} alt={`Imagen ${index + 1}`} className="w-32 h-32 object-cover rounded-full" />
                            <h3 className="mt-4 text-lg font-bold text-center">{col.title}</h3>
                            <ul className="mt-2 text-left list-disc pl-5">
                                {col.list.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
