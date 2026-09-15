import React from 'react';
import { Code, Briefcase, Palette, BookOpen, Calculator, Wrench, Brain, Monitor, Cpu, Mic, Megaphone, Zap } from 'lucide-react';
import { categories } from '../data';
import { motion } from 'motion/react';

const iconMap: Record<string, React.ElementType> = {
  Code, Briefcase, Palette, BookOpen, Calculator, Wrench, Brain, Monitor, Cpu, Mic, Megaphone, Zap
};

export default function CategoryGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#192956] mb-4">Te presentamos nuestras especialidades</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Descubre oportunidades de aprendizaje en las áreas más demandadas del mercado.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl mx-auto">
          {categories.map((category, index) => {
            const Icon = iconMap[category.iconName] || BookOpen;
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group flex flex-col items-center text-center p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-lg hover:border-blue-100 transition-all w-[calc(50%-0.5rem)] md:w-[230px] min-h-[280px]"
              >
                <div className="h-14 w-14 rounded-full bg-[#15cc38]/15 text-[#15cc38] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#15cc38] group-hover:text-white transition-all">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="font-semibold text-[#192956] mb-2 min-h-[3rem] flex items-center justify-center">{category.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed flex-grow">{category.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
