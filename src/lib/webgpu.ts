export const hasWebGpu = () => typeof navigator !== 'undefined' && 'gpu' in navigator
