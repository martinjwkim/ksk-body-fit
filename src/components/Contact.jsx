import { useState } from 'react'

const INITIAL = { name: '', phone: '', email: '', preferredClass: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(INITIAL)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const set = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.phone || !form.email) {
      setError('Please fill in your name, phone number, and email.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-grid">

          <div className="reveal">
            <span className="section-label">Get In Touch</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)' }}>
              Send Us a Message
            </h2>
            <div className="gold-divider" />
            <a href="tel:7143510936" className="contact-phone">714-351-0936</a>
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
            <p className="contact-note">
              지금 상담하시고 건강한 변화를 시작하세요.<br />
              Reach out today to start your healthy transformation.
            </p>
          </div>

          <div className="reveal">
            {submitted ? (
              <div className="form-success">
                <div className="form-success-icon"><CheckIcon /></div>
                <h3>Thank you! / 감사합니다!</h3>
                <p>
                  We'll be in touch soon. For immediate assistance, call{' '}
                  <a href="tel:7143510936">714-351-0936</a>.
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-grid">
                  <div className="form-field">
                    <label className="form-label" htmlFor="name">Name / 이름</label>
                    <input
                      id="name"
                      className="form-input"
                      placeholder="Your name"
                      value={form.name}
                      onChange={set('name')}
                    />
                  </div>
                  <div className="form-field">
                    <label className="form-label" htmlFor="phone">Phone / 전화번호</label>
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
                    <label className="form-label" htmlFor="email">Email / 이메일</label>
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
                    <label className="form-label" htmlFor="preferredClass">Preferred Class / 관심 수업</label>
                    <select
                      id="preferredClass"
                      className="form-input"
                      value={form.preferredClass}
                      onChange={set('preferredClass')}
                    >
                      <option value="">Select a class / 수업을 선택하세요</option>
                      <option value="dance">Diet Dance &amp; Zumba / 다이어트 댄스 &amp; 줌바</option>
                      <option value="pilates">Props Pilates / 소도구 필라테스</option>
                      <option value="both">Both / 모두</option>
                    </select>
                  </div>
                  <div className="form-field full">
                    <label className="form-label" htmlFor="message">Message / 문의 내용</label>
                    <textarea
                      id="message"
                      className="form-input"
                      placeholder="Tell us about yourself or ask us anything"
                      rows={5}
                      value={form.message}
                      onChange={set('message')}
                    />
                  </div>
                </div>
                {error && <p className="form-error">{error}</p>}
                <button type="submit" className="form-submit">
                  <SendIcon />
                  Send Inquiry / 문의하기
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
