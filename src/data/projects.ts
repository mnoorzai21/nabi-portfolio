export type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
    imageAlt: string;
    imagePosition?: "top" | "center" | "bottom";
  repoUrl: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Stock Market Scanner",
    description:
      "Real-time momentum scanner that screens about 10,000 U.S. stocks every minute by price, percent gain, relative volume, float, and fresh news, with sound and desktop alerts.",
    tech: ["React", "Node.js", "Express", "Alpaca API"],
    image: "/projects/stock-scanner.jpg",
    imageAlt: "Screenshot of the Stock Market Scanner dashboard",
    repoUrl: "https://github.com/mnoorzai21/stock-scanner",
    liveUrl: "https://mnoorzai21.github.io/stock-scanner/",
  },
  {
    title: "Book Search",
    description:
      "Full-stack reading-list app built on the Google Books API. Users can search for books, sign up, and save a personal reading list.",
    tech: ["React", "Apollo GraphQL", "Express", "MongoDB Atlas", "JWT Auth"],
    image: "/projects/book-search.jpg",
    imageAlt: "Screenshot of the Book Search app showing book results",
    repoUrl: "https://github.com/mnoorzai21/book-searchjet-mnn",
    liveUrl: "https://mnoorzai21.github.io/book-searchjet-mnn/",
  },
  {
    title: "Weather Dashboard",
    description:
      "Search any city for current conditions and a five-day forecast, with search history saved between visits.",
    tech: ["JavaScript", "Express", "OpenWeatherMap API"],
    image: "/projects/weather-dashboard.jpg",
      imageAlt: "Screenshot of the Weather Dashboard showing a five-day forecast",
    imagePosition: "center",
    repoUrl: "https://github.com/mnoorzai21/weather-dashboard-mnn",
    liveUrl: "https://mnoorzai21.github.io/weather-dashboard-mnn/",
  },
];