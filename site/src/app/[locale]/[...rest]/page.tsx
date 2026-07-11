import { notFound } from "next/navigation";

// Any path that no route claims lands here and renders the branded 404.
export default function CatchAll() {
  notFound();
}
