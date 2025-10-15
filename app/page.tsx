import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Flame, Eye, Skull, Zap, Droplets, Hexagon, AlertTriangle, Clock } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-b from-background via-background to-black/95 -z-10" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,0,0,0.1),transparent_50%)] -z-10" />

      <div className="fixed top-20 right-20 w-32 h-32 opacity-5 pulse-glow">
        <Hexagon className="w-full h-full text-accent" />
      </div>
      <div className="fixed bottom-40 left-10 w-24 h-24 opacity-5 pulse-glow" style={{ animationDelay: "1s" }}>
        <Hexagon className="w-full h-full text-accent" />
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32 relative">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/50 px-4 py-2 rounded mb-6 flicker">
            <AlertTriangle className="w-4 h-4 text-accent" />
            <span className="text-sm font-bold text-accent uppercase tracking-wider">Vagas Limitadas</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-balance text-foreground drop-shadow-[0_0_30px_rgba(139,0,0,0.5)]">
            Templo das Sombras
          </h1>
          <div className="flex items-center gap-3 mb-8">
            <Skull className="w-8 h-8 text-accent pulse-glow" />
            <p className="text-2xl md:text-3xl text-accent font-bold italic">Sacerdotes de Asmodeus</p>
            <Skull className="w-8 h-8 text-accent pulse-glow" />
          </div>
          <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed mb-8 max-w-3xl font-medium">
            <span className="text-accent font-bold">PACTOS ANCESTRAIS.</span> Rituais de sangue e sigilos de poder.
            Canalizamos as energias demoníacas e forças primordiais de Asmodeus para manifestar seus desejos mais
            profundos e obscuros.
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl leading-relaxed">
            Não somos para todos. Apenas para aqueles que{" "}
            <span className="text-accent font-bold">ousam invocar os daemons</span> e enfrentar as trevas para
            conquistar poder verdadeiro. Trabalhamos com energias infernais que a maioria teme tocar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button
              size="lg"
              className="text-lg px-8 bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-[0_0_20px_rgba(139,0,0,0.5)] hover:shadow-[0_0_30px_rgba(139,0,0,0.7)] transition-all"
            >
              Fazer Pacto Agora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-accent/50 text-accent hover:bg-accent/10 bg-transparent"
            >
              Consulta Urgente
            </Button>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4 text-accent" />
            <span>
              Apenas <span className="text-accent font-bold">3 vagas</span> disponíveis esta semana
            </span>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16 border-y border-accent/30 bg-accent/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">24-48h</div>
              <p className="text-sm text-muted-foreground">Primeiros sinais do ritual</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">97%</div>
              <p className="text-sm text-muted-foreground">Taxa de manifestação</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">15+</div>
              <p className="text-sm text-muted-foreground">Anos de prática oculta</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Rituais de Poder</h2>
            <p className="text-xl text-accent font-bold">Canalizando energias demoníacas para transformar destinos</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-card border-accent/30 hover:border-accent hover:shadow-[0_0_30px_rgba(139,0,0,0.3)] transition-all group">
              <Droplets className="w-12 h-12 text-accent mb-4 pulse-glow" />
              <h4 className="text-2xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">
                Pacto de Sangue
              </h4>
              <p className="text-muted-foreground leading-relaxed mb-4">
                O ritual mais poderoso. Selamento através de sangue e sigilo para invocação direta dos daemons de
                Asmodeus. Manifestação garantida através de energias infernais.
                <span className="text-accent font-bold"> Irreversível e definitivo.</span>
              </p>
              <div className="flex items-center gap-2 text-sm text-accent">
                <AlertTriangle className="w-4 h-4" />
                <span className="font-bold">Apenas para comprometidos</span>
              </div>
            </Card>

            <Card className="p-8 bg-card border-accent/30 hover:border-accent hover:shadow-[0_0_30px_rgba(139,0,0,0.3)] transition-all group">
              <Eye className="w-12 h-12 text-accent mb-4 pulse-glow" />
              <h4 className="text-2xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">
                Visão Oculta
              </h4>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Revelação através dos oráculos demoníacos de Asmodeus. Canalizamos energias dos daemons para revelar o
                oculto, descobrir traições, encontre caminhos que outros não enxergam.{" "}
                <span className="text-accent font-bold">A verdade nua e crua.</span>
              </p>
              <div className="flex items-center gap-2 text-sm text-accent">
                <Zap className="w-4 h-4" />
                <span className="font-bold">Respostas imediatas</span>
              </div>
            </Card>

            <Card className="p-8 bg-card border-accent/30 hover:border-accent hover:shadow-[0_0_30px_rgba(139,0,0,0.3)] transition-all group">
              <Flame className="w-12 h-12 text-accent mb-4 pulse-glow" />
              <h4 className="text-2xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">
                Ritual de Dominação
              </h4>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Controle situações, pessoas e energias através do poder dos daemons. Trabalho especializado com forças
                infernais para conquista, amarração e domínio absoluto.{" "}
                <span className="text-accent font-bold">Sem piedade, sem falhas.</span>
              </p>
              <div className="flex items-center gap-2 text-sm text-accent">
                <Flame className="w-4 h-4" />
                <span className="font-bold">Resultados em 7 dias</span>
              </div>
            </Card>

            <Card className="p-8 bg-card border-accent/30 hover:border-accent hover:shadow-[0_0_30px_rgba(139,0,0,0.3)] transition-all group">
              <Skull className="w-12 h-12 text-accent mb-4 pulse-glow" />
              <h4 className="text-2xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">
                Proteção das Trevas
              </h4>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Escudo impenetrável criado com energias demoníacas contra ataques espirituais, inveja e magia negra. Os
                daemons de Asmodeus protegem os seus.{" "}
                <span className="text-accent font-bold">Ninguém toca quem é nosso.</span>
              </p>
              <div className="flex items-center gap-2 text-sm text-accent">
                <Skull className="w-4 h-4" />
                <span className="font-bold">Proteção vitalícia</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 bg-accent/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
            Eles Ousaram. Eles Conquistaram.
          </h2>

          <div className="space-y-6">
            <Card className="p-6 bg-card border-accent/30">
              <p className="text-foreground/90 leading-relaxed mb-4 italic">
                "Tentei tudo. TUDO. Nada funcionou até encontrar Paulo e Manuel. O ritual de dominação mudou minha vida
                em 5 dias. Hoje tenho o que sempre quis. Vale cada centavo."
              </p>
              <p className="text-sm text-accent font-bold">— M.S., São Paulo</p>
            </Card>

            <Card className="p-6 bg-card border-accent/30">
              <p className="text-foreground/90 leading-relaxed mb-4 italic">
                "Estava sendo atacado espiritualmente há meses. Ninguém conseguia resolver. A proteção de Asmodeus foi
                instantânea. Senti a diferença na mesma noite."
              </p>
              <p className="text-sm text-accent font-bold">— R.L., Rio de Janeiro</p>
            </Card>

            <Card className="p-6 bg-card border-accent/30">
              <p className="text-foreground/90 leading-relaxed mb-4 italic">
                "O pacto de sangue é real. Não é brincadeira. Se você está lendo isso e tem dúvidas, pare de perder
                tempo. Eles entregam o que prometem."
              </p>
              <p className="text-sm text-accent font-bold">— A.C., Minas Gerais</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Masters Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">Os Mestres das Trevas</h2>
          <p className="text-center text-accent text-lg mb-12 font-bold">
            Canalizadores das energias demoníacas de Asmodeus
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 bg-card border-accent/30 hover:border-accent transition-all">
              <div className="mb-6 overflow-hidden rounded-lg border-2 border-accent/50">
           <img
  src="/paulomago.jpeg"
  alt="Paulo - Oraculista e Magista"
  className="w-full h-80 object-cover"
/>

              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Eye className="w-10 h-10 text-accent pulse-glow" />
                  <h3 className="text-3xl font-bold text-foreground">Paulo</h3>
                </div>
                <p className="text-xl text-accent italic font-bold">Sacerdote e Oraculista</p>

                <div className="space-y-3 text-foreground/90 leading-relaxed">
                  <p className="font-bold text-accent">O Vidente das Trevas</p>
                  <p>
                    Iniciado aos 16 anos nos mistérios ocultos, Paulo carrega o dom ancestral da vidência. Sua conexão
                    com Asmodeus foi selada através de um pacto de sangue durante a lua negra de 2008, quando as portas
                    do inferno se abriram e os daemons responderam ao seu chamado.
                  </p>
                  <p>
                    Mestre em leitura de oráculos proibidos, sigilos de manifestação e rituais de abertura de caminhos
                    através de energias demoníacas. Seus trabalhos revelam verdades que destroem ilusões e abrem portais
                    para o impossível. Especialista em:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Consultas oraculares com cartas infernais</li>
                    <li>Sigilos de sangue para invocação de daemons</li>
                    <li>Rituais de visão além do véu</li>
                    <li>Canalização de energias demoníacas</li>
                    <li>Abertura de portais para forças infernais</li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-accent/30">
                  <p className="text-sm text-muted-foreground">
                    <span className="text-accent font-bold">15+ anos</span> canalizando as energias demoníacas de
                    Asmodeus
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-accent/30 hover:border-accent transition-all">
              <div className="mb-6 overflow-hidden rounded-lg border-2 border-accent/50">
                <img
                  src="/dark-powerful-sorcerer-warlock-with-intense-mystic.jpg"
                  alt="Manuel - Bruxo de Asmodeus"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Flame className="w-10 h-10 text-accent pulse-glow" />
                  <h3 className="text-3xl font-bold text-foreground">Manuel</h3>
                </div>
                <p className="text-xl text-accent italic font-bold">Sacerdote Bruxo de Asmodeus</p>

                <div className="space-y-3 text-foreground/90 leading-relaxed">
                  <p className="font-bold text-accent">O Executor das Trevas</p>
                  <p>
                    Nascido sob o signo de Escorpião durante um eclipse total, Manuel foi marcado pelos daemons desde o
                    berço. Sua iniciação nos cultos de Asmodeus aconteceu aos 18 anos, em um ritual de três noites que
                    quase lhe custou a vida - mas lhe deu acesso direto às energias infernais.
                  </p>
                  <p>
                    Bruxo sem piedade, seus rituais são intensos, definitivos e irreversíveis. Canaliza o poder bruto
                    dos daemons de Asmodeus sem filtros ou medos. Quando outros falham, Manuel invoca as forças que
                    garantem resultados. Especialista em:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Pactos de sangue com daemons definitivos</li>
                    <li>Rituais de dominação com energias infernais</li>
                    <li>Amarrações através de forças demoníacas</li>
                    <li>Proteção absoluta com escudo de daemons</li>
                    <li>Destruição de inimigos com energias das trevas</li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-accent/30">
                  <p className="text-sm text-muted-foreground">
                    <span className="text-accent font-bold">12+ anos</span> executando rituais com daemons de Asmodeus
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="mt-12 p-8 bg-gradient-to-br from-accent/10 to-background border-accent/50">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Skull className="w-12 h-12 text-accent pulse-glow" />
                <h3 className="text-2xl font-bold text-foreground">O Poder Combinado</h3>
                <Skull className="w-12 h-12 text-accent pulse-glow" />
              </div>
              <p className="text-lg text-foreground/90 leading-relaxed max-w-3xl mx-auto">
                Quando Paulo e Manuel trabalham juntos, as energias demoníacas se multiplicam. A visão oculta de Paulo
                combinada com o poder bruto de Manuel cria um canal direto com os daemons mais poderosos de Asmodeus.
                <span className="text-accent font-bold">
                  {" "}
                  Juntos, eles comandam forças que nenhum obstáculo resiste.
                </span>
              </p>
              <p className="text-sm text-muted-foreground italic">
                "Dois sacerdotes, um propósito: manifestar o poder dos daemons de Asmodeus no mundo material"
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 border-y border-accent/30 bg-gradient-to-b from-accent/5 to-background">
        <div className="max-w-3xl mx-auto text-center">
          <Skull className="w-16 h-16 text-accent mx-auto mb-6 pulse-glow" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Você Está Pronto?</h2>
          <p className="text-xl text-foreground/90 mb-8 leading-relaxed">
            Não aceitamos curiosos. Não trabalhamos com indecisos.
            <span className="text-accent font-bold"> Se você chegou até aqui, o chamado já foi feito.</span>
          </p>
          <p className="text-lg text-muted-foreground mb-12">
            Apenas 3 vagas disponíveis esta semana. Depois disso, a porta se fecha por tempo indeterminado.
          </p>

          <Button
            size="lg"
            className="text-xl px-12 py-6 bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-[0_0_30px_rgba(139,0,0,0.6)] hover:shadow-[0_0_50px_rgba(139,0,0,0.8)] transition-all"
          >
            Fazer Meu Pacto Agora
          </Button>

          <p className="text-sm text-muted-foreground mt-6 italic">
            "Nas trevas encontramos o poder que a luz nos negou"
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Contato Direto</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Atendimento <span className="text-accent font-bold">24/7</span> para casos urgentes. Primeira consulta para
            avaliar seu caso e definir o ritual adequado.
          </p>

          <Card className="p-8 bg-card border-accent/30">
            <div className="space-y-6">
              <div>
                <h4 className="font-bold mb-2 text-accent text-lg">WhatsApp (Urgente)</h4>
                <p className="text-foreground/90 text-lg">+55 (61) 99044-8706</p>
                <p className="text-sm text-muted-foreground mt-1">Resposta em até 2 horas</p>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-accent text-lg">Email</h4>
                <p className="text-foreground/90">---------------</p>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-accent text-lg">TikTok</h4>
                <p className="text-foreground/90">@Paulo Mago | @Bruxo de asmodeus</p>
              </div>
              <div className="pt-4 border-t border-accent/30">
                <div className="flex items-center gap-2 text-sm text-accent mb-2">
                  <AlertTriangle className="w-4 h-4" />
                  <span className="font-bold">AVISO IMPORTANTE</span>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  Nossos rituais são reais e definitivos. Não trabalhamos com curiosos ou céticos. Entre em contato
                  apenas se estiver verdadeiramente pronto para mudanças profundas.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-accent/30">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2025 Templo das Sombras • Todos os direitos reservados</p>
          <div className="flex items-center gap-2">
            <Skull className="w-4 h-4 text-accent" />
            <p className="text-sm text-accent font-bold">Sacerdotes de Asmodeus • Canalizadores de Daemons</p>
            <Skull className="w-4 h-4 text-accent" />
          </div>
        </div>
      </footer>
    </main>
  )
}
