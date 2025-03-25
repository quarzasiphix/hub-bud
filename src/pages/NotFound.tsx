
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Helmet>
        <title>Strona nie znaleziona | HubBud</title>
        <meta name="description" content="Przepraszamy, nie mogliśmy znaleźć tej strony." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Nie znaleziono strony</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Wróć do strony głównej
        </a>
      </div>
    </div>
  );
};

export default NotFound;
