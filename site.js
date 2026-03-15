import React from "https://esm.sh/react@19.1.0";
import { createRoot } from "https://esm.sh/react-dom@19.1.0/client";
import htm from "https://esm.sh/htm@3.1.1";

const html = htm.bind(React.createElement);

const PAGE_LINKS = {
  open: {
    open: "./index.html",
    privacy: "../privacy.html",
    support: "../index.html",
  },
  privacy: {
    open: "./open/index.html",
    privacy: "./privacy.html",
    support: "./index.html",
  },
  support: {
    open: "./open/index.html",
    privacy: "./privacy.html",
    support: "./index.html",
  },
};

const SUPPORT_FEATURES = [
  {
    copy: "Stream camera frames from supported Meta wearables into InEye for monitoring, context-aware AI, and live mobile workflows.",
    label: "Vision",
    title: "Live wearable camera feeds",
  },
  {
    copy: "Drive real-time answers from voice, streaming visual context, and scene analysis, then route responses back through your chosen flow.",
    label: "Intelligence",
    title: "AI built around what you see",
  },
  {
    copy: "Capture video with a calmer, lower-distraction flow, or route streams outward to RTMP destinations when you need creator tooling.",
    label: "Creation",
    title: "Recording and social broadcast",
  },
];

const SUPPORT_STEPS = [
  "Install the Meta companion app on the iPhone paired to your wearable.",
  "Enable Developer Mode on the supported device when your workflow requires it.",
  "Open InEye, register the device flow, and grant Bluetooth, microphone, and photo permissions.",
  "Configure only the AI, messaging, or live streaming integrations you actually plan to use.",
];

const SUPPORT_NOTES = [
  "Supported Meta wearables and the Meta companion app are required for the full experience.",
  "Display-bound answer flows depend on messaging setup and supported display-enabled hardware.",
  "Live social streaming depends on a valid RTMP target and platform support.",
  "Feature quality depends on permissions, connectivity, and third-party service availability.",
];

const SUPPORT_FAQ = [
  {
    answer:
      "Confirm the device is powered on, paired in the Meta companion app, within range, and allowed to use Developer Mode if your workflow needs it.",
    question: "The wearable does not connect",
  },
  {
    answer:
      "Check camera access through the Meta companion app, complete registration inside InEye, and verify the wearable has not closed or dropped Bluetooth.",
    question: "Live video waits forever or never starts",
  },
  {
    answer:
      "That path depends on your configured messaging route, supported hardware, and the target display workflow being active at the moment the answer is sent.",
    question: "AI answers do not appear in the display",
  },
  {
    answer:
      "Verify the RTMP URL, stream key, and any platform-level limits for Instagram Live, Facebook Live, YouTube Live, Twitch, or the service you are targeting.",
    question: "Social streaming does not go live",
  },
  {
    answer:
      "Saving to the iPhone photo library requires Photos access on iOS. If capture worked but export failed, reopen app settings and allow photo access.",
    question: "Video recorded but did not save to Photos",
  },
];

const PRIVACY_SECTIONS = [
  {
    copy: [
      "InEye is an iOS application for supported Meta wearables. This policy applies to data processed by the app itself and to app-driven workflows that depend on third-party services configured by the operator or user.",
    ],
    title: "1. Scope",
  },
  {
    bullets: [
      "audio captured from the app or wearable workflow",
      "camera frames, captured photos, and recorded video",
      "prompts, transcriptions, and AI-generated responses",
      "recipient phone numbers and message content for messaging flows",
      "streaming destination settings such as RTMP URLs and stream keys",
      "basic app logs needed for debugging and reliability",
    ],
    copy: ["Depending on which features you enable, InEye may process:"],
    title: "2. Data you may provide",
  },
  {
    bullets: [
      "connecting to supported wearables and managing sessions",
      "streaming or recording wearable video",
      "generating AI responses from text, voice, or visual input",
      "sending answers through messaging workflows such as WhatsApp",
      "publishing live streams to supported RTMP platforms",
      "saving recordings or captured media when you request it",
    ],
    copy: ["InEye uses data only to provide the enabled features, such as:"],
    title: "3. How data is used",
  },
  {
    copy: [
      "Some features depend on third-party providers selected or configured for your workflow. These providers may receive the data necessary to deliver the feature, such as AI prompts, transcription audio, message content, or stream configuration.",
      "Their handling of data is governed by their own terms and privacy policies.",
    ],
    title: "4. Third-party services",
  },
  {
    copy: [
      "InEye can store recordings, conversation history, and configuration data locally on the device. If you choose to export media to the photo library, the exported file is handled by iOS according to your device settings and permissions.",
    ],
    title: "5. Local storage and media",
  },
  {
    copy: [
      "InEye does not sell personal data. Data may be shared only with the service providers required to deliver the feature you actively use, or when required by law.",
    ],
    title: "6. Sharing and sale of data",
  },
  {
    copy: [
      "Data retention depends on the feature and the storage location. Locally stored data remains on the device until removed by the user or the app. Third-party retention depends on the providers configured for your workflow.",
    ],
    title: "7. Retention",
  },
  {
    copy: [
      "Reasonable efforts are made to protect data in transit and at rest, but no service can guarantee absolute security. Use only the integrations and destinations you trust.",
    ],
    title: "8. Security",
  },
  {
    copy: [
      "InEye is not intended for children under 13, or a higher minimum age where required by local law.",
      "This policy may be updated as features change. Material updates should be reflected on this page before release.",
      "For privacy-related questions, use the support channel provided with the app distribution and support page for InEye.",
    ],
    title: "9-11. Age, policy changes, and questions",
  },
];

const UPDATED_AT = "March 15, 2026";

function Button({ href, label, variant = "primary" }) {
  return html`
    <a className=${`button button-${variant}`} href=${href}> ${label} </a>
  `;
}

function Brand({ links }) {
  return html`
    <a className="brand" href=${links.support}>
      <span className="brand-mark">I</span>
      <span className="brand-copy">
        <span className="brand-title">InEye</span>
        <span className="brand-subtitle">Wearable AI support hub</span>
      </span>
    </a>
  `;
}

function Navigation({ links, page }) {
  return html`
    <nav aria-label="Primary" className="mastnav">
      <a
        aria-current=${page === "support" ? "page" : undefined}
        href=${links.support}
        >Support</a
      >
      <a
        aria-current=${page === "privacy" ? "page" : undefined}
        href=${links.privacy}
        >Privacy</a
      >
      <a aria-current=${page === "open" ? "page" : undefined} href=${links.open}
        >Open</a
      >
    </nav>
  `;
}

function Footer({ links }) {
  return html`
    <footer className="site-footer">
      <p>Last updated: ${UPDATED_AT}</p>
      <p>
        <a className="footer-link" href=${links.support}>Support</a>
        <span> / </span>
        <a className="footer-link" href=${links.privacy}>Privacy</a>
      </p>
    </footer>
  `;
}

function SupportPage({ links }) {
  return html`
    <div className="page-stack">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Wearable AI Control Room</p>
          <h1 className="display">
            Turn supported Meta wearables into a live
            <em> AI canvas.</em>
          </h1>
          <p className="lede">
            InEye is a focused environment for real-time camera streaming,
            scene-aware AI, message-routed display answers, creator workflows,
            and lower-distraction capture on supported Meta wearable setups.
          </p>
          <div className="hero-actions">
            <${Button}
              href=${links.open}
              label="Open the universal-link route"
              variant="primary"
            />
            <${Button}
              href=${links.privacy}
              label="Read the privacy policy"
              variant="secondary"
            />
          </div>
        </div>

        <aside className="hero-panel">
          <p className="panel-label">What InEye handles</p>
          <h2 className="panel-title">
            One place for vision, voice, routing, and capture.
          </h2>
          <p className="panel-copy">
            Use the app as a playground for live wearable workflows without
            bouncing between disconnected tools.
          </p>
          <ul className="signal-list">
            <li>Live video routed from the wearable to the iPhone</li>
            <li>AI assistance with streaming visual context and voice input</li>
            <li>
              Display-bound answers through configured messaging workflows
            </li>
            <li>Recording, photo capture, and RTMP live output</li>
          </ul>
          <div className="chip-row">
            <span className="chip">Live vision</span>
            <span className="chip">Voice + AI</span>
            <span className="chip">WhatsApp display flow</span>
            <span className="chip">Social streaming</span>
          </div>
        </aside>
      </section>

      <section className="section-card">
        <div className="section-head">
          <div>
            <h2 className="section-title">What the app is built to do</h2>
            <p className="section-intro">
              The support site is intentionally practical: no vague marketing,
              just the real surfaces that matter when you are testing wearable
              AI in the field.
            </p>
          </div>
          <div className="section-tag">Early access support</div>
        </div>
        <div className="feature-grid">
          ${SUPPORT_FEATURES.map(
            (feature) => html`
              <article className="feature-card" key=${feature.title}>
                <p className="card-label">${feature.label}</p>
                <h3 className="card-title">${feature.title}</h3>
                <p className="card-copy">${feature.copy}</p>
              </article>
            `,
          )}
        </div>
      </section>

      <section className="split-layout">
        <article className="info-card">
          <div className="section-head">
            <div>
              <h2 className="section-title">Quick start</h2>
              <p className="section-intro">
                The fastest path to a working setup without wasting time on
                optional integrations.
              </p>
            </div>
          </div>
          <ol className="checklist">
            ${SUPPORT_STEPS.map((item) => html` <li key=${item}>${item}</li> `)}
          </ol>
        </article>

        <article className="spotlight-card">
          <h3>Operational notes</h3>
          <p>
            InEye behaves more like a control surface than a single-purpose
            consumer app. Results depend on your hardware, permissions, network
            quality, and which providers you wire into the workflow.
          </p>
          <div className="metric-row">
            <div className="metric">
              <strong>AI + camera</strong>
              <span
                >Needs wearable camera access and configured providers.</span
              >
            </div>
            <div className="metric">
              <strong>Display answers</strong>
              <span
                >Needs a supported display workflow and messaging route.</span
              >
            </div>
          </div>
          <ul className="detail-list" style=${{ marginTop: "18px" }}>
            ${SUPPORT_NOTES.map((item) => html` <li key=${item}>${item}</li> `)}
          </ul>
        </article>
      </section>

      <section className="section-card">
        <div className="section-head">
          <div>
            <h2 className="section-title">Troubleshooting that matters</h2>
            <p className="section-intro">
              These are the failure modes users actually hit first when trying
              to test live wearable flows.
            </p>
          </div>
        </div>
        <div className="faq-stack">
          ${SUPPORT_FAQ.map(
            (item) => html`
              <article className="faq-card" key=${item.question}>
                <h3>${item.question}</h3>
                <p>${item.answer}</p>
              </article>
            `,
          )}
        </div>
      </section>
    </div>
  `;
}

function PrivacyPage({ links }) {
  return html`
    <div className="page-stack">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Privacy by feature</p>
          <h1 className="display">
            Understand what data moves through
            <em> InEye.</em>
          </h1>
          <p className="lede">
            This policy is organized around the actual feature surfaces of the
            product: live video, AI prompts, messaging flows, recording, and
            RTMP streaming. It is meant to be readable, not buried.
          </p>
          <div className="hero-actions">
            <${Button}
              href=${links.support}
              label="Back to support"
              variant="secondary"
            />
            <${Button}
              href=${links.open}
              label="Open universal-link page"
              variant="tertiary"
            />
          </div>
        </div>

        <aside className="hero-panel">
          <p className="panel-label">Privacy posture</p>
          <h2 className="panel-title">
            Feature-driven, not data-harvesting driven.
          </h2>
          <p className="panel-copy">
            InEye processes the minimum categories of data needed to run the
            enabled workflow. The exact footprint changes with the features you
            choose to activate.
          </p>
          <ul className="signal-list">
            <li>No claim of data sale</li>
            <li>Third-party handling depends on the provider you configure</li>
            <li>Local storage remains on-device until you remove it</li>
          </ul>
        </aside>
      </section>

      <section className="section-card">
        <div className="section-head">
          <div>
            <h2 className="section-title">Policy details</h2>
            <p className="section-intro">
              The text below mirrors the practical operating model of the app
              instead of using abstract legal filler.
            </p>
          </div>
        </div>

        <div className="policy-grid">
          ${PRIVACY_SECTIONS.map(
            (section) => html`
              <article className="policy-card" key=${section.title}>
                <h3>${section.title}</h3>
                ${section.copy?.map(
                  (paragraph) => html` <p key=${paragraph}>${paragraph}</p> `,
                )}
                ${section.bullets
                  ? html`
                      <ul className="policy-list">
                        ${section.bullets.map(
                          (bullet) => html` <li key=${bullet}>${bullet}</li> `,
                        )}
                      </ul>
                    `
                  : null}
              </article>
            `,
          )}
        </div>
      </section>
    </div>
  `;
}

function OpenPage({ links }) {
  return html`
    <div className="open-shell">
      <section className="open-panel">
        <p className="eyebrow">Universal Link</p>
        <h1 className="display">
          Open InEye from the
          <em> domain route.</em>
        </h1>
        <p className="lede">
          If InEye is installed and universal links are configured correctly,
          this route should hand off into the app. If not, install the app first
          and return to this link from a normal browser context.
        </p>
        <div className="hero-actions">
          <${Button}
            href="https://apps.apple.com/app/id6760617624"
            label="Download on the App Store"
            variant="primary"
          />
          <${Button}
            href=${links.support}
            label="Read support notes"
            variant="secondary"
          />
        </div>

        <div className="open-grid">
          <article className="open-step">
            <strong>1. Install InEye</strong>
            <span
              >Use the App Store build that contains the associated domain
              entitlement.</span
            >
          </article>
          <article className="open-step">
            <strong>2. Return to this link</strong>
            <span
              >Open the links.ineye.app/open route again from Safari or
              Messages.</span
            >
          </article>
          <article className="open-step">
            <strong>3. Continue in the app</strong>
            <span
              >The universal link should resolve into InEye instead of staying
              on the web page.</span
            >
          </article>
        </div>
      </section>
    </div>
  `;
}

function App() {
  const page = document.body.dataset.page || "support";
  const links = PAGE_LINKS[page] || PAGE_LINKS.support;

  const content =
    page === "privacy"
      ? html`<${PrivacyPage} links=${links} />`
      : page === "open"
      ? html`<${OpenPage} links=${links} />`
      : html`<${SupportPage} links=${links} />`;

  return html`
    <div className="site-shell">
      <div className="site-noise"></div>
      <div className="site-glow"></div>

      <div className="site-frame">
        <header className="masthead">
          <${Brand} links=${links} />
          <${Navigation} links=${links} page=${page} />
        </header>

        ${content}
      </div>

      <${Footer} links=${links} />
    </div>
  `;
}

const container = document.getElementById("root");

if (container) {
  createRoot(container).render(html`<${App} />`);
}
