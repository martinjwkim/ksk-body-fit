// Pricing mirrors the studio's official rate sheet.
// Every row shares the same cell shape (label · monthly · 3-month) so prices align cleanly.
const ROWS = [
  {
    label: '다이어트 댄스 & 줌바',
    labelEn: 'Diet Dance & Zumba',
    monthly: '$150',
    quarter: '$400',
    quarterNote: '$133/월',
  },
  {
    label: '필라테스',
    labelEn: 'Pilates',
    monthly: '$150',
    quarter: '$400',
    quarterNote: '$133/월',
  },
  {
    label: '콤보 · 무제한',
    labelEn: 'Combo · Unlimited',
    sub: '다이어트 댄스 & 줌바 + 필라테스',
    monthly: '$250',
    monthlyNote: '$50 할인',
    quarter: '$650',
    quarterNote: '$216/월',
    featured: true,
  },
  {
    label: '콤보 · 월 4회',
    labelEn: 'Combo · 4 Times / Month',
    monthly: '$210',
    monthlyNote: '$150 + $60',
    quarter: '$580',
    quarterNote: '$400 + $180',
  },
]

function PriceCell({ amount, note, featured }) {
  return (
    <td className={featured ? 'pt-featured-cell' : undefined}>
      <span className="pt-price">{amount}</span>
      <span className="pt-note">{note || ' '}</span>
    </td>
  )
}

export default function Pricing() {
  return (
    <section id="pricing">
      <div className="container">
        <div className="section-header">
          <span className="section-label">수강료 · Pricing</span>
          <h2 className="section-title">수강료 / Pricing</h2>
          <p className="section-subtitle">합리적인 수강료로 시작하세요 — Simple, transparent rates</p>
        </div>

        <div className="pricing-table-wrap reveal">
          <table className="pricing-table">
            <thead>
              <tr>
                <th className="pt-corner" aria-hidden="true"></th>
                <th>월 <span>Monthly</span></th>
                <th>3개월 <span>3 Months</span></th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.labelEn} className={r.featured ? 'pt-featured' : undefined}>
                  <th scope="row" className="pt-row-label">
                    {r.label}
                    <span>{r.labelEn}</span>
                    {r.sub && <span className="pt-sub">{r.sub}</span>}
                  </th>
                  <PriceCell amount={r.monthly} note={r.monthlyNote} featured={r.featured} />
                  <PriceCell amount={r.quarter} note={r.quarterNote} featured={r.featured} />
                </tr>
              ))}

              <tr className="pt-onetime">
                <th scope="row" className="pt-row-label">
                  1회 이용
                  <span>One Time</span>
                </th>
                <td colSpan={2}>
                  <span className="pt-price">$20</span>
                  <span className="pt-note">수업당 / each class</span>
                </td>
              </tr>
            </tbody>
          </table>

          <p className="pricing-footnote">
            가격은 사전 공지 없이 변경될 수 있습니다. · Prices are subject to change without notice.
          </p>
        </div>

        <div className="pricing-cta-row">
          <a href="#contact" className="pricing-cta-btn">등록 문의 / Enroll</a>
          <a href="tel:7143510936" className="pricing-cta-btn ghost">전화: 714-351-0936</a>
        </div>
      </div>
    </section>
  )
}
