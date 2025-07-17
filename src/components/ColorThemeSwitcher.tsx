import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Palette } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const themes = [
  {
    name: 'Оранжевый (Оригинал)',
    primary: '24 100% 50%',
    primaryGlow: '33 100% 60%',
    accent: '45 100% 60%',
  },
  {
    name: 'Синий',
    primary: '220 91% 57%',
    primaryGlow: '220 91% 67%',
    accent: '210 100% 65%',
  },
  {
    name: 'Зеленый',
    primary: '142 76% 36%',
    primaryGlow: '142 76% 46%',
    accent: '120 60% 50%',
  },
  {
    name: 'Красный',
    primary: '0 84% 60%',
    primaryGlow: '0 84% 70%',
    accent: '15 100% 65%',
  },
  {
    name: 'Фиолетовый',
    primary: '262 83% 58%',
    primaryGlow: '262 83% 68%',
    accent: '280 100% 70%',
  },
];

const ColorThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState(themes[0]);

  const applyTheme = (theme: typeof themes[0]) => {
    const root = document.documentElement;
    root.style.setProperty('--primary', theme.primary);
    root.style.setProperty('--primary-glow', theme.primaryGlow);
    root.style.setProperty('--accent', theme.accent);
    
    // Update gradients
    root.style.setProperty('--gradient-primary', `linear-gradient(135deg, hsl(${theme.primary}), hsl(${theme.primaryGlow}))`);
    root.style.setProperty('--gradient-hero', `linear-gradient(135deg, hsl(${theme.primary} / 0.9), hsl(${theme.primaryGlow} / 0.8))`);
    root.style.setProperty('--shadow-construction', `0 10px 30px -10px hsl(${theme.primary} / 0.3)`);
    
    setCurrentTheme(theme);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="gap-2">
            <Palette size={16} />
            Цвета
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          {themes.map((theme) => (
            <DropdownMenuItem
              key={theme.name}
              onClick={() => applyTheme(theme)}
              className={currentTheme.name === theme.name ? 'bg-accent' : ''}
            >
              <div className="flex items-center gap-2">
                <div 
                  className="w-4 h-4 rounded-full border"
                  style={{ backgroundColor: `hsl(${theme.primary})` }}
                />
                {theme.name}
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ColorThemeSwitcher;