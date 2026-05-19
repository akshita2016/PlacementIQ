export const theme = {
  colors: {
    background: {
      primary: '#020617', // slate-950
      secondary: '#0F172A', // slate-900
      card: '#111827', // gray-900
      glass: 'rgba(255, 255, 255, 0.03)',
    },
    border: {
      primary: '#1E293B', // slate-800
      glass: 'rgba(255, 255, 255, 0.1)',
    },
    brand: {
      primary: '#2563EB', // blue-600
      accent: '#8B5CF6', // violet-500
      success: '#10B981', // emerald-500
      warning: '#F59E0B', // amber-500
      danger: '#EF4444', // red-500
    },
    text: {
      primary: '#F8FAFC', // slate-50
      secondary: '#94A3B8', // slate-400
      muted: '#64748B', // slate-500
    }
  },
  typography: {
    fontFamily: '"Inter", system-ui, -apple-system, sans-serif',
    heading: 'font-bold tracking-tight text-slate-50',
    body: 'text-slate-400 leading-relaxed',
  },
  layout: {
    maxWidth: 'max-w-7xl mx-auto px-6 lg:px-8',
    sectionPadding: 'py-12 md:py-20',
  }
};
