import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CroquisGallery from "./pages/CroquisGallery";
import LookbookGallery from "./pages/LookbookGallery";
import FichasTecnicasGallery from "./pages/FichasTecnicasGallery";
import EnsaioGallery from "./pages/EnsaioGallery";
import EstampasGallery from "./pages/EstampasGallery";
import AcessoriosGallery from "./pages/AcessoriosGallery";
import PressKitGallery from "./pages/PressKitGallery";
import BackstageGallery from "./pages/BackstageGallery";
import FashionFilmGallery from "./pages/FashionFilmGallery";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<Index />} />
          <Route path="/sobre-mim" element={<Index />} />
          <Route path="/colecao" element={<Index />} />
          <Route path="/estampas" element={<Index />} />
          <Route path="/croquis" element={<Index />} />
          <Route path="/acessorios" element={<Index />} />
          <Route path="/fichas-tecnicas" element={<Index />} />
          <Route path="/ensaio" element={<Index />} />
          <Route path="/lookbook" element={<Index />} />
          <Route path="/fashion-film" element={<Index />} />
          <Route path="/press-kit" element={<Index />} />
          <Route path="/marca-social" element={<Index />} />
          <Route path="/backstage" element={<Index />} />

          {/* Gallery pages */}
          <Route path="/croquis-gallery" element={<CroquisGallery />} />
          <Route path="/lookbook-gallery" element={<LookbookGallery />} />
          <Route path="/fichas-tecnicas-gallery" element={<FichasTecnicasGallery />} />
          <Route path="/ensaio-gallery" element={<EnsaioGallery />} />
          <Route path="/estampas-gallery" element={<EstampasGallery />} />
          <Route path="/acessorios-gallery" element={<AcessoriosGallery />} />
          <Route path="/press-kit-gallery" element={<PressKitGallery />} />
          <Route path="/backstage-gallery" element={<BackstageGallery />} />
          <Route path="/fashion-film-gallery" element={<FashionFilmGallery />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
