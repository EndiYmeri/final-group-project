import * as React from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Skill } from "../../types";

type Props = {
  skills: Skill[];
  setJobSkills: Function;
};

export default function SkillSelector({ skills, setJobSkills }: Props) {
  return (
    <Autocomplete
      multiple
      id="tags-standard"
      options={skills}
      onChange={(event, newValues) => {
        setJobSkills(newValues);
      }}
      isOptionEqualToValue={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          label="Select skills"
          placeholder="Add skill"
        />
      )}
    />
  );
}
