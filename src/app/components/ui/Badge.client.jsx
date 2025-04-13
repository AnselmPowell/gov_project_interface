// src/app/components/ui/Badge.client.jsx
export function Badge({ children, variant = 'default' }) {
    const variants = {
        default: 'bg-gray-100 text-gray-800',
        blue: 'bg-blue-100 text-blue-800',
        red: 'bg-red-100 text-red-800',
        yellow: 'bg-yellow-100 text-yellow-800',
        green: 'bg-green-100 text-green-800'
    };

    return (
        <span className={`
            px-2.5 py-0.5 rounded-full text-xs font-medium
            ${variants[variant]}
        `}>
            {children}
        </span>
    );
}