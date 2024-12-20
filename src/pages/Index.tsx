import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Wrench, Trophy, ShoppingBag } from "lucide-react";
import { AuthButton } from "@/components/auth/AuthButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Bike Buddies Garage</h1>
          <p className="text-xl text-gray-200 mb-8">Connect, Share, and Upgrade Your Ride</p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center">
            <AuthButton />
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              <PlusCircle className="mr-2 h-5 w-5" /> Create Your Garage
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-card hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Wrench className="mr-2 h-5 w-5 text-red-600" />
                Virtual Garage
              </CardTitle>
              <CardDescription>
                Showcase your motorcycle and track modifications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Create your virtual garage, document modifications, and share your build journey with the community.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Trophy className="mr-2 h-5 w-5 text-red-600" />
                Rankings
              </CardTitle>
              <CardDescription>
                Regional rankings across Spain
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Vote on modifications and see how your bike ranks in your region. Compete with other enthusiasts.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <ShoppingBag className="mr-2 h-5 w-5 text-red-600" />
                Marketplace
              </CardTitle>
              <CardDescription>
                Buy and sell motorcycle parts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Find second-hand modifications and get personalized recommendations for your bike.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Bikes Section */}
      <section className="bg-accent py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Bikes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder for featured bikes - will be populated from database later */}
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-card hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="aspect-video w-full bg-gray-200 rounded-lg mb-4"></div>
                  <CardTitle>Featured Motorcycle {i}</CardTitle>
                  <CardDescription>Owner: Rider {i}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Custom modifications and unique features showcase.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
