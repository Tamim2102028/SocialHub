# Copilot Instructions for SocialHub

## Project Overview

- **Stack:** React 19 + TypeScript + Vite + Redux Toolkit + Tailwind CSS
- **Structure:** Three-column layout (Sidebar | MainContent | SidebarRight)
- **Routing:** Centralized in `src/routes/routeConfig.ts` with lazy loading and route metadata
- **State:** Synchronous Redux slices in `src/store/slices/`, type-safe hooks in `src/store/hooks.ts`
- **API:** Axios instance in `src/services/api.ts` with interceptors for auth and error handling

## Key Patterns & Conventions

- **Component Organization:**
  - Feature-based folders under `src/components/` and `src/pages/`
  - Data mocks in `data/` subfolders
  - All forms use controlled components or React Hook Form
- **Redux:**
  - No async thunks; all reducers are synchronous
  - Use `useAppDispatch` and `useAppSelector` from `store/hooks.ts`
  - Slices: `auth`, `posts`, `notifications`, `ui`, `groups`, `tuition`, `files`, `communityStudyArchive`, `profile`, `messages`, `bloodDonation`, `tournament`, `achievement`
- **Routing:**
  - All routes defined in `routeConfig.ts` and rendered via `AppRoutes.tsx`
  - Use `ProtectedRoute` for auth-guarded pages
  - Home page is eagerly loaded, others are lazy
  - Prefetching with `prefetchOnIdle` for high-traffic routes
- **Styling:**
  - Tailwind CSS utility classes throughout
  - No CSS modules or styled-components
- **API:**
  - Use `apiClient` from `services/api.ts` for all HTTP requests
  - Auth token auto-injected; 401 triggers redirect to `/login`

## Developer Workflows

- **Start Dev Server:** `npm run dev`
- **Build:** `npm run build`
- **Lint:** `npm run lint`
- **Preview:** `npm run preview`
- **No test scripts present**

## Project-Specific Notes

- **Tournament & Achievement:**
  - XP system and weekly tournaments in `tournamentSlice.ts`
  - Restaurant ticket prize system in `achievementSlice.ts` and `components/Gaming/Achievements/`
- **Tuition:**
  - Tuition request form is always visible as a card (not modal)
- **UI Patterns:**
  - All popups converted to inline cards where possible
  - Empty states use emoji and clear messaging
- **Error Handling:**
  - API errors handled globally in `api.ts` interceptor

## Examples

- **Redux usage:**
  ```tsx
  const dispatch = useAppDispatch();
  const { posts } = useAppSelector((state) => state.posts);
  ```
- **Route config:**
  ```ts
  export const routes = [
    { path: "/", component: Home, requireAuth: true, preload: true },
    {
      path: "/gaming/*",
      component: lazy(() => import("../pages/Gaming/Gaming")),
      requireAuth: true,
    },
    // ...
  ];
  ```
- **API usage:**
  ```ts
  import { apiClient } from "../services/api";
  apiClient.get("/posts");
  ```

## Key Files

- `src/routes/routeConfig.ts`, `src/routes/AppRoutes.tsx`
- `src/store/store.ts`, `src/store/slices/`, `src/store/hooks.ts`
- `src/services/api.ts`
- `src/components/`, `src/pages/`

---

If any section is unclear or missing, please request clarification or provide feedback for improvement.
