module.exports = {
  reactStrictMode: false,
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  rewrites: async () => {
    return [
      {
        source: "/googlee56b630605219a45.html",
        destination: "/googlee56b630605219a45.html",
      }
    ]
  },
};
