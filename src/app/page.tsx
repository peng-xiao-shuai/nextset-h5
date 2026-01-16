import HeroBlock from './_components/HeroBlock';
import { FeatureCardsBlock } from './_components/FeatureCardsGrid';
import { OurServicesSection } from './_components/OurServicesSection';
import { KanbanBoard } from './_components/KanbanBoard';
import { TeamSectionBlock } from './_components/TeamBlock';
import { FAQAccordionBlock } from './_components/FAQBlock';
import { FooterBlock } from './_components/FooterBlock';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-[#0e0e0e]">
      {/* Hero Block */}
      <section>
        <HeroBlock></HeroBlock>
      </section>

      {/* Our Services */}
      <section>
        <OurServicesSection />
      </section>

      {/* Feature Cards Grid */}
      <section>
        <FeatureCardsBlock />
      </section>

      {/* Kanban Board */}
      <section>
        <KanbanBoard />
      </section>

      {/* Team Section Block */}
      <section>
        <TeamSectionBlock />
      </section>

      {/* FAQ Accordion */}
      <section>
        <FAQAccordionBlock />
      </section>

      {/* Footer Block */}
      <section>
        <FooterBlock />
      </section>
    </div >
  );
}
