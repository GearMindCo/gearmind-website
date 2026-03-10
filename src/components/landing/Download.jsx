export default function DownloadCTA() {
  return (
    <section className="relative w-full pt-10">
      
      {/* Container Full Width Dividido (60% Esquerda / 40% Direita) */}
      <div className="flex flex-col lg:flex-row w-full min-h-[60vh] mt-5">
        
        {/* LADO ESQUERDO: A Promessa e o Input (Sem grids, apenas um glow suave) */}
        <div className="w-full lg:w-3/5 px-8 py-24 md:px-16 lg:px-24 xl:px-32 flex flex-col justify-center relative bg-black">
          {/* Luz de fundo orgânica e assimétrica */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(249,115,22,0.08),transparent_50%)] pointer-events-none"></div>
          
          <div className="relative z-10">
            <span className="text-orange-500 font-bold tracking-[0.3em] text-xs uppercase mb-6 block flex items-center gap-3">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              Acesso Antecipado
            </span>
            
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8 leading-[1.05]">
              A IA DO SEU MOTOR <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-300 italic">
                NO SEU BOLSO.
              </span>
            </h2>
            
            <p className="text-gray-400 text-lg lg:text-xl font-light leading-relaxed mb-10 max-w-xl">
              O aplicativo nativo do GearMind está na fase final de calibração preditiva. 
              Entre para a lista de espera e seja o primeiro a plugar sua moto na nossa rede quando o sistema for ao ar.
            </p>
            
            {/* Formulário com cantos retos (Design mais brutalista/tecnológico) */}
            <div className="flex flex-col sm:flex-row gap-0 max-w-xl shadow-2xl">
              <input 
                type="email" 
                placeholder="Seu e-mail de piloto..." 
                className="flex-grow px-6 py-5 bg-white/[0.03] border border-white/10 sm:border-r-0 focus:bg-white/[0.05] focus:outline-none focus:border-orange-500 text-white transition-all"
              />
              <button className="px-10 py-5 bg-orange-500 text-black font-black uppercase tracking-widest hover:bg-orange-400 active:bg-orange-600 transition-colors whitespace-nowrap">
                Entrar na Fila
              </button>
            </div>
          </div>
        </div>

        {/* LADO DIREITO: Status das Lojas (Fundo cinza escuro para contraste pesado) */}
        <div className="w-full lg:w-2/5 bg-[#0a0a0a] border-l border-white/5 px-8 py-24 md:px-16 flex flex-col justify-center items-start lg:items-center relative">
          
          {/* Watermark Gigante de "DEV" no fundo para compor o visual */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-black text-white/[0.02] pointer-events-none select-none">
            DEV
          </div>
          
          <div className="w-full max-w-sm space-y-4 relative z-10">
            <p className="text-gray-500 text-xs font-bold tracking-[0.2em] uppercase mb-8 text-left border-b border-white/10 pb-4">
              Status das Plataformas
            </p>
            
            {/* Botão iOS Bloqueado */}
            <div className="w-full flex items-center justify-between p-6 bg-black border border-white/5 opacity-40 grayscale cursor-not-allowed transition-all">
              <div className="flex items-center gap-4">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.74 3.58-.74 2.3.06 4.01 1.05 4.88 2.62-4.08 2.37-3.4 8.24.62 9.87-.85 1.94-2.12 4.09-4.16 4.42v.02zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">iOS</div>
                  <div className="text-lg text-white font-medium">App Store</div>
                </div>
              </div>
              <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            </div>

            {/* Botão Android Bloqueado */}
            <div className="w-full flex items-center justify-between p-6 bg-black border border-white/5 opacity-40 grayscale cursor-not-allowed transition-all">
              <div className="flex items-center gap-4">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.09 3.03C3.69 3.33 3.5 3.86 3.5 4.54v14.92c0 .68.19 1.21.59 1.51L14.46 12 4.09 3.03z" />
                  <path d="M15.54 13.06l3.54 2.05c1.17.67 1.17 1.76 0 2.44l-1.42.82-5.58-4.82 3.46-3.46v.01z" />
                  <path d="M15.54 10.94L12.08 7.48 17.66 2.66l1.42.82c1.17.68 1.17 1.77 0 2.44l-3.54 2.05v.01z" />
                  <path d="M4.09 3.03l10.37 8.97-2.38 2.38L4.09 3.03z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Android</div>
                  <div className="text-lg text-white font-medium">Google Play</div>
                </div>
              </div>
              <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}