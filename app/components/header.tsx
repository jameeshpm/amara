import Image from 'next/image';
import { navigationLinks } from '../constants/data';

const Header = () => (
  <header className="bg-primary text-white">
    <div className="container mx-auto px-4 py-4">
      <nav className="flex flex-wrap items-center justify-between">
        {/* Logo Section */}
        <div className="w-full sm:w-auto mb-4 sm:mb-0 flex justify-center sm:justify-start">
          <Image
            src="/logo.png"
            alt="Thai Massage"
            width={150}
            height={150}
            className="object-contain"
            priority
          />
        </div>

        {/* Navigation Links */}
        <div className="w-full sm:w-auto flex flex-wrap justify-center sm:justify-end gap-4">
          {navigationLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm md:text-base hover:text-green-200 transition-colors block sm:inline"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
