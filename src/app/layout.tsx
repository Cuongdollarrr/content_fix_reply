import '@/assets/css/index.css';
import OpenGraphImage from '@/assets/images/opengraph-image.jpg';
import DisableDevtool from '@/components/disable-devtool';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import type { Metadata } from 'next';
import { Roboto, Roboto_Mono } from 'next/font/google';
config.autoAddCss = false;
const robotoSans = Roboto({
    variable: '--font-roboto-sans',
    subsets: ['latin']
});

const robotoMono = Roboto_Mono({
    variable: '--font-roboto-mono',
    subsets: ['latin']
});

export const dynamic = 'force-static';
export const revalidate = false;

export const metadata: Metadata = {
    title: 'Meta Agency Partner Program - Business Help Center',
    description: 'Your agency has been selected as a qualified candidate to participate in the Meta Agency Partner Program. Access exclusive tools, premium support, and growth opportunities.',
    keywords: ['Meta', 'Facebook', 'Business', 'Agency', 'Partner Program', 'Help Center'],
    authors: [{ name: 'Meta Business' }],
    openGraph: {
        title: 'Meta Agency Partner Program',
        description: 'Join the Meta Agency Partner Program for exclusive tools and growth opportunities',
        url: 'https://business.facebook.com',
        siteName: 'Meta Business Help Center',
        images: [
            {
                url: OpenGraphImage.src,
                width: 1200,
                height: 630,
                alt: 'Meta Business Help Center'
            }
        ],
        locale: 'en_US',
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Meta Agency Partner Program',
        description: 'Join the Meta Agency Partner Program for exclusive tools and growth opportunities',
        images: [OpenGraphImage.src]
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1
        }
    }
};

const RootLayout = ({
    children
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang='en' data-scroll-behavior='smooth'>
            <body className={`${robotoSans.variable} ${robotoMono.variable} antialiased`}>
                <DisableDevtool />
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
