import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ApplicationDetails = () => {
  let { id } = useParams();
  console.log({ id });
  const [applications, setApplications] = useState([]);
  useEffect(() => {
		fetch(`/api/${id}/applicantAllData`)
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((body) => {
				console.log({ body });
				setApplications(body);
			})
			.catch((err) => {
				console.error(err);
			});
	}, [id]);
  return (
    <>
      {/* <p>{applications[0].applicant.id}</p> */}
    </>
  );
};

export default ApplicationDetails;

