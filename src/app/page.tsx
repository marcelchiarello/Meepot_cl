import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Calendar, Users, DollarSign, CheckCircle, Sparkles, Clock } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-background to-secondary/20">
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Event Planning,{' '}
              <span className="text-primary">Simplified</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              Replace chaotic WhatsApp groups and spreadsheets with Meepot. Create events in seconds,
              manage RSVPs effortlessly, and split costs fairly—all in one beautiful platform.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/events/new">
                <Button size="lg" className="gap-2">
                  <Sparkles className="h-5 w-5" />
                  Create Your First Event
                </Button>
              </Link>
              <Link href="/auth/login">
                <Button variant="outline" size="lg">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Everything You Need for Perfect Events
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From planning to settlement, we&apos;ve got you covered
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Clock className="h-8 w-8 text-primary" />}
              title="Quick Event Creation"
              description="Create events in under 30 seconds with smart templates and AI assistance"
            />
            <FeatureCard
              icon={<Users className="h-8 w-8 text-primary" />}
              title="Smart Invitations"
              description="Personal, group, or public invites with automatic reminders and RSVP tracking"
            />
            <FeatureCard
              icon={<CheckCircle className="h-8 w-8 text-primary" />}
              title="Task Management"
              description="Assign tasks, track progress, and ensure nothing falls through the cracks"
            />
            <FeatureCard
              icon={<DollarSign className="h-8 w-8 text-primary" />}
              title="Fair Cost Splitting"
              description="Track expenses and settle debts with minimal transactions"
            />
            <FeatureCard
              icon={<Calendar className="h-8 w-8 text-primary" />}
              title="Calendar Sync"
              description="Seamlessly integrate with Google, Apple, and Outlook calendars"
            />
            <FeatureCard
              icon={<Sparkles className="h-8 w-8 text-primary" />}
              title="AI Assistant"
              description="Get intelligent suggestions for venues, menus, and planning tips"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Ready to plan your next event?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join thousands of happy organizers who&apos;ve made event planning stress-free
          </p>
          <div className="mt-8">
            <Link href="/events/new">
              <Button size="lg" className="gap-2">
                <Sparkles className="h-5 w-5" />
                Get Started Free
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="relative p-6 bg-card rounded-lg border shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-card-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  )
}