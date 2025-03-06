'use client'

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import {AlignJustifyIcon} from "lucide-react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const services: { title: string; href: string; description: string }[] = [
    {
        title: "Certificaciones ISO",
        href: "/certificaciones-iso",
        description:
            "Certificaciones de sistemas de gestión de calidad, medio ambiente, seguridad y salud en el trabajo, entre otros.",
    },
    {
        title: "Certificación de Personas",
        href: "/certificacion-de-personas",
        description:
            "Certificaciones de auditor líder, auditor interno, entre otros.",
    },
]

export default function IntercertHeader() {
    return (
        <header className="sticky top-0 z-40 w-full border-b bg-background">
            <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0 p-4">
                <div className="flex gap-6 md:gap-10">
                    <Link href="/" className="flex items-center ">
                        <h1> Intercert </h1>
                    </Link>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Link href='/' legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Inicio
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Servicios</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                        {services.map((component) => (
                                            <ListItem
                                                key={component.title}
                                                title={component.title}
                                                href={component.href}
                                            >
                                                {component.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href='/nosotros' legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Nosotros
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href='/parthners' legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Parthners
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            {/*
                            <NavigationMenuItem>
                                <Link href='#' legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Tienda
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                            TODO: verificar si la tienda sera otra pagina o como sera la implementacion de esta
                            */}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <Button asChild variant="outline" size="sm"
                            className="hidden md:flex">
                        <Link href="/contacto"> Contactanos </Link>
                    </Button>

                    <Button asChild size="sm">
                        <Link href="/vertificacion-certificado">
                            Verifica tu Certificado
                        </Link>
                    </Button>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className={`flex md:hidden`}>
                                <AlignJustifyIcon/>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuGroup>
                                <Link href='/'  passHref>
                                    <DropdownMenuItem>
                                        Inicio
                                    </DropdownMenuItem>
                                </Link>

                                <Link href='/certificaciones-iso'  passHref>
                                    <DropdownMenuItem>
                                        Certificaciones ISO
                                    </DropdownMenuItem>
                                </Link>

                                <Link href='/certificacion-de-personas' passHref>
                                    <DropdownMenuItem>
                                        Certificación de Personas
                                    </DropdownMenuItem>
                                </Link>

                                <Link href='/nosotros' passHref>
                                    <DropdownMenuItem>
                                        Nosotros
                                    </DropdownMenuItem>
                                </Link>

                                <Link href='/parthners' passHref>
                                    <DropdownMenuItem>
                                        Parthers
                                    </DropdownMenuItem>
                                </Link>

                                <Link href='/contacto' passHref>
                                    <DropdownMenuItem>
                                        Contacto
                                    </DropdownMenuItem>
                                </Link>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"