import express, { Application } from "express";
import http from "http";
import { IController } from "./interfaces";
import { twitterClientAuth } from "./middleware";
import { ErrorRequestHandler } from "express";
import cors from "cors";

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

class App {
  public app: Application;
  public port: any;
  constructor(controllers: IController[], port: any) {
    this.app = express();
    this.port = port;
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }

  private initializeMiddlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(express.json());
    this.app.use(twitterClientAuth);
    this.app.use(express.urlencoded({ extended: false }));
  }

  private initializeControllers(controllers: IController[]) {
    controllers.forEach((controller) => {
      this.app.use("/", controller.router);
    });
  }

  public listen() {
    const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
      return res.status(error.status).json(error.getBody());
    };

    this.app.use(errorHandler);

    const server = http.createServer(this.app);
    server.listen(this.port, () =>
      console.log(`Server started on port ${this.port}`)
    );
  }
}

export default App;
