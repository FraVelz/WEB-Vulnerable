"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

import { withBasePath } from "@/lib/base-path";

type NavLink = { href: string; label: string };

const NAV_LINKS: NavLink[] = [
  { href: "/hacking", label: "Hacking" },
  { href: "/flags", label: "Banderas" },
];

export function Header() {
  const pathname = usePathname() ?? "";
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  const [isUserOpen, setIsUserOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const userMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      const target = e.target as Node | null;
      if (!target) return;
      if (!userMenuRef.current?.contains(target)) setIsUserOpen(false);
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  const logoSrc = useMemo(() => withBasePath("/icon.svg"), []);
  const avatarSrc = useMemo(() => withBasePath("/logo.webp"), []);

  return (
    <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
      <div className="container-lab">
        <div className="flex items-center justify-between h-16">
          <button
            type="button"
            className="flex items-center gap-3 group"
            onClick={() => window.location.reload()}
          >
            <img className="w-8 h-8" src={logoSrc} alt="Logo de la Web" />

            <div className="hidden sm:block">
              <span className="font-semibold text-white transition-colors">
                Vulnerable Web
              </span>
              <span className="text-xs text-slate-500 block">Educational</span>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  isActive(link.href)
                    ? "bg-slate-800 text-white"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50",
                ].join(" ")}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              <span className="text-xs text-amber-300 font-medium">
                Entorno de Laboratorio
              </span>
            </div>

            <div className="relative" ref={userMenuRef}>
              <button
                type="button"
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-800 transition-colors"
                aria-label="Menú de usuario"
                onClick={() => setIsUserOpen((v) => !v)}
              >
                <img
                  className="h-8 w-8 rounded-full"
                  src={avatarSrc}
                  alt="Foto de perfil del Usuario"
                />
                <svg
                  className="w-4 h-4 text-slate-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              <div
                className={[
                  "absolute right-0 mt-2 w-48 py-2 bg-slate-800 rounded-lg border border-slate-700 shadow-xl",
                  isUserOpen ? "block" : "hidden",
                ].join(" ")}
              >
                <div className="px-4 py-2 border-b border-slate-700">
                  <p className="text-sm font-medium text-white">Usuario Lab</p>
                  <p className="text-xs text-slate-400">lab@example.com</p>
                </div>
                <Link
                  href="/profile"
                  className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white"
                  onClick={() => setIsUserOpen(false)}
                >
                  Perfil
                </Link>
                <Link
                  href="/settings"
                  className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white"
                  onClick={() => setIsUserOpen(false)}
                >
                  Configuración
                </Link>
                <hr className="my-2 border-slate-700" />
                <Link
                  href="/logout"
                  className="block px-4 py-2 text-sm text-red-400 hover:bg-slate-700 hover:text-red-300"
                  onClick={() => setIsUserOpen(false)}
                >
                  Cerrar Sesión
                </Link>
              </div>
            </div>

            <button
              type="button"
              className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Abrir menú"
              onClick={() => setIsMobileOpen((v) => !v)}
            >
              <svg
                className="w-6 h-6 text-slate-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className={["md:hidden pb-4", isMobileOpen ? "block" : "hidden"].join(" ")}>
          <div className="flex flex-col gap-1 pt-4 border-t border-slate-800">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  isActive(link.href)
                    ? "bg-slate-800 text-white"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50",
                ].join(" ")}
                onClick={() => setIsMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

