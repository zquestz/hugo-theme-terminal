import url from "postcss-url";
import imports from "postcss-import";
import nested from "postcss-nested";
import postCSSPresetEnv from "postcss-preset-env";
import cssnano from "cssnano";
import color from "postcss-color-mod-function";
import mixins from "postcss-mixins";

export default {
  plugins: [
    url,
    imports,
    mixins,
    nested,
    postCSSPresetEnv({
      stage: 1,
      preserve: true,
      features: {
        "custom-properties": true,
      },
    }),
    cssnano({
      preset: "default",
    }),
    color,
  ],
};
