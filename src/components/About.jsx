import { useState } from 'react'

// Instructor began teaching in 2004 — keeps "years of experience" current automatically.
const CAREER_START_YEAR = 2004
const yearsOfExperience = new Date().getFullYear() - CAREER_START_YEAR

const CERTIFICATIONS = [
  'ACE Certified Group Fitness Instructor',
  'Certified Zumba Instructor',
  'Certified Mat Pilates Instructor',
]

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">

          <div className="about-visual reveal">
            <div className="avatar-ring">
              <div className="avatar-inner">
                <InstructorPhoto />
              </div>
            </div>
            <div className="certs">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert} className="cert-badge">{cert}</div>
              ))}
            </div>
          </div>

          <div className="reveal">
            <span className="section-label">강사 소개 · Instructor</span>
            <h2 className="instructor-name-en">김선경</h2>
            <p className="instructor-name-kr">Kim Seon-Kyoung</p>
            <div className="gold-divider" />
            <p className="about-bio">
              {yearsOfExperience}년 이상의 댄스 피트니스 및 필라테스 지도 경력을 가진 김선경 강사는 매 수업마다
              전문성과 열정, 따뜻함을 담아냅니다. ACE 그룹 피트니스, 줌바, 매트 필라테스
              자격증을 보유하고 있으며, 역동적인 움직임과 효과적인 바디 컨디셔닝을 결합하는 데
              특화되어 있습니다 — 모든 체력 수준의 분들이 즐겁고 건강한 변화를 경험하실 수 있습니다.
            </p>
            <p className="about-bio" style={{ fontSize: '0.92rem', opacity: 0.82, marginTop: '-1rem' }}>
              With over {yearsOfExperience} years of experience, Kim Seon-Kyoung brings expertise and warmth to every class —
              certified in ACE Group Fitness, Zumba, and Mat Pilates.
            </p>
            <div className="stats-row">
              {[[`${yearsOfExperience}`, 'Years Experience'], ['3', 'Certifications'], ['5×', 'Weekly Classes']].map(
                ([num, label]) => (
                  <div key={label}>
                    <div className="stat-number">{num}</div>
                    <div className="stat-label">{label}</div>
                  </div>
                )
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

// Real portrait when available (public/instructor.jpg); falls back to the lettermark avatar.
function InstructorPhoto() {
  const [failed, setFailed] = useState(false)
  if (failed) return <AvatarSVG />
  return (
    <img
      src="/instructor.jpg"
      alt="Kim Seon-Kyoung, instructor"
      className="instructor-photo"
      onError={() => setFailed(true)}
    />
  )
}

function AvatarSVG() {
  return (
    <svg width="156" height="156" viewBox="0 0 156 156" xmlns="http://www.w3.org/2000/svg">
      <circle cx="78" cy="56" r="30" fill="rgba(201,168,82,0.25)" />
      <circle cx="78" cy="56" r="20" fill="rgba(201,168,82,0.45)" />
      <ellipse cx="78" cy="124" rx="44" ry="34" fill="rgba(201,168,82,0.18)" />
      <ellipse cx="78" cy="116" rx="30" ry="24" fill="rgba(201,168,82,0.32)" />
      <text
        x="78" y="63"
        textAnchor="middle"
        fill="rgba(201,168,82,0.95)"
        fontSize="22"
        fontFamily="Cormorant Garamond, serif"
        fontWeight="700"
      >
        KS
      </text>
    </svg>
  )
}
