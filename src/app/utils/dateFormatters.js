// src/app/utils/dateFormatters.js

// Format ISO date string to readable format
export function formatDate(isoDate) {
    if (!isoDate) return '';
    
    const date = new Date(isoDate);
    return date.toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
  
  // Standardize timeframe strings to ISO dates
  export function standardizeTimeframe(timeframe) {
    if (!timeframe) return null;
    
    // Handle patterns like "End of February 2026"
    if (timeframe.toLowerCase().includes('end of')) {
      const parts = timeframe.split(' ');
      const month = parts[2];
      const year = parts[3];
      
      const monthMap = {
        'january': '01',
        'february': '02',
        'march': '03',
        'april': '04',
        'may': '05',
        'june': '06',
        'july': '07',
        'august': '08',
        'september': '09',
        'october': '10',
        'november': '11',
        'december': '12'
      };
      
      const monthNum = monthMap[month.toLowerCase()];
      if (monthNum && year) {
        return `${year}-${monthNum}-28`; // End of month approximation
      }
    }
    
    // Handle quarters
    if (timeframe.toLowerCase().includes('q1')) {
      return timeframe.includes('2025') ? '2025-06-30' : '2026-06-30';
    }
    if (timeframe.toLowerCase().includes('q2')) {
      return timeframe.includes('2025') ? '2025-09-30' : '2026-09-30';
    }
    if (timeframe.toLowerCase().includes('q3')) {
      return timeframe.includes('2025') ? '2025-12-31' : '2026-12-31';
    }
    if (timeframe.toLowerCase().includes('q4')) {
      return timeframe.includes('2025') ? '2026-03-31' : '2027-03-31';
    }
    
    // Simple month and year pattern
    if (/^[A-Za-z]+ \d{4}$/.test(timeframe)) {
      const parts = timeframe.split(' ');
      const month = parts[0];
      const year = parts[1];
      
      const monthMap = {
        'january': '01',
        'february': '02',
        'march': '03',
        'april': '04',
        'may': '05',
        'june': '06',
        'july': '07',
        'august': '08',
        'september': '09',
        'october': '10',
        'november': '11',
        'december': '12'
      };
      
      const monthNum = monthMap[month.toLowerCase()];
      if (monthNum && year) {
        return `${year}-${monthNum}-15`; // Middle of month approximation
      }
    }
    
    // Return original if no pattern matched
    return timeframe;
  }