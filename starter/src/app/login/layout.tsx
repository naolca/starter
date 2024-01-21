
export default function RootLayout({
    children,
    }: {
    children: React.ReactNode
    }) {
    return  (
        <html lang='eng'>
        <body>
        <div className="container">
            {children}
        </div>
        </body>
        </html>
    );
    }