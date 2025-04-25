import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'iLost - Reuniting People With Lost Items';
export const contentType = 'image/png';

export const size = {
  width: 1200,
  height: 630,
};

export default async function Image() {
  // Use system fonts instead of trying to load a font file that doesn't exist
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f6f7fe',
          backgroundImage: 'radial-gradient(circle at top left, #e0e1fe 0%, rgba(255, 255, 255, 0) 60%)',
          backgroundSize: '100% 100%',
          backgroundPosition: 'center center',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
          }}
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            style={{ marginRight: 16 }}
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-5h10c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1z"
              fill="#6366f1"
            />
          </svg>
          <span
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              background: 'linear-gradient(to right, #6366f1, #8687fb)',
              backgroundClip: 'text',
              color: 'transparent',
              marginRight: 8,
            }}
          >
            iLost
          </span>
        </div>

        <div
          style={{
            fontSize: 48,
            fontWeight: 'bold',
            letterSpacing: -1,
            backgroundImage: 'linear-gradient(to right, #1e293b, #334155)',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: 24,
            textAlign: 'center',
          }}
        >
          Reuniting People With Lost Items
        </div>

        <div
          style={{
            fontSize: 24,
            maxWidth: 800,
            textAlign: 'center',
            color: '#64748b',
          }}
        >
          The trusted platform connecting finders of lost items with their rightful owners through secure verification
        </div>      </div>
    ),
    {
      ...size
    }
  );
}
