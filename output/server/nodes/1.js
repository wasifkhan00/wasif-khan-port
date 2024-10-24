

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.42da7bb9.js","_app/immutable/chunks/scheduler.98dcdc08.js","_app/immutable/chunks/index.bc2cb9f6.js","_app/immutable/chunks/stores.da90d2ed.js","_app/immutable/chunks/singletons.498f2fc1.js","_app/immutable/chunks/paths.f57d0cfb.js"];
export const stylesheets = [];
export const fonts = [];
