'use client';

import ProfileCard from '@/components/ProfileCard';

export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'radial-gradient(ellipse at center, #1a1a2e 0%, #0d0d1a 60%, #000 100%)',
        gap: '2rem',
        padding: '2rem',
      }}
    >
      <h1
        style={{
          color: 'rgba(255,255,255,0.85)',
          fontFamily: 'sans-serif',
          fontSize: '1.5rem',
          fontWeight: 600,
          letterSpacing: '0.05em',
          margin: 0,
        }}
      >
        Kartu Profil MABA
      </h1>

      <ProfileCard
        name="Raihan A.F."
        title="Mahasiswa Baru 2026"
        handle="Raihan"
        status="Mawar"
        contactText="Lihat Profil"
        avatarUrl="/selfi sigma.png"
        showUserInfo={true}
        enableTilt={true}
        enableMobileTilt={false}
        behindGlowEnabled={true}
        behindGlowColor="rgba(125, 190, 255, 0.67)"
        innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
        nrp="5025251263"
        gugus="Mawar"
        namaLengkap="Raihan Ahmad Farraszaki"
        onContactClick={() => console.log('Profil diklik')}
      />
    </main>
  );
}
