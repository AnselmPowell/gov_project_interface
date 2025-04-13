// src/app/components/ui/LoadingState.client.jsx
import { Loader2 } from 'lucide-react';

export function LoadingState({ message = 'Loading...' }) {
    return (
        <div className="flex flex-col items-center justify-center p-8">
            <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
            <p className="mt-4 text-sm text-gray-500">{message}</p>
        </div>
    );
}