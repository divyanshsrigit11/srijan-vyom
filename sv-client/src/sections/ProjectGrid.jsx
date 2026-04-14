import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { X, Download, FileText } from 'lucide-react';

const ProjectGrid = ({ t }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-white mb-10">{t?.projectGrid}</h2>
      
      {/* The Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} onClick={() => setSelectedProject(project)}>
             <ProjectCard project={project} t={t} isExpanded={false} />
          </div>
        ))}
      </div>

      {/* The Expanded Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-[#020617]/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          ></div>

          {/* Expanded Content Box */}
          <div className="relative w-full max-w-5xl bg-[#0f172a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row min-h-[500px] max-h-[85vh]">
            
            <button onClick={() => setSelectedProject(null)} className="absolute top-5 right-5 z-50 p-2 bg-black/50 hover:bg-white/10 rounded-full text-white backdrop-blur-md">
              <X size={20} />
            </button>

            {/* Left: The Visual Tour (Set to 60% width) */}
            <div className="w-full md:w-3/5 p-4 md:p-8 bg-[#020617]/30 flex items-center justify-center">
              <ProjectCard project={selectedProject} t={t} isExpanded={true} />
            </div>

            {/* Right: The Project Details (Set to 40% width) */}
            <div className="w-full md:w-2/5 p-8 flex flex-col justify-center border-l border-white/5 bg-[#0f172a]">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-white mb-3 tracking-tighter">{selectedProject.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{selectedProject.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-10">
                {selectedProject.techStack?.map(tech => (
                  <span key={tech} className="text-[10px] text-blue-400 px-3 py-1 bg-blue-500/5 border border-blue-500/10 rounded-md font-mono">{tech}</span>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                <button className="flex items-center justify-center gap-2 w-full py-3.5 bg-white/5 border border-white/10 hover:bg-white/10 text-white text-sm rounded-xl transition-all">
                  <Download size={16} /> {t?.downloadImages}
                </button>
                <button className="flex items-center justify-center gap-2 w-full py-3.5 bg-white/5 border border-white/10 hover:bg-white/10 text-white text-sm rounded-xl transition-all">
                  <FileText size={16} /> {t?.downloadPDF}
                </button>
                <div className="h-4"></div> {/* Spacer */}
                <button className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all shadow-lg shadow-blue-600/20 text-sm">
                  {t?.download}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectGrid;