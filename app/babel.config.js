module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        regenerator: true,
      },
    ],
    [
      [
        '@babel/plugin-transform-runtime',
        {
          regenerator: true,
        },
      ],
      [
        '@babel/plugin-transform-private-methods',
        '@babel/plugin-transform-nullish-coalescing-operator',
        '@babel/plugin-transform-class-properties',
        '@babel/plugin-transform-numeric-separator',
        '@babel/plugin-transform-optional-chaining',
      ],
    ],
  ],
};
