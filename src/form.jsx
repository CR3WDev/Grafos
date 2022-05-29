import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const steps = [
  "Quantidade de vertices e arestas",
  "Nomear vertices",
  "Definir arestas",
];

export default function Form() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [verticesAmount, setVerticesAmount] = React.useState(0);
  const [edgesAmount, setEdgesAmount] = React.useState(0);
  // eslint-disable-next-line no-unused-vars
  const [verticesNames, setVerticesNames] = React.useState([]);
  // eslint-disable-next-line no-unused-vars
  const [edgesNames, setEdgesNames] = React.useState([]);
  const isLastStep = activeStep === steps.length - 1;
  const navigate = useNavigate();

  const handleNext = () => {
    console.log(verticesNames);
    console.log(edgesNames);
    if (isLastStep) {
      navigate("/");
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <h1 className="m-4">Kruskal Form</h1>
      <div className="col-10 m-auto">
        <Stepper activeStep={activeStep} className="mb-4">
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <React.Fragment>
          {activeStep === 0 ? (
            <>
              <TextField
                label="Quantidade de vertices"
                className="mb-3"
                fullWidth
                value={verticesAmount}
                onChange={(e) => {
                  setVerticesAmount(e.target.value);
                }}
              ></TextField>
              <TextField
                label="Quantidade de arestas"
                fullWidth
                value={edgesAmount}
                onChange={(e) => {
                  setEdgesAmount(e.target.value);
                }}
              ></TextField>
            </>
          ) : null}
          {activeStep === 1 ? (
            <>
              {Array.from({ length: verticesAmount }).map((o, index) => {
                return (
                  <React.Fragment key={index}>
                    <div>
                      <TextField
                        fullWidth
                        value={verticesNames[index]}
                        label="nome do vertice"
                        className="mb-3"
                        onChange={(e) =>
                          (verticesNames[index] = e.target.value)
                        }
                      ></TextField>
                    </div>
                  </React.Fragment>
                );
              })}
            </>
          ) : null}
          {activeStep === 2 ? (
            <>
              {Array.from({ length: edgesAmount }).map((o, i) => {
                return (
                  <React.Fragment key={i}>
                    <div className="d-flex justify-content-center mb-3">
                      <FormControl className="col-4">
                        <InputLabel id="origem">Origem</InputLabel>
                        <Select
                          labelId="origem"
                          id="origem"
                          label="origem"
                          value={edgesNames[i]}
                          onChange={(e) => {
                            edgesNames[i] = e.target.value;
                          }}
                        >
                          {verticesNames.map((e, index) => {
                            return (
                              <MenuItem value={e} key={index}>
                                {e}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                      <TextField
                        className="col-auto mx-3"
                        label="Peso"
                      ></TextField>
                      <FormControl className="col-4">
                        <InputLabel id="demo-simple-select-label">
                          Destino
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Destino"
                          onChange={() => {}}
                        >
                          {verticesNames.map((e, index) => {
                            return (
                              <MenuItem value={e} key={index}>
                                {e}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                    </div>
                  </React.Fragment>
                );
              })}
            </>
          ) : null}
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Button onClick={handleNext}>
              {isLastStep ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      </div>
    </>
  );
}
