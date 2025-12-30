'use client';

export default function Navbar() {
  const navlinks = [
    { name: 'Product', href: '/product' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Developers', href: '/developers' },
  ];
  return (
    <>
      <div className="mx-10 mt-3 flex items-center justify-between rounded-[2.5rem] border-b border-gray-200 bg-white px-6 py-4">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-black">
            <div className="flex h-5 w-5 items-center justify-center rounded-sm border-2 border-white">
              <div className="h-2 w-2 rounded-sm bg-white"></div>
            </div>
          </div>
          <span className="text-sm font-medium text-black">Zerodha Sales</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden items-center gap-8 md:flex">
          {navlinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-black transition-colors hover:text-gray-600"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-4">
          <button className="text-sm font-medium text-black transition-colors hover:text-gray-600">
            Log in
          </button>
          <span className="h-6 w-px bg-gray-300"></span>
          <button className="rounded-full border-2 border-black px-6 py-2.5 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white">
            Get it Now — It&apos;s Free
          </button>
        </div>
      </div>
    </>
  );
}
