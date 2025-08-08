"use client";

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
}

export default function CTAButton({
  children,
  className = "",
  showArrow = true,
}: CTAButtonProps) {
  return (
    <button className={`cta-btn group ${className}`}>
      <span className="relative z-10 flex items-center gap-3">
        {children}
        {showArrow && (
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        )}
      </span>
      <style jsx>{`
        .cta-btn {
          outline: none;
          cursor: pointer;
          border: none;
          padding: 0.9rem 2rem;
          margin: 0;
          font-family: inherit;
          font-size: 17px;
          font-weight: 700;
          letter-spacing: 0.05rem;
          border-radius: 500px;
          overflow: hidden;
          position: relative;
          display: inline-block;
          color: ghostwhite;
          background: linear-gradient(to right, #ff4655, #3e2723);
          transition: all 0.3s ease;
        }

        .cta-btn span {
          position: relative;
          z-index: 10;
          transition: color 0.4s;
        }

        .cta-btn:hover span {
          color: black;
        }

        .cta-btn::before,
        .cta-btn::after {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .cta-btn::before {
          content: "";
          background: #ff4655;
          width: 120%;
          left: -10%;
          transform: skew(30deg);
          transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
        }

        .cta-btn:hover::before {
          transform: translate3d(100%, 0, 0);
        }
      `}</style>
    </button>
  );
}
