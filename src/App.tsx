import React, { useRef, useState } from "react";

import MenuItem from "@mui/material/MenuItem";

import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  NativeSelect,
  Select,
  TextField,
} from "@mui/material";

import { useForm, useWatch, Controller } from "react-hook-form";
import { FormikProvider, Formik, Field, Form } from "formik";

function App() {
  return <Test />;
}

export default App;

function Test() {
  const { register, control, setValue, handleSubmit, reset } = useForm();
  const data = useWatch({ control });
  const [age, setAge] = useState("");
  // function register2(fname: string) {
  //   const { ref: inputRef, name, onChange, onBlur } = register(fname);
  //   return { inputRef, name, onChange, onBlur };
  // }
  const handleChange = (event: any) => {
    setAge(event.target.value);
  };
  // register("age")
  const ref = useRef(null);
  return (
    // <Formik initialValues={{ age: 30 }} onSubmit={() => {}}>
    //   {({ values, setValues }) => (
    //     <Form>
    //       <span>Formik age</span>
    //       <Field name="age" as={Select}>
    //         <MenuItem value="">None</MenuItem>
    //         <MenuItem value={"10"}>Ten</MenuItem>
    //         <MenuItem value={"20"}>Twenty</MenuItem>
    //         <MenuItem value={"30"}>Thirty</MenuItem>
    //       </Field>
    //       <Button
    //         type="button"
    //         variant={"contained"}
    //         color={"primary"}
    //         onClick={() => {
    //           setValues({ age: 30 });
    //         }}
    //       >
    //         Submit
    //       </Button>
    //       <pre>JSON.stringify(values, null, 4)</pre>
    //     </Form>
    //   )}
    // </Formik>
    <form
      onSubmit={handleSubmit((values) => {
        console.log({ values });
      })}
    >
      <Grid
        m={10}
        container
        gap={2}
        sx={{ width: "150px" }}
        direction={"column"}
      >
        <Grid item width={100}>
          Using TextField with select
          <TextField
            label="Age"
            select
            defaultValue={10}
            fullWidth
            // name={"age"}
            // inputRef={ref}
            // inputRef={register}
            // value={age}
            // onChange={(e) => setAge(e.target.value)}
            // ref={ref}
            {...register("age")}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value={"10"}>Ten</MenuItem>
            <MenuItem value={"20"}>Twenty</MenuItem>
            <MenuItem value={"30"}>Thirty</MenuItem>
          </TextField>
        </Grid>
        {/*ssss{ref?.current as any}*/}
        Controlled Select Age2
        <Controller
          name="age2"
          defaultValue={10}
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
        Mui Select not wrapp by TextField
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age 4</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            defaultValue={10}
            {...register("age4")}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        Native select
        <NativeSelect {...register("age3")}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </NativeSelect>
        TextField for input
        <Grid item>
          <TextField
            multiline
            label="Notes"
            // ref={ref}
            // inputRef={ref}
            {...register("notes")}
            defaultValue={"Gabs"}
          ></TextField>
        </Grid>
        ref {(ref?.current as any)?.tagName}
        <Grid item>
          <Button
            type="button"
            variant={"contained"}
            color={"primary"}
            onClick={() => {
              setValue("notes", "Gabs change");
              setValue("age", "30");
              // console.log(ref.current);
              // if (ref.current) ref.current.value = 30;
              setValue("age2", 30);
              setValue("age3", 30);
              setValue("age4", 30);
              // reset({ age4: 30 });
              // setAge("30");
            }}
          >
            Change
          </Button>
          <Button type={"submit"}>Submit</Button>
          age:{age}
        </Grid>
        <pre>{JSON.stringify(data, null, 4)})</pre>
      </Grid>
    </form>
  );
  return <div>hola</div>;
}
