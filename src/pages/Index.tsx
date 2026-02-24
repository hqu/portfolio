import { ExternalLink } from "lucide-react";

const Section = ({ title, children, id }: { title: string; children: React.ReactNode; id?: string }) => (
  <section id={id} className="mb-16">
    <div className="section-divider" />
    <h2 className="text-3xl font-semibold text-foreground mb-6">{title}</h2>
    {children}
  </section>
);

const ExtLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="link-accent inline-flex items-center gap-1">
    {children}
    <ExternalLink className="w-3 h-3 opacity-50" />
  </a>
);

const navItems = [
  { label: "About", href: "#about" },
  { label: "Teaching", href: "#teaching" },
  { label: "Research", href: "#research" },
  { label: "Publications", href: "#publications" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/60 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground" style={{ fontFamily: "var(--font-display)" }}>
              Hong Qu
            </h1>
            <p className="text-sm text-muted-foreground">Adjunct Lecturer · Harvard Kennedy School</p>
          </div>
          <nav className="hidden sm:flex gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 py-16">
        {/* Hero / About */}
        <Section title="About" id="about">
          <p className="text-lg leading-relaxed text-foreground/90 mb-4">
            Hong Qu is an{" "}
            <ExtLink href="https://www.hks.harvard.edu/faculty/hong-qu">adjunct lecturer</ExtLink>{" "}
            and research fellow at the Malcolm Wiener Center at Harvard Kennedy School. As one of the first engineers on YouTube's startup team, he designed key features including the homepage, channels, and video sharing.
          </p>
          <p className="text-lg leading-relaxed text-foreground/90 mb-4">
            He was a visiting Nieman Fellow at Harvard in 2013 and is a graduate of Wesleyan University and the School of Information at UC Berkeley. Hong grew up in the{" "}
            <ExtLink href="https://www.metro.us/new-york/and-the-coolest-neighborhood-in-america-is/zsJpfD---Ea7neCWM2R2GM">
              coolest neighborhood
            </ExtLink>{" "}
            in America:{" "}
            <ExtLink href="https://www.nytimes.com/2016/01/24/realestate/sunset-park-brooklyn-not-quite-trendy.html">
              Sunset Park
            </ExtLink>
            , Brooklyn.
          </p>
          <iframe title="Cambridge 311 snow removal issues" aria-label="Locator map" id="datawrapper-chart-t4pjb" src="https://datawrapper.dwcdn.net/t4pjb/2/" scrolling="no" frameborder="0" style="border: none;" width="1070" height="873" data-external="1"></iframe>
          <p className="text-lg leading-relaxed text-foreground/90">
            Learn more about the{" "}
            <ExtLink href="https://courses.my.harvard.edu/psp/courses/EMPLOYEE/EMPL/h/?tab=HU_CLASS_SEARCH&SearchReqJSON=%7B%22ExcludeBracketed%22:true,%22SaveRecent%22:true,%22Facets%22:%5B%5D,%22PageNumber%22:1,%22SortOrder%22:%5B%22SCORE%22%5D,%22TopN%22:%22%22,%22PageSize%22:%22%22,%22SearchText%22:%22(IS_SCL_DESCR_IS_SCL_DESCRL:%5C%22Hong%20Qu%5C%22)%22%7D">
              classes
            </ExtLink>{" "}
            Hong teaches at Harvard.
          </p>
        </Section>

        {/* Teaching */}
        <Section title="Teacher" id="teaching">
          <ul className="space-y-2 text-lg text-foreground/90">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1.5">•</span>
              <span>
                Harvard Kennedy School course:{" "}
                <ExtLink href="https://hongqu.scholars.harvard.edu/classes/data-and-information-visualization">
                  Data and Information Visualization
                </ExtLink>{" "}
                and{" "}
                <ExtLink href="https://www.hks.harvard.edu/courses/advanced-data-and-information-visualization">
                  Advanced Data and Information Visualization
                </ExtLink>
              </span>
            </li>
          </ul>
        </Section>

        {/* Student */}
        <Section title="Student" id="student">
          <ul className="space-y-3 text-lg text-foreground/90">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1.5">•</span>
              <span>
                PhD candidate at{" "}
                <ExtLink href="https://www.networkscienceinstitute.org/">Network Science Institute</ExtLink>{" "}
                at Northeastern University
              </span>
            </li>
            <li className="ml-6 space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-muted-foreground mt-1.5">◦</span>
                <ExtLink href="https://covidstates.org/">The Covid States</ExtLink>{" "}
                <span>research project</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-muted-foreground mt-1.5">◦</span>
                <ExtLink href="https://www.covidstates.org/trust-in-institutions">Trust in Institutions chart</ExtLink>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-muted-foreground mt-1.5">◦</span>
                <ExtLink href="https://www.covidstates.org/executive-approval">Executive Approval dashboard</ExtLink>
              </div>
            </li>
          </ul>
        </Section>

        {/* Research */}
        <Section title="Researcher" id="research">
          <ul className="space-y-4 text-lg text-foreground/90">
            <li>
              <div className="flex items-start gap-2">
                <span className="text-primary mt-1.5">•</span>
                <span>Berkman Klein Center Assembly project</span>
              </div>
              <div className="ml-6 mt-2 flex items-start gap-2">
                <span className="text-muted-foreground mt-1.5">◦</span>
                <span>
                  <ExtLink href="https://aiblindspot.media.mit.edu/">AI Blindspot</ExtLink>{" "}
                  — a discovery process for spotting unconscious biases and structural inequalities in AI systems
                </span>
              </div>
            </li>
            <li>
              <div className="flex items-start gap-2">
                <span className="text-primary mt-1.5">•</span>
                <span>Stanford Center for Comparative Studies in Race and Ethnicity fellowship</span>
              </div>
              <div className="ml-6 mt-2 flex items-start gap-2">
                <span className="text-muted-foreground mt-1.5">◦</span>
                <ExtLink href="https://hai.stanford.edu/news/hong-qu-shining-headlight-ai-blindspots">
                  Shining a Headlight on AI Blindspots
                </ExtLink>
              </div>
            </li>
          </ul>
        </Section>

        {/* Publications */}
        <Section title="Publications" id="publications">
          <div className="space-y-8">
            {/* Book Chapter */}
            <article className="border-l-2 border-primary/30 pl-6">
              <h3 className="text-xl font-semibold text-foreground mb-2" style={{ fontFamily: "var(--font-display)" }}>
                The Ends of Artificial Intelligence
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-3">
                Qu, Hong. "The Ends of Artificial Intelligence." In{" "}
                <em>The Ends of Knowledge: Outcomes and Endpoints Across the Arts and Sciences</em>, edited by Seth Rudy and Rachael Scarborough King, 139–150. London: Bloomsbury Academic, 2023.
              </p>
              <div className="flex gap-4 text-sm">
                <ExtLink href="http://dx.doi.org/10.5040/9781350242326.ch-10">DOI</ExtLink>
                <ExtLink href="https://www.amazon.com/Ends-Knowledge-Outcomes-Endpoints-Sciences-ebook/dp/B0C1KWVG4W/">Amazon</ExtLink>
                <ExtLink href="https://www.bloomsburycollections.com/book/the-ends-of-knowledge-outcomes-and-endpoints-across-the-arts-and-sciences/ch10-the-ends-of-artificial-intelligence">Bloomsbury</ExtLink>
              </div>
            </article>

            {/* HKS Case */}
            <article className="border-l-2 border-primary/30 pl-6">
              <h3 className="text-xl font-semibold text-foreground mb-2" style={{ fontFamily: "var(--font-display)" }}>
                A User-Centered Design Process for Data-Driven Policymaking
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-3">
                Annie White, Nil Tuzcu, and Hong Qu. 2023. Harvard Kennedy School Case Study.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Well-conceived, user-friendly data visualizations have the potential to bring fresh perspectives derived from analyzing, visualizing, and presenting data to inform evidence-based policymaking. This case uses the Metroverse project from the Growth Lab at Harvard University.
              </p>
              <ExtLink href="https://case.hks.harvard.edu/a-user-centered-design-process-for-data-driven-policymaking/">
                Publisher's Version
              </ExtLink>
            </article>

            {/* NPR */}
            <article className="border-l-2 border-primary/30 pl-6">
              <h3 className="text-xl font-semibold text-foreground mb-2" style={{ fontFamily: "var(--font-display)" }}>
                How the Boston Marathon Bombings Changed Twitter, Media and How We Process Tragedy
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-3">
                Emily Olson. NPR, 2023.
              </p>
              <ExtLink href="https://www.npr.org/2023/04/15/1170082886/marathon-bombings-twitter-media-boston-strong">
                Publisher's Version
              </ExtLink>
            </article>

            {/* 2021 */}
            <article className="border-l-2 border-primary/30 pl-6">
              <h3 className="text-xl font-semibold text-foreground mb-2" style={{ fontFamily: "var(--font-display)" }}>
                Interdisciplinary Learning through Accessible, Intentional Technology
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-3">2021.</p>
              <ExtLink href="https://vpal.harvard.edu/interdisciplinary-learning-through-accessible-intentional-technology">
                Publisher's Version
              </ExtLink>
            </article>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-3xl mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>Hong Qu · Harvard Kennedy School</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
