import { Star, MapPin, Clock, Video } from 'lucide-react';
import { featuredListings } from '../data';
import { motion } from 'motion/react';

export default function FeaturedListings() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 max-w-7xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold text-[#192956] mb-4">Próximos inicios</h2>
            <p className="text-slate-600">
              Encuentra y toma los cursos más buscados del momento
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {featuredListings.map((listing, index) => (
            <motion.div
              key={listing.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl hover:border-blue-200 transition-all flex flex-col group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden bg-slate-200">
                <img 
                  src={listing.image} 
                  alt={listing.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-white/90 backdrop-blur text-slate-800 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {listing.type}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-1 text-amber-500 text-sm font-medium mb-3">
                  <Star className="h-4 w-4 fill-current" />
                  <span>{listing.rating}</span>
                  <span className="text-slate-400 ml-1">({listing.reviews})</span>
                </div>
                
                <h3 className="font-bold text-xl text-[#192956] mb-4 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {listing.title}
                </h3>
                
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-4 text-slate-500 text-sm">
                    <div className="flex items-center gap-1.5">
                      {listing.format === 'Online' ? <Video className="h-4 w-4" /> : <MapPin className="h-4 w-4" />}
                      <span>{listing.format}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
