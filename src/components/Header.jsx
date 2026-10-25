import { useEffect, useState } from "react";
import logo from "../assets/logo.jpeg";

const navGroups = [
  {
    label: "HOME",
    href: "/",
  },
  {
    label: "MY STORY",
    href: "/about",
  },
  {
    label: "SERVICES",
    href: "/services",
    children: [
      { label: "Graphic design", href: "/services#graphic-design" },
      { label: "Motion graphics", href: "/services#motion-graphics" },
      { label: "Brand identity", href: "/services#brand-identity" },
    ],
  },
  {
    label: "PROJECTS",
    href: "/projects",
    children: [
      { label: "All projects", href: "/projects" },
      { label: "Graphics", href: "/projects/graphics" },
      { label: "Motion Graphics", href: "/projects/motion" },
      { label: "Branding", href: "/projects/branding" },
    ],
  },
  {
    label: "MEDIA",
    href: "/media",
    children: [
      { label: "Behind the scenes", href: "/media/behind-the-scenes" },
      { label: "Tutorials", href: "/media/tutorials" },
    ],
  },
  {
    label: "SHOP",
    href: "/shop",
  },
  {
    label: "WORK WITH ME",
    href: "/contact",
    children: [
      { label: "Contact", href: "/contact" },
      { label: "Speaking & collaborations", href: "/speaking" },
    ],
  },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="fixed left-0 top-0 z-[1000] flex h-[82px] w-full items-center justify-between border-b border-black/5 bg-white/90 px-[7%] shadow-sm backdrop-blur-md max-[600px]:h-[70px] max-[600px]:px-[6%]">
        <a
          href="/"
          onClick={closeMenu}
          className="z-[1002] inline-flex shrink-0 items-center gap-3 no-underline"
        >
          <img
            src={logo}
            alt="Yazoh Graphx"
            className="h-10 w-10 rounded-full object-cover max-[600px]:h-9 max-[600px]:w-9"
          />
          <span className="font-['Space_Grotesk',sans-serif] text-[17px] font-bold tracking-[-0.7px] text-[#171719] max-[600px]:text-[15px]">
            YAZOH GRAPHX
          </span>
        </a>

        <button
          type="button"
          aria-label={isOpen ? "Funga menyu" : "Fungua menyu"}
          aria-expanded={isOpen}
          aria-controls="site-navigation"
          onClick={() => setIsOpen(!isOpen)}
          className="z-[1002] flex h-[44px] w-[44px] flex-col items-center justify-center gap-[7px] border-0 bg-transparent"
        >
          <span
            className={`h-[2px] w-7 bg-[#171719] transition-all duration-300 ${
              isOpen ? "translate-y-[4.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] w-7 bg-[#171719] transition-all duration-300 ${
              isOpen ? "-translate-y-[4.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </header>

      <button
        type="button"
        aria-label="Funga menyu"
        tabIndex={isOpen ? 0 : -1}
        onClick={closeMenu}
        className={`fixed inset-0 z-[1000] border-0 bg-[#171126]/60 p-0 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
      />

      <nav
        id="site-navigation"
        aria-label="Menyu kuu"
        aria-hidden={!isOpen}
        className={`fixed right-0 top-0 z-[1001] flex h-[100dvh] w-[min(480px,88vw)] flex-col overflow-y-auto bg-[#24192f] px-[8%] pb-10 pt-5 transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-5 flex h-[65px] shrink-0 items-center justify-between">
          <span className="text-[10px] font-bold tracking-[2px] text-white/55">
            YAZOH GRAPHX
          </span>
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Funga menyu"
            tabIndex={isOpen ? 0 : -1}
            className="flex h-12 w-12 items-center justify-center border-0 bg-transparent text-3xl font-light text-white"
          >
            ×
          </button>
        </div>

        <div className="w-full">
          {navGroups.map((item) => (
            <div className="border-b border-white/15" key={item.href}>
              <div className="flex min-h-[74px] items-center justify-between gap-3">
                <a
                  href={item.href}
                  tabIndex={isOpen ? 0 : -1}
                  onClick={closeMenu}
                  className="site-navigation-link flex min-h-[74px] flex-1 items-center font-['Space_Grotesk',sans-serif] text-[clamp(25px,3.6vw,39px)] font-semibold tracking-[-1.2px] no-underline transition-colors duration-200"
                >
                  {item.label}
                </a>
                {item.children && (
                  <button
                    type="button"
                    aria-label={`${item.label} submenu`}
                    aria-expanded={!!expanded[item.label]}
                    tabIndex={isOpen ? 0 : -1}
                    onClick={() =>
                      setExpanded((previous) => ({
                        ...previous,
                        [item.label]: !previous[item.label],
                      }))
                    }
                    className="flex h-10 w-9 shrink-0 items-center justify-center border-0 bg-transparent text-2xl font-light text-[#e3c4ff]"
                  >
                    {expanded[item.label] ? "−" : "+"}
                  </button>
                )}
              </div>
              {item.children && expanded[item.label] && (
                <div className="flex flex-col gap-4 pb-5 pl-2">
                  {item.children.map((child) => (
                    <a
                      href={child.href}
                      key={child.href}
                      tabIndex={isOpen ? 0 : -1}
                      onClick={closeMenu}
                      className="site-navigation-link text-sm font-medium no-underline transition-colors"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <a
          href="https://wa.me/255687624801"
          target="_blank"
          rel="noreferrer"
          tabIndex={isOpen ? 0 : -1}
          className="mt-8 inline-flex min-h-[54px] w-fit items-center justify-center bg-white px-5 text-[10px] font-bold tracking-[1.4px] text-[#24192f] no-underline transition-colors hover:bg-[#ead8ff]"
        >
          CHAT ON WHATSAPP · +255687624801
        </a>
      </nav>
    </>
  );
}

export default Header;
