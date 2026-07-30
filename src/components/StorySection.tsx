import Image from "next/image";
import { Heart, CookingPot, Compass } from "lucide-react";
import Reveal from "./Reveal";
import donaMariaPhoto from "../../public/images/dona-maria.jpeg";

const highlights = [
  {
    icon: Heart,
    title: "Hospitalidade",
    description: "Cada hóspede é recebido como visita de casa, do jeito que a Dona Maria aprendeu com a família dela.",
  },
  {
    icon: CookingPot,
    title: "Tempero de Casa",
    description: "Receitas de família e ingredientes locais no café da manhã e nas refeições sob encomenda.",
  },
  {
    icon: Compass,
    title: "Guia da Região",
    description: "Ninguém conhece as trilhas e cachoeiras do distrito como a Dona Maria — ela mesma indica o roteiro.",
  },
];

export default function StorySection() {
  return (
    <section id="historia" className="bg-primary text-surface py-section-gap scroll-mt-14">
      <div className="max-w-container-max mx-auto px-margin-mobile grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <Reveal as="div" className="space-y-8 order-2 lg:order-1">
          <h2 className="font-headline-lg text-headline-lg leading-tight">
            A história da Dona Maria
          </h2>
          <p className="font-body-lg text-body-lg opacity-80 leading-relaxed">
            Há mais de duas décadas, a Dona Maria abre as portas da sua casa para
            quem chega em busca de sossego e das cachoeiras da região. O que
            começou como um jeito simples de receber visitas virou uma pousada
            conhecida pela hospitalidade e pelo tempero especial que só ela sabe
            fazer, e juntamente com sua irmã e companheira dona Miúda, cuidam de 
            cada detalhe para que os hóspedes se sintam em casa.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-4">
            {highlights.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex flex-col items-start gap-3">
                <Icon className="text-tertiary-fixed w-8 h-8" strokeWidth={1.75} />
                <div>
                  <h4 className="font-label-lg text-label-lg mb-1">{title}</h4>
                  <p className="font-label-sm text-label-sm opacity-70">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal as="div" className="relative order-1 lg:order-2">
          <div className="aspect-square rounded-full overflow-hidden border-8 border-surface-container-low/20">
            <Image
              src={donaMariaPhoto}
              alt="Dona Maria, anfitriã da Pousada Dona Maria em Campo Alegre, Paranã (TO)"
              fill
              sizes="(min-width: 1024px) 50vw, 200vw"
              className="object-cover rounded-full border-8 border-surface-container-low/20"
              priority
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-tertiary-fixed text-on-tertiary-fixed p-8 rounded-lg hidden md:block">
            <p className="font-display-lg text-headline-lg italic">Maria</p>
            <p className="font-label-lg text-label-lg uppercase tracking-widest opacity-70">
              Dona da Casa
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
