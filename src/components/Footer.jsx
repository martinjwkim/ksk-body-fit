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
          </div>

<div className="footer-right">
            2753 S. Diamond Bar Blvd. Suite A<br />
            Diamond Bar, CA 91765<br />
            <span style={{ fontSize: '0.7rem', opacity: 0.6 }}>
              © {new Date().getFullYear()} 김선경 Body Fit. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
