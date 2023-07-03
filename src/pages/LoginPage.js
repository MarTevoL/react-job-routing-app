import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Stack,
  Alert,
  IconButton,
  Typography,
  InputAdornment,
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LoadingButton } from "@mui/lab";
import { FormProvider, FTextField } from "../components/form";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
  })
  .required();

function App() {
  const defaultValues = {
    email: "lmt@gmail.com",
    password: "123",
    remember: true,
  };

  const methods = useForm({ defaultValues, resolver: yupResolver(schema) });
  const {
    reset,
    setError,
    handleSubmit,
    control,
    formState: { errors, isSubmittng },
  } = methods;
  const [showPassword, setshowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setError("afterSubmit", { message: "Server Response Error" });
  };

  return (
    <div>
      <Typography variant="h3" textAlign="center" mb={3}>
        React Hook Form
      </Typography>

      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          {!!errors.afterSubmit && (
            <Alert severity="error">{errors.afterSubmit.message}</Alert>
          )}
          <FTextField name="email" label="Email password" />
          <FTextField
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setshowPassword(!showPassword)}
                    onMouseDown={(e) => e.preventDefault()}
                    edge="end"
                  ></IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ my: 2 }}
        ></Stack>
        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmittng}
        >
          login
        </LoadingButton>
      </FormProvider>
    </div>
  );
}

export default App;
