const ChevronRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h16v16H0z" fill="none" />
    <path d="M15 6l-6 6l6 6" />
  </svg>
);

export function PlaylistNavigation() {
        
  return (
    <a href="/" className="mx-6 mt-4">
      <button className="flex items-center gap-x-2 rounded-full py-1 ps-2 pe-3 text-gray-300 text-sm font-light hover:bg-white/10 overflow-hidden transition duration-300">
        <ChevronRight />
        Volver
      </button>
    </a>
  );
}
