import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.43226cf8.js","_app/immutable/chunks/scheduler.98dcdc08.js","_app/immutable/chunks/index.bc2cb9f6.js","_app/immutable/chunks/UIcon.1fcab07c.js","_app/immutable/chunks/paths.f57d0cfb.js","_app/immutable/chunks/stores.da90d2ed.js","_app/immutable/chunks/singletons.498f2fc1.js","_app/immutable/chunks/home.f6b21b88.js","_app/immutable/chunks/types.1ebf2f37.js","_app/immutable/chunks/skills.a3e1fd4d.js"];
export const stylesheets = ["_app/immutable/assets/0.daa4dce2.css"];
export const fonts = [];
