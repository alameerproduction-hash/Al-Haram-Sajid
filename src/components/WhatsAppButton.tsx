import React, { useState } from 'react';
import { MessageCircle, Phone, X, ArrowUpRight } from 'lucide-react';
import { CONTACT_NUMBERS, PageId } from '../data/siteData';
import { SquircleIcon } from './SquircleIcon';

interface WhatsAppButtonProps {
  onNavigate: (page: PageId) => void;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedLine, setSelectedLine] = useState(CONTACT_NUMBERS[0]);
  const [customMessage, setCustomMessage] = useState('');

  const getWhatsAppUrl = (whatsappIntl: string) => {
    const text = customMessage.trim()
      ? customMessage.trim()
      : 'Assalamu Alaikum Al Haram Travels & Tours, I would like to inquire about your Umrah / Travel services.';
    return `https://wa.me/${whatsappIntl}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Quick WhatsApp Concierge Popover with All 3 Numbers */}
      {openDrawer && (
        <div className="mb-3 w-80 sm:w-96 rounded-2xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/15 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="bg-[#0F0F0F] text-[#FFFFFF] p-4 flex items-center justify-between border-b-2 border-[#EEA012]">
            <div className="flex items-center gap-3">
              <SquircleIcon variant="dark" size="sm">
                <MessageCircle className="w-4 h-4 text-[#EEA012]" />
              </SquircleIcon>
              <div>
                <p className="font-display text-sm font-extrabold text-[#FFFFFF]">
                  Al Haram WhatsApp Concierge
                </p>
                <p className="text-[11px] font-bold text-[#0B92D6]">
                  All 3 Official Lines Active on WhatsApp
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpenDrawer(false)}
              aria-label="Close WhatsApp concierge"
              className="text-[#FFFFFF]/80 hover:text-[#EEA012] p-1 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 space-y-3.5">
            <p className="text-xs font-bold text-[#0F0F0F]/80">
              Select any official WhatsApp / Call line to connect directly with our Gujranwala desk:
            </p>

            {/* All 3 Official Numbers with Direct WhatsApp & Call Actions */}
            <div className="space-y-2">
              {CONTACT_NUMBERS.map((num) => {
                const isSelected = selectedLine.raw === num.raw;
                return (
                  <div
                    key={num.raw}
                    onClick={() => setSelectedLine(num)}
                    className={`rounded-xl p-3 border-2 transition-colors cursor-pointer flex items-center justify-between gap-2 ${
                      isSelected
                        ? 'bg-[#FFF9EB] border-[#EEA012]'
                        : 'bg-[#FFFFFF] border-[#0F0F0F]/12 hover:border-[#0B92D6]'
                    }`}
                  >
                    <div>
                      <p className="font-mono text-sm font-extrabold text-[#0F0F0F] tabular-nums">
                        {num.display}
                      </p>
                      <p className="text-[11px] font-bold text-[#0B92D6]">
                        {num.label}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <a
                        href={num.telHref}
                        onClick={(e) => e.stopPropagation()}
                        title={`Call ${num.display}`}
                        className="px-2.5 py-1.5 rounded-lg bg-[#0F0F0F] text-[#FFFFFF] hover:bg-[#0B92D6] text-[11px] font-extrabold inline-flex items-center gap-1 transition-colors"
                      >
                        <Phone className="w-3 h-3 text-[#EEA012]" />
                        <span>Call</span>
                      </a>
                      <a
                        href={getWhatsAppUrl(num.whatsappIntl)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        title={`WhatsApp ${num.display}`}
                        className="px-2.5 py-1.5 rounded-lg bg-[#EEA012] text-[#0F0F0F] hover:bg-[#0B92D6] hover:text-[#FFFFFF] text-[11px] font-extrabold inline-flex items-center gap-1 transition-colors"
                      >
                        <MessageCircle className="w-3 h-3" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Custom Message Input */}
            <div className="pt-1 space-y-2">
              <label htmlFor="wa-quick-msg" className="sr-only">
                Optional Custom Message
              </label>
              <input
                id="wa-quick-msg"
                type="text"
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                placeholder="Write a message (e.g., Family Umrah inquiry)..."
                className="w-full rounded-xl bg-[#FFFFFF] border-2 border-[#0F0F0F]/15 px-3.5 py-2.5 text-xs font-bold text-[#0F0F0F] placeholder:text-[#0F0F0F]/45 focus:outline-none focus:border-[#0B92D6]"
              />
              <a
                href={getWhatsAppUrl(selectedLine.whatsappIntl)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#0F0F0F] hover:bg-[#0B92D6] text-[#EEA012] hover:text-[#FFFFFF] px-4 py-3 text-xs font-extrabold transition-colors whitespace-nowrap"
              >
                <span>Open WhatsApp ({selectedLine.display})</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating Squircle Trigger with Tooltip */}
      <div className="group flex items-center gap-2.5">
        <span className="px-3.5 py-1.5 rounded-xl bg-[#0F0F0F] text-[#FFFFFF] border-2 border-[#EEA012] text-xs font-extrabold shadow-lg opacity-95 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat With Us · {CONTACT_NUMBERS[0].display}
        </span>

        <button
          type="button"
          onClick={() => setOpenDrawer((prev) => !prev)}
          aria-label="Chat With Us on WhatsApp"
          className="relative cursor-pointer focus-visible:outline-2 focus-visible:outline-[#EEA012]"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-[20px] bg-[#EEA012]/45 animate-ping duration-1000"
          />
          <SquircleIcon variant="dark" size="lg">
            <MessageCircle className="w-6 h-6 text-[#EEA012]" />
          </SquircleIcon>
        </button>
      </div>
    </div>
  );
};
