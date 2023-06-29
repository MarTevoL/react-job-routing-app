import React from "react";
import { Box, Pagination } from "@mui/material";
import styled from "@emotion/styled";

const CustomPagination = styled(Pagination)(({ theme }) => ({
  "& .MuiPaginationItem-root.Mui-selected": {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.white,
    "&:hover": {
      backgroundColor: theme.palette.primary.white,
    },
  },
}));

function PaginationBox() {
  return (
    <Box display="flex" justifyContent="center" marginTop="30px">
      <CustomPagination
        sx={{
          button: { color: "#fff", backgroundColor: "#222222" },
        }}
        count={3}
      />
    </Box>
  );
}

export default PaginationBox;
