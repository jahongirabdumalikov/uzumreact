import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        location: "Tashkent",
        delivery: "We deliver your orders within 1 day for free!",
        faq: "FAQ",
        orders: "My Orders",
        login: "Sign In",
        sorted: "Sorted",
        cart: "Cart",
        installment: "Installment Payment",
        electronics: "Electronics",
        clothing: "Clothing",
        accessories: "Accessories",
        beauty: "Beauty",
        health: "Health",
        home: "Home & Living",
        construction: "Construction",
        more: "More",
        famous: "Popular",
        searchPlaceholder: "Search"
      }
    },
    uz: {
      translation: {
        location: "Toshkent",
        delivery: "Buyurtmangizni 1 kunda bepul yetkazib beramiz!",
        faq: "Savol-javoblar",
        orders: "Buyurtmalarim",
        login: "Kirish",
        sorted: "Saralangan",
        cart: "Savat",
        installment: "Muddatli to'lov",
        electronics: "Elektronika",
        clothing: "Kiyim",
        accessories: "Aksessuarlar",
        beauty: "Go'zallik",
        health: "Salomatlik",
        home: "Uy-ro'zg'or",
        construction: "Qurilish",
        more: "Yana",
        famous: "Mashhur",
        searchPlaceholder: "Qidirish"
      }
    }
  },
  lng: "uz",  // Default tilni o'rnatish
  fallbackLng: "en",  // Agar 'uz' bo'lmasa, 'en' ga qaytadi
  interpolation: {
    escapeValue: false // React bilan ishlashda HTML kodini eskaplashni o'chirish
  }
});

export default i18n;
