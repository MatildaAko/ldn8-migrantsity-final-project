import express from "express";
import morgan from "morgan";
import path from "path";
const { expressCspHeader, INLINE, NONE, SELF } = require("express-csp-header");

import router from "./api";
import {
	configuredHelmet,
	httpsOnly,
	logErrors,
	pushStateRouting,
} from "./middleware";

const apiRoot = "/api";
const staticDir = path.join(__dirname, "static");

const app = express();

app.use(
	expressCspHeader({
		policies: {
			"default-src": [expressCspHeader.NONE],
			"img-src": [expressCspHeader.SELF],
		},
	})
);
app.use(express.json());
app.use(configuredHelmet());
app.use(morgan("dev"));

if (app.get("env") === "production") {
	app.enable("trust proxy");
	app.use(httpsOnly());
}

app.use(apiRoot, router);

app.use(express.static(staticDir));
app.use(pushStateRouting(apiRoot, staticDir));

app.use(logErrors());

export default app;
