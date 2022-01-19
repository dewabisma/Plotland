import * as React from "react";
import Head from "next/head";

import Alert from "components/Alert/Alert";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import Container from "components/Container/Container";
import RoadMap from "components/Roadmap/Roadmap";
import SubmitProject from "components/SubmitProject/SubmitProject";

const Roadmap = () => {
  const [submit, setSubmit] = React.useState({
    status: "idle",
    message: "",
    error: "",
  });

  React.useEffect(() => {
    if (submit.status === "success" || submit.status === "failed") {
      setTimeout(() => {
        setSubmit({ ...submit, status: "idle", message: "" });
      }, 2000);
    }
  }, [submit, submit.status]);

  return (
    <>
      <Head>
        <title>Plotland</title>
        <meta name="description" content="Plotland" />
      </Head>

      <Header />

      <Container>
        <RoadMap.Main>
          <RoadMap.Content>
            <h3>Membeli Bakso</h3>
            <p>Memebeli bakso setiap hari hore!</p>

            <RoadMap.Date position="right">12-12-1092</RoadMap.Date>
          </RoadMap.Content>

          <RoadMap.Divider />

          <RoadMap.Placeholder />
        </RoadMap.Main>

        <RoadMap.Main>
          <RoadMap.Placeholder />

          <RoadMap.Divider />

          <RoadMap.Content>
            <h3>Membeli Bakso</h3>
            <p>Memebeli bakso setiap hari hore!</p>

            <RoadMap.Date position="left">12-12-1092</RoadMap.Date>
          </RoadMap.Content>
        </RoadMap.Main>

        <RoadMap.Main>
          <RoadMap.Content>
            <h3>Membeli Bakso</h3>
            <p>Memebeli bakso setiap hari hore!</p>

            <RoadMap.Date position="right">12-12-1092</RoadMap.Date>
          </RoadMap.Content>

          <RoadMap.Divider />

          <RoadMap.Placeholder />
        </RoadMap.Main>

        <RoadMap.Main>
          <RoadMap.Content></RoadMap.Content>
          <RoadMap.Divider type="arrow" />
          <RoadMap.Placeholder />
        </RoadMap.Main>

        <div className="d-flex justify-content-center">
          <SubmitProject state={[submit, setSubmit]} />
        </div>

        {submit.status === "success" && (
          <Alert className="mt-3" variant="success">
            {submit.message}
          </Alert>
        )}
      </Container>

      <Footer />
    </>
  );
};

export default Roadmap;
