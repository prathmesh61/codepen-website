import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Routes that can be accessed while signed out
  publicRoutes: [
    "/sign-in",
    "/sign-up",
    "/editor",
    "/api/share-code/:id",
    "/api/user-repo/:email",
    "/api/delete-code/:id",
    "/code/:id",
    "/api/all-repos",
    "/api/save-code",
  ],
});

export const config = {
  // Protects all routes, including api/trpc.
  // See https://clerk.com/docs/references/nextjs/auth-middleware
  // for more information about configuring your Middleware
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
