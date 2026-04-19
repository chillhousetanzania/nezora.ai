export default function ContentGeneration() {
  return (
    <div className="flex flex-col gap-12 w-full mt-8">
      {/* Header Section */}
      <section className="flex flex-col gap-4">
        <div className="inline-flex items-center gap-2 bg-primary-fixed w-fit px-3 py-1 rounded-full text-on-primary-fixed text-sm font-medium tracking-wide">
          <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0" }}>edit_square</span>
          <span>Workflow: Generate Post</span>
        </div>
        <h2 className="text-4xl md:text-[3.5rem] leading-tight font-headline font-semibold text-on-surface tracking-tight">Craft your next message.</h2>
        <p className="text-lg text-on-surface-variant font-body max-w-2xl">Describe the topic, select your channels, and let Nezora AI structure the perfect post for your audience.</p>
      </section>

      {/* Generation Controls Bento */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Input */}
        <div className="lg:col-span-2 flex flex-col gap-8 bg-surface-container-lowest p-8 rounded-[1.5rem] shadow-[0_24px_48px_-12px_rgba(26,27,31,0.06)] border border-outline-variant/20">
          <div className="flex flex-col gap-3">
            <label className="text-sm font-medium tracking-wide uppercase text-on-surface-variant font-label">The Prompt</label>
            <textarea className="w-full bg-surface-container-low border-2 border-transparent focus:border-primary/40 rounded-xl p-4 min-h-[160px] text-on-surface font-body resize-y outline-none transition-colors" placeholder="e.g., Announce our new seamless integration with Stripe. Focus on faster checkouts and increased conversion rates for e-commerce clients..."></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium tracking-wide uppercase text-on-surface-variant font-label">Platform</label>
              <div className="flex flex-wrap gap-3">
                <button className="bg-primary-fixed text-on-primary-fixed px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-all hover:shadow-[0_8px_16px_-6px_rgba(0,62,199,0.2)]">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0" }}>work</span>
                  LinkedIn
                </button>
                <button className="bg-surface-container-high text-on-surface px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-all hover:bg-surface-container-highest">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0" }}>tag</span>
                  Twitter
                </button>
                <button className="bg-surface-container-high text-on-surface px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-all hover:bg-surface-container-highest">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0" }}>photo_camera</span>
                  Instagram
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium tracking-wide uppercase text-on-surface-variant font-label">Tone of Voice</label>
              <div className="relative">
                <select className="w-full bg-surface-container-low border-2 border-transparent focus:border-primary/40 rounded-xl p-3 pl-4 pr-10 text-on-surface font-body outline-none appearance-none cursor-pointer">
                  <option>Professional &amp; Authoritative</option>
                  <option>Casual &amp; Friendly</option>
                  <option>Inspirational &amp; Visionary</option>
                  <option>Direct &amp; Action-Oriented</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" style={{ fontVariationSettings: "'FILL' 0" }}>expand_more</span>
              </div>
            </div>
          </div>

          <div className="mt-4 flex justify-end">
            <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-3.5 rounded-xl font-medium tracking-wide flex items-center gap-3 transition-all hover:shadow-[0_12px_24px_-8px_rgba(0,62,199,0.4)]">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>auto_awesome</span>
              Generate Draft
            </button>
          </div>
        </div>

        {/* Right Column: Context/Settings */}
        <div className="flex flex-col gap-6 bg-surface-container-low p-6 rounded-[1.5rem]">
          <div className="flex items-center gap-3 pb-4 border-b border-outline-variant/15">
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 0" }}>tune</span>
            <h3 className="font-medium text-on-surface">Generation Parameters</h3>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-on-surface-variant">Include Hashtags</span>
              <button className="w-11 h-6 bg-primary rounded-full relative transition-colors cursor-pointer">
                <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1 shadow-sm"></div>
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-on-surface-variant">Suggest Emojis</span>
              <button className="w-11 h-6 bg-primary rounded-full relative transition-colors cursor-pointer">
                <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1 shadow-sm"></div>
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-on-surface-variant">Generate Image Ideas</span>
              <button className="w-11 h-6 bg-primary rounded-full relative transition-colors cursor-pointer">
                <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1 shadow-sm"></div>
              </button>
            </div>
          </div>
          <div className="mt-auto pt-6 bg-surface-tint/5 p-4 rounded-xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-surface-tint opacity-10 blur-xl group-hover:opacity-20 transition-opacity duration-1000"></div>
            <p className="text-xs text-on-surface-variant relative z-10 leading-relaxed">Nezora is currently using the <strong>Claude 3.5 Sonnet</strong> model, optimized for professional B2B communications.</p>
          </div>
        </div>
      </section>

      {/* Preview Section (Visible after generation) */}
      <section className="flex flex-col gap-8 mt-4 border-t border-outline-variant/15 pt-12">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-headline font-semibold text-on-surface tracking-tight flex items-center gap-3">
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            Draft Ready
          </h3>
          <div className="flex items-center gap-3">
            <button className="text-primary font-medium text-sm flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-primary-fixed/50 transition-colors">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0" }}>refresh</span>
              Regenerate
            </button>
            <button className="text-on-surface bg-surface-container-high font-medium text-sm flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-surface-container-highest transition-colors">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0" }}>edit</span>
              Edit Text
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Caption Draft */}
          <div className="lg:col-span-3 bg-surface-container-lowest p-8 rounded-[1.5rem] shadow-[0_12px_32px_-12px_rgba(26,27,31,0.04)] border border-outline-variant/20 relative">
            <div className="absolute top-6 right-6 flex items-center gap-2">
              <button className="text-on-surface-variant hover:text-primary transition-colors" title="Copy to clipboard">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>content_copy</span>
              </button>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-on-surface-variant bg-surface-container p-2 rounded-lg" style={{ fontVariationSettings: "'FILL' 0" }}>work</span>
              <span className="font-medium text-on-surface text-sm">LinkedIn Format</span>
            </div>
            <div className="prose prose-sm prose-slate max-w-none text-on-surface-variant font-body leading-relaxed space-y-4">
              <p>🚀 We're thrilled to announce our latest integration with Stripe!</p>
              <p>Friction in the checkout process is the #1 reason for cart abandonment. Our new seamless connection allows e-commerce platforms to process payments faster, more securely, and with a significantly improved user experience.</p>
              <p>Early beta testers are already seeing up to a 15% increase in completed conversions.</p>
              <p>Ready to streamline your revenue flow? Check out the full case study in the link below. 👇</p>
              <p className="text-primary">#Ecommerce #Fintech #StripeIntegration #ConversionOptimization</p>
            </div>
          </div>
          {/* Image Idea Card */}
          <div className="lg:col-span-2 bg-surface-container-low p-6 rounded-[1.5rem] flex flex-col gap-6">
            <h4 className="text-sm font-medium tracking-wide uppercase text-on-surface-variant font-label">Suggested Creative</h4>
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-sm">
              <img alt="Abstract rendering of a digital transaction" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3P37hxEgvjhl7Hjp0T-jzDjf46D6el1VUXNfyeEBHVO-cjKbbEdGVOvKRHt8aWSXqLOfqb28f-hfUnPMlSOxYI7kCkQam7m4CjfYkKm27mOg-iPtHcqN6bqdaQB39wBCGws2TMLTDK1lKhwmXoYJcpQvt42CjHREpWltBHKHE0SivNmO6nLG_W35NzEQHxbHt-csNs1kDuBNugEcB4SCcJQATbK2EwnorDReO9IPQubagu7YAe6ir3rI5udMZprILtGn5PzT3CYEz" />
              <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white text-xs px-2 py-1 rounded-md flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 0" }}>auto_awesome</span>
                Generated
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-on-surface font-medium">Prompt Idea:</p>
              <p className="text-xs text-on-surface-variant">"A clean, minimal isometric 3D illustration showing a secure data flow between a modern storefront icon and a stylized Stripe logo. Corporate blue tones, bright background."</p>
            </div>
            <button className="mt-auto bg-surface-container-lowest border border-outline-variant/30 text-on-surface px-4 py-2 rounded-xl text-sm font-medium hover:bg-surface transition-colors flex justify-center items-center gap-2">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0" }}>download</span>
              Download Asset
            </button>
          </div>
        </div>
        <div className="flex justify-end pt-4">
          <button className="bg-on-surface text-surface px-8 py-3.5 rounded-xl font-medium tracking-wide flex items-center gap-3 transition-all hover:bg-on-surface-variant shadow-lg shadow-on-surface/10">
            Approve &amp; Schedule
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>send</span>
          </button>
        </div>
      </section>
    </div>
  );
}
