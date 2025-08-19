var giscus = document.createElement("script");
giscus.src = "https://giscus.app/client.js";
giscus.setAttribute("data-repo", "Vick-wan/Notes");
giscus.setAttribute("data-repo-id", "R_kgDOPeOgTA");
giscus.setAttribute("data-category", "General");
giscus.setAttribute("data-category-id", "DIC_kwDOPeOgTM4CuQiU");
giscus.setAttribute("data-mapping", "pathname");
giscus.setAttribute("data-reactions-enabled", "1");
giscus.setAttribute("data-emit-metadata", "0");
giscus.setAttribute("data-input-position", "top");
giscus.setAttribute("data-theme", "dark");
giscus.setAttribute("data-lang", "zh-CN");
giscus.setAttribute("data-loading", "lazy");
giscus.crossOrigin = "anonymous";
giscus.async = true;

document.addEventListener("DOMContentLoaded", function () {
    var comments = document.createElement("div");
    comments.id = "giscus_thread";
    document.querySelector("main").appendChild(comments);
    comments.appendChild(giscus);
});
