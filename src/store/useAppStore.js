import { create } from 'zustand'

/**
 * App-wide client state.
 *
 * Right now this only tracks which occasion the user is interested in,
 * so clicking an Occasion card can pre-fill the contact form.
 *
 * This is where future booking-flow state slots in:
 *   - selectedPackageId
 *   - bookingDraft (recipient info, date, message)
 *   - cart (once vendor line-items exist)
 *
 * Keep this store to CLIENT/UI state only. Server data (catalog, order
 * status, vendor listings) belongs in React Query, not here.
 */
export const useAppStore = create((set) => ({
  selectedOccasion: null,
  setSelectedOccasion: (occasion) => set({ selectedOccasion: occasion }),

  selectedPackageId: null,
  setSelectedPackageId: (id) => set({ selectedPackageId: id }),

  clearSelection: () => set({ selectedOccasion: null, selectedPackageId: null }),
}))
