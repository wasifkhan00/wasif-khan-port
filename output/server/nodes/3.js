

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/education/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.feb6cb4b.js","_app/immutable/chunks/scheduler.98dcdc08.js","_app/immutable/chunks/index.bc2cb9f6.js","_app/immutable/chunks/UIcon.1fcab07c.js","_app/immutable/chunks/paths.f57d0cfb.js","_app/immutable/chunks/Card.ab532e6a.js","_app/immutable/chunks/TabTitle.9718f693.js","_app/immutable/chunks/app.33749309.js","_app/immutable/chunks/index.909c5d82.js","_app/immutable/chunks/Chip.d79c8c91.js","_app/immutable/chunks/SearchPage.9f3b9c80.js","_app/immutable/chunks/CommonPage.38977c9c.js","_app/immutable/chunks/stores.da90d2ed.js","_app/immutable/chunks/singletons.498f2fc1.js","_app/immutable/chunks/CardDivider.927ca8d3.js"];
export const stylesheets = ["_app/immutable/assets/Card.724c04f4.css","_app/immutable/assets/SearchPage.d63b558a.css"];
export const fonts = [];
