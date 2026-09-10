import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/project-gallery', label: 'Project Gallery' },
  { to: '/contact', label: 'Contact' },
  { to: '/privacy', label: 'Privacy' },
];

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-2 text-slate-900 transition hover:text-sky-700">
          <span className="text-lg font-black tracking-tight sm:text-xl">DANNY HUASCO</span>
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">Web Developer</span>
        </NavLink>

        <div className="flex flex-wrap items-center justify-center gap-2 text-sm font-medium text-slate-600">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-full px-3 py-2 transition ${
                  isActive
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'hover:bg-slate-100 hover:text-slate-900'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
