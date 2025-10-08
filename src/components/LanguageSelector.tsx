import { useState, useEffect } from "react";
import { Globe } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [translateLoaded, setTranslateLoaded] = useState(false);

  useEffect(() => {
    // Add Google Translate script if not already present
    const addGoogleTranslateScript = () => {
      if (!document.getElementById("google-translate-script")) {
        const script = document.createElement("script");
        script.id = "google-translate-script";
        script.src =
          "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);
      }
    };

    // Google Translate callback
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,hi,gu",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element"
      );
      setTranslateLoaded(true);
    };

    addGoogleTranslateScript();
  }, []);

  const handleLanguageChange = (value: string) => {
    setSelectedLanguage(value);

    // Wait for Google Translate dropdown to be ready
    const tryTranslate = () => {
      const googleTranslateSelect = document.querySelector(
        ".goog-te-combo"
      ) as HTMLSelectElement;

      if (googleTranslateSelect) {
        googleTranslateSelect.value = value;
        googleTranslateSelect.dispatchEvent(new Event("change"));
      } else {
        // Retry until it exists (for async load)
        setTimeout(tryTranslate, 500);
      }
    };

    if (translateLoaded) tryTranslate();
  };

  return (
    <div className="flex items-center gap-2">
      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" className="hidden"></div>

      {/* Custom Language Selector */}
      <Select value={selectedLanguage} onValueChange={handleLanguageChange}>
        <SelectTrigger className="w-[160px] bg-background border-border">
          <Globe className="w-4 h-4 mr-2" />
          <SelectValue placeholder="Language" />
        </SelectTrigger>
        <SelectContent className="bg-background border-border z-[100]">
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="hi">हिन्दी (Hindi)</SelectItem>
          <SelectItem value="gu">ગુજરાતી (Gujarati)</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;
