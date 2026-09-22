export default function Contact(){
 return <section id="contact" className="px-5 pb-8 pt-12 md:px-10 md:pt-20">
  <div className="mx-auto max-w-[1480px]">
   <div className="pixel-artboard bg-lavender p-3 md:p-5">
    <div className="pixel-grid relative min-h-[470px] overflow-hidden border-2 border-foreground bg-[#e8e3ef] p-6 md:min-h-[560px] md:p-10">
     <div className="absolute right-0 top-0 h-56 w-56 bg-purple/70"/>
     <div className="absolute bottom-0 left-[28%] h-48 w-48 bg-green/70"/>
     <div className="relative z-10 flex min-h-[410px] flex-col justify-between md:min-h-[500px]">
      <div className="flex justify-between text-[10px] font-bold uppercase"><span>05 / Contact</span><span>Open for conversations</span></div>
      <div><p className="mb-4 text-[10px] font-bold uppercase">Have an idea worth building?</p><h2 className="text-[clamp(4rem,10vw,10rem)] font-bold leading-[.72] tracking-[-.09em]">LET&apos;S<br/><span className="text-purple">MAKE IT.</span></h2></div>
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
       <p className="max-w-md text-xs leading-5 text-muted">A weird problem, a product idea, or something that needs shipping? Find me online.</p>
       <div className="flex gap-3">
        <a href="https://github.com/inputtext" className="pixel-button inline-flex items-center gap-2 bg-green px-5 py-3 text-xs font-bold uppercase">GitHub <GithubIcon size={14}/></a>
        <a href="https://www.linkedin.com/in/piyush-kanojiya-b78340358/" className="pixel-button inline-flex items-center gap-2 bg-paper px-5 py-3 text-xs font-bold uppercase">LinkedIn <Linkedin size={14}/></a>
       </div>
      </div>
     </div>
    </div>
   </div>
   <footer className="flex flex-col justify-between gap-3 py-7 text-[9px] font-bold uppercase md:flex-row"><span>PixelForge — Piyush Kanojiya</span><span>Everything built pixel by pixel / 2026</span></footer>
  </div>
 </section>
}
