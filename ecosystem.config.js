module.exports = {
    apps: [
      {
        name: "wisbud",
        script: "./server.js", // Ścieżka do pliku startowego Twojej aplikacji
        args: "",
        instances: 1, // Liczba instancji (1 dla aplikacji bez clusteringu)
        autorestart: true, // Automatyczny restart w przypadku awarii
        watch: false, // Opcja monitorowania zmian w kodzie (przydatne w dev)
        max_memory_restart: "500M", // Restart aplikacji po przekroczeniu 500 MB RAM
        env: {
          NODE_ENV: "production",
          PORT: 7550 // Port, na którym działa Twoja aplikacja
        }
      }
    ]
  };
  