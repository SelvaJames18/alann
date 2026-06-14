import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { CompanyPage } from "./pages/CompanyPage";
import { ContactPage } from "./pages/ContactPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { TermsPage } from "./pages/TermsPage";
import { CookiePage } from "./pages/CookiePage";
import { FeaturesPage } from "./pages/FeaturesPage";
import { TrustSafetyPage } from "./pages/TrustSafetyPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "company", Component: CompanyPage },
      { path: "contact", Component: ContactPage },
      { path: "features", Component: FeaturesPage },
      { path: "trust-safety", Component: TrustSafetyPage },
      { path: "privacy", Component: PrivacyPage },
      { path: "terms", Component: TermsPage },
      { path: "cookie", Component: CookiePage },
    ],
  },
]);
