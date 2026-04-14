import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const ProjectCard = ({ project, t, isExpanded }) => {
  // when expanded: returns slider
  if (isExpanded) {
    return (
      <div className="w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#020617]">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect={'fade'}
          speed={1000}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="w-full h-full"
        >
          {(project.images || []).map((img, index) => (
            <SwiperSlide key={index}>
              <img 
                src={img} 
                alt="Project Detail" 
                className="w-full h-full object-contain bg-[#020617]" 
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }

  // when not expanded: return standard grid card.
  return (
    <div className="bg-[#0f172a]/50 backdrop-blur-xl border border-white/10 rounded-3xl p-5 flex flex-col gap-4 hover:border-blue-500/50 transition-all group h-full">
      <div>
        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight">
          {project.title}
        </h3>
        <p className="text-gray-400 text-xs mt-1 line-clamp-2">{project.description}</p>
      </div>

      <div className="relative aspect-video rounded-xl overflow-hidden border border-white/5 shadow-inner">
        <img 
          src={project.images?.[0]} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 to-transparent"></div>
      </div>

      <div className="flex flex-wrap gap-2">
        {(project.techStack || []).slice(0, 3).map((tech) => (
          <span key={tech} className="text-[9px] uppercase font-bold px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded text-blue-300">
            {tech}
          </span>
        ))}
      </div>

      <button className="w-full py-3 bg-blue-600/10 border border-blue-600/50 hover:bg-blue-600 text-blue-400 hover:text-white font-bold rounded-xl transition-all text-sm">
        {t?.download}
      </button>
    </div>
  );
};

export default ProjectCard;