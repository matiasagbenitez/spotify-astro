const ChevronLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path stroke="none" d="M0 0h16v16H0z" fill="none" />
    <path d="M15 6l-6 6l6 6" />
  </svg>
);

export function PlaylistNavigation() {
  return (
    <a href="/" className="mx-6 mt-4">
      <button className="flex items-center gap-x-2 rounded-full py-2 ps-2 pe-3 text-gray-300 text-sm font-light hover:bg-white/10 overflow-hidden transition duration-300">
        <ChevronLeft />
        Volver
      </button>
    </a>
  );
}
