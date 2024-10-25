import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface BookingCalendarProps {
  propertyId: string;
}

export function BookingCalendar({ propertyId }: BookingCalendarProps) {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [guests, setGuests] = useState('1');

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Dates</Label>
        <Calendar
          mode="range"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      </div>

      <div className="space-y-2">
        <Label>Guests</Label>
        <Select value={guests} onValueChange={setGuests}>
          <SelectTrigger>
            <SelectValue placeholder="Select number of guests" />
          </SelectTrigger>
          <SelectContent>
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <SelectItem key={num} value={num.toString()}>
                {num} {num === 1 ? 'guest' : 'guests'}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="pt-4 border-t">
        <div className="flex justify-between mb-2">
          <span>$350 x 7 nights</span>
          <span>$2,450</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Cleaning fee</span>
          <span>$150</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Service fee</span>
          <span>$260</span>
        </div>
        <div className="flex justify-between pt-4 border-t font-semibold">
          <span>Total</span>
          <span>$2,860</span>
        </div>
      </div>
    </div>
  );
}