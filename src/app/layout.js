// src/app/layout.js
import { AuthProvider } from './contexts/AuthContext.client';
import './styles/globals.css'

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <AuthProvider>
                    {children}
                </AuthProvider>
            </body>
        </html>
    );
}