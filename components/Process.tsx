const steps=[
 ["01","FRAME","Understand the problem before touching the pixels."],
 ["02","EXPLORE","Try structure, interaction and visual direction quickly."],
 ["03","BUILD","Turn the strongest idea into working software."],
 ["04","REFINE","Remove noise until every pixel has a reason."],
];

export default function Process(){
 return <section id="about" className="px-5 py-20 md:px-10 md:py-28">
  <div className="mx-auto max-w-[1480px]">
   <div className="border-t-2 border-foreground pt-4">
    <div className="text-sm font-bold uppercase">04 / Process</div>
    <div className="mx-auto mt-8 w-full max-w-[980px]">
     <h2 className="text-4xl font-bold leading-[.85] tracking-[-.07em] md:text-7xl">MAKE IT CLEAR.<br/>MAKE IT USEFUL.<br/><span className="text-purple">MAKE IT BEAUTIFUL.</span></h2>
     <div className="mt-12 border-y-2 border-foreground">
      {steps.map(([no,title,text])=><div key={no} className="grid gap-4 border-b-2 border-foreground py-5 last:border-b-0 md:grid-cols-[70px_160px_1fr]">
       <span className="text-xs font-bold">{no}</span><h3 className="font-bold">{title}</h3><p className="text-xs leading-5 text-muted">{text}</p>
      </div>)}
     </div>
    </div>
   </div>
  </div>
 </section>
}
