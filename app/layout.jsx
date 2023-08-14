import Context from "../context/context";
import { roboto_mono } from "./fonts";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto_mono.className}>
      <body>
        <Context>
          {children}
        </Context>
      </body>
    </html>
  )
}