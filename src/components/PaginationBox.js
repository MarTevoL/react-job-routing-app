import React, { useContext } from "react";
import { Box, Pagination } from "@mui/material";
import styled from "@emotion/styled";
import { PageContext } from "./GridJobCard";

const CustomPagination = styled(Pagination)(({ theme }) => ({
  "& .MuiPaginationItem-root.Mui-selected": {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.white,
    "&:hover": {
      backgroundColor: theme.palette.primary.white,
    },
  },
}));

function PaginationBox({ length }) {
  const handlePageChange = useContext(PageContext);
  return (
    <Box display="flex" justifyContent="center" marginTop="30px">
      <CustomPagination
        sx={{
          button: { color: "#fff", backgroundColor: "#222222" },
        }}
        count={Math.ceil(length / 5)}
        onChange={(e, page) => handlePageChange(page)}
      />
    </Box>
  );
}

export default PaginationBox;
