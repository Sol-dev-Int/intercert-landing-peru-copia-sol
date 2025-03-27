"use client";
import bg from "@/public/certificate-background.png";
import { useState } from "react";

const images = [
    {
        src: "/iso-certificacions/ISO-9001.png",
        title: "ISO 9001",
        subtitle: "Sistema de Gestión de Calidad",
        description:
            "ISO 9001 es una norma internacional que establece criterios para un " +
            "sistema de gestión de calidad, enfocándose en la satisfacción del cliente " +
            "y la mejora continua. Su objetivo es asegurar que las organizaciones ofrezcan " +
            "productos y servicios que cumplan consistentemente con los requisitos de calidad. ",
        certifiedBy: "SCC, KAB",
    },
    {
        src: "/iso-certificacions/iso14001.png",
        title: "ISO 14001",
        subtitle: "Sistema de Gestión Ambiental",
        description:
            "La ISO 14001 es una norma internacional que establece los criterios para un sistema" +
            "de gestión ambiental, ayudando a las organizaciones a mejorar su desempeño ambiental y " +
            "a cumplir con las regulaciones aplicables. Su enfoque se centra en la reducción de impactos " +
            "negativos en el medio ambiente y en la promoción de prácticas sostenibles.",
        certifiedBy: "SCC",
    },
    {
        src: "/iso-certificacions/ISO-22000.webp",
        title: "ISO 22000",
        subtitle: "Sistema de Gestión de la Seguridad Alimentaria",
        description:
            "La ISO 22000 es una norma internacional que establece los requisitos para un sistema de gestión" +
            " de la seguridad alimentaria. Su objetivo es garantizar la inocuidad de los alimentos a lo largo de toda " +
            "la cadena de suministro, desde la producción hasta el consumo.",
        certifiedBy: "SCC",
    },
    {
        src: "/iso-certificacions/ISO-27701.webp",
        title: "ISO 27701",
        subtitle: "Sistema de Gestión de la Seguridad Alimentaria",
        description:
            "La ISO 27701 es una norma que proporciona directrices para la gestión de la privacidad de la información " +
            "en sistemas de gestión de la seguridad de la información. Su objetivo es ayudar a las organizaciones a " +
            "proteger datos personales y cumplir con las regulaciones de privacidad, como el GDPR.",
        certifiedBy: "UAF",
    },
    {
        src: "/iso-certificacions/ISO-27001.webp",
        title: "ISO 27001",
        subtitle: "Sistema de Gestión de Seguridad de la Información",
        description:
            "La ISO 27001 es una norma internacional que establece los requisitos para un sistema de gestión de seguridad " +
            "de la información. Su objetivo es proteger la confidencialidad, integridad y disponibilidad de la información en " +
            "las organizaciones, minimizando riesgos y garantizando un enfoque sistemático en la gestión de la seguridad.",
        certifiedBy: "SCC, KAB",
    },
    {
        src: "/iso-certificacions/ISO-37001.webp",
        title: "ISO 37001",
        subtitle: "Sistema de Gestión Anti soborno",
        description:
            "La ISO 37001 es una norma internacional que especifica los requisitos para establecer, implementar y mantener un " +
            "sistema de gestión anti-soborno. Su objetivo es ayudar a las organizaciones a prevenir, detectar y abordar el soborno, " +
            "promoviendo una cultura de ética y cumplimiento.",
        certifiedBy: "SCC",
    },
    {
        src: "/iso-certificacions/ISO-45001.webp",
        title: "ISO 45001",
        subtitle: "Sistema de Gestión de Seguridad y Salud en el Trabajo",
        description:
            "La ISO 45001 es una norma internacional que establece los requisitos para un sistema de gestión de salud y seguridad en " +
            "el trabajo. Su objetivo es mejorar la seguridad laboral, reducir riesgos y promover un ambiente de trabajo seguro y " +
            "saludable para los empleados.",
        certifiedBy: "SCC",
    },
    {
        src: "/iso-certificacions/ISO-39001.webp",
        title: "ISO 39001",
        subtitle: "Sistema de Gestión de la Seguridad Vial",
        description:
            "La ISO 39001 es una norma internacional que proporciona un marco para la gestión de la seguridad vial. Su objetivo" +
            " es reducir la cantidad de muertes y lesiones graves en accidentes de tráfico mediante la mejora de la seguridad " +
            "en las operaciones de transporte y la gestión de riesgos viales.",
        certifiedBy: "Intercert",
    },
    {
        src: "/iso-certificacions/ISO-50001.webp",
        title: "ISO 50001",
        subtitle: "Sistema de Gestión Energética",
        description:
            "La ISO 50001 es una norma internacional que establece los requisitos para un sistema de gestión de la energía." +
            " Su objetivo es ayudar a las organizaciones a mejorar su eficiencia energética, reducir costos y minimizar el " +
            "impacto ambiental asociado al consumo de energía.",
        certifiedBy: "SCC",
    },
    {
        src: "/iso-certificacions/ISO-26000.webp",
        title: "ISO 26000",
        subtitle: "Guía de Responsabilidad Social",
        description:
            "La ISO 26000 es una norma que proporciona directrices sobre la responsabilidad social de las organizaciones. " +
            "Su objetivo es ayudar a las empresas a operar de manera ética y sostenible, considerando el impacto social, " +
            "ambiental y económico de sus actividades.",
        certifiedBy: "SCC",
    },
    {
        src: "/iso-certificacions/ISO-21001.webp",
        title: "ISO 21001",
        subtitle: "Sistema de Gestión Para Organizaciones Educativas",
        description:
            "La ISO 21001 es una norma internacional que establece un marco para los sistemas de gestión de " +
            "organizaciones educativas. Su objetivo es mejorar la calidad de la educación y asegurar que las " +
            "instituciones ofrezcan resultados de aprendizaje efectivos y relevantes para los estudiantes.",
        certifiedBy: "UAF",
    },
    {
        src: "/iso-certificacions/ISO-20000-1.webp",
        title: "ISO 20000-1",
        subtitle: "Sistema de Gestión de Servicios de TI",
        description:
            "La ISO 20000-1 es una norma internacional que especifica los requisitos para un sistema de gestión " +
            "de servicios de TI. Su objetivo es garantizar la entrega de servicios de calidad y la mejora continua en la " +
            "gestión de servicios, alineando la tecnología con las necesidades del negocio.",
        certifiedBy: "UAF",
    },
    {
        src: "/iso-certificacions/ISO-22301.webp",
        title: "ISO 22301",
        subtitle: "Sistema de Gestión de Continuidad del Negocio",
        description:
            "La ISO 22301 es una norma internacional que establece los requisitos para un sistema de gestión de la continuidad " +
            "del negocio. Su objetivo es ayudar a las organizaciones a prepararse, responder y recuperarse de interrupciones, " +
            "garantizando la continuidad de sus operaciones críticas.",
        certifiedBy: "UAF",
    },    {
        src: "/iso-certificacions/iso90003.webp",
        title: "ISO 13485",
        subtitle: "Sistema de Gestión de la Calidad para Dispositivos Médicos",
        description:
            "La ISO 13485 es una norma internacional que especifica los requisitos para un sistema de gestión de calidad " +
            "en la industria de dispositivos médicos. Su objetivo es asegurar que las organizaciones diseñen, desarrollen " +
            "y fabriquen productos seguros y efectivos, cumpliendo con las regulaciones aplicables.",
        certifiedBy: "UAF",
    },    {
        src: "/iso-certificacions/iso90003.webp",
        title: "ISO 9001",
        subtitle: "Sistema de Gestión de Calidad",
        description:
            "ISO 9001 es una norma internacional que establece criterios para un sistema de gestión de calidad...",
        certifiedBy: "SCC, KAB",
    },    {
        src: "/iso-certificacions/iso90003.webp",
        title: "ISO 9001",
        subtitle: "Sistema de Gestión de Calidad",
        description:
            "ISO 9001 es una norma internacional que establece criterios para un sistema de gestión de calidad...",
        certifiedBy: "SCC, KAB",
    },    {
        src: "/iso-certificacions/iso90003.webp",
        title: "ISO 9001",
        subtitle: "Sistema de Gestión de Calidad",
        description:
            "ISO 9001 es una norma internacional que establece criterios para un sistema de gestión de calidad...",
        certifiedBy: "SCC, KAB",
    },    {
        src: "/iso-certificacions/iso90003.webp",
        title: "ISO 9001",
        subtitle: "Sistema de Gestión de Calidad",
        description:
            "ISO 9001 es una norma internacional que establece criterios para un sistema de gestión de calidad...",
        certifiedBy: "SCC, KAB",
    },    {
        src: "/iso-certificacions/iso90003.webp",
        title: "ISO 9001",
        subtitle: "Sistema de Gestión de Calidad",
        description:
            "ISO 9001 es una norma internacional que establece criterios para un sistema de gestión de calidad...",
        certifiedBy: "SCC, KAB",
    },    {
        src: "/iso-certificacions/iso90003.webp",
        title: "ISO 9001",
        subtitle: "Sistema de Gestión de Calidad",
        description:
            "ISO 9001 es una norma internacional que establece criterios para un sistema de gestión de calidad...",
        certifiedBy: "SCC, KAB",
    },    {
        src: "/iso-certificacions/iso90003.webp",
        title: "ISO 9001",
        subtitle: "Sistema de Gestión de Calidad",
        description:
            "ISO 9001 es una norma internacional que establece criterios para un sistema de gestión de calidad...",
        certifiedBy: "SCC, KAB",
    },    {
        src: "/iso-certificacions/iso90003.webp",
        title: "ISO 9001",
        subtitle: "Sistema de Gestión de Calidad",
        description:
            "ISO 9001 es una norma internacional que establece criterios para un sistema de gestión de calidad...",
        certifiedBy: "SCC, KAB",
    },    {
        src: "/iso-certificacions/iso90003.webp",
        title: "ISO 9001",
        subtitle: "Sistema de Gestión de Calidad",
        description:
            "ISO 9001 es una norma internacional que establece criterios para un sistema de gestión de calidad...",
        certifiedBy: "SCC, KAB",
    }
];

export default function ImpartialityPolicyPage() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div
                className="w-full py-12 md:py-24 lg:py-40"
                style={{
                    backgroundImage: `url(${bg.src})`,
                    width: "100%",
                    objectFit: "contain",
                }}
            >
                <h1 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                    Certificación de Sistemas de Gestión
                </h1>
                <span className="block text-center text-xl font-bold italic tracking-tighter sm:text-2xl md:text-3xl text-white">
          "Obtén el sello de confianza que tu organización necesita"
        </span>
            </div>
            <div className="flex flex-col px-4 max-w-5xl my-12">
            <span className="leading-7 [&:not(:first-child)]:mt-6">
              En la actualidad, en el Mercado Internacional, las empresas están tomando mayor conciencia de la
              importancia que tiene el certificarse bajo normativas internacionales ISO.
            </span>
                    <span className="leading-7 [&:not(:first-child)]:mt-6">
              En el mercado de hoy en día exige evidencia de calidad, seguridad, ética y compromiso con el medio
              ambiente en los procesos productivos, industriales y de servicios, para garantizar un estándar de
              excelencia y desarrollo sostenible.
            </span>
                    <span className="leading-7 [&:not(:first-child)]:mt-6">
              La crisis, la globalización y los avances tecnológicos han cambiado la naturaleza de los negocios y le
              han dado una nueva definición a un concepto clave para que la economía tenga éxito: la confianza. La
              confianza se construye mediante la transparencia en todo proceso, se requiere que las organizaciones
              brinden la información necesaria de su estado actual y para que este proceso sea más transparente aún,
              se necesita que un tercero especializado recopile, analice, estructure la información con rigor, recomiende
              y otorgue la certificación.
            </span>
                    <span className="leading-7 [&:not(:first-child)]:mt-6">
              La certificación es utilizada como herramienta de generación de confianza en las empresas, en los mercados
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


            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6 px-2 sm:px-4 md:px-8 lg:px-16 pt-5 pb-20">
                {images.map((item, index) => {
                    const isHovered = activeIndex === index;
                    return (
                        <div
                            key={index}
                            className="relative group overflow-hidden"
                            onClick={() => setActiveIndex(isHovered ? null : index)} // Activa en móviles con touch
                        >
                            <img src={item.src} alt={item.title} className="w-full h-auto block" />
                            <div className={`absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-80 group-active:opacity-80 transition-opacity p-4 text-white text-center text-xs sm:text-sm md:text-base ${isHovered ? 'opacity-80' : ''}`}>
                                <p className="text-[10px] sm:text-[10px]">{item.description}</p>
                                <p className="font-bold mt-2 text-[8px] sm:text-[8px] md:text-base lg:text-base">Certificados por: {item.certifiedBy}</p>
                            </div>
                            <div className="text-center font-bold text-[#1f186e] text-sm sm:text-base md:text-lg lg:text-xl mt-2">
                                {item.title}
                            </div>
                            <div className="text-center text-[#0c092e] text-xs sm:text-sm md:text-base">
                                {item.subtitle}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

