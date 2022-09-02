/* eslint-disable no-undef */
const dotenv = require("dotenv");
dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  env: {
    RAPID_API_KEY: process.env.RAPID_API_KEY,
    BACKEND_URL: process.env.BACKEND_URL,
    SUBSCRIPTIONS_ENDPOINT: process.env.SUBSCRIPTIONS_ENDPOINT,
    IMAGEKIT_URL_ENDPOINT: process.env.IMAGEKIT_URL_ENDPOINT,
    IMAGEKIT_PUBLIC_KEY: process.env.IMAGEKIT_PUBLIC_KEY,
    STREAMING_ENDPOINT: process.env.STREAMING_ENDPOINT,
    COGNITO_DOMAIN: process.env.COGNITO_DOMAIN,
    COGNITO_CALLBACK_URL: process.env.COGNITO_CALLBACK_URL,
    IMAGES_ENDPOINT: process.env.IMAGES_ENDPOINT,
  },
};

module.exports = nextConfig;
