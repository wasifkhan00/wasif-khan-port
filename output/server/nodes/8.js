

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/resume/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.87c62cf0.js","_app/immutable/chunks/scheduler.98dcdc08.js","_app/immutable/chunks/index.bc2cb9f6.js","_app/immutable/chunks/Chip.d79c8c91.js","_app/immutable/chunks/TabTitle.9718f693.js","_app/immutable/chunks/app.33749309.js","_app/immutable/chunks/CommonPage.38977c9c.js"];
export const stylesheets = ["_app/immutable/assets/8.c6b04c59.css"];
export const fonts = [];
