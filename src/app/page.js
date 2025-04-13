// src/app/page.js
'use client';

import Head from 'next/head';
import { useAuth } from '@/app/hooks/useAuth';
// Use default import instead of named import
import GovernanceAnalysis from '@/app/components/governance/GovernanceAnalysis.client';

export default function HomePage() {
    const { user } = useAuth();
 
    return (
        <main className="min-h-screen bg-gray-100">
      <div className="p-4">
        <div className="text-center mb-2">
          <h1 className="text-3xl font-bold text-gray-900">
            Sport Wales Governance Analysis System
          </h1>
          <p className="text-gray-600 mt-2">
            Analyze and compare Governance Improvement Plans
          </p>
        </div>
        
        <GovernanceAnalysis />
      </div>
    </main>
    );
}