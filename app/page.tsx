import { Card } from "./components/card";
import { Navbar } from "./components/navbar";
import pdf from "../public/images/pdf.png"

export const runtime = "edge";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Navbar/>
      <h1>Hello</h1>
      <Card image={pdf} title="Convert any JPEG to PDF" desc="Convert to PDF" navigate="convertToPdf"/>
    </div>
  );
}
