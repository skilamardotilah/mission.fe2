// src/pages/DaftarSaya.jsx
import { useState } from 'react';
import Navbar from '@/components/organisms/Navbar.jsx';
import CarouselRow from '@/components/organisms/CarouselRow.jsx';
import Footer from '@/components/organisms/Footer.jsx';
import FilmDetailPopup from '@/components/organisms/FilmDetailPopup.jsx';
import { useWatchlist } from '@/contexts/WatchlistContext.jsx';

export default function DaftarSaya() {
  const [selectedItem, setSelectedItem] = useState(null);
  const { watchlist, removeFromWatchlist } = useWatchlist();

  const handlePosterClick = (item) => {
    setSelectedItem(item);
  };

  const handleClosePopup = () => {
    setSelectedItem(null);
  };

  const handleRemoveFromWatchlist = (itemToRemove) => {
    removeFromWatchlist(itemToRemove);
    handleClosePopup();
  };

  return (
    <div className="bg-[#181A1C] text-white font-lato min-h-screen">
      <Navbar />

      {/* Header */}
      <div className="px-4 md:px-[80px] py-[40px]">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Daftar Saya</h1>
        <p className="text-gray-400">
          {watchlist.length > 0 
            ? `${watchlist.length} item dalam daftar tonton Anda` 
            : 'Belum ada item dalam daftar tonton Anda'
          }
        </p>
      </div>

      {/* Watchlist Carousel */}
      {watchlist.length > 0 ? (
        <CarouselRow 
          title="Daftar Tonton Saya" 
          items={watchlist} 
          variant="portrait"
          onPosterClick={handlePosterClick}
        />
      ) : (
        <div className="px-4 md:px-[80px] py-[40px] text-center">
          <div className="bg-gray-800/50 rounded-lg p-8">
            <svg className="w-16 h-16 mx-auto text-gray-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <h3 className="text-xl font-semibold text-white mb-2">Daftar Tonton Kosong</h3>
            <p className="text-gray-400 mb-4">
              Tambahkan film atau series ke daftar tonton Anda dengan mengklik tombol "+" pada poster
            </p>
            <p className="text-sm text-gray-500">
              Jelajahi halaman Series atau Film untuk menemukan konten yang ingin Anda tonton
            </p>
          </div>
        </div>
      )}

      {/* POPUP */}
      {selectedItem && (
        <FilmDetailPopup
          item={selectedItem}
          onClose={handleClosePopup}
          onRemoveFromWatchlist={handleRemoveFromWatchlist}
          type="watchlist"
        />
      )}

      <Footer />
    </div>
  );
}
