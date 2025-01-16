'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download } from 'lucide-react'

const iits = [
  "IIT (BHU) Varanasi",
  "IIT Bhilai",
  "IIT Bhubaneswar",
  "IIT Bombay",
  "IIT Delhi",
  "IIT Dharwad",
  "IIT Dhanbad (ISM)",
  "IIT Gandhinagar",
  "IIT Goa",
  "IIT Guwahati",
  "IIT Hyderabad",
  "IIT Indore",
  "IIT Jammu",
  "IIT Jodhpur",
  "IIT Kanpur",
  "IIT Kharagpur",
  "IIT Madras",
  "IIT Mandi",
  "IIT Palakkad",
  "IIT Patna",
  "IIT Roorkee",
  "IIT Ropar",
  "IIT Tirupati"
]

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
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text">
            Inter IIT Tech Meet 13.0
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8">
            Download certificates for all participating IITs from the Inter IIT Tech Meet 13.0
          </p>
        </div>

        <Card className="w-full max-w-2xl bg-white/5 border-white/10">
          <CardContent className="p-8">
            <div className="text-center space-y-6">
              <img
                src="https://interiit-tech.com/wp-content/uploads/2024/10/Main-colour-4.png"
                alt="Inter IIT Tech Meet Logo"
                className="h-24 mx-auto"
              />
              <h2 className="text-2xl font-semibold text-white/90">
                Certificates of Achievement
              </h2>
              <p className="text-white/70">
                Select your IIT and download the certificate for your institution's 
                achievements in the Inter IIT Tech Meet 13.0.
              </p>
              <div className="flex flex-col items-center space-y-4">
                <Select onValueChange={setSelectedIIT}>
                  <SelectTrigger className="w-full max-w-xs bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Select your IIT" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-white/20 text-white">
                    {iits.map((iit) => (
                      <SelectItem key={iit} value={iit} className="focus:bg-purple-700">
                        {iit}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button 
                  className="bg-purple-600 hover:bg-purple-700 h-12 px-6 text-lg w-full max-w-xs"
                  onClick={handleDownload}
                  disabled={!selectedIIT}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Certificate
                </Button>
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

