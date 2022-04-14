import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import WorkIcon from '@mui/icons-material/Work';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import './SearchBarMenu.css'

const options = [
  'Talents',
  'Jobs',
  'Projects'
];

export default function SearchBarMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number,
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    console.log(options, options[selectedIndex])
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div
        id="lock-button"
        aria-haspopup="listbox"
        aria-controls="lock-menu"
        aria-label="when device is locked"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClickListItem}
      >
        <ArrowDropDownIcon sx={{ color: "#000000" }} />
      </div>
      
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option === "Talents" && <PersonSearchIcon sx={{ mr: 1 }} />}
            {option === "Jobs" && <WorkIcon sx={{ mr: 1 }} />}
            {option === "Projects" && <AccountTreeIcon sx={{ mr: 1 }} />}
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
