"use client";

import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";

export default function CourseSearchForm() {
  const [tema, setTema] = useState("");
  const [materia, setMateria] = useState("");
  const [duracion, setDuracion] = useState("");
  const [tipoClase, setTipoClase] = useState("");
  const [instituto, setInstituto] = useState("");
  const [modalidad, setModalidad] = useState("presencial");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Buscar con:", {
      tema,
      materia,
      duracion,
      tipoClase,
      instituto,
      modalidad,
    });
    // Aquí iría la lógica de búsqueda
  };

  return (
    <Container
      maxWidth="sm"
      className="min-h-screen flex items-center justify-center bg-gray-50 p-4"
    >
      <form
        onSubmit={handleSubmit}
        className="w-full bg-white p-6 rounded-lg shadow-md"
      >
        <Typography variant="h4" align="center" gutterBottom>
          Bienvenidos a Espantapájaros
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Tema"
              fullWidth
              name="tema"
              onBlur={(e) => setTema(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Materia"
              variant="outlined"
              fullWidth
              name="materia"
              onBlur={(e) => setMateria(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Duración (horas)"
              variant="outlined"
              fullWidth
              type="number"
              name="duracion"
              onBlur={(e) => setDuracion(e.target.value)}
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            />
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="tipo-clase-label">Tipo de clase</InputLabel>
              <Select
                labelId="tipo-clase-label"
                id="tipo-clase"
                name="tipoClase"
                label="Tipo de clase"
                value={tipoClase}
                onChange={(e) => setTipoClase(e.target.value)}
              >
                <MenuItem value="teorica">Teórica</MenuItem>
                <MenuItem value="practica">Práctica</MenuItem>
                <MenuItem value="mixta">Mixta</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Instituto"
              variant="outlined"
              fullWidth
              name="instituto"
              onBlur={(e) => setInstituto(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Modalidad</FormLabel>
              <RadioGroup
                row
                name="modalidad"
                value={modalidad}
                onChange={(e) => setModalidad(e.target.value)}
              >
                <FormControlLabel
                  value="presencial"
                  control={<Radio />}
                  label="Presencial"
                />
                <FormControlLabel
                  value="virtual"
                  control={<Radio />}
                  label="Virtual"
                />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12} className="flex justify-center">
            <Button type="submit" variant="contained" color="primary">
              Buscar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
