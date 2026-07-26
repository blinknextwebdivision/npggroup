import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ArrowUpRight, Check, ChevronDown, Clock3, Copy, Mail, Menu, Minus, Phone, Wind, X } from 'lucide-react';
import { useState } from 'react';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import NotFound from '@/pages/not-found';

const queryClient = new QueryClient();
const emailAddress = 'hello@naturalpowergroup.com';

function Mark({ light = false }: { light?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${light ? 'text-[#f8f3e8]' : 'text-[#214d3e]'}`}>
      <div className={`relative flex h-9 w-9 items-center justify-center rounded-full border ${light ? 'border-[#dba947]/80' : 'border-[#c28c2d]'}`}>
        <span className="absolute h-5 w-5 rounded-full border-[1.5px] border-current" />
        <span className={`h-2 w-2 rounded-full ${light ? 'bg-[#e2ad4d]' : 'bg-[#c28c2d]'}`} />
      </div>
      <div className="leading-none">
        <p className="text-[15px] font-bold tracking-[-.03em]">NATURAL POWER</p>
        <p className={`mt-1 text-[9px] font-bold tracking-[.22em] ${light ? 'text-[#d9c8a9]' : 'text-[#8a6a37]'}`}>GROUP</p>
      </div>
    </div>
  );
}

function EnergyDiagram() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[530px] animate-drift" aria-label="Illustration of the sun, wind and earth working together">
      <div className="absolute inset-[10%] rounded-full border border-[#d9bd76]/40" />
      <div className="absolute inset-[17%] rounded-full border border-dashed border-[#d9bd76]/30 animate-orbit" />
      <div className="absolute inset-[27%] rounded-full bg-[#c89a43] shadow-[0_0_0_18px_rgba(200,154,67,.08),0_20px_70px_rgba(188,133,37,.25)]">
        <div className="absolute inset-[10%] rounded-full border border-[#f4d98e]/35" />
        <div className="absolute left-[20%] top-[31%] h-[12%] w-[24%] rounded-[60%] bg-[#e5bb60]/55 -rotate-12" />
        <div className="absolute right-[17%] top-[52%] h-[18%] w-[27%] rounded-[60%] bg-[#9e7031]/45 rotate-12" />
        <div className="absolute bottom-[17%] left-[30%] h-[10%] w-[19%] rounded-[60%] bg-[#efd180]/40 rotate-12" />
      </div>
      <div className="absolute right-[2%] top-[17%] flex h-20 w-20 items-center justify-center rounded-full border border-[#dfbd69]/60 bg-[#214d3e] text-[#e1b55d] shadow-lg shadow-[#18382e]/20">
        <div className="relative h-10 w-10">
          <span className="absolute left-1/2 top-1/2 h-[2px] w-10 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-current" />
          <span className="absolute left-1/2 top-1/2 h-[2px] w-10 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-current" />
          <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current" />
          <span className="absolute left-1/2 top-0 h-3 w-[1.5px] -translate-x-1/2 bg-current" />
          <span className="absolute bottom-0 left-1/2 h-3 w-[1.5px] -translate-x-1/2 bg-current" />
        </div>
      </div>
      <div className="absolute left-[4%] top-[32%] flex h-16 w-16 items-center justify-center rounded-full bg-[#d9e0d4] text-[#42705a] shadow-lg shadow-[#18382e]/10">
        <Wind size={27} strokeWidth={1.5} />
      </div>
      <div className="absolute bottom-[8%] right-[14%] rounded-full border border-[#ead598]/60 bg-[#f4ead3] px-3 py-2 text-[10px] font-bold uppercase tracking-[.18em] text-[#8a6a37]">
        energy, in balance
      </div>
      <span className="absolute left-[19%] top-[16%] h-2 w-2 rounded-full bg-[#e5ba62] animate-pulse-dot" />
      <span className="absolute bottom-[26%] left-[8%] h-1.5 w-1.5 rounded-full bg-[#e5ba62] animate-pulse-dot delay-2" />
    </div>
  );
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${emailAddress}`;
    }
  };

  const navItems = [
    { label: 'Our approach', href: '#approach' },
    { label: 'Get in touch', href: '#contact' },
  ];

  return (
    <main className="paper-grain min-h-[100dvh] overflow-hidden bg-[#f3eee2]">
      <section className="relative min-h-[720px] bg-[#214d3e] text-[#f8f3e8]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-[18%] -top-[32%] h-[780px] w-[780px] rounded-full border border-[#d8ad55]/10" />
          <div className="absolute -right-[8%] -top-[24%] h-[610px] w-[610px] rounded-full border border-[#d8ad55]/15" />
          <div className="absolute -left-[20%] bottom-[-42%] h-[630px] w-[630px] rounded-full bg-[#2d5b49]/40 blur-2xl" />
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#17392f]/30 to-transparent" />
        </div>
        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-12">
          <a href="/" className="focus-ring rounded-md" data-testid="link-brand-home"><Mark light /></a>
          <nav className="hidden items-center gap-9 md:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="focus-ring text-[13px] font-semibold text-[#d9e0d4] transition-colors hover:text-[#e5b85e]" data-testid={`link-nav-${item.label.toLowerCase().replace(' ', '-')}`}>
                {item.label}
              </a>
            ))}
            <a href="mailto:hello@naturalpowergroup.com" className="focus-ring flex items-center gap-2 rounded-full border border-[#d9be7c]/60 px-4 py-2.5 text-[12px] font-bold text-[#f2d28b] transition-colors hover:bg-[#d9be7c] hover:text-[#214d3e]" data-testid="link-header-email">
              Contact team <ArrowUpRight size={14} />
            </a>
          </nav>
          <button type="button" className="focus-ring rounded-full border border-[#d9be7c]/60 p-2.5 md:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} data-testid="button-mobile-menu">
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </header>
        {menuOpen && (
          <nav className="relative z-20 mx-6 flex flex-col gap-4 rounded-2xl border border-[#d9be7c]/30 bg-[#2b5b49] p-5 md:hidden" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="focus-ring border-b border-[#d9be7c]/20 pb-3 text-sm font-semibold text-[#f8f3e8]" data-testid={`link-mobile-${item.label.toLowerCase().replace(' ', '-')}`}>{item.label}</a>
            ))}
            <a href="mailto:hello@naturalpowergroup.com" className="focus-ring text-sm font-semibold text-[#e5b85e]" data-testid="link-mobile-email">Email the team <ArrowUpRight size={14} className="ml-1 inline" /></a>
          </nav>
        )}
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 px-6 pb-16 pt-20 md:pb-28 md:pt-28 lg:grid-cols-[1.05fr_.95fr] lg:px-12">
          <div>
            <div className="animate-rise mb-8 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.2em] text-[#e4b75c]">
              <span className="h-2 w-2 rounded-full bg-[#e4b75c] animate-pulse-dot" />
              A new chapter is taking shape
            </div>
            <h1 className="display animate-rise delay-1 max-w-[680px] text-[clamp(3.7rem,8vw,7.4rem)] font-semibold leading-[.92] tracking-[-.065em]">
              Powering a more <em className="font-normal text-[#e4b75c]">natural</em> future.
            </h1>
            <p className="animate-rise delay-2 mt-8 max-w-[500px] text-[17px] leading-7 text-[#c5d3c7] md:text-[19px]">
              We are refreshing our digital home. The work continues every day: bringing together sun, wind, and earth to build energy systems that last.
            </p>
            <div className="animate-rise delay-3 mt-10 flex flex-wrap items-center gap-4">
              <a href="#contact" className="focus-ring group flex items-center gap-3 rounded-full bg-[#e1b45a] px-5 py-3.5 text-[13px] font-bold text-[#214d3e] transition-transform hover:-translate-y-0.5" data-testid="link-hero-contact">
                Talk with our team <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#214d3e] text-[#e1b45a] transition-transform group-hover:rotate-45"><ArrowUpRight size={14} /></span>
              </a>
              <a href="#approach" className="focus-ring flex items-center gap-2 rounded-full px-2 py-3.5 text-[13px] font-bold text-[#d9e0d4] transition-colors hover:text-[#e5b85e]" data-testid="link-hero-approach">
                See our approach <ChevronDown size={15} />
              </a>
            </div>
          </div>
          <div className="animate-rise delay-2 relative mt-5 lg:mt-0">
            <EnergyDiagram />
          </div>
        </div>
        <div className="relative z-10 mx-auto flex max-w-7xl items-center gap-3 border-t border-[#d8d6b7]/20 px-6 py-5 text-[10px] font-bold uppercase tracking-[.18em] text-[#b6c8b9] lg:px-12">
          <Clock3 size={15} className="text-[#e1b45a]" />
          <span data-testid="status-message">Website refresh in progress</span>
          <span className="mx-1 text-[#668471]">/</span>
          <span className="font-normal normal-case tracking-normal text-[#9eb7a6]">Back soon with more to share.</span>
        </div>
      </section>

      <section id="approach" className="relative bg-[#f3eee2] px-6 py-24 text-[#214d3e] md:py-36 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr] lg:gap-24">
            <div>
              <p className="mono text-[10px] font-bold uppercase tracking-[.18em] text-[#a16e23]">The work behind the pause</p>
              <h2 className="display mt-5 max-w-md text-[clamp(2.5rem,5vw,4.5rem)] leading-[.98] tracking-[-.055em]">Built for the long <em className="font-normal text-[#b77e28]">horizon.</em></h2>
              <p className="mt-7 max-w-sm text-[15px] leading-7 text-[#63766b]">Natural Power Group partners with people who think beyond the next quarter. We make complex energy projects clear, useful, and ready for the real world.</p>
            </div>
            <div className="grid gap-0 divide-y divide-[#d9d0ba] border-y border-[#d9d0ba]">
              {[
                { id: '01', title: 'Grounded in place', copy: 'Every project begins by listening to the land, the people, and the needs that make a place distinct.' },
                { id: '02', title: 'Clear by design', copy: 'Good energy infrastructure should feel understandable. We turn complexity into confident decisions.' },
                { id: '03', title: 'Useful for decades', copy: 'We measure our work in resilience: systems that perform well today and stay relevant tomorrow.' },
              ].map((item) => (
                <div key={item.id} className="group py-6 md:py-8">
                  <button type="button" onClick={() => setExpanded(expanded === item.id ? null : item.id)} className="focus-ring flex w-full items-center justify-between text-left" aria-expanded={expanded === item.id} data-testid={`button-approach-${item.id}`}>
                    <span className="flex items-center gap-5"><span className="mono text-[11px] text-[#aa7b31]">{item.id}</span><span className="display text-[25px] tracking-[-.03em] md:text-[30px]">{item.title}</span></span>
                    <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#cdbd99] text-[#a16e23] transition-transform ${expanded === item.id ? 'rotate-45' : ''}`}><PlusIcon /></span>
                  </button>
                  <div className={`grid transition-[grid-template-rows] duration-300 ${expanded === item.id ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden"><p className="ml-10 mt-4 max-w-lg text-[14px] leading-6 text-[#63766b] md:ml-14">{item.copy}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-24 grid gap-4 border-t border-[#d9d0ba] pt-7 text-[#718176] sm:grid-cols-3">
            <div><p className="mono text-[10px] uppercase tracking-[.17em] text-[#a16e23]">01 / Sun</p><p className="mt-3 text-sm">Capture what is already here.</p></div>
            <div><p className="mono text-[10px] uppercase tracking-[.17em] text-[#a16e23]">02 / Wind</p><p className="mt-3 text-sm">Work with the forces in motion.</p></div>
            <div><p className="mono text-[10px] uppercase tracking-[.17em] text-[#a16e23]">03 / Earth</p><p className="mt-3 text-sm">Leave every place stronger.</p></div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#dce4d5] px-6 py-20 text-[#214d3e] md:py-28 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-end gap-12 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="mono text-[10px] font-bold uppercase tracking-[.18em] text-[#6e7e61]">While we make the finishing touches</p>
            <h2 className="display mt-5 max-w-2xl text-[clamp(2.9rem,6vw,5.8rem)] leading-[.94] tracking-[-.06em]">Have a project in mind?</h2>
            <p className="mt-6 max-w-lg text-[16px] leading-7 text-[#5d7466]">We would still love to hear from you. Our team is available for conversations about partnerships, projects, and the future of energy.</p>
          </div>
          <div className="flex flex-col items-start gap-4 lg:items-end">
            <a href={`mailto:${emailAddress}`} className="focus-ring group flex items-center gap-3 text-left text-[18px] font-bold text-[#214d3e] hover:text-[#a16e23] md:text-right" data-testid="link-contact-email">
              <Mail size={20} strokeWidth={1.6} /> {emailAddress} <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <button type="button" onClick={copyEmail} className="focus-ring flex items-center gap-2 rounded-full border border-[#aebfac] bg-[#e9eee5] px-4 py-2.5 text-[12px] font-bold text-[#54705e] transition-colors hover:border-[#a16e23] hover:text-[#a16e23]" data-testid="button-copy-email">
              {copied ? <Check size={14} /> : <Copy size={14} />} {copied ? 'Email copied' : 'Copy email address'}
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-[#17392f] px-6 py-8 text-[#d9e0d4] lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
          <Mark light />
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] text-[#a7bba9]">
            <a href="mailto:hello@naturalpowergroup.com" className="focus-ring flex items-center gap-2 hover:text-[#e1b45a]" data-testid="link-footer-email"><Mail size={13} /> Email</a>
            <a href="tel:+18005550184" className="focus-ring flex items-center gap-2 hover:text-[#e1b45a]" data-testid="link-footer-phone"><Phone size={13} /> +1 800 555 0184</a>
            <span className="text-[#779381]">© {new Date().getFullYear()} Natural Power Group</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

function PlusIcon() {
  return <span className="relative block h-3 w-3"><Minus size={12} className="absolute inset-0" /><Minus size={12} className="absolute inset-0 rotate-90" /></span>;
}

function Router() {
  return <Switch><Route path="/" component={Home} /><Route component={NotFound} /></Switch>;
}

function App() {
  return <QueryClientProvider client={queryClient}><TooltipProvider><WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><Router /></WouterRouter><Toaster /></TooltipProvider></QueryClientProvider>;
}

export default App;