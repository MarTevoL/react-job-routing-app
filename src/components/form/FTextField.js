import { useFormContext, Controller } from "react-hook-form";
import { TextField } from "@mui/material";

function FTextField({ name, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          error={!!error}
          helperText={error?.message}
          {...other}
          InputLabelProps={{ style: { color: "orange" } }}
          sx={{
            width: 350,
            color: "#fff",
            input: { color: "white" },
            borderColor: "white",
          }}
        />
      )}
    />
  );
}

export default FTextField;
