import RevealWrapper from '@/components/ui/RevealWrapper'
import { testimonials } from '@/lib/constants/testimonials'

export default function Testimonials() {
  return (
    <section className="section-padding bg-[#0c0c0c]">
      <div className="container-max">
        <RevealWrapper>
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#404040] mb-3">
              Testimonials
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#f2f2f2] mb-4">
              Loved by engineering teams.
            </h2>
          </div>
        </RevealWrapper>

        <div className="grid sm:grid-cols-2 gap-4">
          {testimonials.map((t, i) => (
            <RevealWrapper key={t.author} delay={i * 0.08}>
              <div className="card-base flex flex-col gap-4 h-full">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, s) => (
                    <span key={s} className="text-[#d4a843] text-sm">★</span>
                  ))}
                </div>

                <p className="text-[#cccccc] leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-2 border-t border-white/[0.07]">
                  <div className="w-9 h-9 rounded-full bg-[#2dd4bf]/10 border border-[#2dd4bf]/20 flex items-center justify-center text-[#2dd4bf] text-sm font-semibold">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#f2f2f2]">{t.author}</p>
                    <p className="text-xs text-[#808080]">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
