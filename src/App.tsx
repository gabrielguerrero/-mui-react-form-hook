import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MenuItem from "@mui/material/MenuItem";

import { Button, Grid, NativeSelect, Select, TextField } from "@mui/material";

import { useForm, useWatch, Controller } from "react-hook-form";

function App() {
  return <Test />;
}

export default App;

function Test() {
  const { register, control, setValue } = useForm();
  const data = useWatch({ control });
  return (
    <form>
      <Grid
        m={10}
        container
        gap={2}
        sx={{ width: "1000px" }}
        direction={"column"}
      >
        <Grid item width={100}>
          <TextField
            label="Age"
            select
            defaultValue={10}
            fullWidth
            {...register("age")}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </TextField>
        </Grid>
        <Controller
          name="age2"
          control={control}
          render={({ field }) => (
            <Select {...field}>
              <MenuItem value="">None</MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          )}
        />
        <NativeSelect {...register("age3")}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </NativeSelect>

        <Grid item>
          <TextField
            multiline
            label="Notes"
            {...register("notes")}
            defaultValue={"Gabs"}
          ></TextField>
        </Grid>
        <Grid item>
          <Button
            type="button"
            variant={"contained"}
            color={"primary"}
            onClick={() => {
              setValue("notes", "Gabs change");
              setValue("age", 30);
              setValue("age2", 30);
              setValue("age3", 30);
              setValue("age4", 30);
            }}
          >
            Submit
          </Button>
        </Grid>

        <pre>{JSON.stringify(data, null, 4)})</pre>
      </Grid>
    </form>
  );
  return <div>hola</div>;
}
