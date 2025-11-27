import '@/assets/css/index.css';
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
    title: 'Facebook Terms and Policies',
    description: 'Review and manage your Facebook account settings and preferences.'
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
