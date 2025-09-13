// src/pages/Film.jsx
import { useState } from 'react';
import Navbar from '@/components/organisms/Navbar.jsx';
import CarouselRow from '@/components/organisms/CarouselRow.jsx';
import Footer from '@/components/organisms/Footer.jsx';
import HeroSection from '@/components/organisms/HeroSection.jsx';
import FilmDetailPopup from '@/components/organisms/FilmDetailPopup.jsx';
import FilmPlayer from '@/components/molecules/FilmPlayer.jsx';
import { useWatchlist } from '@/contexts/WatchlistContext.jsx';

const asset = (p) => new URL(`../../assets/${p}`, import.meta.url).href;

// Film data
const filmData = {
  continueWatching: [
    { src: asset('img/Poster/landscape/image 215.png'), title: 'The Batman', rating: '4.8/5', badge: 'Episode Baru' },
    { src: asset('img/Poster/landscape/Type=10.png'), title: 'Dune', rating: '4.6/5' },
    { src: asset('img/Poster/landscape/Type=11.png'), title: 'No Time to Die', rating: '4.7/5' },
    { src: asset('img/Poster/landscape/Type=13.png'), title: 'Top Gun: Maverick', rating: '4.9/5' },
    { src: asset('img/Poster/landscape/Type=14.png'), title: 'Spider-Man: No Way Home', rating: '4.5/5' },
  ],
  chillFilms: [
    { src: asset('img/Poster/Number=17.png'), title: 'The Shawshank Redemption', rating: '4.9/5', badge: 'Episode Baru' },
    { src: asset('img/Poster/Number=18.png'), title: 'The Godfather', rating: '4.8/5' },
    { src: asset('img/Poster/Number=19.png'), title: 'Pulp Fiction', rating: '4.7/5' },
    { src: asset('img/Poster/Number=20.png'), title: 'Forrest Gump', rating: '4.6/5' },
    { src: asset('img/Poster/Number=21.png'), title: 'Inception', rating: '4.8/5' },
    { src: asset('img/Poster/Number=22.png'), title: 'The Dark Knight', rating: '4.9/5' },
    { src: asset('img/Poster/Number=23.png'), title: 'Goodfellas', rating: '4.7/5' },
    { src: asset('img/Poster/Number=24.png'), title: 'The Matrix', rating: '4.6/5' },
  ],
  topRating: [
    { src: asset('img/Poster/Number=25.png'), title: 'Interstellar', rating: '4.8/5', badge: 'Top 10' },
    { src: asset('img/Poster/Number=26.png'), title: 'The Lord of the Rings', rating: '4.9/5', badge: 'Top 10' },
    { src: asset('img/Poster/Number=27.png'), title: 'Fight Club', rating: '4.7/5', badge: 'Top 10' },
    { src: asset('img/Poster/Number=28.png'), title: 'The Prestige', rating: '4.8/5', badge: 'Top 10' },
    { src: asset('img/Poster/Number=29.png'), title: 'Gladiator', rating: '4.6/5', badge: 'Top 10' },
    { src: asset('img/Poster/Number=30.png'), title: 'Casino Royale', rating: '4.7/5', badge: 'Top 10' },
  ],
  trending: [
    { src: asset('img/Poster/Number=31.png'), title: 'Avatar: The Way of Water', rating: '4.5/5', badge: 'Trending' },
    { src: asset('img/Poster/Number=32.png'), title: 'Black Panther: Wakanda Forever', rating: '4.6/5', badge: 'Trending' },
    { src: asset('img/Poster/Number=17.png'), title: 'Everything Everywhere All at Once', rating: '4.8/5', badge: 'Trending' },
    { src: asset('img/Poster/Number=18.png'), title: 'The Banshees of Inisherin', rating: '4.7/5', badge: 'Trending' },
    { src: asset('img/Poster/Number=19.png'), title: 'Tár', rating: '4.6/5', badge: 'Trending' },
    { src: asset('img/Poster/Number=20.png'), title: 'The Fabelmans', rating: '4.5/5', badge: 'Trending' },
  ],
  newRelease: [
    { src: asset('img/Poster/Number=21.png'), title: 'Guardians of the Galaxy Vol. 3', rating: '4.7/5', badge: 'New' },
    { src: asset('img/Poster/Number=22.png'), title: 'Fast X', rating: '4.3/5', badge: 'New' },
    { src: asset('img/Poster/Number=23.png'), title: 'Spider-Man: Across the Spider-Verse', rating: '4.8/5', badge: 'New' },
    { src: asset('img/Poster/Number=24.png'), title: 'The Little Mermaid', rating: '4.2/5', badge: 'New' },
    { src: asset('img/Poster/Number=25.png'), title: 'Transformers: Rise of the Beasts', rating: '4.1/5', badge: 'New' },
    { src: asset('img/Poster/Number=26.png'), title: 'Indiana Jones and the Dial of Destiny', rating: '4.4/5', badge: 'New' },
  ],
};

export default function Film() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showFilmPlayer, setShowFilmPlayer] = useState(false);
  const { addToWatchlist } = useWatchlist();

  const handlePosterClick = (item) => {
    setSelectedItem(item);
  };

  const handleClosePopup = () => {
    setSelectedItem(null);
  };

  const handleAddToWatchlist = (item) => {
    addToWatchlist(item);
    handleClosePopup();
  };

  const handleStartFilm = () => {
    setShowFilmPlayer(true);
  };

  const handleCloseFilmPlayer = () => {
    setShowFilmPlayer(false);
  };

  return (
    <div className="bg-[#181A1C] text-white font-lato min-h-screen">
      <Navbar />

      {/* HERO */}
      <HeroSection
        bg={asset('img/film/hero-film.png')}
        title="Guardian of The Galaxy Vol. 3"
        description={`Masih goyah karena kehilangan Gamora, Peter Quill mengumpulkan timnya untuk mempertahankan alam semesta dan salah satu dari mereka - sebuah misi yang bisa berarti akhir dari Penjaga jika tidak berhasil.`}
        onStart={handleStartFilm}
      />

      {/* CAROUSELS */}
      <CarouselRow title="Melanjutkan Tonton Film" items={filmData.continueWatching} variant="landscape" onPosterClick={handlePosterClick} />
      <CarouselRow title="Film Persembahan Chill" items={filmData.chillFilms} variant="portrait" onPosterClick={handlePosterClick} />
      <CarouselRow title="Top Rating Film Hari ini" items={filmData.topRating} variant="portrait" onPosterClick={handlePosterClick} />
      <CarouselRow title="Film Trending" items={filmData.trending} variant="portrait" onPosterClick={handlePosterClick} />
      <CarouselRow title="Rilis Baru" items={filmData.newRelease} variant="portrait" onPosterClick={handlePosterClick} />

      {/* POPUP */}
      {selectedItem && <FilmDetailPopup item={selectedItem} onClose={handleClosePopup} onAddToWatchlist={handleAddToWatchlist} type="film" />}

      {/* FILM PLAYER */}
      {showFilmPlayer && (
        <div className="fixed inset-0 z-50 bg-black">
          <FilmPlayer onClose={handleCloseFilmPlayer} />
        </div>
      )}

      <Footer />
    </div>
  );
}
