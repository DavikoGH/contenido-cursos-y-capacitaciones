export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#192956] shadow-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-center">
        <div className="flex items-center gap-3 text-white">
          <img src="/Logo2SVG.svg" alt="Logo" className="h-8 w-auto shrink-0" />
          <span className="text-lg sm:text-xl font-bold tracking-tight text-center">
            Contenido, Cursos y Capacitaciones
          </span>
        </div>
      </div>
    </header>
  );
}
