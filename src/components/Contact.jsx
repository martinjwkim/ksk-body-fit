import { useState } from 'react'

const INITIAL = { name: '', phone: '', email: '', preferredClass: '', message: '' }
const STUDIO_EMAIL = 'sunnykim64@yahoo.com'

export default function Contact() {
  const [form, setForm] = useState(INITIAL)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const set = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.phone || !form.email) {
      setError('이름, 전화번호, 이메일을 입력해 주세요. / Please fill in your name, phone, and email.')
      return
    }
    setError('')

    // Route the inquiry to the studio inbox via the visitor's email client.
    const classLabels = {
      dance: 'Diet Dance & Zumba',
      pilates: 'Props Pilates',
      both: 'Both',
    }
    const subject = `수업 문의 / Class Inquiry — ${form.name}`
    const body = [
      `이름 / Name: ${form.name}`,
      `전화 / Phone: ${form.phone}`,
      `이메일 / Email: ${form.email}`,
      `관심 수업 / Preferred Class: ${classLabels[form.preferredClass] || '—'}`,
      '',
      `문의 내용 / Message:`,
      form.message || '—',
    ].join('\n')
    window.location.href = `mailto:${STUDIO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    setSubmitted(true)
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-grid">

          <div className="reveal">
            <span className="section-label">문의하기 · Contact</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)' }}>
              문의하기
            </h2>
            <div className="gold-divider" />
            <div className="contact-detail">
              <PinIcon />
              <span>
                2753 S. Diamond Bar Blvd. Suite A<br />
                Diamond Bar, CA 91765
              </span>
            </div>
            <div className="contact-detail">
              <PhoneIcon />
              <a href="tel:7143510936">714-351-0936</a>
            </div>
            <div className="contact-detail">
              <MailIcon />
              <a href={`mailto:${STUDIO_EMAIL}`}>{STUDIO_EMAIL}</a>
            </div>
          </div>

          <div className="reveal">
            {submitted ? (
              <div className="form-success">
                <div className="form-success-icon"><CheckIcon /></div>
                <h3>감사합니다! / Thank you!</h3>
                <p>
                  이메일 앱이 열렸습니다 — 전송 버튼을 눌러 문의를 보내주세요. 빠른 상담은{' '}
                  <a href="tel:7143510936">714-351-0936</a> 또는{' '}
                  <a href={`mailto:${STUDIO_EMAIL}`}>{STUDIO_EMAIL}</a>.
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-grid">
                  <div className="form-field">
                    <label className="form-label" htmlFor="name">이름 / Name</label>
                    <input
                      id="name"
                      className="form-input"
                      placeholder="성함을 입력하세요"
                      value={form.name}
                      onChange={set('name')}
                    />
                  </div>
                  <div className="form-field">
                    <label className="form-label" htmlFor="phone">전화번호 / Phone</label>
                    <input
                      id="phone"
                      type="tel"
                      className="form-input"
                      placeholder="(xxx) xxx-xxxx"
                      value={form.phone}
                      onChange={set('phone')}
                    />
                  </div>
                  <div className="form-field full">
                    <label className="form-label" htmlFor="email">이메일 / Email</label>
                    <input
                      id="email"
                      type="email"
                      className="form-input"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={set('email')}
                    />
                  </div>
                  <div className="form-field full">
                    <label className="form-label" htmlFor="preferredClass">관심 수업 / Preferred Class</label>
                    <select
                      id="preferredClass"
                      className="form-input"
                      value={form.preferredClass}
                      onChange={set('preferredClass')}
                    >
                      <option value="">수업을 선택하세요 / Select a class</option>
                      <option value="dance">다이어트 댄스 &amp; 줌바 / Diet Dance &amp; Zumba</option>
                      <option value="pilates">소도구 필라테스 / Props Pilates</option>
                      <option value="both">모두 / Both</option>
                    </select>
                  </div>
                  <div className="form-field full">
                    <label className="form-label" htmlFor="message">문의 내용 / Message</label>
                    <textarea
                      id="message"
                      className="form-input"
                      placeholder="궁금하신 점이나 문의 내용을 자유롭게 작성해 주세요"
                      rows={5}
                      value={form.message}
                      onChange={set('message')}
                    />
                  </div>
                </div>
                {error && <p className="form-error">{error}</p>}
                <button type="submit" className="form-submit">
                  <SendIcon />
                  문의하기 / Send Inquiry
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}

function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.48 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6.07 6.07l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  )
}

function SendIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}
