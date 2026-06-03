const DAYS = [
  { en: 'Mon', kr: '월' },
  { en: 'Tue', kr: '화' },
  { en: 'Wed', kr: '수' },
  { en: 'Thu', kr: '목' },
  { en: 'Fri', kr: '금' },
]

export default function Schedule() {
  return (
    <section id="schedule" className="schedule-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Weekly Schedule</span>
          <h2 className="section-title">Class Schedule / 수업 일정</h2>
        </div>

        <div className="schedule-grid reveal">
          {DAYS.map((d) => (
            <div key={d.en} className="schedule-day">
              <div className="day-header">{d.en} / {d.kr}</div>
              <div className="day-classes">
                <div className="day-class dance">
                  <div className="day-class-name">Diet Dance &amp; Zumba</div>
                  <div className="day-class-time">9:00 – 10:00 AM</div>
                </div>
                <div className="day-class pilates">
                  <div className="day-class-name">Props Pilates</div>
                  <div className="day-class-time">10:10 – 11:00 AM</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="schedule-legend">
          <div className="legend-item">
            <div className="legend-dot" style={{ background: 'var(--gold)' }} />
            Diet Dance &amp; Zumba
          </div>
          <div className="legend-item">
            <div className="legend-dot" style={{ background: '#6496dc' }} />
            Props Pilates
          </div>
        </div>
      </div>
    </section>
  )
}
