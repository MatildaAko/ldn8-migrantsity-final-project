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
			"script-src": [
				SELF,
				INLINE,
				"https://ldn8-migrantsity-final-project.herokuapp.com/",
			],
			"img-src":
				"https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg",
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
