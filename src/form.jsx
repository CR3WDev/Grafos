import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
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

  const isLastStep = activeStep === steps.length - 1;
  const navigate = useNavigate();

  const handleNext = () => {
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
              {Array.from({ length: verticesAmount }).map((index) => {
                console.log(Array.from({ length: verticesAmount }));
                return (
                  <React.Fragment key={index}>
                    <div>
                      <TextField
                        fullWidth
                        label="nome do vertice"
                        className="mb-3"
                      ></TextField>
                    </div>
                  </React.Fragment>
                );
              })}
            </>
          ) : null}
          {activeStep === 2 ? (
            <>
              {Array.from({ length: edgesAmount }).map((index) => {
                return (
                  <React.Fragment key={index}>
                    <div>
                      <FormControl>
                        <InputLabel id="demo-simple-select-label">
                          Age
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Age"
                          onChange={() => {}}
                        >
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                      <TextField></TextField>
                      <FormControl>
                        <InputLabel id="demo-simple-select-label">
                          Age
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Age"
                          onChange={() => {}}
                        >
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
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
