import { useState, useEffect } from 'react';

const TimeDisplay = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const timeString = formatTime(time);
  const [hours, minutes, seconds] = timeString.split(':');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-background">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      
      <div className="relative z-10 text-center">
        {/* Main time display */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-2 sm:space-x-4">
            <div className="time-segment animate-pulse-glow">
              <span className="time-digit">{hours}</span>
            </div>
            <div className="time-separator">:</div>
            <div className="time-segment animate-pulse-glow">
              <span className="time-digit">{minutes}</span>
            </div>
            <div className="time-separator">:</div>
            <div className="time-segment animate-pulse-glow">
              <span className="time-digit text-time-accent">{seconds}</span>
            </div>
          </div>
        </div>

        {/* Date display */}
        <div className="mb-12">
          <p className="text-lg sm:text-xl text-foreground/80 font-light tracking-wide">
            {formatDate(time)}
          </p>
        </div>

        {/* App title */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
            Time App
          </h1>
          <p className="text-sm sm:text-base text-foreground/60 mt-2">
            Always shows the correct time
          </p>
        </div>

        {/* Decorative elements */}
        <div className="flex justify-center space-x-4">
          <div className="w-2 h-2 rounded-full bg-time-primary animate-pulse" />
          <div className="w-2 h-2 rounded-full bg-time-secondary animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="w-2 h-2 rounded-full bg-time-accent animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>
    </div>
  );
};

export default TimeDisplay;