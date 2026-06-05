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
          <span className="section-label">수업 일정 · Schedule</span>
          <h2 className="section-title">수업 일정 / Class Schedule</h2>
        </div>

        <div className="schedule-grid reveal">
          {DAYS.map((d) => (
            <div key={d.en} className="schedule-day">
              <div className="day-header">{d.en} / {d.kr}</div>
              <div className="day-classes">
                <div className="day-class dance">
                  <div className="day-class-name">다이어트 댄스 &amp; 줌바</div>
                  <div className="day-class-time">오전 9:00 – 10:00</div>
                </div>
                <div className="day-class pilates">
                  <div className="day-class-name">소도구 필라테스</div>
                  <div className="day-class-time">오전 10:10 – 11:00</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="schedule-legend">
          <div className="legend-item">
            <div className="legend-dot" style={{ background: 'var(--gold)' }} />
            다이어트 댄스 &amp; 줌바
          </div>
          <div className="legend-item">
            <div className="legend-dot" style={{ background: '#50aa9a' }} />
            소도구 필라테스
          </div>
        </div>
      </div>
    </section>
  )
}
