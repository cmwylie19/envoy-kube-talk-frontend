import React, { useState } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 275,
    maxWidth: 700,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginTop: 12,
  },
  root: {
    marginTop: "130px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  form: {
    display: "inline-block",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  buttonGroup: {
    color: theme.palette.primary,
  },
  controls: {
    position: "fixed",
    bottom: 0,
    backgroundColor: "white",
  },
}));

export default function Fetch() {
  const [responses, setResponses] = useState([]);
  const [url, setUrl] = useState("fetch some data!");
  const classes = useStyles();

  const fetchUrl = () => {
    axios.get(url).then((response) => {
      setResponses([
        ...responses,
        { iat: Date.now(), url, data: JSON.stringify(response.data) },
      ]);
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={classes.root}>
      <div
        style={{
          display: "flex",
          flexDirection: "column-reverse",
          marginBottom: "120px",
        }}
      >
        {responses.map((response) => {
          return (
            <Card
              className={classes.card}
              variant="outlined"
              style={{ marginBottom: "20px" }}
            >
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  <b>Date: </b>
                  {new Date(response.iat).toLocaleDateString()}
                </Typography>
                <Typography
                  className={classes.pos}
                  color="textSecondary"
                ></Typography>
                <Typography variant="body1" component="p">
                  <b>url: </b>
                  {response.url}
                </Typography>
                <Typography variant="body2" component="p">
                  <b>data: </b> {response.data}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <div className={classes.controls}>
        <ButtonGroup
          fullWidth
          variant="contained"
          color="primary"
          aria-label="contained primary button group"
        >
          <Button onClick={() => setUrl("http://localhost:8080/service/1")}>
            Service 1
          </Button>
          <Button onClick={() => setUrl("http://localhost:8080/service/2")}>
            Service 2
          </Button>
          <Button onClick={() => setUrl("http://localhost:8001/stats")}>
            Stats
          </Button>
          <Button onClick={() => setUrl("http://localhost:8001/server_info")}>
            Info
          </Button>
        </ButtonGroup>
        <br />
        <form className={classes.form} noValidate autoComplete="off">
          <TextField id="standard-basic" label="" value={url} />
          <Button
            color="secondary"
            variant="contained"
            onClick={() => fetchUrl()}
          >
            Fetch
          </Button>
          <Button
            color="secondary"
            variant="outlined"
            onClick={() => setResponses([])}
          >
            Clear Responses
          </Button>
        </form>
        <Button onClick={() => scrollToTop()}>TOp</Button>
      </div>
    </div>
  );
}
