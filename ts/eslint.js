module.exports = {
    "plugins": ["@typescript-eslint", "node"],
    "parser": "@typescript-eslint/parser",
    "extends": ["eslint:recommended", "plugin:node/recommended", "plugin:@typescript-eslint/recommended"],
    "rules": {
        "node/exports-style": ["error", "module.exports"],
        "quotes": ["error", "double"],
        "semi": [2, "always"],
        "linebreak-style": ["error", "unix"],
        "indent": ["error", 4],
        "no-extra-semi": 2,
        "semi-spacing": [2, { "before": false, "after": true }]
    },
    "env": {
        "es6": true,
        "node": true
    }
};
