import { Paper, Chip } from "@mui/material";
import React from "react";

function SkillsPaper({ skills }) {
  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "start",
        flexWrap: "wrap",
        listStyle: "none",
        p: 0.5,
        m: 0,
        boxShadow: 0,
        backgroundColor: (theme) => theme.palette.primary.secondary,
      }}
    >
      {skills.map((skill, i) => (
        <Chip
          sx={{
            backgroundColor: (theme) => theme.palette.secondary.light,
            color: "white",
            mr: 1,
            mt: 1,
          }}
          key={i}
          label={skill}
          size="small"
        ></Chip>
      ))}
    </Paper>
  );
}

export default SkillsPaper;
