import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog } from '@/components/ui/dialog';
import {
  Search,
  Menu,
  Globe,
  User,
  Calendar,
  Users,
  MapPin,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Globe className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold hidden sm:inline">airbnb</span>
        </div>

        {/* Search Bar */}
        <button
          onClick={() => setIsSearchOpen(true)}
          className="hidden md:flex items-center gap-4 px-6 py-2 border rounded-full hover:shadow-md transition-shadow"
        >
          <span className="font-medium">Anywhere</span>
          <span className="h-4 w-px bg-gray-300" />
          <span className="font-medium">Any week</span>
          <span className="h-4 w-px bg-gray-300" />
          <span className="text-gray-600">Add guests</span>
          <div className="bg-primary rounded-full p-2">
            <Search className="h-4 w-4 text-white" />
          </div>
        </button>

        {/* Mobile Search */}
        <button
          onClick={() => setIsSearchOpen(true)}
          className="md:hidden flex items-center gap-2 px-4 py-2 border rounded-full hover:shadow-md transition-shadow"
        >
          <Search className="h-4 w-4" />
          <span className="font-medium">Search</span>
        </button>

        {/* User Menu */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            className="hidden sm:flex"
            onClick={() => {}}
          >
            Airbnb your home
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hidden sm:flex"
            onClick={() => {}}
          >
            <Globe className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-2 rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-4 w-4" />
            <User className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Search Dialog */}
      <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <div className="fixed inset-0 z-50 bg-white">
          <div className="container mx-auto px-4 py-8">
            <div className="grid gap-4">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <span className="sr-only">Close</span>
                  &times;
                </Button>
                <div className="text-lg font-semibold">Search</div>
              </div>
              <div className="grid gap-4 p-4 border rounded-lg">
                <div className="space-y-2">
                  <label className="font-semibold">Where</label>
                  <div className="flex items-center gap-2 p-3 border rounded-lg">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <Input
                      placeholder="Search destinations"
                      className="border-0 focus-visible:ring-0"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="font-semibold">Check in</label>
                    <div className="flex items-center gap-2 p-3 border rounded-lg">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <Input
                        type="date"
                        className="border-0 focus-visible:ring-0"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="font-semibold">Check out</label>
                    <div className="flex items-center gap-2 p-3 border rounded-lg">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <Input
                        type="date"
                        className="border-0 focus-visible:ring-0"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-semibold">Who</label>
                  <div className="flex items-center gap-2 p-3 border rounded-lg">
                    <Users className="h-4 w-4 text-gray-500" />
                    <Input
                      type="number"
                      placeholder="Add guests"
                      min="1"
                      className="border-0 focus-visible:ring-0"
                    />
                  </div>
                </div>
              </div>
              <Button size="lg" className="w-full sm:w-auto">
                Search
              </Button>
            </div>
          </div>
        </div>
      </Dialog>
    </header>
  );
}