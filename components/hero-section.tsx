'use client';

export default function HeroSection() {
  return (
    <header
      className="relative overflow-hidden rounded-3xl"
      style={{
        willChange: 'transform',
        opacity: 1,
        transform: 'none',
        width: 'calc(100% - 8px)',
        height: 'calc(100vh - 8px)',
        margin: '4px'
      }}
    >
      <div className="relative w-full h-full">
        <div
          className="absolute inset-0"
          style={{
            position: 'absolute',
            borderRadius: 'inherit',
            inset: 0
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="block w-full h-full object-cover object-center"
            style={{ borderRadius: 'inherit' }}
          >
            <source src="/tea1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Dark blur overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(6px)',
            zIndex: 1
          }}
        />

        <div className="relative z-20 flex flex-col h-full">
          <div className="flex-1 flex items-end" />

          <div className="pb-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="mb-8">
                <div
                  className="mb-0"
                  style={{
                    opacity: 1,
                    transform: 'none',
                    willChange: 'transform'
                  }}
                >
                  <h1
                    className="text-6xl md:text-7xl lg:text-8xl leading-tight tracking-tight font-light"
                    style={{
                      color: 'rgb(224, 228, 229)'
                    }}
                  >
                    Three generations of<br />
                    Ceylon tea excellence
                  </h1>
                </div>

                <div
                  className="mt-6 pt-10"
                  style={{
                    opacity: 1,
                    transform: 'none',
                    willChange: 'transform'
                  }}
                >
                  <div className="flex gap-6 items-center">
                    <div className="flex items-center gap-2">
                      <img src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962/67ee959464ed700c7614bdba_Rectangle%201%20(1).svg" loading="lazy" alt="" className="w-8 h-8 lg:w-8 lg:h-8 flex-shrink-0" />
                      <span className="text-white text-sm font-light">Quality</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962/67ee959464ed700c7614bdba_Rectangle%201%20(1).svg" loading="lazy" alt="" className="w-8 h-8 lg:w-8 lg:h-8 flex-shrink-0" />
                      <span className="text-white text-sm font-light">Heritage</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962/67ee959464ed700c7614bdba_Rectangle%201%20(1).svg" loading="lazy" alt="" className="w-8 h-8 lg:w-8 lg:h-8 flex-shrink-0" />
                      <span className="text-white text-sm font-light">Excellence</span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="flex items-center gap-3"
                style={{
                  opacity: 1,
                  transform: 'none',
                  willChange: 'transform'
                }}
              >
                <p
                  className="text-[14px] leading-[1.5]"
                  style={{
                    color: 'rgb(224, 228, 229)'
                  }}
                >
                  Scroll down
                </p>
                <div className="w-[65px] h-[60px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 65 60"
                    width="65"
                    height="60"
                    preserveAspectRatio="xMidYMid slice"
                    className="w-full h-full"
                  >
                    <defs>
                      <clipPath id="lottie-clip">
                        <rect width="65" height="60" x="0" y="0" />
                      </clipPath>
                    </defs>
                    <g clipPath="url(#lottie-clip)">
                      <g
                        transform="matrix(0.98,0,0,0.98,-3.56,27.93)"
                        opacity="1"
                      >
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fillOpacity="0"
                            stroke="rgb(255,255,255)"
                            strokeOpacity="1"
                            strokeWidth="6"
                            d="M-158.5,-8 C-147.18,-8 -147.18,8 -135.86,8 C-124.54,8 -124.54,-8 -113.22,-8 C-101.9,-8 -101.9,8 -90.59,8 C-79.27,8 -79.27,-8 -67.95,-8 C-56.63,-8 -56.63,8 -45.3,8 C-33.98,8 -33.98,-8 -22.66,-8 C-11.34,-8 -11.34,8 -0.02,8 C11.3,8 11.3,-8 22.62,-8 C33.94,-8 33.94,8 45.26,8 C56.58,8 56.58,-8 67.9,-8 C79.22,-8 79.22,8 90.54,8 C101.86,8 101.86,-8 113.19,-8 C124.51,-8 124.51,8 135.84,8 C147.17,8 147.17,-8 158.5,-8"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              backgroundImage: 'url("https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png")',
              opacity: 0.2,
              inset: '-200%',
              width: '400%',
              height: '400%',
              position: 'absolute',
              willChange: 'transform',
              transform: 'translateX(-10%) translateY(10%)'
            }}
          />
        </div>
      </div>
    </header>
  );
}
