export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 pt-15 pb-8 relative overflow-hidden">
      {/* Brilho sutil no fundo para dar profundidade */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[150px] bg-orange-500/10 blur-[100px] rounded-t-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          
          {/* Coluna 1: Marca e Missão */}
          <div className="col-span-1 md:col-span-2">
            {/* Transformei a logo em um link para o topo (#hero) */}
            <a href="#hero" className="text-2xl font-black text-white tracking-tighter italic block mb-4 hover:scale-105 origin-left transition-transform w-fit">
              GEAR<span className="text-orange-500">MIND</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-light">
              O primeiro cérebro artificial dedicado à manutenção de motocicletas. 
              Não espere o barulho para descobrir o problema.
            </p>
          </div>

          {/* Coluna 2: Links Rápidos (Sincronizados com o App.jsx) */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Plataforma</h3>
            <ul className="space-y-3">
              <li><a href="#hero" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Início</a></li>
              <li><a href="#solucao" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">A Solução IA</a></li>
              <li><a href="#comparacao" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Comparativo</a></li>
              <li><a href="#download" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Download do App</a></li>
            </ul>
          </div>

          {/* Coluna 3: Contato e Comunidade */}
        </div>

        {/* Linha de Direitos Autorais e Assinatura */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs list-none">
            &copy; {currentYear} GearMind. Todos os direitos reservados.
            <li><a href="https://github.com/GearMindCo/gearmind-website" className="text-gray-500 text-xs hover:text-orange-500 transition-colors text-sm">­Apoiar no GitHub</a></li>
          </p>
        </div>
      </div>
    </footer>
  );
}