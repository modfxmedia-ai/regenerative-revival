import { redirect } from "next/navigation";

/** Legacy URL - peptides hub moved to /peptides, hormones to /hormones. */
export default function HormonesPeptidesRedirect() {
  redirect("/peptides");
}
