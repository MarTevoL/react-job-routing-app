import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Stack,
  Alert,
  IconButton,
  InputAdornment,
  Container,
  Box,
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LoadingButton } from "@mui/lab";
import { FormProvider, FTextField } from "../components/form";
import useAuth from "../auth/useAuth";

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

function LoginPage() {
  const defaultValues = {
    email: "lmt@gmail.com",
    password: "0123456@Cs",
    remember: true,
  };
  let navigate = useNavigate();
  let auth = useAuth();
  let from = navigate.state?.from?.pathname || "/";

  const methods = useForm({ defaultValues, resolver: yupResolver(schema) });

  const {
    handleSubmit,
    formState: { errors, isSubmittng },
  } = methods;

  const [showPassword, setshowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    console.log(auth.user);
    // console.log(auth);
    auth.login(defaultValues.email, () => {
      navigate(from, { replace: true });
    });
  };

  return (
    <div>
      <Container>
        <Box display={"flex"} justifyContent={"center"}>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3} marginTop={50}>
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
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmittng}
              sx={{ width: 350 }}
            >
              login
            </LoadingButton>
          </FormProvider>
        </Box>
      </Container>
    </div>
  );
}

export default LoginPage;
