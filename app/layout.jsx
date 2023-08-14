import Context from "../context/context";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Context>
          {children}
        </Context>
      </body>
    </html>
  )
}