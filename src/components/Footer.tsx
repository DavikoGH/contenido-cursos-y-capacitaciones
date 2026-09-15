export default function Footer() {
  return (
    <footer className="bg-[#192956] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="flex items-center gap-3 text-white text-center">
            <img src="/Logo2SVG.svg" alt="Logo" className="h-10 w-auto shrink-0" />
            <span className="text-xl md:text-2xl font-bold tracking-tight">Contenido, Cursos y Capacitaciones</span>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-sm text-slate-300">
          <p>&copy; {new Date().getFullYear()} Contenido, Cursos y Capacitaciones. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
