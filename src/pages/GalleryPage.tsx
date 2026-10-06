import React, { useState } from 'react';
import { Image as ImageIcon, Maximize2, X, MapPin } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/siteData';
import { SquircleIcon } from '../components/SquircleIcon';
import { ResilientImage } from '../components/ResilientImage';

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Makkah', 'Madinah', 'Umrah', 'Travel', 'Tours'];

  const filteredItems =
    activeCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-[#0F0F0F] text-[#FFFFFF] py-16 sm:py-20 border-b-2 border-[#EEA012] bg-islamic-pattern-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-3 text-xs font-extrabold text-[#EEA012]">
              <SquircleIcon variant="dark" size="sm">
                <ImageIcon className="w-4 h-4 text-[#EEA012]" />
              </SquircleIcon>
              <span className="tracking-[0.18em] uppercase">
                Sacred Sanctuaries &amp; Travel Destinations
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold leading-tight">
              VISUAL GALLERY
            </h1>
            <p className="text-base sm:text-lg font-bold text-[#FFFFFF]/85 leading-relaxed">
              Glimpses of Masjid al-Haram in Makkah, Al-Masjid an-Nabawi in
              Madinah, executive hospitality, and curated regional tours.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Controls & Masonry-Style Grid */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div className="inline-flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-[#FFF9EB] border-2 border-[#EEA012]/50">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-colors cursor-pointer whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-[#0F0F0F] text-[#EEA012] shadow-sm'
                    : 'text-[#0F0F0F]/80 hover:text-[#0B92D6]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <p className="text-xs font-mono font-extrabold text-[#0B92D6] tabular-nums">
            Showing {filteredItems.length}{' '}
            {filteredItems.length === 1 ? 'Photograph' : 'Photographs'}
          </p>
        </div>

        {/* Asymmetric Masonry-Style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className={`group relative rounded-3xl overflow-hidden border-2 border-[#0F0F0F]/12 hover:border-[#EEA012] bg-[#FFFFFF] shadow-sm cursor-pointer transition-all ${
                item.aspect === 'wide' ? 'md:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
              }`}
            >
              <ResilientImage
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/95 via-[#0F0F0F]/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

              <div className="absolute top-4 right-4">
                <SquircleIcon variant="glass" size="sm">
                  <Maximize2 className="w-4 h-4 text-[#FFFFFF]" />
                </SquircleIcon>
              </div>

              <div className="absolute bottom-5 left-6 right-6 text-[#FFFFFF]">
                <p className="text-xs tracking-[0.16em] text-[#EEA012] uppercase font-extrabold">
                  {item.category} · {item.location}
                </p>
                <h3 className="font-display text-xl font-extrabold mt-1">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-[#FFFFFF]/85 mt-1 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F0F0F]/90 backdrop-blur-md p-4"
          onClick={() => setLightboxItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-4xl w-full rounded-3xl bg-[#0F0F0F] border-2 border-[#EEA012] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full bg-black">
              <ResilientImage
                src={lightboxItem.image}
                alt={lightboxItem.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setLightboxItem(null)}
                aria-label="Close lightbox"
                className="absolute top-4 right-4 cursor-pointer"
              >
                <SquircleIcon variant="glass" size="sm">
                  <X className="w-4 h-4 text-[#FFFFFF]" />
                </SquircleIcon>
              </button>
            </div>

            <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[#FFFFFF]">
              <div>
                <p className="text-xs tracking-[0.18em] text-[#EEA012] uppercase font-extrabold">
                  {lightboxItem.category} · {lightboxItem.location}
                </p>
                <h2 className="font-display text-2xl font-extrabold mt-1">
                  {lightboxItem.title}
                </h2>
                <p className="text-sm font-semibold text-[#FFFFFF]/85 mt-1">
                  {lightboxItem.caption}
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-extrabold text-[#0B92D6] shrink-0">
                <SquircleIcon variant="dark" size="sm">
                  <MapPin className="w-4 h-4 text-[#EEA012]" />
                </SquircleIcon>
                <span>{lightboxItem.location}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
