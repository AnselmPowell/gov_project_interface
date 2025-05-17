// src/app/page.js
'use client';

import Head from 'next/head';
import { useAuth } from '../app/hooks/useAuth';
// Use default import instead of named import
import GovernanceAnalysis from '../app/components/governance/GovernanceAnalysis.client';

export default function HomePage() {
    const { user } = useAuth();
 
    return (
        <main className="min-h-screen bg-background">
        <GovernanceAnalysis />
        </main>
    );
}