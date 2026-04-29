import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Servir WebP/AVIF automáticamente — reduce imágenes JPEG de ~750KB a ~150KB
    formats: ["image/avif", "image/webp"],
    // Tamaños de dispositivo para srcset responsivo
    deviceSizes: [320, 480, 640, 960, 1280, 1920],
    imageSizes: [64, 128, 256, 384, 512],
  },
};

export default nextConfig;
