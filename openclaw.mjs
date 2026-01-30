#!/usr/bin/env node

import module from "node:module";

// https://nodejs.org/api/module.html#module-compile-cache
console.log(`[openclaw-wrapper] Starting gateway... (PORT=${process.env.PORT || "unset"}, BIND=${process.env.OPENCLAW_GATEWAY_BIND || "unset"})`);
if (module.enableCompileCache && !process.env.NODE_DISABLE_COMPILE_CACHE) {
  try {
    module.enableCompileCache();
  } catch {
    // Ignore errors
  }
}

await import("./dist/entry.js");
