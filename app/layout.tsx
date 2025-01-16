import './globals.css'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Inter IIT Tech Meet 13.0 - Certificates',
  description: 'Certificate distribution for Inter IIT Tech Meet',
  icons: {
    icon: 'https://interiit-tech.com/wp-content/uploads/2024/10/cropped-interiittech-180x180.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(
        inter.className,
        "min-h-screen bg-[#0a0a0a] text-white"
      )}>
        <div 
          className="relative min-h-screen bg-contain bg-no-repeat"
          style={{
              backgroundImage: `url(${encodeURI('https://interiit-tech.com/wp-content/uploads/2024/10/Header-5.webp')})`,
            }}
          >
          <header className="border-b border-white/10">
            <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2">
                <img
                  src="https://interiit-tech.com/wp-content/uploads/2024/10/cropped-interiittech-180x180.png"
                  alt="Inter IIT Tech Meet Logo"
                  className="h-12 w-auto"
                />
                <span className="font-bold text-xl">Certificates</span>
              </Link>
              <Link href="https://interiit-tech.com" className="text-white/70 hover:text-white transition">
                Back to Main Site
              </Link>
            </nav>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}

