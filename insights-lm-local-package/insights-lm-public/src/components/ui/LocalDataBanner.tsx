import React from 'react';
import { Shield } from 'lucide-react';

const LocalDataBanner = () => {
  return (
    <div className="fixed bottom-4 right-4 bg-green-50 border border-green-200 rounded-lg shadow-lg px-3 py-2 flex items-center gap-2 text-xs text-green-800 z-50 max-w-xs">
      <Shield className="h-3 w-3 flex-shrink-0" />
      <span>100% Lokal verarbeitet. Deine Daten bleiben privat</span>
    </div>
  );
};

export default LocalDataBanner;

