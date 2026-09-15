import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = 'Curso o Capacitación';

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Speed of typing in ms

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-slate-50 pt-20 pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513258496099-48162023cb23?auto=format&fit=crop&q=80&w=2000&h=800')] bg-cover bg-center opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <span className="inline-block py-2 px-5 rounded-full bg-blue-100 text-blue-700 text-2xl font-semibold mb-6">
            Brindamos CONTENIDO de Valor y <span className="font-extrabold">ASESORÍA Educativa</span>
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#192956] tracking-tight leading-tight mb-6">
            Encuentra tu próximo <span className="text-[#15cc38] relative inline-block">
              {text}
              <motion.span 
                animate={{ opacity: [1, 0] }} 
                transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                className="absolute -right-2 top-0 bottom-0 w-[3px] bg-[#15cc38]"
              />
            </span>
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Diversas opciones presenciales y online para impulsar tu carrera, mejorar tus habilidades o aprender algo nuevo.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
