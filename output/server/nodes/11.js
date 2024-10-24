import * as universal from '../entries/pages/skills/_slug_/_page.ts.js';

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/skills/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/skills/[slug]/+page.ts";
export const imports = ["_app/immutable/nodes/11.cb5f707f.js","_app/immutable/chunks/skills.a3e1fd4d.js","_app/immutable/chunks/UIcon.1fcab07c.js","_app/immutable/chunks/index.bc2cb9f6.js","_app/immutable/chunks/scheduler.98dcdc08.js","_app/immutable/chunks/paths.f57d0cfb.js","_app/immutable/chunks/projects.930f51b0.js","_app/immutable/chunks/experience.2e04abdf.js","_app/immutable/chunks/types.1ebf2f37.js","_app/immutable/chunks/app.33749309.js","_app/immutable/chunks/CardDivider.927ca8d3.js","_app/immutable/chunks/CardLogo.d328c2ce.js","_app/immutable/chunks/Banner.4844278b.js","_app/immutable/chunks/TabTitle.9718f693.js","_app/immutable/chunks/Chip.d79c8c91.js"];
export const stylesheets = ["_app/immutable/assets/Banner.79dec521.css"];
export const fonts = [];
