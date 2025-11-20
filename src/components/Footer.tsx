export function Footer() {
  return (
    <footer 
      className="py-8 border-t"
      style={{ 
        backgroundColor: '#0D1117',
        borderColor: '#30363D'
      }}
    >
      <div className="mx-auto px-8 text-center" style={{ maxWidth: '1020px' }}>
        <p style={{ color: '#8B949E', fontSize: '14px', marginBottom: '4px' }}>
          © 2025 Yeamim Hossain Sajid. All rights reserved.
        </p>
        <p style={{ color: '#8B949E', fontSize: '12px' }}>
          Inspired by GitHub's design language.
        </p>
      </div>
    </footer>
  );
}
