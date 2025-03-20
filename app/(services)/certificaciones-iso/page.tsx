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
        </div>
    );
}