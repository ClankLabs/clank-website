import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clank Labs Documentation",
  description: "Install guides, user guides, and reference docs for Clank and Clank Code.",
};

export default function DocsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 pt-24 pb-16">
        <h1 className="text-3xl font-bold text-[var(--text)] mb-2">Documentation</h1>
        <p className="text-[var(--text-muted)] mb-10">Reference docs for the Clank Labs app stack.</p>

        <Section title="Clank">
          <div className="grid gap-6 md:grid-cols-2 mb-12">
            <DocCard
              title="Install Guide"
              description="Install Clank, set up local models, configure cloud providers, and connect channels."
              href="https://github.com/ClankLabs/Clank/blob/main/docs/INSTALL.md"
              icon="Package"
            />
            <DocCard
              title="User Guide"
              description="Day-to-day usage for agents, channels, sessions, and the broader harness workflow."
              href="https://github.com/ClankLabs/Clank/blob/main/docs/USER_GUIDE.md"
              icon="Guide"
            />
            <DocCard
              title="Changelog"
              description="Complete release history for the main harness."
              href="https://github.com/ClankLabs/Clank/blob/main/CHANGELOG.md"
              icon="Log"
            />
            <DocCard
              title="Security Policy"
              description="Security model, reporting, and expected risk boundaries for the harness."
              href="https://github.com/ClankLabs/Clank/blob/main/SECURITY.md"
              icon="Security"
            />
          </div>
        </Section>

        <Section title="Clank Code">
          <div className="grid gap-6 md:grid-cols-2 mb-12">
            <DocCard
              title="README"
              description="Overview, install flow, providers, slash commands, and package links for Clank Code."
              href="https://github.com/ClankLabs/clank-code/blob/main/README.md"
              icon="Readme"
            />
            <DocCard
              title="Install Guide"
              description="Install and launch the terminal coding agent, with shared Clank config support."
              href="https://github.com/ClankLabs/clank-code/blob/main/docs/INSTALL.md"
              icon="Install"
            />
            <DocCard
              title="User Guide"
              description="Sessions, memory, slash commands, and Codex OAuth setup."
              href="https://github.com/ClankLabs/clank-code/blob/main/docs/USER_GUIDE.md"
              icon="Usage"
            />
            <DocCard
              title="Architecture"
              description="Runtime wiring, ReAct loop, providers, tools, config patching, and persistence."
              href="https://github.com/ClankLabs/clank-code/blob/main/docs/ARCHITECTURE.md"
              icon="Arch"
            />
          </div>
        </Section>

        <Section title="Quick Install">
          <CodeBlock>{`npm install -g @clanklabs/clank
clank setup

npm install -g @clanklabs/clank-code
clank-code`}</CodeBlock>
          <p className="text-[var(--text-muted)] mt-3 text-sm">
            Use Clank for the full multi-channel harness, or Clank Code for a focused terminal coding workflow.
          </p>
        </Section>
      </div>
      <Footer />
    </main>
  );
}

function DocCard({ title, description, href, icon }: { title: string; description: string; href: string; icon: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-5 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--text-muted)] transition-colors"
    >
      <div className="text-sm font-mono text-[var(--accent)] mb-2">{icon}</div>
      <h3 className="font-semibold text-[var(--text)] mb-1">{title}</h3>
      <p className="text-sm text-[var(--text-muted)]">{description}</p>
    </a>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold text-[var(--text)] mb-4">{title}</h2>
      {children}
    </section>
  );
}

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-4 overflow-x-auto text-sm text-[var(--text)]">
      <code>{children}</code>
    </pre>
  );
}
