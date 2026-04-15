import Script from "next/script";

const CS_ID = process.env.NEXT_PUBLIC_CS_ID;

export default function Contentsquare() {
  if (!CS_ID) return null;

  return (
    <Script
      src={`https://t.contentsquare.net/uxa/${CS_ID}.js`}
      strategy="afterInteractive"
    />
  );
}
