"use client"; // Necessário se estiver usando Next.js App Router (Next 13+)

import { useState } from 'react';

export default function Hero() {
  // 1. Estados do Componente
  const [emailHero, setEmailHero] = useState('');

  // 2. Função de Captura de Lead
  const handleDirecionarLead = () => {
    // Validação básica para não enviar vazio
    if (!emailHero || !emailHero.includes('@')) {
      alert("Por favor, insira um e-mail válido para garantir seu acesso VIP.");
      return;
    }

    // AQUI ENTRA A SUA LÓGICA DE BANCO DE DADOS OU API (Ex: Supabase, Firebase, etc)
    console.log("Lead capturado com sucesso:", emailHero);
    
    // Feedback visual temporário (pode trocar por um Toast depois)
    alert(`Tudo certo! E-mail ${emailHero} na lista VIP do Mantu.`);
    
    // Limpa o campo após o envio
    setEmailHero('');
  };

  // 3. Renderização da Interface
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[100dvh] text-center overflow-hidden bg-black">
      
      {/* Imagem de Fundo com Zoom no Mobile */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="/fundo.jpg" 
          alt="Background Mantu" 
          className="w-full h-full object-cover opacity-40 transform scale-[1.7] md:scale-100 object-[50%_30%] md:object-center transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>

      {/* Brilho Azul Centralizado */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 blur-[300px] rounded-full z-10 pointer-events-none"></div>

      {/* Conteúdo Principal (Com o ajuste pt-24 no mobile para descer o texto) */}
      <div className="relative z-20 px-4 md:px-6 pt-24 md:pt-32 flex flex-col items-center justify-center h-full w-full">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 md:gap-3 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-blue-600/30 bg-blue-600/10 backdrop-blur-md mb-6 md:mb-8">
          <span className="relative flex h-2 md:h-2.5 w-2 md:w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 md:h-2.5 w-2 md:w-2.5 bg-blue-600"></span>
          </span>
          <span className="text-[9px] sm:text-[10px] md:text-xs font-bold tracking-[0.2em] text-blue-400 uppercase">
            Plataforma Online • IA em Calibração
          </span>
        </div>
        
        {/* Título */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-3 md:mb-6 tracking-tight leading-tight">
          CUIDE DA SUA MOTO <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-300 italic">
            DE FORMA INTELIGENTE.
          </span>
        </h1>
        
        {/* Descrição */}
        <p className="max-w-3xl text-gray-300 text-sm md:text-lg lg:text-xl mb-6 md:mb-12 leading-relaxed font-light">
          O Mantu é o cérebro que sua garagem precisava. Economize com trocas no tempo certo, proteja o desempenho original e cuide de quem te leva a qualquer lugar.
        </p>
        
        {/* Input e Botão */}
        {/* Input e Botão */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-[85%] sm:w-full max-w-[280px] sm:max-w-lg mx-auto">
          <input 
            type="email" 
            value={emailHero}
            onChange={(e) => setEmailHero(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleDirecionarLead()}
            placeholder="Seu melhor e-mail..." 
            className="w-full px-4 md:px-6 py-3 md:py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-600 transition-all backdrop-blur-sm text-sm md:text-base text-center sm:text-left"
          />
          <button 
            onClick={handleDirecionarLead}
            className="w-full sm:w-auto whitespace-nowrap px-6 md:px-8 py-3 md:py-4 bg-blue-600 hover:bg-blue-700 text-black font-black uppercase tracking-wide rounded-xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.3)] text-sm md:text-base">
            Acesso VIP à IA
          </button>
        </div>

        {/* Rodapé do Hero */}
        <p className="mt-3 md:mt-6 text-[10px] md:text-sm text-gray-500 font-medium">
          Seja o primeiro a testar o cérebro do Mantu quando ele ligar.
        </p>
      </div>
    </section>
  );
}