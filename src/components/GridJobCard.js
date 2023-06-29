import React, { useState, createContext } from "react";
import { Grid, Container } from "@mui/material";
import JobCard from "./JobCard";
import PaginationBox from "./PaginationBox";
import jobs from "../jobs";

export const PageContext = createContext();

function GridJobCard() {
  const [page, setPage] = useState(1);
  const handlePageChange = (page) => {
    setPage(page);
  };
  return (
    <>
      <PageContext.Provider value={handlePageChange}>
        <Container
          sx={{
            marginTop: 10,
          }}
        >
          <Grid container spacing={2}>
            {jobs.slice((page - 1) * 5, page * 5).map((job) => (
              <Grid key={job.id} item xs={12} md={4}>
                <JobCard job={job} />
              </Grid>
            ))}
          </Grid>
        </Container>
        <PaginationBox length={jobs.length} />
      </PageContext.Provider>
    </>
  );
}

export default GridJobCard;
