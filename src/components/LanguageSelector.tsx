import { useEffect, useRef, useState } from "react";
import { Globe } from "lucide-react";

// If you're using shadcn's Select in your project, keep these imports.
// If not, swap for your own select component or a native <select>.
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Type for the global callback Google expects
declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

const GT_SCRIPT_ID = "google-translate-script";
const GT_HOST_ID = "google_translate_element";

export default function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>(() => {
    if (typeof window === "undefined") return "en";
    return localStorage.getItem("lang") || "en";
  });
  const [ready, setReady] = useState(false);
  const observerRef = useRef<MutationObserver | null>(null);

  // Load Google script + init once
  useEffect(() => {
    // Define the global init BEFORE adding the script tag
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,hi,gu",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        GT_HOST_ID
      );
      setReady(true);
    };

    if (!document.getElementById(GT_SCRIPT_ID)) {
      const s = document.createElement("script");
      s.id = GT_SCRIPT_ID;
      s.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      s.async = true;
      document.body.appendChild(s);
    } else if (window.google?.translate?.TranslateElement) {
      // Already present on page (hot reload, SPA nav, etc.)
      setReady(true);
    }

    return () => observerRef.current?.disconnect();
  }, []);

  // Apply the language once the injected select exists
  const applyLanguage = (lang: string, attempts = 0): boolean => {
    const combo = document.querySelector(".goog-te-combo") as
      | HTMLSelectElement
      | null;

    if (combo) {
      if (combo.value !== lang) combo.value = lang;
      combo.dispatchEvent(new Event("change", { bubbles: true }));
      return true;
    }

    // Watch DOM until Google injects its select
    if (!observerRef.current) {
      observerRef.current = new MutationObserver(() => {
        const found = document.querySelector(".goog-te-combo");
        if (found) {
          applyLanguage(lang);
          observerRef.current?.disconnect();
          observerRef.current = null;
        }
      });
      observerRef.current.observe(document.body, { childList: true, subtree: true });
    }

    // Also try a bounded retry loop in case observer misses it
    if (attempts < 20) {
      setTimeout(() => applyLanguage(lang, attempts + 1), 250);
    }
    return false;
  };

  const handleLanguageChange = (value: string) => {
    setSelectedLanguage(value);
    try {
      localStorage.setItem("lang", value);
    } catch {}
    if (ready) applyLanguage(value);
  };

  // When widget becomes ready, apply persisted language
  useEffect(() => {
    if (ready && selectedLanguage) applyLanguage(selectedLanguage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready]);

  return (
    <div className="flex items-center gap-2">
      {/* Keep this node mounted and in the DOM. Don't use display:none; we visually hide it. */}
      <div
        id={GT_HOST_ID}
        aria-hidden
        className="absolute opacity-0 pointer-events-none h-0 w-0 overflow-hidden"
      />

      <Select value={selectedLanguage} onValueChange={handleLanguageChange}>
        <SelectTrigger className="w-[160px]">
          <Globe className="w-4 h-4 mr-2" />
          <SelectValue placeholder="Language" />
        </SelectTrigger>
        <SelectContent className="z-[100]">
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="hi">हिन्दी (Hindi)</SelectItem>
          <SelectItem value="gu">ગુજરાતી (Gujarati)</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
