import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: [
    '/api/landingPageStats',
    '/api/products',
    '/api/filterOptions',
    '/api/productResultsCount',
    '/api/contact',
    '/',
    '/collection',
    '/contact',
  ],
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
