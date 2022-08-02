import React from "react";

const loadingImg =
	"https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg";

const Loading = () => (
	<div className="loading">
		<img crossOrigin="anonymous" src={loadingImg} alt="Loading..." />
	</div>
);

export default Loading;