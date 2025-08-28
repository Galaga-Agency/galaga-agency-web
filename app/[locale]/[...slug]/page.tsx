import { notFound } from "next/navigation";

// This route will only hit when no more specific route matched under [locale].
// We forward to the localized 404.
export default function LocaleCatchAll() {
  notFound();
}
