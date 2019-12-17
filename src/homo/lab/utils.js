export const getLines = str => str.split('\n').map(s => s.trim()).filter(s => s);
export const keepInRange = (n, min, max) => Math.max(min, Math.min(max, n));