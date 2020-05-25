module.exports = {
  stories: ['../stories/**/*.stories.tsx'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        },
        {
          loader: 'linaria/loader'
        },
        {
          loader: 'ts-loader',
        }
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
