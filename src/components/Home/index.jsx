import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { apiClient } from "../../axios/axios";
import i18n from "../../i18n";

const Home = () => {
  const { t } = useTranslation();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  async function fetchProducts() {
    try {
      const res = await apiClient.get("products");
      setProducts(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <header className="bg-[#f0f2f5] p-1">
        <div className="max-w-[1350px] m-auto">
          <div className="flex justify-between items-center">
            <div className="flex gap-8">
              <div className="flex gap-4 font-inter text-[#1F2026]">
                <img src="./src/assets/location.svg" alt="" />
                <p className="font-inter text-[#1F2026] underline cursor-pointer">
                  {t("location")}
                </p>
              </div>
              <p className="font-inter text-[#1F2026] cursor-pointer">
                {t("delivery")}
              </p>
            </div>
            <div className="flex gap-4">
              <p className="text-[#595B66] font-inter cursor-pointer">
                {t("faq")}
              </p>
              <p className="text-[#595B66] font-inter cursor-pointer">
                {t("orders")}
              </p>
              <div className="flex gap-3">
                <img src="./src/assets/languages.svg" alt="" />
                <p
                  className="text-[#595B66] font-inter cursor-pointer"
                  onClick={() => handleLanguageChange("uz")}
                >
                  UZ
                </p>
                <p
                  className="text-[#595B66] font-inter cursor-pointer"
                  onClick={() => handleLanguageChange("en")}
                >
                  EN
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div>
        <div className="max-w-[1350px] m-auto py-4 flex justify-between items-center gap-7">
          <div className="flex">
            <img src="./src/assets/logo.svg" alt="" />
            <div className="flex w-[127px] h-[40px] rounded-[5px] justify-center gap-1 items-center cursor-pointer bg-[#ebebff]">
              <img src="./src/assets/catalog.svg" alt="" />
              <p className="text-[#7000FF] font-inter">{t("catalog")}</p>
            </div>
          </div>

          <div className="flex gap-12">
            <div className="flex gap-2 cursor-pointer items-center">
              <img src="./src/assets/sign-in.svg" alt="" />
              <p className="text-[#1F2026]">{t("login")}</p>
            </div>
            <div className="flex gap-2 cursor-pointer items-center">
              <img src="./src/assets/sort.svg" alt="" />
              <p className="text-[#1F2026]">{t("sorted")}</p>
            </div>
            <div className="flex gap-2 cursor-pointer items-center">
              <img src="./src/assets/cart.svg" alt="" />
              <p className="text-[#1F2026]">{t("cart")}</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="max-w-[1350px] m-auto flex justify-between py-2">
          <div className="flex gap-8">
            <div className="flex items-center gap-1">
              <img src="./src/assets/payment.svg" alt="" />
              <p className="text-[#1F2026] font-bold cursor-pointer">
                {t("installment")}
              </p>
            </div>
            <p className="cursor-pointer text-[#595B66]">{t("electronics")}</p>
            <p className="cursor-pointer text-[#595B66]">{t("clothing")}</p>
            <p className="cursor-pointer text-[#595B66]">{t("accessories")}</p>
            <p className="cursor-pointer text-[#595B66]">{t("beauty")}</p>
            <p className="cursor-pointer text-[#595B66]">{t("health")}</p>
            <p className="cursor-pointer text-[#595B66]">{t("home")}</p>
            <p className="cursor-pointer text-[#595B66]">{t("construction")}</p>
          </div>
          <div className="flex gap-1 cursor-pointer items-center">
            <p className="cursor-pointer text-[#595B66]">{t("more")}</p>
            <img src="./src/assets/down.svg" alt="" />
          </div>
        </div>
      </div>

      <div className="container p-4 rounded-[12px] flex justify-center">
        <img src="./src/assets/banner-1.jpg" alt="Promo 1" />
      </div>

      <div className="container mx-auto p-4">
        <div className="flex justify-center gap-6 items-center">
          <h1 className="text-2xl font-bold mb-4">{t("famous")}</h1>
          <div className="flex">
            <input
              className="w-[450px] h-10 border rounded-tl-[5px] rounded-bl-[5px] pl-4"
              type="text"
              placeholder="Mahsulotlar va turkumlar izlash"
              value={search}
              onChange={handleSearch}
            />
            <div className="w-[80px] h-[40px] rounded-tr-[5px] cursor-pointer rounded-br-[5px] bg-[#F2F4F7] flex items-center justify-center">
              <img src="./src/assets/search.svg" alt="" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {filteredProducts.map((product) => {
            return (
              <div key={product.id} className="p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[275px] h-[360px] object-cover rounded-md mb-4"
                />
                <div className="flex justify-between py-3">
                  <a href={`/about/${product.id}`}>
                    <h2 className="text-xl font-semibold text-gray-800">
                      {product.name}
                    </h2>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
