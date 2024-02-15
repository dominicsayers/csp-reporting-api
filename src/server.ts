import type http from "http";
import app from "./app";

let httpServer: http.Server;

export const listen = async (): Promise<void> => {
  app.set("port", process.env.PORT ?? 3000);

  httpServer = app.listen(app.get("port"), () => {
    console.log("App is running on http://localhost:%d", app.get("port"));
  });
};

export const close = async (): Promise<void> => {
  httpServer.close();
};

export const server = app;
