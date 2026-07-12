import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, Linkedin, Mail, ChevronRight, Download, Award, MessageCircle, Globe } from 'lucide-react';
import { content, Language } from './data';

export default function App() {
  const [language, setLanguage] = useState<Language>('pt');
  const [activeSection, setActiveSection] = useState('sobre');
  const [heroText, setHeroText] = useState("");
  const mainRef = useRef<HTMLElement>(null);
  
  const data = content[language];
  const fullHeroText = data.hero.fullHeroText;

  useEffect(() => {
    setHeroText("");
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullHeroText.length) {
        setHeroText(fullHeroText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [fullHeroText]);

  // Sincronizando navegação pelo dock com a div principal
  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element && mainRef.current) {
      const mainEl = mainRef.current;
      const targetPosition = element.offsetTop - 100; // offset para o header
      const startPosition = mainEl.scrollTop;
      const distance = targetPosition - startPosition;
      const duration = 1000; // Duração da animação em milissegundos
      let start: number | null = null;

      // Função de easing para um scroll suaaave (easeInOutQuart)
      const easeInOutQuart = (t: number) => t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;

      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percent = Math.min(progress / duration, 1);
        
        mainEl.scrollTop = startPosition + distance * easeInOutQuart(percent);

        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    }
  };

  // Simples scroll spy para atualizar o dock
  useEffect(() => {
    const handleScroll = () => {
      if (!mainRef.current) return;
      const scrollPosition = mainRef.current.scrollTop + 200;
      
      const sections = data.navItems.map(item => document.getElementById(item.id));
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    const mainEl = mainRef.current;
    if (mainEl) {
      mainEl.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (mainEl) mainEl.removeEventListener('scroll', handleScroll);
    };
  }, [data.navItems]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'pt' ? 'en' : 'pt');
  };

  return (
    <div className="flex flex-col h-screen  bg-[#000000] text-[#f5f5f7] font-sans selection:bg-white/30 selection:text-white">
      
      {/* HEADER FIXO - Efeito Glassmorphism (Apple Style) */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-black/50 backdrop-blur-md border-b border-white/10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-semibold tracking-tight"
        >
          André<span className="text-white/50">Knopp.</span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 text-sm font-medium text-white/70"
        >
          <div className="hidden sm:flex items-center gap-4 mr-4">
            <button onClick={() => scrollToSection('sobre')} className="hover:text-white transition-colors duration-300">
              {data.navItems.find(i => i.id === 'sobre')?.label}
            </button>
            <button onClick={() => scrollToSection('projetos')} className="hover:text-white transition-colors duration-300">
              {data.navItems.find(i => i.id === 'projetos')?.label}
            </button>
          </div>
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white/80 hover:text-white transition-all duration-300"
          >
            <Globe className="w-4 h-4" />
            <span className="uppercase text-xs tracking-wider">{language}</span>
          </button>
        </motion.div>
      </header>

      {/* ÁREA PRINCIPAL SCROLLÁVEL - "App Shell Main" */}
      <main 
        ref={mainRef}
        className="flex-1 overflow-y-auto pb-32 pt-24 px-6 md:px-12 lg:px-24"
      >
        <div className="max-w-4xl mx-auto space-y-32">
          
          {/* SECÇÃO: SOBRE / HERO */}
          <section id="sobre" className="min-h-[70vh] flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-sm font-semibold tracking-widest text-white/50 uppercase mb-4">
                {data.hero.badge}
              </h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60">
                {heroText.slice(0, 12)}
                {heroText.length >= 12 && <br className="hidden md:block"/>}
                {heroText.slice(12, 30)}
                {heroText.length >= 30 && <br className="hidden md:block"/>}
                {heroText.slice(30)}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="font-light inline-block ml-1"
                >
                  |
                </motion.span>
              </h1>
              <p className="max-w-3xl text-lg md:text-xl text-white/60 leading-relaxed font-light mb-10">
                {data.hero.description}
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <button onClick={() => scrollToSection('projetos')} className="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-white/90 hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                  {data.hero.btnProjects}
                </button>
                <a href="#contato" onClick={(e) => { e.preventDefault(); scrollToSection('contato'); }} className="px-6 py-3 bg-white/10 text-white font-medium rounded-full hover:bg-white/20 active:scale-95 border border-white/5 transition-all duration-300">
                  {data.hero.btnInfo}
                </a>
                <a href="https://wa.me/5551985760588" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white/10 text-[#25D366] font-medium rounded-full hover:bg-[#25D366]/20 active:scale-95 border border-[#25D366]/30 transition-all duration-300 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  {data.hero.btnWhatsApp}
                </a>
              </div>
            </motion.div>
          </section>

          {/* SECÇÃO: PROJETOS */}
          <section id="projetos" className="pt-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{data.sections.projects.title}</h2>
              <p className="text-white/50 font-light text-lg max-w-xl">{data.sections.projects.subtitle}</p>
            </motion.div>

            <div className="space-y-32 md:space-y-48">
              {data.projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24"
                >
                  <div className={`w-full lg:w-1/2 flex flex-col ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                    <div className="mb-6">
                      {project.logo ? (
                        <img 
                           src={project.logo} 
                           alt={`${project.title} logo`} 
                           className="h-20 sm:h-24 md:h-32 lg:h-40 w-auto object-contain object-left drop-shadow-xl -ml-2 sm:-ml-4" 
                        />
                      ) : (
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 flex items-center justify-center bg-white/5 backdrop-blur-xl rounded-xl text-2xl border border-white/10 shadow-xl">
                            {project.emoji}
                          </div>
                          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">{project.title}</h3>
                        </div>
                      )}
                    </div>
                    <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed mb-12">{project.description}</p>
                    
                    <div className="space-y-10 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px before:h-full before:w-px before:bg-white/10 mb-12">
                      {project.timeline.map((step, idx) => (
                        <div key={idx} className="relative flex gap-6 items-start group/step">
                            <div className="w-5 h-5 rounded-full border-4 border-[#000] bg-white/30 group-hover/step:bg-white group-hover/step:shadow-[0_0_15px_rgba(255,255,255,0.6)] shrink-0 mt-1 transition-all duration-300" />
                            <div>
                               <span className="text-xs font-bold text-white/40 tracking-widest uppercase mb-2 block">{step.date}</span>
                               <h5 className="text-white/90 font-medium text-xl mb-2">{step.title}</h5>
                               <p className="text-base text-white/50 leading-relaxed max-w-lg">{step.description}</p>
                            </div>
                        </div>
                      ))}
                    </div>

                    <div>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black hover:bg-white/90 rounded-full font-medium transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-105 active:scale-95">
                        {data.sections.projects.btnAccess} {project.title} <ChevronRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <div className={`w-full lg:w-1/2 flex justify-center relative ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full max-w-md lg:max-w-3xl object-contain drop-shadow-2xl"
                      style={{ maxHeight: '600px' }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* SECÇÃO: CURRÍCULO / EXPERIÊNCIA */}
          <section id="experiencia" className="pt-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{data.sections.experience.title}</h2>
              <p className="text-white/50 font-light text-lg max-w-xl">{data.sections.experience.subtitle}</p>
            </motion.div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-white/10">
              {data.experience.map((exp, index) => (
                <motion.div 
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  {/* Ponto na timeline */}
                  <div className="flex items-center justify-center w-5 h-5 rounded-full border-4 border-black bg-white/30 group-hover:bg-white group-hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] shadow absolute left-0 md:left-1/2 -translate-x-1/2 transition-colors duration-300" />
                  
                  {/* Card Content */}
                  <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-3xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 ml-auto md:ml-0">
                    <span className="text-sm font-medium text-white/40 tracking-wider uppercase">{exp.period}</span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <h4 className="text-white/60 font-medium mb-3">{exp.company}</h4>
                    <p className="text-white/50 font-light text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* SECÇÃO: FORMAÇÃO */}
          <section id="formacao" className="pt-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{data.sections.education.title}</h2>
              <p className="text-white/50 font-light text-lg max-w-xl">{data.sections.education.subtitle}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white/90 border-b border-white/10 pb-4">{data.sections.education.academic}</h3>
                {data.education.map((edu, idx) => (
                  <motion.div 
                    key={edu.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-5 rounded-2xl bg-white/5 border border-white/5"
                  >
                    <span className="text-xs font-semibold text-white/40 tracking-wider uppercase">{edu.period}</span>
                    <h4 className="text-lg font-medium mt-1">{edu.title}</h4>
                    <p className="text-white/50 text-sm">{edu.institution}</p>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white/90 border-b border-white/10 pb-4">{data.sections.education.certs}</h3>
                <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
                  <ul className="space-y-4">
                    {data.certifications.map((cert, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <Award className="w-5 h-5 text-white/40 shrink-0 mt-0.5" />
                        <span className="text-white/70 font-light">{cert}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* SECÇÃO: CONTATO */}
          <section id="contato" className="pt-24 pb-20 border-t border-white/10 mt-20 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{data.sections.contact.title}</h2>
              <p className="text-white/50 font-light text-lg mb-10 max-w-sm mx-auto">
                {data.sections.contact.subtitle}
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a href="https://www.linkedin.com/in/andreknopp" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#0A66C2]/20 hover:border-[#0A66C2]/50 hover:text-[#0A66C2] transform hover:-translate-y-1 transition-all duration-300">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://wa.me/5551985760588" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#25D366]/20 hover:border-[#25D366]/50 hover:text-[#25D366] transform hover:-translate-y-1 transition-all duration-300">
                  <MessageCircle className="w-6 h-6" />
                </a>
                <a href="mailto:knoppdasneves@gmail.com" className="h-14 px-8 rounded-2xl bg-white text-black flex items-center gap-2 font-medium hover:bg-white/90 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transform hover:-translate-y-1 transition-all duration-300">
                  <Mail className="w-5 h-5" />
                  {data.sections.contact.email}
                </a>
              </div>
              <p className="mt-8 text-white/40 text-sm">
                <a href="https://wa.me/5551985760588" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors underline underline-offset-4">
                  +55 (51) 98576-0588
                </a>
                <span className="mx-3 text-white/20">•</span>
                <a href="mailto:knoppdasneves@gmail.com" className="hover:text-white transition-colors underline underline-offset-4">
                  knoppdasneves@gmail.com
                </a>
              </p>
            </motion.div>
          </section>

          <footer className="pb-32 pt-8 text-center border-t border-white/5">
             <p className="text-white/30 text-xs font-light">
               &copy; {new Date().getFullYear()} andreknopp.com.br
             </p>
          </footer>
        </div>
      </main>

      {/* FOOTER DOCK FIXO - (Estilo macOS / iOS) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none w-full px-4 flex justify-center">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.2 }}
          className="pointer-events-auto bg-[#1d1d1f]/70 backdrop-blur-2xl border border-white/10 rounded-full p-2 flex items-center gap-1 sm:gap-2 shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
        >
          {data.navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative p-3 rounded-full flex items-center justify-center transition-all duration-300 group ${
                  isActive ? 'text-white' : 'text-white/40 hover:text-white/80 hover:bg-white/5'
                }`}
                aria-label={item.label}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-nav-bg"
                    className="absolute inset-0 bg-white/15 rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
                <Icon className={`w-5 h-5 relative z-10 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} strokeWidth={isActive ? 2.5 : 2} />
                
                {/* Tooltip Apple Style */}
                <div className="absolute -top-12 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-200 bg-[#2d2d2f] text-white text-xs font-medium py-1.5 px-3 rounded-lg shadow-xl pointer-events-none whitespace-nowrap">
                  {item.label}
                  {/* Seta do tooltip */}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#2d2d2f] rotate-45" />
                </div>
              </button>
            );
          })}
        </motion.div>
      </div>

    </div>
  );
}


