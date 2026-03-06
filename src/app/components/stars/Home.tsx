import image_684f383cb1a32af335831193660950adedf4ef88 from '@/assets/684f383cb1a32af335831193660950adedf4ef88.png';
import image_24fb3b67abce387a0124d0ae76b0e9fe68cd7bb2 from '@/assets/24fb3b67abce387a0124d0ae76b0e9fe68cd7bb2.png';
import image_2ed60adbcc0232bc5f8b573c2285104abe64643e from '@/assets/2ed60adbcc0232bc5f8b573c2285104abe64643e.png';
import image_da82f1f904dae8dd9aad31ee10da63c29d8a5937 from '@/assets/da82f1f904dae8dd9aad31ee10da63c29d8a5937.png';
import image_c5c4217966ccd203a12edf1e6f2fac93e291c0f9 from '@/assets/c5c4217966ccd203a12edf1e6f2fac93e291c0f9.png';

import React from 'react';
import { ArrowRight, Map, ShieldAlert, GraduationCap, Calendar, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const hasUpdates = true;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="flex flex-col w-full">

      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src={image_c5c4217966ccd203a12edf1e6f2fac93e291c0f9}
            alt="Satellite view of Andes mountains"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-6 z-10 relative text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 bg-teal-500/20 backdrop-blur-sm border border-teal-500/30 rounded-full text-teal-300 text-sm font-medium mb-6">
              Erasmus+ Capacity Building Project
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Spatial Tools for Assessing Risk in <span className="text-teal-400">Sudden Natural Hazards</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed">
              Empowering universities in Ecuador and Colombia with advanced geospatial technology to build resilient communities.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => onNavigate('project')}
                className="w-full sm:w-auto px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-teal-900/20 flex items-center justify-center gap-2"
              >
                Explore the Project <ArrowRight size={20} />
              </button>

              <button 
                onClick={() => onNavigate('partners')}
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 rounded-full font-semibold transition-all"
              >
                Meet Our Partners
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Mission Section */}
      <section className="py-20 md:py-32 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >

              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Bridging the Gap in <br/> Disaster Risk Management
              </h2>

              <div className="w-20 h-1.5 bg-teal-600 rounded-full mb-8" />

              <p className="text-slate-600 mb-6 leading-relaxed text-[18px]">
                The STARS Project is a transformative initiative designed to empower local communities and organizations to make informed decisions, minimize risks, and create safer societies—in Ecuador and Colombia—through the integration of cutting-edge geospatial technologies.
              </p>

              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                The project aims to bridge gaps in knowledge and capacity among higher education institutions, stakeholders, and communities by offering accessible and innovative training opportunities.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-teal-100 rounded-lg text-teal-700">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Education</h3>
                    <p className="text-sm text-slate-600">Curriculum modernization</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-orange-100 rounded-lg text-orange-700">
                    <Map size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Technology</h3>
                    <p className="text-sm text-slate-600">Geospatial tools training</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-700">
                    <ShieldAlert size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Resilience</h3>
                    <p className="text-sm text-slate-600">Disaster mitigation</p>
                  </div>
                </div>

              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >

              <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-teal-100 rounded-3xl -z-10 transform translate-x-8 -translate-y-8" />
              <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-orange-100 rounded-3xl -z-10 transform -translate-x-6 translate-y-6" />

              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3]">
                <ImageWithFallback 
                  src={image_684f383cb1a32af335831193660950adedf4ef88} 
                  alt="STARS project logo"
                  className="w-full h-full object-contain rounded-[10px]"
                />
              </div>

            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}