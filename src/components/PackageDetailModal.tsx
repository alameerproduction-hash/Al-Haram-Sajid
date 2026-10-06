import React from 'react';
import {
  X,
  Clock,
  MapPin,
  Building2,
  Car,
  Compass,
  ShieldCheck,
  Plane,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { UmrahPackage } from '../data/siteData';
import { SquircleIcon } from './SquircleIcon';
import { ResilientImage } from './ResilientImage';

interface PackageDetailModalProps {
  pkg: UmrahPackage | null;
  onClose: () => void;
  onBookPackage: (pkg: UmrahPackage) => void;
}

export const PackageDetailModal: React.FC<PackageDetailModalProps> = ({
  pkg,
  onClose,
  onBookPackage,
}) => {
  if (!pkg) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F0F0F]/80 backdrop-blur-sm p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pkg-modal-title"
    >
      <div className="relative w-full max-w-3xl rounded-3xl bg-[#FFFFFF] border-2 border-[#EEA012] shadow-2xl overflow-hidden my-8">
        {/* Top Image Header */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden">
          <ResilientImage
            src={pkg.image}
            alt={pkg.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/55 to-transparent" />

          <button
            type="button"
            onClick={onClose}
            aria-label="Close package details"
            className="absolute top-4 right-4 cursor-pointer"
          >
            <SquircleIcon variant="glass" size="sm">
              <X className="w-4 h-4 text-[#FFFFFF]" />
            </SquircleIcon>
          </button>

          <div className="absolute bottom-5 left-6 right-6 text-[#FFFFFF]">
            <p className="text-xs tracking-[0.18em] text-[#EEA012] uppercase font-extrabold">
              {pkg.subtitle}
            </p>
            <h2
              id="pkg-modal-title"
              className="font-display text-2xl sm:text-3xl font-extrabold mt-1"
            >
              {pkg.name}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/10">
              <SquircleIcon variant="light" size="sm">
                <Clock className="w-4 h-4 text-[#EEA012]" />
              </SquircleIcon>
              <div>
                <p className="text-xs font-bold text-[#0B92D6]">Duration</p>
                <p className="text-sm font-extrabold text-[#0F0F0F]">{pkg.duration}</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/10">
              <SquircleIcon variant="light" size="sm">
                <Building2 className="w-4 h-4 text-[#0B92D6]" />
              </SquircleIcon>
              <div>
                <p className="text-xs font-bold text-[#0B92D6]">Hotel Category</p>
                <p className="text-sm font-extrabold text-[#0F0F0F]">{pkg.hotelCategory}</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/10">
              <SquircleIcon variant="light" size="sm">
                <MapPin className="w-4 h-4 text-[#EEA012]" />
              </SquircleIcon>
              <div>
                <p className="text-xs font-bold text-[#0B92D6]">Makkah Stay</p>
                <p className="text-sm font-extrabold text-[#0F0F0F]">{pkg.makkahStay}</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/10">
              <SquircleIcon variant="light" size="sm">
                <MapPin className="w-4 h-4 text-[#0B92D6]" />
              </SquircleIcon>
              <div>
                <p className="text-xs font-bold text-[#0B92D6]">Madinah Stay</p>
                <p className="text-sm font-extrabold text-[#0F0F0F]">{pkg.madinahStay}</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/10">
              <SquircleIcon variant="light" size="sm">
                <Car className="w-4 h-4 text-[#EEA012]" />
              </SquircleIcon>
              <div>
                <p className="text-xs font-bold text-[#0B92D6]">Transportation</p>
                <p className="text-sm font-extrabold text-[#0F0F0F]">{pkg.transport}</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/10">
              <SquircleIcon variant="light" size="sm">
                <Plane className="w-4 h-4 text-[#0B92D6]" />
              </SquircleIcon>
              <div>
                <p className="text-xs font-bold text-[#0B92D6]">Flight Information</p>
                <p className="text-sm font-extrabold text-[#0F0F0F]">{pkg.flightInfo}</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/10">
              <SquircleIcon variant="light" size="sm">
                <Compass className="w-4 h-4 text-[#EEA012]" />
              </SquircleIcon>
              <div>
                <p className="text-xs font-bold text-[#0B92D6]">Ziyarat &amp; Guidance</p>
                <p className="text-sm font-extrabold text-[#0F0F0F]">{pkg.guidance}</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/10">
              <SquircleIcon variant="light" size="sm">
                <ShieldCheck className="w-4 h-4 text-[#0B92D6]" />
              </SquircleIcon>
              <div>
                <p className="text-xs font-bold text-[#0B92D6]">Dedicated Support</p>
                <p className="text-sm font-extrabold text-[#0F0F0F]">{pkg.support}</p>
              </div>
            </div>
          </div>

          {/* Package Highlights */}
          <div className="rounded-2xl bg-[#FFF9EB] p-5 border-2 border-[#EEA012]/50">
            <h3 className="font-display text-base font-extrabold text-[#0F0F0F] mb-3">
              Key Arrangements Included
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {pkg.highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs font-bold text-[#0F0F0F]">
                  <SquircleIcon variant="gold" size="sm">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0F0F0F]" />
                  </SquircleIcon>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing / Availability Note */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-[#0F0F0F]/10">
            <div>
              <p className="text-xs font-extrabold text-[#0B92D6]">
                Customized Package
              </p>
              <p className="text-sm font-bold text-[#0F0F0F]">{pkg.availabilityNote}</p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl border-2 border-[#0F0F0F]/20 text-xs font-extrabold text-[#0F0F0F] hover:bg-[#0F0F0F]/5 transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => onBookPackage(pkg)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#EEA012] hover:bg-[#0F0F0F] text-[#0F0F0F] hover:text-[#EEA012] text-xs font-extrabold transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>Inquire About This Package</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
