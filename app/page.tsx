'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download } from 'lucide-react'
import Link from 'next/link'



export default function Home() {
  const [selectedIIT, setSelectedIIT] = useState<string>("")

  const handleDownload = async () => {
    if (selectedIIT) {
      try {
        // Convert IIT name to filename format (lowercase, hyphenated)
        const filename = selectedIIT
          .toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[()]/g, '') // Remove parentheses for IIT (BHU)
        
        // Create link to download from public folder
        const link = document.createElement('a')
        link.href = `/certificates/${filename}.pdf`
        link.download = `${selectedIIT} - Inter IIT Tech Meet 13.0 Certificate.pdf`
        console.log(link.href)
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      } catch (error) {
        console.error('Error downloading certificate:', error)
        alert('Error downloading certificate. Please try again later.')
      }
    } else {
      alert("Please select an IIT before downloading")
    }
  }

  return (
    <div className="">      
      <div className="relative z-10 min-h-[calc(100vh-80px)] flex flex-col items-center justify-center p-4">

        <Card className="w-full max-w-2xl bg-white/5 border-white/10">
          <CardContent className="p-8">
            <div className="text-center space-y-6">
              <img
                src="https://interiit-tech.com/wp-content/uploads/2024/10/Main-colour-4.png"
                alt="Inter IIT Tech Meet Logo"
                className="h-24 mx-auto"
              />
              <p className="text-white/70">
                Check out the gallery of certificates from the Inter IIT Tech Meet 13.0
              </p>
              <div className="flex flex-col justify-center items-center space-y-4">
                <Link
                  className="flex w-full max-w-xs items-center justify-center rounded-md text-white bg-purple-600 hover:bg-purple-700 h-12 px-6 text-lg"
                  href={process.env.NEXT_PUBLIC_GALLERY_LINK || "#"}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Check Gallery
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        <footer className="mt-12 text-center text-white/60">
          <p>© 2024 Inter IIT Tech Meet 13.0 - IIT Bombay</p>
        </footer>
      </div>
    </div>
  )
}

