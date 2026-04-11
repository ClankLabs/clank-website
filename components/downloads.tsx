"use client";

import { Terminal, ExternalLink } from "lucide-react";
import { VERSIONS } from "@/lib/versions";

export function Downloads() {
  return (
    <section className="py-20 px-6 border-t border-[var(--border)]" id="download">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-2">Get Started</h2>
        <p className="text-[var(--text-muted)] text-sm mb-10">
          Install the product you need and start building locally.
        </p>

        <div className="mb-4">
          <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--surface)]">
            <div className="flex items-center gap-3 mb-4">
              <Terminal className="w-5 h-5 text-[var(--accent)]" />
              <div>
                <h3 className="font-medium text-sm text-[var(--text)]">Clank</h3>
                <span className="text-xs font-mono text-[var(--text-dim)]">v{VERSIONS.clank} - Node.js 20+</span>
              </div>
            </div>
            <div className="bg-[var(--bg)] rounded-lg p-4 font-mono text-sm text-[var(--text-muted)] border border-[var(--border)]">
              <div className="mb-1"><span className="text-[var(--text-dim)]">$</span> npm install -g @clanklabs/clank</div>
              <div className="mb-1"><span className="text-[var(--text-dim)]">$</span> clank setup</div>
              <div><span className="text-[var(--text-dim)]">$</span> clank</div>
            </div>
            <p className="mt-3 text-xs text-[var(--text-dim)]">
              Multi-agent harness with shared sessions, channels, dashboard, and local-first provider routing.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          <a
            href="https://github.com/ClankLabs/Clank"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-lg border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--border-hover)] transition-colors"
          >
            <ExternalLink className="w-4 h-4 text-[var(--accent)]" />
            <div>
              <p className="text-sm font-medium text-[var(--text)]">Clank GitHub</p>
              <p className="text-xs text-[var(--text-muted)]">Harness source</p>
            </div>
          </a>
          <a
            href="https://github.com/ClankLabs/Clank/blob/main/CHANGELOG.md"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-lg border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--border-hover)] transition-colors"
          >
            <ExternalLink className="w-4 h-4 text-[var(--accent)]" />
            <div>
              <p className="text-sm font-medium text-[var(--text)]">Clank Changelog</p>
              <p className="text-xs text-[var(--text-muted)]">What&apos;s new in v{VERSIONS.clank}</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
