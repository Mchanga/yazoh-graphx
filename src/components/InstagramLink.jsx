function InstagramLink({ className = "" }) {
  return (
    <a
      className={`instagram-link ${className}`}
      href="https://www.instagram.com/yazohgraphx/"
      target="_blank"
      rel="noreferrer"
      aria-label="Fungua profile ya Yazoh Graphx Instagram"
      title="Instagram @yazohgraphx"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
      </svg>
    </a>
  );
}

export default InstagramLink;
