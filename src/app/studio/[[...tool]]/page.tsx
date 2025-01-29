/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import { NextStudio } from 'next-sanity/studio';
import config from '../../../../sanity.config';

export const dynamic = 'force-static'; // Ensures that Next.js handles this as a static page

export default function StudioPage() {
  return <NextStudio config={config} />;
}

export async function generateStaticParams() {
  return [
    { tool: ["example"] }, // Replace with actual static paths
    { tool: ["demo"] },
    { tool: [] }, // Handles the base `/studio/` case
  ];
}
