/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['./public', 'localhost', 'res.cloudinary.com'],
    },  
    
};

export default nextConfig;
