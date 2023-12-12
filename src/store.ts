import type { StoreState } from './types';
import { create } from 'zustand';

export const useStore = create<StoreState>((set) => ({
  previewImage: null,
  setPreviewImage: (previewImage) => set({ previewImage }),
}));
