"use client"

import Link from "next/link"
import Image from "next/image"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-4 py-8 flex items-center justify-center">
        <Card className="w-full max-w-2xl">
          <CardHeader className="items-center">
            <Image src="/banner_logo.png" alt="HackathonTime Logo" width={246} height={96} priority className="mb-4" />
            <CardTitle className="text-3xl font-bold text-center">Coming Soon</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-xl text-muted-foreground mb-6">
              We're working hard to bring you the ultimate platform for discovering and joining exciting hackathons from
              around the world.
            </p>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-2">🚧 Under Construction 🚧</h2>
              <p className="text-muted-foreground">
                Our team is currently building HackathonTime to make it easier than ever to find your next hackathon
                adventure.
              </p>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Want to contribute?</h3>
              <p className="text-muted-foreground mb-4">
                We're open source! Check out our GitHub repository and help us build the future of hackathon discovery.
              </p>
              <Button asChild>
                <Link href="https://github.com/RaxoCoding/HackathonTime" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  View on GitHub
                </Link>
              </Button>
            </div>
            <p className="text-muted-foreground">
              Stay tuned for updates! We'll be launching soon with a comprehensive list of hackathons, easy
              registration, and more.
            </p>
          </CardContent>
        </Card>
      </main>

      <footer className="border-t mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
          <p>&copy; 2025 HackathonTime. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

