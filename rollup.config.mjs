import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

const dev = process.env.ROLLUP_WATCH === "true";

export default {
  input: "src/navbar-card.ts",
  output: {
    file: "dist/navbar-card.js",
    format: "es",
    sourcemap: dev,
    // Friendly banner in the built file
    banner: `/* navbar-card | MIT License | https://github.com/YOUR_USERNAME/navbar */`,
  },
  plugins: [
    resolve(),
    typescript({
      tsconfig: "./tsconfig.json",
    }),
    // Minify only in production
    !dev && terser({
      format: { comments: /^!/ },
    }),
  ].filter(Boolean),
};
