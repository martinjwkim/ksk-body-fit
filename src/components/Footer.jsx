const NAV = [
  ['#about', 'Instructor'],
  ['#classes', 'Classes'],
  ['#schedule', 'Schedule'],
  ['#pricing', 'Pricing'],
  ['#contact', 'Contact'],
]

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div>
            <div className="footer-brand-main">김선경 Body Fit</div>
            <div className="footer-brand-sub">Fred Astaire Dance Studio</div>
          </div>

<div className="footer-right">
            2753 S. Diamond Bar Blvd. Suite A<br />
            Diamond Bar, CA 91765<br />
            <a href="tel:7143510936">714-351-0936</a>
            <br />
            <span style={{ fontSize: '0.7rem', opacity: 0.6 }}>
              © 2024 김선경 Body Fit. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
