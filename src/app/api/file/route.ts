import { readFile } from "fs/promises";
import path from "path";

export async function GET() {
  const buffer = await readFile(
    path.join(process.cwd(), "src/app/download", "CV_Cyril_Leclercq.pdf")
  );

  const headers = new Headers();
  headers.append(
    "Content-Disposition",
    'attachment; filename="CV_Cyril_Leclercq.pdf"'
  );
  headers.append("Content-Type", "application/pdf");

  return new Response(buffer, {
    headers,
  });
}
